<template>
   <nav class="navbar navbar-expand-lg bg-dark">
    <ul class="navbar-nav">
      <li class="nav-item"><a href="/" class="nav-link text-light">BlogShare</a></li>
      <li class="nav-item"><a href="/home" class="nav-link text-light">Anasayfa</a></li>
      <li class="nav-item"><a href="/blogs" class="nav-link text-light">Bloglar</a></li>
    </ul>
  
    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-light" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Hesap
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="/notifications">
            Bildirimler
            <span class="badge badge-danger bg-danger badge-pill">4</span>
          </a>
          <a class="dropdown-item" href="/account">Hesabım</a>
          <a class="dropdown-item" href="/my-blogs">Bloglarım</a>
          <a class="dropdown-item" href="/logout">Çıkış yap</a>
        </div>
      </li>
    </ul>
  </nav> 
</template>