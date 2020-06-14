<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title><b>Login</b></md-dialog-title>
      <div class="md-layout md-gutter">
        <div class="md-layout-item buttons">
          <div>
            <md-button id="google" class="md-raised md-primary"><md-icon class="fa fa-google" />Sign in with Google</md-button>
          </div>
          <div>
            <md-button id="github" class="md-raised md-primary"><md-icon class="fa fa-github" />Sign in with Github</md-button>
          </div>
        </div>
        <div class="md-layout-item form">
          <md-field>
            <label>Username</label>
            <md-input></md-input>
          </md-field>

          <md-field>
            <label>Password</label>
            <md-input type="password"></md-input>
          </md-field>
          <div>
            <md-button class="login md-raised md-primary">Login</md-button>
          </div>
        </div>
      </div>
    </md-dialog>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data: () => ({
      showDialog: false
    }),
    methods: {
      login() {
        this.showDialog = true
      }
    }
  }
</script>

<style lang="scss" scoped>
.md-dialog-title {
  text-align: center;
  font-size: 28px;
}
.md-layout-item {
  text-align: center;
}
.md-raised {
  font-size: 16px;
  margin: 0px;
  margin-top: 25px;
}
.md-field {
  width: 30vw;
}
#google {
  width: 30vw;
  background-color: white;
  color: #DB4437;
}
#github {
  width: 30vw;
  background-color: #24292e;
}
.buttons {
  margin-left: 20px;
}
.form {
  margin-right: 20px;
  border-left: 2px solid grey;
}
.md-gutter {
  margin-bottom: 30px;
}
.md-field {
  margin-bottom: 4px;
}
.login {
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: black !important;
}
.fa {
  margin-right: 5px;
}
.fa-google {
  color: #DB4437 !important;
}
</style>