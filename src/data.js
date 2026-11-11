// All site content lives here so it can be edited without touching layout code.

export const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`

export const contact = {
  email: 'info@madeyglobal.com',
  phone: '+234 815 555 6963',
  phoneHref: 'tel:+2348155556963',
  whatsapp: 'https://wa.me/2348155556963',
  instagram: 'https://www.instagram.com/madeyglobaltravels',
  instagramHandle: '@madeyglobaltravels',
  address: ['75, Ogunnusi Road', 'Ikeja', 'Lagos State, Nigeria'],
  mapQuery: '75 Ogunnusi Road, Ikeja, Lagos, Nigeria',
}

export const waLink = (text) =>
  `${contact.whatsapp}?text=${encodeURIComponent(text)}`

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export const coreServices = [
  'Flight Bookings',
  'Visa Processing',
  'Corporate Travel Management',
  'Specialised Tour Packages',
  'Hotel Reservations',
  'Travel Planning & Consulting',
]

export const stats = [
  { value: '120+', label: 'Destinations' },
  { value: '6K', label: 'Happy travelers' },
  { value: '11+', label: 'Years experience' },
]

export const destinations = [
  { name: 'Santorini, Greece', tags: ['dramatic cliffs', 'modern luxury', 'the Aegean Sea'], image: '1580502304784-8985b7eb7260' },
  { name: 'Kyoto, Japan', tags: ['ancient temples', 'cherry blossoms', 'zen gardens'], image: '1493976040374-85c8e12f0c0e' },
  { name: 'African Safari', tags: ['wildlife', 'open savanna', 'golden sunsets'], image: '1577971132997-c10be9372519' },
  { name: 'Maldives', tags: ['overwater villas', 'crystal lagoons', 'coral reefs'], image: '1573843981267-be1999ff37cd' },
  { name: 'Patagonia', tags: ['glaciers', 'end of the world', 'wild trekking'], image: '1546569397-ab326af881f5' },
]

export const testimonials = [
  { name: 'Sarah L.', badge: 'Top customer', trip: 'Maldives Luxury Tour', image: '1512100356356-de1b84283e18', quote: 'Our trip to the Maldives was nothing short of magical. The attention to detail, from our private villa to the personalized excursions, was impeccable. Every single day felt like a dream.' },
  { name: 'James R.', badge: 'Verified traveler', trip: 'Kyoto Cultural Immersion', image: '1473625247510-8ceb1760943f', quote: 'Kyoto in cherry blossom season — booked on a whim, executed to perfection. The team handled every arrangement and even surprised us with a private tea ceremony at dusk. Absolutely priceless.' },
  { name: 'Amara O.', badge: 'Repeat client', trip: 'African Safari Expedition', image: '1600880292203-757bb62b4baf', quote: "I've traveled with many agencies but nothing compares to this. Our African safari was raw, wild, and deeply moving. The guides were knowledgeable and genuinely passionate about conservation." },
  { name: 'Lucas M.', badge: 'Top customer', trip: 'Patagonia Adventure', image: '1496115965489-21be7e6e59a0', quote: "Patagonia was on my bucket list for 10 years. Madey Global made it happen seamlessly — the logistics across glaciers and remote trails were handled with precision I didn't think possible." },
  { name: 'Priya K.', badge: 'Verified traveler', trip: 'Santorini Getaway', image: '1520466809213-7b9a56adcd45', quote: 'From the moment I enquired to the day I returned home, the service was five-star throughout. Santorini was breathtaking and our itinerary struck the perfect balance of leisure and adventure.' },
]

export const shortTestimonials = [
  { name: 'Sarah L.', trip: 'Maldives Luxury Tour', quote: 'Absolutely seamless from start to finish. The team thought of everything we didn’t even know to ask for.' },
  { name: 'James R.', trip: 'Kyoto Cultural Immersion', quote: 'The most meaningful travel experience of my life. Being welcomed into a local family home was extraordinary.' },
  { name: 'Amara O.', trip: 'African Safari Expedition', quote: 'Everything was handled perfectly. The guides were world-class and the camps were beyond anything I imagined.' },
  { name: 'Lucas M.', trip: 'Patagonia Adventure', quote: 'I’ve travelled with many agencies — this is on another level entirely. The attention to detail is unreal.' },
]

export const services = [
  {
    title: 'Luxury Tours', badge: 'Most Popular', tagline: 'Elevated in every detail', duration: '7 – 21 days', image: '1559385301-0187cb6eff46',
    desc: 'Experience the pinnacle of travel with our bespoke luxury tours. Private jets, five-star resorts, Michelin-starred dining, and dedicated concierge service from departure to return. Every moment is crafted to exceed expectation.',
    features: ['Private villa accommodation', 'Dedicated personal concierge', 'Exclusive access experiences', 'Michelin-starred dining reservations'],
  },
  {
    title: 'Group Travel', badge: 'Best Value', tagline: 'Shared adventures, lasting bonds', duration: '5 – 14 days', image: '1767000295378-3aa6dece5a80',
    desc: 'Perfect for families, friend groups, or corporate retreats. Our group travel specialists coordinate every logistical detail — accommodation blocks, group activities, and custom itineraries — so you can focus on the experience.',
    features: ['Groups from 8 to 80 travellers', 'Dedicated group travel coordinator', 'Custom group itineraries', 'Negotiated group rates'],
  },
  {
    title: 'Honeymoon Packages', badge: "Editor's Pick", tagline: 'Begin forever, beautifully', duration: '7 – 14 days', image: '1648538923547-074724ca7a18',
    desc: "Your love story deserves a perfect setting. We curate romantic escapes with champagne arrivals, couples' spa treatments, sunset cruises, and private beach dinners — making every hour of your honeymoon genuinely magical.",
    features: ['Romance room setups on arrival', "Couples' spa and wellness experiences", 'Private beach or rooftop dinners', 'Sunset sailing or boat excursions'],
  },
  {
    title: 'Adventure Expeditions', tagline: 'Push past the horizon', duration: '10 – 28 days', image: '1533090118370-02b893cdf4f2',
    desc: 'For the bold and the curious. Trek Patagonian glaciers, dive the Great Barrier Reef, summit Kilimanjaro, or traverse the Sahara. Our adventure specialists ensure every expedition is safe, expertly guided, and deeply exhilarating.',
    features: ['Expert certified guides', 'Professional safety equipment', 'Acclimatization itineraries', 'Emergency evacuation cover'],
  },
  {
    title: 'Corporate Travel', tagline: 'Business travel, reimagined', duration: 'Flexible', image: '1555789766-10dfb507a0e4',
    desc: 'We handle end-to-end corporate travel management — from multi-city conference logistics to executive retreats. Our corporate desk operates around the clock, managing bookings, changes, and reporting in real time.',
    features: ['Dedicated corporate travel desk', '24/7 emergency support line', 'Consolidated travel reporting', 'Policy-compliant booking tools'],
  },
  {
    title: 'Cultural Immersion', tagline: 'Travel deeper, not just further', duration: '7 – 21 days', image: '1533551268962-824e232f7ee1',
    desc: 'Go beyond tourist trails. Our cultural immersion programmes place you inside local communities — cooking with families in Oaxaca, weaving with artisans in Bhutan, or studying calligraphy in Kyoto. Authentic, respectful, transformative.',
    features: ['Local family homestays', 'Language crash-courses', 'Artisan workshop sessions', 'Local market food tours'],
  },
]

export const signatureFeatures = [
  'Private island resorts', 'Helicopter transfers', 'Chef-prepared in-villa dining',
  'Exclusive museum after-hours', 'Yacht charters', 'Personal photographer',
]

export const process = [
  { title: 'Consultation', text: 'We begin with a free discovery call — understanding your travel style, must-haves, budget, and dates.' },
  { title: 'Bespoke Design', text: 'Our specialists craft a fully personalised itinerary within 48 hours — tailored to every preference you share.' },
  { title: 'Refinement', text: 'We review the proposal together and refine until every detail is exactly right — no pressure, no rush.' },
  { title: 'Confirmation', text: 'Secure your journey with a simple deposit. We handle all bookings, visas, and logistics end-to-end.' },
  { title: 'Experience', text: 'Travel with complete peace of mind. Our 24/7 support team is one message away throughout your entire trip.' },
]

export const serviceDestinations = [
  { name: 'Santorini, Greece', image: '1613395877344-13d4a8e0d49e' },
  { name: 'Kyoto, Japan', image: '1545569341-9eb8b30979d9' },
  { name: 'Maldives', image: '1576158831003-d41033ec31fd' },
  { name: 'Patagonia, Chile', image: '1558517286-8a9cb0b8c793' },
  { name: 'Amalfi Coast, Italy', image: '1664565251448-db0491e6d4f3' },
  { name: 'Serengeti, Tanzania', image: '1728891386152-8cf2f86add34' },
]

const cld = (path) => `https://res.cloudinary.com/dt6udjm4i/image/upload/${path}`

