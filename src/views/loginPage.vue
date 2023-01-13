<template>
                <v-card flat  class="cardPosition">
                    
                        <v-col>
                            <v-card-title ><h1>Login-Up</h1></v-card-title>
                        </v-col>
                        <v-col>
                            <v-img :src="require('@/assets/loading.gif')" style="width: 100px; height: 100px;">
                            </v-img>
                        </v-col>
                    
                
                    <v-col>
                        <v-row>
                                <v-text-field
                                v-model="username"
                                required>
                                </v-text-field>
                        </v-row>
                        
                    </v-col>

                    <v-col>
                        <v-row>
                            <v-text-field
                            :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show4 ? 'text' : 'password'"  
                            @click:append="show4 = !show4"
                            v-model="password"
                            required
                            ></v-text-field>
                        </v-row>
                    </v-col>
                            
                    <div>
                        <v-row>
                            <v-col>
                                <v-btn style="color:white; background-color: blue;" @click="loginToDashboard()">Log-In</v-btn>
                            </v-col>
                            
                            <v-col >
                                <v-btn stSyle="background-color:red" @click="forgetUserPass"> 
                                Forget-Password
                                </v-btn>
                            </v-col>

                            <v-col>
                                <v-btn  
                                    style="background-color:yellowgreen"
                                    color="primary"
                                    elevation="15"
                                    large
                                    @click="createNewUser()">
                                    <v-icon>
                                        mdi-account
                                    </v-icon>
                                    create user
                                </v-btn>
                            </v-col>
                        </v-row>

                    </div>
                            
                </v-card>
                
    <!-- </v-img> -->
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
        //username details
        username:'',
        //password details
        show4: false,
        password:'',
        loginUser:false
       
    }
  },
  methods:{
    createNewUser(){
        this.$router.push({name:'newUser',})

    },
    loginToDashboard(){
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
                    console.log("inside login page",response)
                    if (response.data.data===true){
                        window.alert("login successfuly")
                        this.$router.push({name:'home',params:{loginTrue:true}})
                    }
                    else{
                        window.alert("please enter correct login details")
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
    width: 500px;
    margin-left:1100px;
    margin-top:200px;
    margin-right:200px ;
}
.flexcard {
    display: flex;
    flex-direction: column;
  }
/* // Add the css below if your card has a toolbar, and if your toolbar's height increases according to the flex display. */
.flexcard .v-toolbar {
    flex: 0;
  }
  .imageLogin {
  margin-bottom: 100px;
  padding: 0px;
  height: 100vh;
  overflow: hidden;
  position: relative;
  text-align: center;
  color: white;
}


.iconClass{
    width: 30px;
    height: 30px;
    
}




</style>
