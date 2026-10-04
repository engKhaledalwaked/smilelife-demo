import { ref, computed, watchEffect } from 'vue'

const saved = (() => { try { return localStorage.getItem('slp-lang') } catch { return null } })()
export const lang = ref(saved === 'en' ? 'en' : 'ar')
watchEffect(() => {
  document.documentElement.lang = lang.value
  document.documentElement.dir = lang.value === 'ar' ? 'rtl' : 'ltr'
  try { localStorage.setItem('slp-lang', lang.value) } catch {}
})
export const toggleLang = () => { lang.value = lang.value === 'ar' ? 'en' : 'ar' }

const dict = {
  ar: {
    ribbon: 'نسخة عرض تجريبية — مُعدّة لعيادة بسمة الحياة البيطرية',
    brand: 'بسمة الحياة', brandSub: 'عيادة بيطرية', brandEn: 'Smile Life Pet Clinic',
    nav: { services: 'خدماتنا', clinic: 'العيادة', reviews: 'آراء العملاء', hours: 'المواعيد', book: 'احجز موعد' },
    hero: {
      kicker: 'عيادة بيطرية · السويدي، الرياض',
      title1: 'لأن كل أليف',
      title2: 'يستحق ابتسامة',
      lead: 'كشف وتشخيص، عمليات وتعقيم، رعاية وعلاج وريدي، حلاقة وتجميل، ومتجر أغذية — بفريق بيطري يعامل أليفك كأنه من العائلة.',
      cta1: 'احجز موعد عبر واتساب', cta2: 'اتصل الآن',
      open: 'مفتوحون يومياً حتى ١٢ منتصف الليل',
      rating: 'مراجعة على Google',
      offer: 'خصم 20% على التعقيم',
    },
    offer: {
      tag: 'عرض العيادة',
      title: 'خصم 20% على عمليات التعقيم والإخصاء',
      p: 'تعقيم أليفك يحميه من أمراض كثيرة ويطيل عمره. احجز موعد العملية واسأل الطبيب عن التحضيرات قبلها.',
      cta: 'احجز موعد العملية',
      msg: 'مرحباً، أرغب بحجز عملية تعقيم/إخصاء مع خصم 20%. نوع الأليف: ',
    },
    services: {
      kicker: 'خدماتنا',
      title: 'كل ما يحتاجه أليفك… في مكان واحد',
      items: [
        { k: 'exam', t: 'الكشف والتشخيص', d: 'فحص دقيق وتشخيص سريع للحالة، مع خطة علاج واضحة يشرحها لك الطبيب.' },
        { k: 'surgery', t: 'العمليات والتعقيم', d: 'عمليات التعقيم والإخصاء والجراحات البسيطة في غرفة عمليات مجهّزة.' },
        { k: 'iv', t: 'الرعاية والعلاج الوريدي', d: 'تغذية ومحاليل وريدية ومتابعة للحالات التي تحتاج رعاية خاصة.' },
        { k: 'vaccine', t: 'التطعيمات والمتابعة', d: 'جدول تطعيمات وفحوصات دورية تحمي أليفك من الأمراض الشائعة.' },
        { k: 'groom', t: 'الحلاقة والتجميل', d: 'غرفة حلاقة واستحمام مستقلة، وتسريح وقص بلطف وصبر.' },
        { k: 'shop', t: 'متجر الأغذية والمستلزمات', d: 'أغذية علاجية ويومية، مكافآت، وألعاب ومستلزمات العناية.' },
      ],
    },
    patients: { kicker: 'مرضانا الصغار', title: 'ابتساماتهم بعد العلاج هي أجمل تقييم' },
    clinic: {
      kicker: 'داخل العيادة',
      title: 'نظيفة، هادئة، ومصمّمة لراحة أليفك',
      p: 'صالة انتظار مريحة، غرفة حلاقة مستقلة بزجاج تراه من الخارج، ومتجر صغير لأغذية وأدوات العناية.',
      labels: { reception: 'الاستقبال', 'waiting-chairs': 'صالة الانتظار', 'grooming-room': 'غرفة الحلاقة', 'pet-shop': 'المتجر', treats: 'المكافآت والألعاب', 'front-desk': 'مكتب الاستقبال' },
    },
    reviews: {
      kicker: 'آراء العملاء',
      title: 'يحبوننا… ونحب أليفاتهم',
      count: 'مراجعة على Google',
      drNote: 'اسم «د. إسلام» من أكثر ما يتكرر في مراجعات العيادة على Google.',
      note: 'مراجعات حقيقية من صفحة العيادة على خرائط Google.',
    },
    book: {
      kicker: 'احجز موعد',
      title: 'احجز لأليفك خلال دقيقة',
      sub: 'املأ البيانات وسيفتح واتساب برسالة جاهزة للعيادة. للحالات الطارئة اتصل مباشرة.',
      owner: 'اسمك', phone: 'رقم الجوال', pet: 'نوع الأليف', petName: 'اسم الأليف (اختياري)', age: 'العمر التقريبي', service: 'الخدمة', when: 'الوقت المفضّل', issue: 'وصف الحالة أو الأعراض',
      pets: ['قط', 'كلب', 'طائر', 'أرنب', 'أخرى'],
      whens: ['صباحاً', 'مساءً', 'بعد منتصف الليل'],
      urgent: 'حالة طارئة',
      send: 'أرسل الطلب عبر واتساب',
      required: 'الرجاء كتابة الاسم ورقم الجوال.',
      msg: { hello: 'مرحباً عيادة بسمة الحياة، أرغب بحجز موعد', owner: 'الاسم', phone: 'الجوال', pet: 'نوع الأليف', petName: 'اسم الأليف', age: 'العمر', service: 'الخدمة', when: 'الوقت', issue: 'الحالة', urgent: '⚠️ حالة طارئة' },
    },
    hours: {
      kicker: 'مواعيد العمل',
      title: 'نسهر لأجل أليفك',
      days: [
        { d: 'السبت', h: '٩:٠٠ ص – ١٢:٠٠ ص' },
        { d: 'الأحد', h: '١٢:٠٠ – ٦:٠٠ ص · ٤:٠٠ م – ١٢:٠٠ ص' },
        { d: 'الاثنين', h: '٩:٠٠ ص – ١٢:٠٠ ص' },
        { d: 'الثلاثاء – الخميس', h: '١٢:٠٠ – ٦:٠٠ ص · ٩:٠٠ ص – ١٢:٠٠ ص' },
        { d: 'الجمعة', h: '٤:٠٠ م – ١٢:٠٠ ص' },
      ],
      addr: 'شارع السويدي العام، حي السويدي، الرياض 12785',
      dir: 'الاتجاهات على الخريطة', call: 'اتصال',
    },
    footer: { tag: 'Every pet has a smile — لكل أليف ابتسامة', rights: 'جميع الحقوق محفوظة', demo: 'نسخة عرض تجريبية' },
    sticky: { call: 'اتصال', book: 'احجز عبر واتساب' },
    close: 'إغلاق',
  },
  en: {
    ribbon: 'Demo preview — prepared for Smile Life Pet Clinic',
    brand: 'Smile Life', brandSub: 'Pet Clinic', brandEn: 'عيادة بسمة الحياة البيطرية',
    nav: { services: 'Services', clinic: 'The clinic', reviews: 'Reviews', hours: 'Hours', book: 'Book a visit' },
    hero: {
      kicker: 'Veterinary clinic · As Suwaidi, Riyadh',
      title1: 'Every pet',
      title2: 'has a smile',
      lead: 'Check-ups and diagnosis, surgery and spay/neuter, IV care, grooming and a pet-food shop — with a vet team that treats your pet like family.',
      cta1: 'Book on WhatsApp', cta2: 'Call now',
      open: 'Open daily until midnight',
      rating: 'Google reviews',
      offer: '20% off spay & neuter',
    },
    offer: {
      tag: 'Clinic offer',
      title: '20% off spay & neuter surgery',
      p: 'Spaying or neutering protects your pet from many diseases and helps them live longer. Book the surgery and ask the vet how to prepare.',
      cta: 'Book the surgery',
      msg: 'Hello, I would like to book a spay/neuter surgery with the 20% offer. Pet type: ',
    },
    services: {
      kicker: 'Services',
      title: 'Everything your pet needs — under one roof',
      items: [
        { k: 'exam', t: 'Check-ups & diagnosis', d: 'Careful examination, fast diagnosis and a clear treatment plan explained by the vet.' },
        { k: 'surgery', t: 'Surgery & spay/neuter', d: 'Spay, neuter and minor surgery in an equipped operating room.' },
        { k: 'iv', t: 'Care & IV therapy', d: 'IV fluids, nutrition and monitoring for pets that need extra care.' },
        { k: 'vaccine', t: 'Vaccines & follow-ups', d: 'Vaccination schedules and regular check-ups against common diseases.' },
        { k: 'groom', t: 'Grooming', d: 'A separate grooming and bathing room — gentle, patient trims and brushing.' },
        { k: 'shop', t: 'Food & supplies', d: 'Prescription and everyday food, treats, toys and care products.' },
      ],
    },
    patients: { kicker: 'Our little patients', title: 'Their smiles after treatment are our best review' },
    clinic: {
      kicker: 'Inside the clinic',
      title: 'Clean, calm and designed for your pet’s comfort',
      p: 'A comfortable waiting lounge, a separate glass-walled grooming room, and a small shop for food and care products.',
      labels: { reception: 'Reception', 'waiting-chairs': 'Waiting lounge', 'grooming-room': 'Grooming room', 'pet-shop': 'Shop', treats: 'Treats & toys', 'front-desk': 'Front desk' },
    },
    reviews: {
      kicker: 'Reviews',
      title: 'They love us — we love their pets',
      count: 'Google reviews',
      drNote: '“Dr. Islam” is one of the names mentioned most often in the clinic’s Google reviews.',
      note: 'Real reviews from the clinic’s Google Maps page.',
    },
    book: {
      kicker: 'Book a visit',
      title: 'Book for your pet in a minute',
      sub: 'Fill in the details and WhatsApp opens with a ready message to the clinic. For emergencies, call directly.',
      owner: 'Your name', phone: 'Mobile', pet: 'Pet type', petName: 'Pet’s name (optional)', age: 'Approx. age', service: 'Service', when: 'Preferred time', issue: 'Describe the case or symptoms',
      pets: ['Cat', 'Dog', 'Bird', 'Rabbit', 'Other'],
      whens: ['Morning', 'Evening', 'After midnight'],
      urgent: 'Emergency',
      send: 'Send request on WhatsApp',
      required: 'Please enter your name and mobile number.',
      msg: { hello: 'Hello Smile Life Pet Clinic, I would like to book a visit', owner: 'Name', phone: 'Mobile', pet: 'Pet', petName: 'Pet name', age: 'Age', service: 'Service', when: 'Time', issue: 'Case', urgent: '⚠️ Emergency' },
    },
    hours: {
      kicker: 'Opening hours',
      title: 'Up late for your pet',
      days: [
        { d: 'Saturday', h: '9:00 AM – 12:00 AM' },
        { d: 'Sunday', h: '12:00 – 6:00 AM · 4:00 PM – 12:00 AM' },
        { d: 'Monday', h: '9:00 AM – 12:00 AM' },
        { d: 'Tuesday – Thursday', h: '12:00 – 6:00 AM · 9:00 AM – 12:00 AM' },
        { d: 'Friday', h: '4:00 PM – 12:00 AM' },
      ],
      addr: 'As Suwaidi Al Aam St., As Suwaidi, Riyadh 12785',
      dir: 'Directions', call: 'Call',
    },
    footer: { tag: 'Every pet has a smile', rights: 'All rights reserved', demo: 'Demo preview' },
    sticky: { call: 'Call', book: 'Book on WhatsApp' },
    close: 'Close',
  },
}
export const t = computed(() => dict[lang.value])

export const reviews = [
  { n: 'A', dir: 'rtl', q: 'جبت قطي وهو يعاني من التهاب بالأذن، والدكتور تعامل مع الحالة باحترافية وشخصها بسرعة، ووصف العلاج المناسب. الحمد لله تحسن بشكل واضح.' },
  { n: 'الجوهره الدعيج', dir: 'rtl', q: 'تجربة ممتازة جداً وأنصح بالعيادة بكل ثقة. سويت عملية تعقيم لقطتي وكانت ناجحة ولله الحمد، والدكتور إسلام كان محترف ومتعاون وشرح كل التفاصيل بكل وضوح واهتمام.' },
  { n: 'S I', dir: 'ltr', q: 'The doctor was extremely courteous and professional, she carefully analyzed my pet’s condition, and the treatment was very effective. I’m completely satisfied and would definitely recommend her.' },
]