export const gallery = [
  { cat: 'Destinations', title: 'Golden Sands of Santorini', place: 'Greece', src: cld('v1775952597/santorini_wee1gd.jpg') },
  { cat: 'Destinations', title: 'Tokyo Skyline at Dusk', place: 'Japan', src: cld('v1775952596/Tokyo_Skyline_at_Dusk_dex9km.avif') },
  { cat: 'Destinations', title: 'Majestic Peaks of the Alps', place: 'Switzerland', src: cld('v1775952595/Majestic_Peaks_of_the_Alps_bdngt1.avif') },
  { cat: 'Destinations', title: 'Serengeti at Sunrise', place: 'Tanzania', src: cld('v1775952594/Serengeti_at_Sunrise_cr8fwp.avif') },
  { cat: 'Destinations', title: 'Turquoise Waters of Maldives', place: 'Maldives', src: cld('v1775952593/Turquoise_Waters_of_Maldives_mhtgko.avif') },
  { cat: 'Destinations', title: 'Ancient Streets of Marrakech', place: 'Morocco', src: cld('v1775952592/Ancient_Streets_of_Marrakech_lae3yt.avif') },
  { cat: 'Experiences', title: 'Private Yacht Charter', place: 'Mediterranean Sea', src: cld('v1775952592/Private_Yacht_Charter_chhyoq.jpg') },
  { cat: 'Experiences', title: 'Hot Air Balloon Over Cappadocia', place: 'Turkey', src: cld('v1775952591/Hot_Air_Balloon_Over_Cappadocia_dop6pz.avif') },
  { cat: 'Experiences', title: 'Safari Game Drive', place: 'Kenya', src: cld('v1775952589/Safari_Game_Drive_or7fxm.avif') },
  { cat: 'Experiences', title: 'Northern Lights Chase', place: 'Iceland', src: cld('v1775952589/Northern_Lights_Chase_xligu1.avif') },
  { cat: 'Experiences', title: 'Scuba Diving the Great Barrier Reef', place: 'Australia', src: cld('v1775952588/Scuba_Diving_the_Great_Barrier_Reef_xlhzsb.avif') },
  { cat: 'Client Moments', title: 'Family Adventures in Bali', place: 'Indonesia', src: cld('v1775952488/Family_Adventures_in_Bali_xfvobk.webp') },
  { cat: 'Client Moments', title: 'Honeymoon in the Seychelles', place: 'Seychelles', src: cld('v1775952487/Honeymoon_in_the_Seychelles_akaid0.jpg') },
  { cat: 'Client Moments', title: 'Corporate Retreat in Dubai', place: 'UAE', src: cld('v1775952488/Corporate_Retreat_in_Dubai_j3ss45.jpg') },
  { cat: 'Client Moments', title: 'Solo Journey Through South America', place: 'Peru', src: cld('v1775952488/Solo_Journey_Through_South_America_sadutl.webp') },
  { cat: 'Luxury', title: 'Overwater Villa', place: 'Bora Bora', src: cld('v1775952487/Overwater_Villa_vvpeh5.avif') },
  { cat: 'Luxury', title: 'Private Dining on the Cliff', place: 'Amalfi Coast, Italy', src: cld('v1775952487/Private_Dining_on_the_Cliff_pw2tia.avif') },
  { cat: 'Luxury', title: 'Five-Star Desert Resort', place: 'Dubai, UAE', src: cld('v1775952487/Five-Star_Desert_Resort_rn9lq4.avif') },
  { cat: 'Luxury', title: 'First Class Lounge', place: 'Singapore', src: cld('v1775952487/First_Class_Lounge_yqnmuf.avif') },
]

