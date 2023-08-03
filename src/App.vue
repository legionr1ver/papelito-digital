<script setup>
/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faBars)
</script>

<template>
  <main class="text-base">

    <!--nav class="bg-pink-100 p-3 font-bold">
      <ul class="flex">
        <li class="flex-1 text-center">Muestras</li>
        <li class="flex-1 text-center">Contacto</li>
      </ul>
    </nav-->

    <header>
      <div class="p-10">
        <img class="w-full" src="/logo-papelito-digital.jpeg" alt="Logo papelito digital">
        <!--p class="text-4xl font-bold text-center leading-relaxed" style="font-family: Pacifico;">
          Invitaciones digitales, papeleria, decoraciones, etc.
        </p-->
      </div>
    </header>

    <ul>
      <li>
        
      </li>
    </ul>

    <section class="bg-pink-200 p-9">
      <!--h2 class="text-2xl text-center">Nuestros productos</h2-->

      <article class="mx-2 my-5">
        <h2 class="text-3xl text-center mb-5" style="font-family: Pacifico;">Invitaciones digitales</h2>
        <video controls src="/invitacion-paw-patrol.mp4"></video>
        <p class="my-5">
          ¡¡Invitacion digital de Paw Patrol!!
        </p>
      </article>

    </section>

  </main>
</template>

<style scoped></style>
