<template>
  <div class="container">
    <div class="content">
      <div class="md-display-1 arrow">
        <md-icon>arrow_downward</md-icon>
        <md-button @click="reset" class="refresh md-icon-button md-raised md-primary">
          <md-icon>refresh</md-icon>
        </md-button>
      </div>
      <transition-group name="cells" tag="div" :class="{cells: true, 'up': up, 'down': !up}">
        <span class="md-display-3 cell" v-for="{value, originalIndex} in displayGrid" :key="originalIndex">
          <transition name="num">
            <span :style="originalIndex == pointer ? directionStyle : ''" :class="{'num-item':true, 'up': originalIndex == pointer && up, 'down': originalIndex == pointer && !up}" :key="up[originalIndex]+'val'+value+'-num-'+originalIndex">{{ value }}</span>
          </transition>
          <div class="md-subheading sub">{{ originalIndex }}</div>
        </span>
      </transition-group>
    </div>
  </div>
</template>

<script>

const width = 31;

function slice(arr, start, end) {
  let ret = [];
  for (let i = start; i < end; i++) {
    ret[i - start] = {value: arr[i] ? arr[i] : 0, originalIndex: i};
  }
  return ret;
}
/*
function updateDisplayGrid() {
    this.displayGrid = slice(this.grid, this.pointer - ((width - 1) / 2), this.pointer + ((width - 1) / 2) + 1);
}*/

export default {
  name: "TapeVisualizer",
  props: [
    'output',
    'code',
    'checker'
  ],
  data: function() {
    return {
      grid: [],
      shouldStop: true,
      codePointer: 0,
      internalCode: "",
      //displayGrid: [],
      pointer: 0,
      up: false,
      directionStyle: {
        "--direction": 1
      }
    };
  },
  methods: {
    //updateDisplayGrid,
    add() {
      this.up = false;
      //this.$set(this.up, this.pointer, 1);
      this.$nextTick(function () {
        this.$set(this.grid, this.pointer, (((this.grid[this.pointer] ? this.grid[this.pointer] : 0) + 1 + 384) % 256) - 128);
      })
    },
    subtract() {
      this.up = true;
      //this.$set(this.up, this.pointer, -1);
      this.$nextTick(function () {
        this.$set(this.grid, this.pointer, (((this.grid[this.pointer] ? this.grid[this.pointer] : 0) - 1 + 384) % 256) - 128);
      })
    },
    right() {
      this.pointer++;
      //this.displayGrid.splice(0, 1);
      //this.displayGrid.shift()
      //let index = this.pointer + ((width - 1) / 2);
      //this.displayGrid.splice(-1, 0, {value: this.grid[index] ? this.grid[index] : 0, originalIndex: index});
      //this.displayGrid.push({value: this.grid[index] ? this.grid[index] : 0, originalIndex: index});
    },
    left() {
      this.pointer--;
      //this.displayGrid.splice(-1, 1);
      //this.displayGrid.pop();
      //let index = this.pointer - ((width - 1) / 2)
      //this.displayGrid.splice(0, 0, {value: this.grid[index] ? this.grid[index] : 0, originalIndex: index})
      //this.displayGrid.unshift({value: this.grid[index] ? this.grid[index] : 0, originalIndex: index})
    },
    read() {
      this.$emit('changeOutput', (String.fromCharCode(((this.grid[this.pointer] + 256) % 128))));
    },
    write() {
      this.$parent.getInput();
    },
    rightValue(input) {
      this.$set(this.grid, this.pointer, input ? (((input.charCodeAt(0) + 384) % 256) - 128) : 0);
      this.incAndLoop();
      window.setTimeout(this.tick.bind(this), 1000);
    },
    readButton() {
      this.read();
    },
    writeButton() {
      this.write();
    },
    run() {
      this.codePointer = 0;
      this.internalCode = this.code;//this.clean(this.$attrs.code);
      this.shouldStop = false;
      this.tick();
    },
    signalStop() {
      this.$emit('done');
    },
    stop() {
      this.shouldStop = true;
    },
    submit() {
      let shrunkenGrid = this.shrinkGrid();
      this.reset();
      return new Function('code', 'memory', 'output', this.checker)(this.clean(this.code), shrunkenGrid, this.output);// {correct: true, reason: "A good reason"}
    },
    shrinkGrid() {
      let map = Object.keys(this.grid).map(txt => parseInt(txt)),
          start = Math.min(...map, 0),
          end = Math.max(...map, 0),
          array = [];
      while (start != 0 && this.grid[start] == 0) {
        map.splice(map.indexOf(start), 1);
        start = Math.min(...map, 0);
      }
      while (start != 0 && this.grid[end] == 0) {
        map.splice(map.indexOf(end), 1);
        start = Math.max(...map, 0);
      }
      for (let i = start; i <= end; i++) {
        array[i] = this.grid[i] ? this.grid[i] : 0;
      }
      console.log(array);
      return array
    },
    tick() {
      console.log(this);
      let skip = false;
      if ("+-<>[],.".split('').includes(this.internalCode[this.codePointer])) {
        switch (this.internalCode[this.codePointer]) {
          case "+":
            this.add()
            break;
          case "-":
            this.subtract();
            break;
          case ">":
            this.right();
            break;
          case "<":
            this.left();
            break;
          case ".":
            this.read();
            break;
          case ",":
            this.write();
            return;
          case "[":
            if (this.grid[this.pointer] == 0) {
              let parens = 0;
              while (!(this.internalCode[this.codePointer] == "]" && parens == 0)) {
                if (this.internalCode[this.codePointer] == "]") {
                  parens++;
                }
                this.codePointer++;
                if (this.codePointer >= this.internalCode.length) {
                  this.signalStop();
                  return;
                }
              }
            }
            break;
          case "]":
            if (this.grid[this.pointer] != 0) {
              let parens = 0;
              while (!(this.internalCode[this.codePointer] == "[" && parens == 0)) {
                if (this.internalCode[this.codePointer] == "[") {
                  parens++;
                }
                this.codePointer--;
                if (this.codePointer < 0) {
                  this.signalStop();
                  return;
                }
              }
            }
            break;
        }
      } else {
        skip = true;
      }
      //console.log(this.codePointer);
      this.incAndLoop(skip)
      //console.log(!this.shouldStop,  this.codePointer < this.internalCode.length);
    },
    incAndLoop(skip) {
      this.codePointer++;
      if (!this.shouldStop && this.codePointer < this.internalCode.length) {
        window.setTimeout(this.tick.bind(this), skip ? 0 : 1000);
      } else if (!this.shouldStop) {
        this.signalStop();
      }
    },
    reset() {
      this.grid = [];
      this.pointer = 0;
      this.output = "";
      this.$emit('reset')
    },
    clean(stuff) {
      return stuff.replace(/[^-+><[\]].,]/g, '');
    }

  },
  computed: {
    displayGrid() {
      return slice(this.grid, this.pointer - ((width - 1) / 2), this.pointer + ((width - 1) / 2) + 1);
    }
  },
  //created: updateDisplayGrid,
  watch: {
    //grid: updateDisplayGrid,
    //pointer: updateDisplayGrid,
  }
};
</script>

