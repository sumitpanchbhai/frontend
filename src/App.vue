<template>
  <v-app style="background-color:#B9D9EB">
    <v-app-bar
            color="deep-purple accent-4"
              dense
              dark
        v-show="loginTrue"
        >
    
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

          <v-toolbar-title>Title</v-toolbar-title>

          <v-spacer></v-spacer>
          <v-btn icon>
              <router-link :to="{ name: 'login', params:{ loginTrue:false} }" >
              <v-icon>mdi-logout</v-icon>
            </router-link>
          </v-btn>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          

          <div v-for="i in navigartionDrawer" :key="i.key">
              <v-list-item>
              <!-- <v-list-item-icon> -->
                <!-- <v-icon>mdi-home</v-icon> -->
              <!-- </v-list-item-icon> -->
              <v-list-item-title @click="routingToPAges(i)">{{i}}</v-list-item-title>
            </v-list-item>

          </div>
          
          
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>


    <v-main>
      <router-view/>
    </v-main>
  </v-app>

</template>

<script>

export default {
  name: 'App',

  data: () => ({
    loginTrue:false,
    drawer: false,
    group: null,
    routing:{About:'about',Home:'home',Contact:'contact'},
    navigartionDrawer:{1:"Home",2:"About",3:"Contact"}

  }),
  updated(){
    console.log(this.$router.app._route.params.loginTrue)
    if (this.$router.app._route.params.loginTrue!==undefined){
      this.loginTrue = this.$router.app._route.params.loginTrue
    }
  },
  methods:{
    routingToPAges(routingObject){
      this.$router.push({name:this.routing[routingObject]})
    }
  }
};
</script>
