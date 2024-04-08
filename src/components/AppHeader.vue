<script>
    

  export default{
        name: 'AppHeader',
        components:{
          
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
    

<nav class="bg-white border-gray-200 dark:bg-gray-900 mb-5">
  <div class="max-w-screen-xl flex flex-wrap items-center  mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">

      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Portfolio</span>
  </a>
  <div class="flex md:order-2">
  </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ml-5" id="navbar-search">
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <router-link :to="{name: 'home'}"  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</router-link>
        </li>
        <li>
          <router-link href="#" :to="{name: 'progetti'}" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Progetti</router-link>
        </li>

      </ul>
    </div>
  </div>
</nav>

</template>

<style>

</style>