<template>

  <div>
    
    <v-btn @click="BacktoLoginPage">
      Back to login
    </v-btn>

  <v-card class="mx-auto FormClass"
    max-width="700"
    >
    <v-card-title style="color: blue;" >Create New User</v-card-title>

    <div class="formClass2">
      <v-form
      ref="form"
      lazy-validation
    >
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

          <!-- <v-text-field
            v-model="password"
            :counter="10"
            :rules="nameRules"
            type="password"
            label="password"
            required
          ></v-text-field> -->
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
      
          <v-btn
          style="background-color:yellow;"
            class="mr-4"
            @click="validate"
          >
            Validate
          </v-btn>
      
          <v-btn
          style="background-color:red;"
            class="mr-4"
            @click="reset"
          >
            Reset Form
          </v-btn>

          <v-btn
          style="background-color:blue;"
            class="mr-4"
            @click="createNewUser"
          >
            Submit
          </v-btn>
      
          </v-container>
    </v-form>
    </div>
    
  </v-card>
    </div>
  </template>

<script>
import axios from 'axios';
  export default {
    data: () => ({
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

      BacktoLoginPage(){
        this.$router.push({name:'login'})
      },
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      createNewUser(){
        if (this.username!=='' && this.password!=='' && this.name!=='' && this.email!==''){
          let config = {
                method: "POST",
                url: `${this.$backend_url}/createAccount?username=${this.username}&password=${this.password}&name=${this.name}&email_id=${this.email}`,
          };
        axios(config).then(response=>{
          console.log("checking response of new user",response);
          if (response.data.status==='S'){
            window.alert("new user created successfully");
            this.reset();
          }

        })
        }else{
          window.alert("please fill the input fields")
        }
        

      }
      
    },
  }
</script>

<style lang="scss" scoped>
.FormClass{
  width:650px ;
  margin-left: 500px;
  margin-top: 150px;
}

.formClass2{
  margin-left: 10px;
  margin-right: 10px;
}


</style>