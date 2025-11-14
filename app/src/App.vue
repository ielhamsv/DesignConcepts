<script setup>
</script>

<template>
  <haeder>
  <div class="container-fluid">
    <div class="row align-items-center bag-secondary">
      <div class="col-md-3 text-center bag-dark text-white">
        <h1>Design Concepts</h1>
      </div>
      <div class="col-md-9">
        <div class="row justify-content-between align-items-center">
          <div class="col-md-4">جمع آوری منابع و اجرا: الهام موسوی</div>
          <div class="col-md-4"></div>
          <div class="col-md-4">ارایه دهنده:فاطمه روحانی و الهام موسوی</div>
        </div>
      </div>
    </div>
  </div>
  </haeder>
  <section>
    <div class="container-fluid">
      <div class="row h100">
        <div class="col-md-3 p-0 bag-primary">
          <ul>
            <li class="py-3 border-bottom text-center">
              <router-link class="fw-bold text-white" to="Introduction">مقدمه</router-link>
            </li>
            <li class="py-3 border-bottom text-center">
              <router-link class="fw-bold text-white" to="list">سرفصل ها</router-link>
            </li>
            <li class="py-3 border-bottom text-center">
              <router-link class="fw-bold text-white" to="slide1">Design within the Context of Software Engineering</router-link>
            </li>
            <li class="py-3 border-bottom text-center">
              <router-link class="fw-bold text-white dropdown-toggle" to="slide2" data-bs-toggle="dropdown" aria-expanded="false">The Design Process</router-link>
              <ul class="dropdown-menu">
                <li><a href="" class="dropdown-item"><router-link to="slide2">The Design Process</router-link></a></li>
                <li><a href="" class="dropdown-item"> <router-link to="slide3">Software Quality Guidelines & Attributes</router-link></a></li>
                <li><a href="" class="dropdown-item"> <router-link to="">Evolution of Software Design</router-link> </a></li>
              </ul>
            </li>
            <li class="py-3 border-bottom text-center">
              <router-link class="fw-bold text-white dropdown-toggle" to="" data-bs-toggle="dropdown" aria-expanded="false">Design Concepts</router-link>
              <ul class="dropdown-menu">
                <li><a href="" class="dropdown-item"> <router-link to="">Abstraction</router-link>  </a></li>
                <li><a href="" class="dropdown-item"> <router-link to="">Architecture</router-link>  </a></li>
                <li><a href="" class="dropdown-item"> <router-link to="">Patterns</router-link>  </a></li>
                <li><a href="" class="dropdown-item"> <router-link to="">Separation of Concerns</router-link>  </a></li>
                <li><a href="" class="dropdown-item"> <router-link to="">Modularity</router-link> </a></li>
                <li><a href="" class="dropdown-item"> <router-link to="">Information Hiding</router-link></a></li>
                <li><a href="" class="dropdown-item"> <router-link to="">Functional Independence</router-link></a></li>
                <li><a href="" class="dropdown-item"> <router-link to="">Refinement</router-link></a></li>
                <li><a href="" class="dropdown-item"> <router-link to="">Aspects</router-link></a></li>
                <li><a href="" class="dropdown-item"> <router-link to="">Refactoring</router-link></a></li>
                <li><a href="" class="dropdown-item"> <router-link to="">Object-Oriented Design Concepts</router-link></a></li>
                <li><a href="" class="dropdown-item"> <router-link to="">Design Classes</router-link></a></li>
              </ul>
            </li>
            <li class="py-3 border-bottom text-center">
              <router-link class="fw-bold text-white dropdown-toggle" to="" data-bs-toggle="dropdown" aria-expanded="false">The Design Model</router-link>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item"><router-link to="">Data Design Elements</router-link></a></li>
                <li><a class="dropdown-item"> <router-link to="">Architectural Design Elements</router-link> </a></li>
                <li><a class="dropdown-item"> <router-link to="">Interface Design Elements</router-link></a></li>
                <li><a class="dropdown-item"> <router-link to="">Component-Level Design</router-link></a></li>
                <li><a class="dropdown-item"> <router-link to="">Deployment-Level Design</router-link></a></li>
              </ul>
            </li>
            <li class="py-3 border-bottom text-center">
              <router-link class="fw-bold text-white" to="">Summary</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-9 bag-light">
          <router-view />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
