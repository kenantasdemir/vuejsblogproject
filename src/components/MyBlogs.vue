<template>
    <div class="d-flex justify-content-center align-items-center mt-5">
    <table class="table w-75">
        <thead>
            <tr>
                <th>ID</th>
                <th>Resim</th>
                <th>Başlık</th>
                <th>Oluşturulma tarihi</th>
                <th>Güncelle</th>
                <th>Sil</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="index in 5" :key="index">
                <td> {{ index }} </td>
                <td> <img src="" style="height: 50px; height: 50px;" alt="blogresim"> </td>
                <td>Örnek Blog {{ index }}  </td>
                <td>1{{ index+1 }} Mart 2023</td>
                <td><a class="btn btn-success text-white">Güncelle</a></td>
                <td><a class="btn btn-danger text-white">Sil</a></td>
            </tr>
        </tbody>
    </table>
</div>

</template>
