<template>
    <p class="display-4 mt-5 text-center">ID değeri {{ blogId }} olan blog</p>
</template>


<script>

    export default {
        data(){
            return {
                blogId:null
            }
        },
        mounted(){
            this.blogId = this.$route.params.id
        }
    }

</script>