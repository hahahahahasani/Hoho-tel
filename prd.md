# Product Requirements Document (PRD)

## Website Booking Hotel & Staycation (Frontend Only)

### 1. Informasi Proyek

**Nama Proyek:** Horizone - Hotel & Staycation Booking Landing Page

**Tujuan Proyek:**
Membangun website frontend modern untuk platform pencarian dan pemesanan hotel/staycation berdasarkan desain referensi yang diberikan. Website berfungsi sebagai landing page dan showcase UI tanpa integrasi backend.

**Target Pengguna:**

* Wisatawan domestik
* Wisatawan internasional
* Pengguna yang mencari hotel, villa, resort, apartemen, dan cottage

---

# 2. Tech Stack

### Frontend

* Vue.js 3 (Composition API)
* Vue Router
* Vanilla CSS
* Vite

### Tidak Digunakan

* Backend
* Database
* Tailwind CSS
* Bootstrap
* Vuetify
* API eksternal

---

# 3. Struktur Halaman

Website hanya terdiri dari 1 halaman utama (Landing Page).

```text
Home
│
├── Navbar
├── Hero Section
├── Search Booking Form
├── Destination Categories
├── Trending Hotels
├── Most Visited Hotels
├── Promo Section
├── Partners Section
├── Explore More Section
└── Footer
```

---

# 4. Layout Responsif

### Desktop

* Lebar container: 1440px
* Content max-width: 1280px

### Tablet

* Breakpoint: 768px

### Mobile

* Breakpoint: 480px

### Responsive Rules

Desktop:

```text
4 Card per Row
```

Tablet:

```text
2 Card per Row
```

Mobile:

```text
1 Card per Row
```

---

# 5. Komponen dan Requirement

---

## 5.1 Navbar

### Deskripsi

Navbar berada di bagian atas dengan background transparan di atas hero image.

### Komponen

Logo:

```text
Horizone
```

Menu:

* Hotel
* Flight
* Train
* Travel
* Car Rental

Search Bar:

```text
Search destination...
```

Language Switcher:

```text
EN
```

Auth Buttons:

* Login
* Sign Up

### Fungsionalitas

* Menu hover effect
* Search input focus effect
* Sticky navbar saat scroll

---

## 5.2 Hero Section

### Deskripsi

Banner utama dengan background hotel/villa.

### Konten

Heading:

```text
Find Your Best Staycation
```

Background:

* Full width image
* Overlay gelap 30%

### Requirement

* Tinggi section: 500px
* Background cover
* Text berada di kiri bawah

---

## 5.3 Search Booking Form

### Deskripsi

Form pencarian properti yang menempel pada bagian bawah hero.

### Fields

#### Location

Placeholder:

```text
Find location
```

#### Check-in & Check-out

Placeholder:

```text
Add dates
```

#### Guests and Rooms

Placeholder:

```text
1 guest, 1 room
```

#### Search Button

```text
Search →
```

### Fungsionalitas

Frontend only:

Saat tombol search ditekan:

```javascript
console.log(formData);
```

---

# 5.4 Property Categories

### Judul

```text
Discover your destination
```

### Subtitle

```text
Explore our range of property types for every traveler's preference.
```

### Card Categories

1. Villas
2. Apartments
3. Resorts
4. Cottages

### Isi Card

* Image
* Property Name
* Total Availability
* Arrow Button

### Hover Effect

* Scale image
* Shadow card meningkat

---

# 5.5 Trending Hotel Section

### Judul

```text
Top trending hotel in worldwide
```

### Filter Tabs

* France
* Japan
* Italy
* Australia

### Hotel Card

Data:

```javascript
{
  image: "",
  name: "",
  location: "",
  rating: 4.8,
  reviews: 1200,
  price: 150
}
```

### Komponen

* Favorite Icon
* Hotel Image
* Hotel Name
* Location
* Rating
* Reviews
* Price

### Layout

Desktop:

```text
4 cards
```

Tablet:

```text
2 cards
```

Mobile:

```text
1 card
```

---

# 5.6 Most Visited Hotel Section

### Judul

```text
Most visited hotel this month
```

### Card Structure

Sama seperti Trending Hotel.

