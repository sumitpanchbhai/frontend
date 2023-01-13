<template>
  <div>
    <v-row >
        <v-col sm="4" lg="4" md="4" v-for="item in data" v-bind:key="item.url">
          <v-row >
              <v-card class="mx-auto my-12" max-width="500">
              <v-container>
                <v-card-title>{{item.title}}</v-card-title>
                  <img :src="item.urlToImage" v-bind:alt="require('@/assets/login.png')" style="height:200px; width: auto;">
                <v-card-text>{{ item.description }}</v-card-text>
                <a :href="item.url">Read More....</a>
              </v-container>
            </v-card>
          </v-row>
          
        </v-col>
      </v-row>
  </div>
</template>

<script>
import news from '../content/news.json'
// import axios from 'axios'
  export default {
    name: 'HomeComponent',
    data(){
      return {
        data:[],
        link: '',
      }
    },
    components: {
    },
    methods:{
      tag(link){
        this.link=link
      }
    },
    mounted(){
    console.log("news",news)
      // let config = {
      //           method: "get",
      //           url: `https://newsapi.org/v2/everything?q=tesla&from=2022-11-25&sortBy=publishedAt&apiKey=9d639f6e9e7845adb19cf6a4f419c28b`,
      //           };
      // axios(config).then(response=>{
      //   this.data = response.data.articles
      // })
      this.data = news.articles
    }
  }
</script>
