<script setup>
import { t } from '../i18n'
import { site, img, wa } from '../site'
import LogoBadge from './LogoBadge.vue'
</script>

<template>
  <section class="hero" id="top">
    <div class="paws" aria-hidden="true"></div>
    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="pill-tag"><i class="dot"></i>{{ t.hero.kicker }}</p>
        <h1>{{ t.hero.title1 }}<br /><span class="neon">{{ t.hero.title2 }}</span></h1>
        <svg class="smile" viewBox="0 0 220 40" aria-hidden="true"><path d="M8 8 Q110 64 212 8" /></svg>
        <p class="lead">{{ t.hero.lead }}</p>
        <div class="ctas">
          <a class="btn btn-pink" :href="wa(t.book.msg.hello)" target="_blank" rel="noopener">{{ t.hero.cta1 }}</a>
          <a class="btn btn-glass" :href="`tel:${site.phone.tel}`">{{ t.hero.cta2 }} <span dir="ltr">{{ site.phone.label }}</span></a>
        </div>
        <p class="open"><span class="moon" aria-hidden="true">☾</span>{{ t.hero.open }}</p>
      </div>
      <div class="hero-art">
        <div class="blob">
          <img :src="img('facade-night.jpg')" alt="" fetchpriority="high" />
        </div>
        <img class="cutout" :src="img('cat-portrait.jpg')" alt="" />
        <div class="card c-rate"><b>{{ site.rating }}</b><span class="stars">★★★★★</span><small>{{ site.reviews }} {{ t.hero.rating }}</small></div>
        <a class="card c-offer" href="#offer"><span>%20</span>{{ t.hero.offer }}</a>
        <LogoBadge :size="110" class="c-logo" />
      </div>
    </div>
    <svg class="wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 40 Q360 100 720 50 T1440 40 V90 H0z" /></svg>
  </section>
</template>
