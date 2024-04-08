<script>

    import  axios from 'axios';

    export default{
        name: "ProjectCard",
        props: {
            project: Object 
        },
        data(){

        },
        methods:{

        },
        mounted(){
           
        }
    }
</script>

<template>
    <div>
        <div class=" bg-white rounded-lg p-4 mb-4 text-black">
            <span class="text-bold text-2xl block py-2">{{ project.name }}</span>
            <span>{{ project.description }}</span>
        </div>
    </div>
</template>

<style scoped>

</style>