### Data Source

Menggunakan data dummy JSON.

---

# 5.7 Promo Section

### Judul

```text
Get promo for a cheaper price
```

### Promo Cards

Promo 1

```text
50% Discount
```

Promo 2

```text
75% Discount
```

### Komponen

* Background Image
* Overlay Gradient
* Promo Text
* CTA Button

### Hover Effect

```css
transform: translateY(-5px);
```

---

# 5.8 Partner Logo Section

### Menampilkan Logo

* HelloSign
* DoorDash
* Coinbase
* Airtable
* Pendo
* Treehouse

### Requirement

* Horizontal Layout
* Responsive
* Grayscale Effect

### Hover

```css
filter: grayscale(0%);
```

---

# 5.9 Explore More Section

### Layout

2 Column Grid

#### Left

Card 1

```text
Explore more to get your comfort zone
```

Button:

```text
Booking Now
```

Card 2

```text
Hotel Available
1,764,980
```

#### Right

Large Banner

```text
Beyond accommodation, creating memories of a lifetime
```

### Responsif

Desktop:

```text
2 Column
```

Mobile:

```text
1 Column
```

---

# 5.10 Footer

### Section

#### Brand Info

* Logo
* Description

#### About

* About Us
* Blog
* Career

#### Support

* Contact Us
* Return
* FAQ

#### Newsletter

Input Email

Button:

```text
Subscribe
```

#### Social Media

* Instagram
* X
* Facebook
* Discord
* TikTok

### Bottom Footer

```text
©2024 Horizone. All rights reserved.
```

Links:

* Privacy Policy
* Terms of Service

---

# 6. Struktur Folder

```text
src/
│
├── assets/
│   ├── images/
│   └── icons/
│
├── components/
│   ├── Navbar.vue
│   ├── HeroSection.vue
│   ├── SearchForm.vue
│   ├── CategoryCard.vue
│   ├── HotelCard.vue
│   ├── PromoCard.vue
│   ├── PartnerLogos.vue
│   └── Footer.vue
│
├── data/
│   ├── hotels.js
│   ├── promotions.js
│   └── categories.js
│
├── views/
│   └── HomeView.vue
│
├── router/
│   └── index.js
│
├── App.vue
│
└── main.js
```

---

# 7. Dummy Data Requirement

### categories.js

```javascript
export default [
  {
    id: 1,
    title: "Villas",
    available: 12984,
    image: "/images/villa.jpg"
  }
]
```

### hotels.js

Minimal:

```javascript
16 hotel data
```

### promotions.js

Minimal:

```javascript
4 promo data
```

---

# 8. Design System

## Color Palette

Primary

```css
#111111
```

Secondary

```css
#FFFFFF
```

Background

```css
#F8F8F8
```

Text Secondary

```css
#6B7280
```

Border

```css
#E5E7EB
```

Success

```css
#16A34A
```

---

## Typography

### Font

```text
Poppins
```

Fallback:

```text
sans-serif
```

### Heading

```css
font-size: 48px;
font-weight: 700;
```

### Section Title

```css
font-size: 32px;
font-weight: 600;
```

### Body

```css
font-size: 16px;
font-weight: 400;
```

---

# 9. Animasi

### Fade In

Saat section masuk viewport:

```css
opacity: 0;
transform: translateY(30px);
```

Menjadi:

```css
opacity: 1;
transform: translateY(0);
```

Durasi:

```css
0.5s ease
```

---

# 10. Non Functional Requirements

### Performance

* Lighthouse Score ≥ 90
* Lazy Load Image
* Responsive Image

### Browser Support

* Chrome
* Edge
* Firefox
* Safari

### Accessibility

* Semantic HTML
* Alt Text untuk semua gambar
* Keyboard Navigation

---

# 11. Deliverables

### Output yang Harus Dikembangkan

* Landing Page sesuai desain referensi
* Vue.js 3 Component Based Architecture
* Vanilla CSS tanpa framework
* Responsive Desktop, Tablet, Mobile
* Dummy Data JSON
* Reusable Components
* Clean Code Structure
* Animasi dan Hover Effect
* Tanpa Backend dan Tanpa API
