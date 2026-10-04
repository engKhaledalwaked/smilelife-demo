<script setup>
import { t, reviews } from '../i18n'
import { site } from '../site'
</script>

<template>
  <section class="section reviews" id="reviews">
    <div class="container">
      <div class="rev-head" v-reveal>
        <div>
          <p class="kicker">{{ t.reviews.kicker }}</p>
          <h2>{{ t.reviews.title }}</h2>
        </div>
        <div class="score"><b>{{ site.rating }}</b><div><span class="stars">★★★★★</span><small>{{ site.reviews }} {{ t.reviews.count }}</small></div></div>
      </div>
      <div class="rev-grid">
        <blockquote v-for="r in reviews" :key="r.n" class="rev" :dir="r.dir" v-reveal>
          <span class="stars">★★★★★</span>
          <p>{{ r.q }}</p>
          <footer><span class="av">{{ r.n.charAt(0) }}</span><b>{{ r.n }}</b></footer>
        </blockquote>
      </div>
      <p class="dr-note" v-reveal>💜 {{ t.reviews.drNote }}</p>
      <p class="rev-note">{{ t.reviews.note }}</p>
    </div>
  </section>
</template>