<style lang="scss" scoped>

.container {
  background-color: #262626 /*rgb(69, 69, 69)*/ !important;
}

.arrow {
  width: 100%;
  text-align: center;
  z-index: 1;
  margin-bottom: 5px;
}

.refresh {
  background-color: #ff8327 !important;
  position: absolute;
  right: 0px;
  top: 6px;
  display: block;
}

.sub {
  position: relative;
}

.content {
  --transformTime: 1s;
  overflow: hidden;
}

.sub, .num-item, .arrow > i {
  color: white !important;
}

.num-item {
  display: inline-block;
  will-change: transform;
}

.num-enter-active, .num-leave-active {
  transition: transform var(--transformTime), opacity calc(.75*var(--transformTime));
}

.num-enter {
  opacity: .1;
}

.num-leave-active {
  opacity: 0;
}
/*
.up {
  --direction: -1;
}

.down {
  --direction: 1;
}
*/
/*
.num-enter {
  transform: translateY(calc(var(--direction)*-1.25em));
}
*/
.num-enter.up {
  transform: translateY(1.25em);
}

.num-enter.down {
  transform: translateY(-1.25em);
}

.num-leave-active {
  position: absolute;
  //transform: translateY(calc(var(--direction)*1.25em));
  &.up {
    transform: translateY(-1.25em);
  }
  &.down {
    transform: translateY(1.25em);
  }
}

/*
.num-enter-active, .num-leave-active {
  transition: all .5s;
}

.list-enter, .list-leave-to {
  //opacity: 0;
  transform: translateY(30px);
}*/

/*.innerNum {
  transition: all .5s ease-in-out;
}

.moveUp {
  opacity: 0;
  transform: translateY(1.5em);
}

.moveDown {
  opacity: 0;
  transform: translateY(-1.5em);
}*/

.cells {
  overflow: hidden;
  white-space: nowrap;
  }

.cells-item, .cells-move {
  transition: all .5s linear;
  will-change: transform;
}

.cells-leave-active {
	position: absolute;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }

.cell {
  overflow: hidden;
  width: 3.5ch;
  border-left: 3px darkgrey solid;
  display: inline-block;
  text-align: center;

  &:last-child {
    border-right: 3px darkgrey solid;
  }
}

.container {
  overflow: hidden;
}

</style>
