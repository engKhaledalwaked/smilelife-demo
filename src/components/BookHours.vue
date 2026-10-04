<script setup>
import { reactive, ref } from 'vue'
import { t } from '../i18n'
import { site, wa } from '../site'

const f = reactive({ owner: '', phone: '', pet: 0, petName: '', age: '', service: 0, when: -1, issue: '', urgent: false })
const err = ref('')
const send = () => {
  if (!f.owner.trim() || !f.phone.trim()) { err.value = t.value.book.required; return }
  err.value = ''
  const b = t.value.book, m = b.msg
  const lines = [
    m.hello,
    f.urgent ? m.urgent : null,
    `${m.owner}: ${f.owner.trim()}`,
    `${m.phone}: ${f.phone.trim()}`,
    `${m.pet}: ${b.pets[f.pet]}`,
    f.petName.trim() ? `${m.petName}: ${f.petName.trim()}` : null,
    f.age.trim() ? `${m.age}: ${f.age.trim()}` : null,
    `${m.service}: ${t.value.services.items[f.service].t}`,
    f.when >= 0 ? `${m.when}: ${b.whens[f.when]}` : null,
    f.issue.trim() ? `${m.issue}: ${f.issue.trim()}` : null,
  ].filter(Boolean)
  window.open(wa(lines.join('\n')), '_blank', 'noopener')
}
</script>

<template>
  <section class="section book" id="book">
    <div class="container book-grid">
      <div class="book-copy" v-reveal>
        <p class="kicker">{{ t.book.kicker }}</p>
        <h2>{{ t.book.title }}</h2>
        <p class="muted">{{ t.book.sub }}</p>
        <a class="call-big" :href="`tel:${site.phone.tel}`"><span>☎</span><b dir="ltr">{{ site.phone.label }}</b></a>
      </div>
      <form class="form" novalidate @submit.prevent="send" v-reveal>
        <div class="pets">
          <button v-for="(p, i) in t.book.pets" :key="p" type="button" :class="{ on: f.pet === i }" @click="f.pet = i">{{ p }}</button>
        </div>
        <div class="row">
          <label><span>{{ t.book.owner }}</span><input v-model="f.owner" autocomplete="name" /></label>
          <label><span>{{ t.book.phone }}</span><input v-model="f.phone" type="tel" dir="ltr" autocomplete="tel" /></label>
        </div>
        <div class="row">
          <label><span>{{ t.book.petName }}</span><input v-model="f.petName" /></label>
          <label><span>{{ t.book.age }}</span><input v-model="f.age" /></label>
        </div>
        <div class="row">
          <label><span>{{ t.book.service }}</span>
            <select v-model.number="f.service"><option v-for="(s, i) in t.services.items" :key="s.k" :value="i">{{ s.t }}</option></select>
          </label>
          <div class="lbl"><span>{{ t.book.when }}</span>
            <div class="seg"><button v-for="(w, i) in t.book.whens" :key="w" type="button" :class="{ on: f.when === i }" @click="f.when = f.when === i ? -1 : i">{{ w }}</button></div>
          </div>
        </div>
        <label><span>{{ t.book.issue }}</span><textarea v-model="f.issue" rows="3"></textarea></label>
        <label class="urgent"><input type="checkbox" v-model="f.urgent" /><span>{{ t.book.urgent }}</span></label>
        <p v-if="err" class="err" role="alert">{{ err }}</p>
        <button class="btn btn-pink block" type="submit">{{ t.book.send }}</button>
      </form>
    </div>
  </section>

  <section class="section hours" id="hours">
    <div class="container hours-grid">
      <div class="hours-card" v-reveal>
        <p class="kicker">{{ t.hours.kicker }}</p>
        <h2>{{ t.hours.title }}</h2>
        <ul>
          <li v-for="d in t.hours.days" :key="d.d"><b>{{ d.d }}</b><span>{{ d.h }}</span></li>
        </ul>
        <p class="addr">📍 {{ t.hours.addr }}</p>
        <div class="ctas">
          <a class="btn btn-pink" :href="site.maps" target="_blank" rel="noopener">{{ t.hours.dir }}</a>
          <a class="btn btn-glass" :href="`tel:${site.phone.tel}`">{{ t.hours.call }}</a>
        </div>
      </div>
      <div class="map" v-reveal>
        <iframe :src="site.mapEmbed" title="Map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>
</template>
