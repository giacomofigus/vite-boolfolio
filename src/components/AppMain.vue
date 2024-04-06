<script>

    import  axios from 'axios';

    export default{
        name: "AppMain",
        data(){
            return{
                arrayProjects: []
            }
        },
        methods:{
            getProjects(){
                axios.get( 'http://127.0.0.1:8000/api/projects' ).then(  res => {
                    this.arrayProjects = res.data.projects
                })
            }
        },
        mounted(){
            this.getProjects()
        }
    }
</script>

<template>
    <main class="flex justify-center items-center ">
        <div class="text-white w-3/5 mt-3">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Ciao dal Portfolio Front End
            </h1>

            <h4 class="text-2xl font-bold my-5">
                I miei 
                <span class="text-cyan-400">
                    Progetti
                </span>
                :
            </h4>
            <ul>
                <li 
                v-for="(element,index) in arrayProjects" :key="element.id"
                class=" bg-white rounded-lg p-4 mb-4 text-black"
                >
                    <span class="text-bold text-2xl block py-2">
                        {{ element.name }}
                    </span>
                    <span>{{ element.description }}</span>
                </li>
            </ul>
        </div>
        
    </main>
    
</template>

<style scoped>

</style>
