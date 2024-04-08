<script>

    import  axios from 'axios';

    export default{
        name: "AppMain",
        data(){
            return{
                arrayProjects: [],
                currentPage: '',
                lastPage: ''
            }
        },
        methods:{
            getProjects(projectApiPage){

                axios.get( 'http://127.0.0.1:8000/api/projects', 
                
                {
                    params:{
                        page: projectApiPage
                    }
                }

                )
                .then(  res => {
                    console.log(res.data.projects.data);
                    
                    this.arrayProjects = res.data.projects.data
                    this.currentPage = res.data.projects.current_page
                    this.lastPage = res.data.projects.last_page
                })
            }
        },
        mounted(){
            this.getProjects(1)
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
            
            

            <nav>
                <ul class="flex items-center -space-x-px h-8 text-sm">
                    <li>
                        <button class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" @click="currentPage !== 1 && getProjects(currentPage - 1)"
                        :class="{ 'opacity-50 pointer-events-none': currentPage === 1 }"
                        >
                            <span class="sr-only">Previous</span>
                            <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                            </svg>
                        </button>
                    </li>
                    
                    <li>
                        <button  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" @click="currentPage !== lastPage && getProjects(currentPage + 1)"
                        :class="{ 'opacity-50 pointer-events-none': currentPage === lastPage }"
                        >
                            <span class="sr-only">Next</span>
                            <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    </main>
    
</template>

<style scoped>

</style>
