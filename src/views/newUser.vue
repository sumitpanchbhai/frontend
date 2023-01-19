<template>
  <v-app style="background-color:#B9D9EB">
    <div>
      <router-link
            :to="{ name: 'login'}"
          >
          <v-btn color="blue">
        <v-img :src="require('@/assets/backspace.png')" style="width: 35px; height: auto;" ></v-img>
      </v-btn>
      </router-link>
    </div>

    <div style="margin-top:5%">
      <div>
        <alertComponent :alertdata="alertdata" v-show="showAlert"/>
      </div>
      <v-card  class="cardClass">
        <v-card-title ><h1> Create New User</h1></v-card-title>
          <v-form
          ref="form"
          lazy-validation>
          <v-container fluid>
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="username"
                :counter="10"
                :rules="nameRules"
                label="Username"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                label="Password"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>

              
          
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
              </v-container>
        </v-form>
        <v-row>
                                <!-- <v-col>
                                    <v-btn style="display: block; margin-left: auto; margin-right: auto ;background-color: #0047AB;" @click="loginToDashboard()" >Log-In</v-btn>
                                </v-col> -->
                            <p style="display: block; margin-left: auto; margin-right: auto ">
                                <input
                                :disabled="this.disableSubmitButton"
                                class="loginButton"
                                type="submit"
                                @click.stop.prevent="createNewUser()"
                                :value="this.disableSubmitButton? 'Saving': 'Submit'"
                                />
                            </p>
                            </v-row> 
          
        
        
      </v-card>
    </div>
  </v-app>
  </template>

<script>
import alertComponent from '@/components/alertComponent.vue';
import axios from 'axios';
  export default {
    components:{
      alertComponent
    },
    data: () => ({
      alertdata:[],
      showAlert:false,
      disableSubmitButton:false,
      show1: false,
        password:'',
        username:'',
      name: '',
      nameRules: [
        v => !!v || 'It is required',
        v => (v && v.length <= 10) || 'It must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
        },
      
    }),

    methods: {

      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      createNewUser(){
        if (this.username!=='' && this.password!=='' && this.name!=='' && this.email!==''){
          this.validate();
          this.disableSubmitButton = true
          let config = {
                method: "POST",
                url: `${this.$backend_url}/createAccount?username=${this.username}&email=${this.email}&password=${this.password}&name=${this.name}`,
          };
        axios(config).then(response=>{
          console.log("response",response.data)
          this.showAlert=true

          if (response.data.status===true){
            this.alertdata =[response.data.message,true,'green']
            setInterval(() => {
                
                this.showAlert = false
                this.disableSubmitButton = false
              }, 2000);
              this.reset()
              this.alertdata = []
          }else{
            this.alertdata =[response.data.message,true,'green']
            setInterval(() => {
                
                this.showAlert = false
                this.disableSubmitButton = false
              }, 2000);
              this.alertdata = []
              this.reset()

          }

              })
              
        }else{
          this.showAlert=true
          this.alertdata = ["please fill the input fields",true,'orange']
        }
        

      }
      
    },
  }
</script>

<style lang="scss" scoped>

.cardClass{
  width: 700px;
    position: relative;
    height: auto;
    display: block; 
    margin-left: auto; 
    margin-right: auto;
    border-radius: 10px;
}

.loginButton {
  color: white;
  background-color: #0c479d;
  padding: 1px 90px 1px 90px;
  font-size: 30px;
  font-weight: 600;
  border-radius: 6px;
  // margin-bottom: 10px;
  }
</style>