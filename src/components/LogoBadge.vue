<script setup>
defineProps({ size: { type: Number, default: 56 }, light: Boolean })
const uid = Math.random().toString(36).slice(2, 7)
</script>

<template>
  <!-- شعار العيادة: ختم دائري "SMILE LIFE PET CLINIC — EVERY PET HAS A SMILE" مع قط وكلب وقلب -->
  <svg class="badge-logo" :class="{ light }" :width="size" :height="size" viewBox="0 0 200 200" aria-hidden="true">
    <defs>
      <path :id="'top' + uid" d="M30 100 A70 70 0 0 1 170 100" />
      <path :id="'bot' + uid" d="M36 104 A64 64 0 0 0 164 104" />
    </defs>
    <circle cx="100" cy="100" r="96" class="ring" />
    <circle cx="100" cy="100" r="54" class="inner" />
    <text class="lt"><textPath :href="'#top' + uid" startOffset="50%" text-anchor="middle">SMILE LIFE PET CLINIC</textPath></text>
    <text class="lt sm"><textPath :href="'#bot' + uid" startOffset="50%" text-anchor="middle">EVERY PET HAS A SMILE</textPath></text>
    <g class="pets">
      <!-- كلب جالس -->
      <path d="M72 138c-2-14 1-26 8-33l-4-12c-1-4 2-7 6-6l7 3c4-3 9-3 13 0l2 8c-3 6-4 12-3 18 1 8 6 14 6 22z" />
      <!-- قط جالس -->
      <path class="cat" d="M104 138c-1-10 1-19 6-25-3-4-4-9-3-14l-1-9 7 5c3-1 7-1 10 1l6-6 1 9c2 4 2 9-1 13 6 7 8 16 7 26z" />
    </g>
    <path class="heart" d="M117 72c-3-6-12-4-11 3 1 5 11 11 11 11s10-6 11-11c1-7-8-9-11-3z" />
    <circle cx="44" cy="104" r="3" class="dot" /><circle cx="156" cy="104" r="3" class="dot" />
  </svg>
</template>

<style scoped>
.ring { fill: #fff; stroke: #d9cfe2; stroke-width: 3; }
.inner { fill: #f6f1fa; stroke: #e2d6ec; stroke-width: 2; }
.lt { font: 700 15.5px 'Rubik', sans-serif; letter-spacing: 2.2px; fill: #5b5161; }
.lt.sm { font-size: 12.5px; letter-spacing: 2px; }
.pets path { fill: #2c2433; }
.pets .cat { fill: #5c4b67; }
.heart { fill: #e23d9b; }
.dot { fill: #c9b9d6; }
.light .ring { fill: rgba(255, 255, 255, .06); stroke: rgba(255, 255, 255, .35); }
.light .inner { fill: rgba(255, 255, 255, .1); stroke: rgba(255, 255, 255, .25); }
.light .lt { fill: rgba(255, 255, 255, .85); }
.light .pets path { fill: #fff; }
.light .pets .cat { fill: #e6d8f2; }
</style>
