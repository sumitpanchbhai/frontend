<template>
    <div>
        
        <v-card flat  class="cardPosition">
            <v-card-title ><h2>Enter Details</h2></v-card-title>            
            <v-container fluid>
                <v-row>
                    <v-col>
                        <v-row >
                            <v-col cols="8" v-show="showUserInputField">
                                <v-text-field
                                v-model="username"
                                label="username">
                                </v-text-field>
                            </v-col>
                            <v-col v-show="showUserInputField">
                                <v-btn @click="showNewPasswordField()">
                                    <v-img :src="require('@/assets/arrow.png')" class="arrowButton" ></v-img>
                                </v-btn>
                            </v-col>
                                
                            <v-col cols="8" v-show="showPasswordInput">
                                <v-text-field
                                v-model="password"
                                label="password">
                                </v-text-field>
                            </v-col>
                            <v-col v-show="showPasswordInput">
                                <v-btn @click="showUserInputFieldMethod()">
                                    <v-img :src="require('@/assets/back-icon.png')" class="arrowButton" ></v-img>
                                </v-btn>
                            </v-col>
                               
                        </v-row>
                    </v-col>
                </v-row>
                <v-row>
                    <router-link :to="{name: 'login'}">
                        <v-btn >
                            back
                        </v-btn>
                    </router-link>
                    
                </v-row>
                    
            </v-container>  
        </v-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            username:'',
            password:'',
            showPasswordInput:false,
            showUserInputField:true
        }
    },
    methods:{
        showNewPasswordField(){
            if (this.username!==''){
                this.showPasswordInput=true
                this.showUserInputField=false
            }else
            {
                window.alert("please enter username")
            }
        
    },
    showUserInputFieldMethod(){
        this.showUserInputField = true
        this.showPasswordInput = false
    }
    }
    
}
</script>

<style lang="scss" scoped>
.cardPosition{
    width: 500px;
    margin-left:700px;
    margin-top:200px;
    margin-right:200px ;
}

.arrowButton{
    width:50px;
}



</style>