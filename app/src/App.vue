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
                <li><a class="dropdown-item"><router-link to="slide2">The Design Process</router-link></a></li>
                <li><a class="dropdown-item"> <router-link to="slide3">Software Quality Guidelines & Attributes</router-link></a></li>
                <li><a class="dropdown-item"> <router-link to="slide4">Evolution of Software Design</router-link> </a></li>
              </ul>
            </li>
            <li class="py-3 border-bottom text-center">
              <router-link class="fw-bold text-white dropdown-toggle" to="slide5" data-bs-toggle="dropdown" aria-expanded="false">Design Concepts</router-link>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item"> <router-link to="slide5">Design Concepts</router-link>  </a></li>
                <li><a class="dropdown-item"> <router-link to="slide6">Abstraction</router-link>  </a></li>
                <li><a class="dropdown-item"> <router-link to="slide7">Architecture</router-link>  </a></li>
                <li><a class="dropdown-item"> <router-link to="slide8">Patterns</router-link>  </a></li>
                <li><a class="dropdown-item"> <router-link to="slide9">Separation of Concerns</router-link>  </a></li>
                <li><a class="dropdown-item"> <router-link to="slide10">Modularity</router-link> </a></li>
                <li><a class="dropdown-item"> <router-link to="slide11">Information Hiding</router-link></a></li>
                <li><a class="dropdown-item"> <router-link to="slide12">Functional Independence</router-link></a></li>
                <li><a class="dropdown-item"> <router-link to="slide13">Refinement</router-link></a></li>
                <li><a class="dropdown-item"> <router-link to="slide14">Aspects</router-link></a></li>
                <li><a class="dropdown-item"> <router-link to="slide15">Refactoring</router-link></a></li>
                <li><a class="dropdown-item"> <router-link to="slide16">Object-Oriented Design Concepts</router-link></a></li>
                <li><a class="dropdown-item"> <router-link to="slide17">Design Classes</router-link></a></li>
              </ul>
            </li>
            <li class="py-3 border-bottom text-center">
              <router-link class="fw-bold text-white dropdown-toggle" to="slide18" data-bs-toggle="dropdown" aria-expanded="false">The Design Model</router-link>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item"><router-link to="slide18">The Design Model</router-link></a></li>
                <li><a class="dropdown-item"><router-link to="slide19">Data Design Elements</router-link></a></li>
                <li><a class="dropdown-item"> <router-link to="slide20">Architectural Design Elements</router-link> </a></li>
                <li><a class="dropdown-item"> <router-link to="slide21">Interface Design Elements</router-link></a></li>
                <li><a class="dropdown-item"> <router-link to="slide22">Component-Level Design</router-link></a></li>
                <li><a class="dropdown-item"> <router-link to="slide23">Deployment-Level Design</router-link></a></li>
              </ul>
            </li>
            <li class="py-3 border-bottom text-center">
              <router-link class="fw-bold text-white" to="slide24">Summary</router-link>
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
