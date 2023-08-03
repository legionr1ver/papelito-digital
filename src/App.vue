<script setup>
/* Font Awesome */
import { library, text } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faBars)
</script>

<template>
  <nav class="flex items-center py-3 px-10">
    <img class="w-20 h-20 flex-initial" src="/logo-papelito-digital.jpeg" alt="Logo papelito digital">
    <ul class="flex-1 flex justify-evenly font-bold text-pink-300">
      <li>
        <a href="#muestras">Muestras</a>
      </li>
      <li>
        <a href="#contacto">Contacto</a>
      </li>
    </ul>
  </nav>
  <header class="bg-[url('/fondo.jpg')] bg-top bg-no-repeat bg-cover min-h-[30rem] flex items-center justify-center">
    <div class="text-white max-w-[40ch] text-center">
      <h1 class="font-bold text-5xl mb-3">
        Invitaciones digitales para eventos
      </h1>
      <p class="text-xl">
        Compartí toda la información de tu evento de una manera práctica y en un solo lugar.
      </p>
    </div>
  </header>

  <section class="px-8 py-14 text-center space-y-7">
    <h2 class="text-3xl mb-3">¿Por que invitaciones digitales?</h2>

    <div>
      <img class="mx-auto" src="/icon_130x130_accesibles.svg">
      <h3 class="text-xl font-bold">Super accesibles</h3>
      <p>Al no tener costos de impresion son mas económicas que las invitaciones tradicionales!</p>
    </div>

    <div>
      <img class="mx-auto" src="/icon_130x130_click.svg">
      <h3 class="text-xl font-bold">Prácticas</h3>
      <p>Podes ver la ubicación en un mapa o agregar el evento al calendario con un solo click!</p>
    </div>

    <div>
      <img class="mx-auto" src="/icon_130x130_express.svg">
      <h3 class="text-xl font-bold">Rápidas</h3>
      <p>Elegí el tema que mas te guste y en pocos días ya te enviamos la invitación por whatsapp o e-mail!</p>
    </div>
  </section>

  <section id="muestras">
    <h2 class="text-center text-3xl mb-3">Muestras</h2>

    <div class="p-5 grid gap-5">
      
      <figure>
        <img class="max-w-[10rem] mx-auto" src="/muestras/paw-patrol-thumbnail.png" alt="Invitacion de Paw Patrol">
        <figcaption class="font-bold text-pink-400 text-center p-2">Invitacion de Paw Patrol</figcaption>
      </figure>

      <figure>
        <img class="max-w-[10rem] mx-auto" src="/muestras/peppa-pig-thumbnail.png" alt="Invitacion de Peppa Pig">
        <figcaption class="font-bold text-pink-400 text-center p-2">Invitacion de Peppa Pig</figcaption>
      </figure>

      <figure>
        <img class="max-w-[10rem] mx-auto" src="/muestras/mario-thumbnail.png" alt="Invitacion de Mario">
        <figcaption class="font-bold text-pink-400 text-center p-2">Invitacion de Mario</figcaption>
      </figure>

    </div>
  </section>

  <section id="contacto" class="px-8 py-14">
    <h2 class="text-center text-3xl mb-3">Contactanos</h2>
    <p class="text-sm mb-8">
      Comunicate con nosotros a traves de cualquiera de nuestras redes sociales, whatsapp o completando el formulario.
    </p>

    <form action="mailto:consultas@papelito-digital.com" class="space-y-3">
      <div class="grid">
        <label for="nombre">Nombre</label>
        <input id="nombre" name="nombre" type="text" class="p-2 border w-full" required>
      </div>
      <div class="grid">
        <label for="correo">Correo</label>
        <input id="correo" name="correo" type="email" class="p-2 border w-full" required>
      </div>
      <div class="grid">
        <label for="mensaje">Mensaje</label>
        <textarea id="mensaje" class="p-2 border w-full" required></textarea>
      </div>
      <button class="w-full bg-pink-300 p-3 text-white font-bold rounded">Enviar</button>
    </form>
  </section>
</template>

<style scoped></style>
