<template>
  <div>
    <v-alert 
      :value="alertdata[1]"
      :color="alertdata[2]"
      width="2000px"
      height="80px"
      transition="scale-transition"
      type="warning" prominent border="left">
    {{alertdata[0]}}
    </v-alert>
  </div>
</template>

<script>
export default {
  name:'alertComponent',
    props:['alertdata'],
    data(){
        return{
           
        }
    }
    
}
</script>