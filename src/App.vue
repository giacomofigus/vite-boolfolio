<script>
  import AppMain from './components/AppMain.vue'
  import AppHeader from './components/AppHeader.vue'

  export default{
        components:{
          AppMain,
          AppHeader
        },
        data(){
            return{

            }
        },
        methods:{

        },
        mounted(){

        }
    }
</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
  <!-- <AppMain></AppMain> -->
</template>

<style>

</style>
