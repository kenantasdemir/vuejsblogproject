<template>
   <div class="d-flex justify-content-center align-items-center mt-5" v-for="index in 5" :key="index">
    <div class="card" style="width: 500px;">
        <div class="card-header">
            <img src="" class="card-img-top" alt="">
            <p class="text-center"> {{ index }} </p>
        </div>

        <div class="card-body">
            <h1 class="card-title text-center">Blog Başlık</h1>
            <p class="card-subtitle"><strong>@kenant42</strong></p>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor a nulla dolorum iste
                culpa, sit adipisci rerum temporibus ab quam nihil odio inventore illo libero minus at quae aut
                corporis.</p>
        </div>

        <div class="card-footer d-flex justify-content-between">
            <p class="text-muted">
                2 gün önce..

            </p>
            <!-- <a  class="btn btn-success" type="button">Devamını Oku</a> -->

            <router-link :to="`/blogs/${index}`" v-slot="{ href }">
        <a class="btn btn-success" :href="href">Devamını oku</a>
      </router-link>
        </div>
    </div>
</div>
</template>