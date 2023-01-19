<template>
    <v-app style="background-color:#B9D9EB">
        <v-row>
            <v-col>

                <alertComponent :alertdata="alertdata" v-show="showAlert"/>
                <div style="margin-top:5%">
                    <v-card class="cardPosition">
                        <v-card-title><h1>Login-Up</h1>
                            <v-col style="background-color:white">
                                <v-img :src="require('@/assets/loading.gif')" style="width: 100px; height: 100px;" ></v-img>
                            </v-col>
                        </v-card-title>

                            <v-col cols="12" md="12" style="align-content: center;" >
                                    <v-text-field
                                    outlined dense
                                    v-model="username"
                                    required
                                    label="Username"
                                    >
                                    </v-text-field>
                            </v-col>
                            

                            <v-col cols="12" md="12">
                                <v-text-field 
                                outlined dense
                                :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show4 ? 'text' : 'password'"  
                                @click:append="show4 = !show4"
                                v-model="password"
                                required
                                label="password"
                                ></v-text-field>
                            </v-col>
                                
                            <v-row>
                                <!-- <v-col>
                                    <v-btn style="display: block; margin-left: auto; margin-right: auto ;background-color: #0047AB;" @click="loginToDashboard()" >Log-In</v-btn>
                                </v-col> -->
                            <p style="display: block; margin-left: auto; margin-right: auto ">
                                <input
                                :disabled="this.disableLoginButton"
                                class="loginButton"
                                type="submit"
                                @click.stop.prevent="loginToDashboard()"
                                :value="this.disableLoginButton? 'loading': 'Login'"
                                />
                            </p>
                            </v-row>    
                        </v-card>
                </div>
                
                <div class="cardPosition alink">
                    <v-row>    
                        <v-col>
                            <a href="#" @click="createNewUser">Create An account</a>
                        </v-col>  
                        <v-col>
                            <a style="margin-left:200px" href="#" @click="forgetUserPass">Forget-password</a> 
                        </v-col>          
                    </v-row>
                </div>
                
            </v-col>
        </v-row>
    </v-app>       
</template>

<script>
import alertComponent from '../components/alertComponent.vue'
import axios from 'axios';
export default {
    components:{
        alertComponent
    },
  data(){
    return {
        username:'',
        show4: false,
        password:'',
        loginUser:false,
        disableLoginButton:false,
        alertdata:[],
        showAlert:false
       
    }
  },
  methods:{
    createNewUser(){
        this.$router.push({name:'newUser',})

    },
    loginToDashboard(){
        this.disableLoginButton=true;
        if(this.username==='' && this.password==='')
        {
            window.alert("please enter username and password")
        }
        else if (this.username===''){
            window.alert("Please enter unsername");
        }
        else if(this.password==='')
        {window.alert("please enter password")}
        
        else{
                let config = {
                method: "get",
                url: `${this.$backend_url}/login?username=${this.username}&password=${this.password}`,
                };
                axios(config).then(response=>{
                    console.log("inside login page",response.data)
                    if (response.data.status===true)
                    {
                        this.showAlert = true
                        this.disableLoginButton=false;
                        this.alertdata =[`Successfully login ${this.username}`,true,'green']
                        setInterval(() => {
                            this.showAlert = false
                            this.alertdata = []
                        }, 2000);
                    }else{
                        this.showAlert = true
                        this.alertdata =[`${response.data.message}`,true,'red']
                        this.disableLoginButton=false;
                        setInterval(() => {
                            this.showAlert = false
                            this.alertdata = []
                        }, 2000);
                    }
                    
                })}
        },
        forgetUserPass(){
            this.$router.push({name:'forget'})
        }
  }
}

</script>
<style scoped>
.cardPosition{
    width: 700px;
    position: relative;
    height: auto;
    display: block; 
    margin-left: auto; 
    margin-right: auto;
    border-radius: 10px;
    

    }
.alink{
    margin-top: 100px;
}
.loginButton {
    color: white;
  background-color: #0c479d;
  padding: 1px 90px 1px 90px;
  font-size: 30px;
  font-weight: 600;
  border-radius: 6px;
  margin-bottom: 20px;}

</style>
