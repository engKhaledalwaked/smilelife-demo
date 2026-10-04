// البيانات من صفحة العيادة على خرائط Google
export const site = {
  whatsapp: '966535264454',
  phone: { tel: '+966535264454', label: '053 526 4454' },
  rating: '4.5',
  reviews: '511',
  maps: 'https://www.google.com/maps/search/?api=1&query=24.5918216,46.6745658',
  mapEmbed: 'https://www.google.com/maps?q=24.5918216,46.6745658&z=17&output=embed',
}
export const img = (p) => `/img/${p}`
export const wa = (text) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
