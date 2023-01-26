<script>
import '../style/navbar.css';


</script>

<template>
    <nav class="navbar navbar-expand-lg">
      <div class="nav-container container-fluid">
        <a class="bg-transparent" href="#"><img class="logo" alt='logo' src= "../photos/company_Logo.png"/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
              <li class="nav-item"><a class="btn from-center" href="#">Home</a></li>
              <li class="nav-item"><a class="btn from-center" href="google.com">Features</a></li>
              <li class="nav-item"><a class="btn from-center" href="google.com">Marketplace</a></li>
              <li class="nav-item"><a class="btn from-center" href="google.com">Company</a></li>
              <li class="nav-item position-absolute end-0"><button type="button" class="login">Log in</button></li>
          </ul>
        </div>
      </div>
      
    </nav>
    
    
</template>