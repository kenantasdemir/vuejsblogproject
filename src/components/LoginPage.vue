<template>
 <div class="container d-flex justify-content-center align-items-center">
    <form action="" class="form-group w-50">
        <input type="email" placeholder="Email adresinizi giriniz.." class="form-control mt-3">

       <div class="input-group">
            <input :type="isPasswordShown ? 'text':'password'" placeholder="Şifrenizi giriniz..." class="form-control mt-3">
            <button type="button" @click="togglePasswordVisibility()" class="btn btn-secondary mt-3" >
                <i class="bi bi-eye-fill" v-if="!isPasswordShown"></i>
                <i class="bi bi-eye-slash-fill" v-if="isPasswordShown" ></i>
              </button>
       </div>
     
        <div class="btn-group d-flex flex-column">
            <a href="/blogs" style="border-radius: 30px;" type="button" class="btn btn-success mt-3">Giriş Yap</a>
            <a href="/register" style="border-radius: 30px;" type="button" class="btn btn-primary mt-3">Kayıt Ol </a>
        </div>
    </form>
</div>
</template>



<script>
    export default{
        data(){
            return {
                isPasswordShown:false
            }
        },
        methods:{
            togglePasswordVisibility(){
                this.isPasswordShown = !this.isPasswordShown
            }
        }
    }

</script>