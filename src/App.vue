<script setup>
import { t } from './i18n'
import { site, wa } from './site'
import TopNav from './components/TopNav.vue'
import HeroBlock from './components/HeroBlock.vue'
import ServicesBlock from './components/ServicesBlock.vue'
import GalleryBlocks from './components/GalleryBlocks.vue'
import ReviewsBlock from './components/ReviewsBlock.vue'
import BookHours from './components/BookHours.vue'
import LogoBadge from './components/LogoBadge.vue'
const year = new Date().getFullYear()
</script>

<template>
  <!-- نسخة عرض: احذف هذا الشريط عند الإطلاق الرسمي -->
  <div class="demo-ribbon">{{ t.ribbon }}</div>
  <TopNav />
  <main>
    <HeroBlock />
    <ServicesBlock />
    <GalleryBlocks />
    <ReviewsBlock />
    <BookHours />
  </main>
  <footer class="footer">
    <div class="container foot">
      <LogoBadge :size="96" light />
      <b>{{ t.brand }} · {{ t.brandSub }}</b>
      <span>{{ t.brandEn }}</span>
      <p>{{ t.footer.tag }}</p>
      <a :href="`tel:${site.phone.tel}`" dir="ltr">{{ site.phone.label }}</a>
      <small>© {{ year }} {{ t.footer.rights }} · <em>{{ t.footer.demo }}</em></small>
    </div>
  </footer>
  <div class="sticky">
    <a :href="`tel:${site.phone.tel}`">{{ t.sticky.call }}</a>
    <a :href="wa(t.book.msg.hello)" target="_blank" rel="noopener" class="main">{{ t.sticky.book }}</a>
  </div>
</template>
