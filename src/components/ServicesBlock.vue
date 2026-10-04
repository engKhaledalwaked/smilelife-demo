<script setup>
import { t } from '../i18n'
import { img, wa } from '../site'

const icons = {
  exam: 'M9 4v6a5 5 0 0 0 10 0V4M7 4h4M17 4h4M14 15v2a4 4 0 0 0 8 0v-3M22 14a2 2 0 1 0 0-.01',
  surgery: 'M4 20l10-10M14 10l3-6 3 3-6 3M6 14l4 4',
  iv: 'M12 3h4v6l-2 3-2-3zM14 12v4a3 3 0 0 1-3 3H8M8 19v2',
  vaccine: 'M15 3l6 6M18 6l-9 9-3 1 1-3 9-9M6 18l-3 3M10 10l4 4',
  groom: 'M6 3v8a3 3 0 0 0 6 0V3M9 14v7M15 3l5 18M20 3l-5 18',
  shop: 'M4 7h16l-1 13H5zM8 7a4 4 0 0 1 8 0',
}
</script>

<template>
  <section class="section offer-wrap" id="offer">
    <div class="container">
      <div class="offer" v-reveal>
        <img :src="img('reception.jpg')" alt="" loading="lazy" />
        <div class="offer-body">
          <span class="offer-tag">{{ t.offer.tag }}</span>
          <h2>{{ t.offer.title }}</h2>
          <p>{{ t.offer.p }}</p>
          <a class="btn btn-pink" :href="wa(t.offer.msg)" target="_blank" rel="noopener">{{ t.offer.cta }}</a>
        </div>
        <div class="big20" aria-hidden="true">20%</div>
      </div>
    </div>
  </section>

  <section class="section services" id="services">
    <div class="container">
      <div class="head" v-reveal>
        <p class="kicker">{{ t.services.kicker }}</p>
        <h2>{{ t.services.title }}</h2>
      </div>
      <div class="svc-grid">
        <article v-for="(s, i) in t.services.items" :key="s.k" class="svc" :style="{ '--i': i }" v-reveal>
          <span class="svc-ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path :d="icons[s.k]" /></svg></span>
          <h3>{{ s.t }}</h3>
          <p>{{ s.d }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
