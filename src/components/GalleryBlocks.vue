<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { t } from '../i18n'
import { img } from '../site'

const patients = ['calico.jpg', 'kitten-iv.jpg', 'cat-care.jpg', 'vet-exam.jpg', 'grooming.jpg']
const rooms = ['reception', 'waiting-chairs', 'grooming-room', 'pet-shop', 'treats', 'front-desk']
const open = ref(null)
const onKey = (e) => { if (e.key === 'Escape') open.value = null }
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <section class="section patients">
    <div class="container">
      <div class="head center" v-reveal>
        <p class="kicker">{{ t.patients.kicker }}</p>
        <h2>{{ t.patients.title }}</h2>
      </div>
      <div class="pat-row">
        <figure v-for="(p, i) in patients" :key="p" class="pat" :style="{ '--r': (i % 2 ? 3 : -3) + 'deg' }" v-reveal>
          <img :src="img(p)" alt="" loading="lazy" />
        </figure>
      </div>
    </div>
  </section>

  <section class="section clinic" id="clinic">
    <div class="container clinic-grid">
      <div class="clinic-copy" v-reveal>
        <p class="kicker">{{ t.clinic.kicker }}</p>
        <h2>{{ t.clinic.title }}</h2>
        <p class="muted">{{ t.clinic.p }}</p>
      </div>
      <div class="rooms">
        <button v-for="(r, i) in rooms" :key="r" type="button" class="room" :class="'r' + i" @click="open = r" v-reveal>
          <img :src="img(r + '.jpg')" alt="" loading="lazy" />
          <span>{{ t.clinic.labels[r] }}</span>
        </button>
      </div>
    </div>
    <Transition name="fade">
      <div v-if="open" class="lightbox" role="dialog" aria-modal="true" @click.self="open = null">
        <button type="button" class="lb-x" :aria-label="t.close" @click="open = null">✕</button>
        <img :src="img(open + '.jpg')" alt="" />
      </div>
    </Transition>
  </section>
</template>
