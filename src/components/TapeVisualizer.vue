<template>
  <div class="container md-elevation-24">
    <div class="content">
      <transition-group name="cells" tag="div" :class="{cells: true, 'up': up, 'down': !up}">
        <span class="md-display-3 cell" v-for="{value, originalIndex} in displayGrid" :key="originalIndex">
          <span v-if="originalIndex != pointer" class="num-item" :key="value+'-num-'+originalIndex">{{ value }}</span>
          <transition v-else name="num">
            <span :style="directionStyle" :class="{'num-item':true}" :key="value+'-num-'+originalIndex">{{ value }}</span>
          </transition>
          <div class="md-subheading sub">{{ originalIndex }}</div>
        </span>
      </transition-group>
      <span class="md-display-1">^</span>
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
  data: function() {
    return {
      grid: [1,2,3,4,5,6,7],
      //displayGrid: [],
      pointer: 0,
      up: true,
      directionStyle: {
        "--direction": 1
      }
    };
  },
  methods: {
    //updateDisplayGrid,
    add() {
      this.up = false;
      this.$set(this.directionStyle, "--direction", 1)
      this.$set(this.grid, this.pointer, this.grid[this.pointer] + 1);
    },
    subtract() {
      this.up = true;
      this.$set(this.directionStyle, "--direction", -1)
      this.$set(this.grid, this.pointer, this.grid[this.pointer] - 1);
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

.sub {
  position: relative;
}

.content {
  --transformTime: 1s;
}

.num-item {
  display: inline-block;
  will-change: transform;
}

.num-enter-active, .num-leave-active {
  transition: transform var(--transformTime) .5s, opacity calc(.75*var(--transformTime)) .5s,
}

.num-enter {
  opacity: .1;
}

.num-leave-active {
  opacity: 0;
}

.up {
  --direction: 1;
}

.down {
  --direction: -1;
}

.num-enter {
  transform: translateY(calc(var(--direction)*1.25em));
}
/*
.num-enter.up {
  transform: translateY(1.25em);
}

.num-enter.down {
  transform: translateY(-1.25em);
}
*/
.num-leave-active {
  position: absolute;
  transform: translateY(calc(var(--direction)*-1.25em));
  /*&.up {
    transform: translateY(-1.25em);
  }
  &.down {
    transform: translateY(1.25em);
  }*/
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
  overflow-x: hidden;
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
  width: 3.5ch;
  border-left: 3px darkgrey solid;
  display: inline-block;

  &:last-child {
    border-right: 3px darkgrey solid;
  }
}

.container {
  overflow: hidden;
  background-color: red;
}

.label {
  background-color: red;
}
</style>
