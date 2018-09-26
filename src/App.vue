<template>
  <div id="app">       
	<b-container class="app-container">
    <b-row>
        <b-col cols="2" class="app-sidebar">
          <h1>DAIRY APP</h1>
          <h2>Comment with no sense</h2>
          <router-link to="/">Dairy</router-link> |
			<router-link to="/about">About</router-link>
        </b-col>
        <b-col cols="10"><router-view></router-view></b-col>        
    </b-row>
</b-container>
	
  </div>
</template>

<style lang="scss">

.app-sidebar {
  background-color: #2b2f3e;        
  height: 100% !important;
  position: absolute !important;
}

h1{
    color: white !important;
    text-transform: uppercase;
    font-size: 36px;
  }

  h2{
    color: #808080;
    font-size: 18px;
  }


  
.container {
    max-width: initial !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
