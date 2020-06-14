<template>
  <div class="container">
    <div class="content">
      <div class="button">
        <md-button @click="pushCommand('<')" class="md-icon-button md-raised md-primary one">
          <h1>&lt;</h1>
        </md-button>
      </div>
      <div class="button">
        <md-button @click="pushCommand('>')" class="md-icon-button md-raised md-primary two">
          <h1>&gt;</h1>
        </md-button>
      </div>
      <div class="button">
        <md-button @click="pushCommand('+')" class="md-icon-button md-raised md-primary three">
          <h1>&plus;</h1>
        </md-button>
      </div>
      <div class="button">
        <md-button @click="pushCommand('-')" class="md-icon-button md-raised md-primary four">
          <h1>&minus;</h1>
        </md-button>
      </div>
      <div class="button">
        <md-button @click="pushCommand('.')" class="md-icon-button md-raised md-primary five">
          <h1>.</h1>
        </md-button>
      </div>
      <div class="button">
        <md-button @click="pushCommand(',')" class="md-icon-button md-raised md-primary six">
          <h1>,</h1>
        </md-button>
      </div>
      <div class="button">
        <md-button @click="pushCommand('[')" class="md-icon-button md-raised md-primary seven">
          <h1>[</h1>
        </md-button>
      </div>
      <div class="button">
        <md-button @click="pushCommand(']')" class="md-icon-button md-raised md-primary eight">
          <h1>]</h1>
        </md-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Commands",
  data: function() {
    return {
      text: "",
    };
  },
  methods: {
    pushCommand(command) {
      this.$emit("command", command)
    }
  }
};
</script>

<style lang="scss" scoped>

.container {
  background-image: linear-gradient(
    to left,
    #ffa207,
    #ff901b,
    #ff7f2a,
    #ff6d36,
    #ff5b42,
    #ff4d4e,
    #ff3e5a,
    #ff2e67,
    #ff1f78,
    #ff0e8a,
    #ff039d,
    #ff0bb2
  );
  overflow: auto;

  box-shadow:
    inset 0px -9px 8px -10px black;
}

.content {
  margin: 0 auto;
  text-align: center;
}

.button {
  margin: 10px;
  display: inline-block;
}


.one {
  color: #00de8d !important;
}

.two {
  color: #13b3ef !important;
}

.three {
  color:  #ff4a41 !important;
}

.four {
  color: #ff7e00 !important;
}

.five {
  color: #b6cb00 !important;
}

.six {
  color: #009337 !important;
}

.seven {
  color: #e518cf !important;
}

.eight {
  color: #7b4ce8 !important;
}

.md-button {
  background-color: white;
}
</style>