export const whyChoose = [
  'Personalized itineraries tailored',
  'Handpicked destinations and trusted partners',
  '24/7 on-trip assistance and travel support',
  'Sustainable and responsible travel practices',
  'Competitive pricing to fit your budget',
  'Passionate team of world explorers',
]

export const faqs = [
  { q: 'How far in advance should I book my trip?', a: 'We recommend booking at least 6–8 weeks in advance for standard itineraries. For peak seasons or complex multi-destination journeys, 3–6 months is ideal to secure the best options.' },
  { q: 'Can I customize my travel package?', a: "Absolutely — every itinerary we create is bespoke. Simply share your interests, dates, and budget and we'll craft a journey that's uniquely yours." },
  { q: 'What is your cancellation policy?', a: 'Cancellations made 30+ days before departure receive a full refund. Within 30 days, a partial refund applies depending on supplier terms. We always recommend travel insurance.' },
  { q: 'Do you offer group discounts?', a: 'Yes — groups of 8 or more travelers qualify for preferential pricing and dedicated group coordination support. Contact us for a custom group quote.' },
  { q: 'Do you handle visa and travel documentation?', a: 'We provide full guidance on visa requirements for your destination and can connect you with trusted visa services. Final responsibility rests with the traveler, but we make it simple.' },
]
