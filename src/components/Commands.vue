<template>
  <div class="container">
    <div class="content">
      <div class="button">
        <md-button @click="pushCommand('<')" class="md-icon-button md-raised md-primary">
          <h1>&lt;</h1>
        </md-button>
      </div>
      <div class="button">
        <md-button @click="pushCommand('>')" class="md-icon-button md-raised md-primary">
          <h1>&gt;</h1>
        </md-button>
      </div>
      <div class="button">
        <md-button @click="pushCommand('+')" class="md-icon-button md-raised md-primary">
          <h1>&plus;</h1>
        </md-button>
      </div>
      <div class="button">
        <md-button @click="pushCommand('-')" class="md-icon-button md-raised md-primary">
          <h1>&minus;</h1>
        </md-button>
      </div>
      <div class="button">
        <md-button @click="pushCommand('.')" class="md-icon-button md-raised md-primary">
          <h1>.</h1>
        </md-button>
      </div>
      <div class="button">
        <md-button @click="pushCommand(',')" class="md-icon-button md-raised md-primary">
          <h1>,</h1>
        </md-button>
      </div>
      <div class="button">
        <md-button @click="pushCommand('[')" class="md-icon-button md-raised md-primary">
          <h1>[</h1>
        </md-button>
      </div>
      <div class="button">
        <md-button @click="pushCommand(']')" class="md-icon-button md-raised md-primary">
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

.md-button {
  background-color: white;
}
</style>
