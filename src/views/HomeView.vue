<script setup>
import { ref, computed } from 'vue';
import HeroSection from '../components/HeroSection.vue';
import SearchForm from '../components/SearchForm.vue';
import CategoryCard from '../components/CategoryCard.vue';
import HotelCard from '../components/HotelCard.vue';
import PromoCard from '../components/PromoCard.vue';
import PartnerLogos from '../components/PartnerLogos.vue';
import HotelModal from '../components/HotelModal.vue';

import { categories } from '../data/categories';
import { hotels } from '../data/hotels';
import { promotions } from '../data/promotions';

const trendingTabs = ['France', 'Japan', 'Italy', 'Australia'];
const activeTab = ref('France');

const trendingHotels = computed(() => {
  return hotels.filter(h => h.trending && h.location === activeTab.value);
});

const visitedHotels = computed(() => {
  return hotels.filter(h => h.visited).slice(0, 4);
});

const isModalOpen = ref(false);
const selectedHotel = ref(null);

const openModal = (hotel) => {
  selectedHotel.value = hotel;
  isModalOpen.value = true;
};
</script>

<template>
  <main>
    <HeroSection />
    <SearchForm />

    <!-- Categories -->
    <section class="section">
      <div class="content">
        <h2>Discover your destination</h2>
        <p class="section-subtitle">Explore our range of property types for every traveler's preference.</p>
        <div class="grid grid-4">
          <CategoryCard v-for="cat in categories" :key="cat.id" :category="cat" />
        </div>
      </div>
    </section>

    <!-- Trending Hotels -->
    <section class="section bg-light" id="trending">
      <div class="content">
        <div class="section-header">
          <h2>Top trending hotel in worldwide</h2>
          <div class="filter-tabs">
            <button 
              v-for="tab in trendingTabs" 
              :key="tab"
              :class="['tab-btn', { active: activeTab === tab }]"
              @click="activeTab = tab"
            >
              {{ tab }}
            </button>
          </div>
        </div>
        <div class="grid grid-4">
          <HotelCard 
            v-for="hotel in trendingHotels" 
            :key="hotel.id" 
            :hotel="hotel" 
            @click="openModal(hotel)"
          />
        </div>
      </div>
    </section>

    <!-- Most Visited -->
    <section class="section">
      <div class="content">
        <h2>Most visited hotel this month</h2>
        <p class="section-subtitle">The most popular choices among our travelers</p>
        <div class="grid grid-4">
          <HotelCard 
            v-for="hotel in visitedHotels" 
            :key="hotel.id" 
            :hotel="hotel" 
            @click="openModal(hotel)"
          />
        </div>
      </div>
    </section>

    <!-- Promo -->
    <section class="section" id="promo">
      <div class="content">
        <h2>Get promo for a cheaper price</h2>
        <p class="section-subtitle">Save more with our exclusive deals</p>
        <div class="grid grid-4">
          <PromoCard v-for="promo in promotions" :key="promo.id" :promo="promo" />
        </div>
      </div>
    </section>

    <!-- Partner Logos -->
    <PartnerLogos />

    <!-- Contact Us -->
    <section class="section" id="contact">
      <div class="content">
        <div class="contact-header">
          <h2>Get in Touch with Us</h2>
          <p>Have questions about our outdoor adventures or looking to plan your next thrilling getaway? We're here to help! Reach out for any inquiries, rental assistance, or adventure advice</p>
        </div>

        <div class="contact-grid">
          <div class="contact-form-card">
            <h3>Have Questions? We're Just a Message Away!</h3>
            <p class="form-desc">Fill out the form below, and one of our team members will get back to you shortly.</p>
            
            <form class="form" @submit.prevent>
              <div class="form-row-2">
                <div class="form-col">
                  <label>First Name</label>
                  <input type="text" placeholder="First name" />
                </div>
                <div class="form-col">
                  <label>Last Name</label>
                  <input type="text" placeholder="Last name" />
                </div>
              </div>
              <div class="form-row">
                <label>E-mail</label>
                <input type="email" placeholder="you@gmail.com" />
              </div>
              <div class="form-row">
                <label>Phone Number</label>
                <input type="tel" placeholder="+1 (800) 555-1234" />
              </div>
              <div class="form-row">
                <label>Subject</label>
                <select>
                  <option>Choose message subject</option>
                </select>
              </div>
              <div class="form-row">
                <label>Message</label>
                <textarea placeholder="Leave us a message..." rows="4"></textarea>
              </div>
              <div class="form-submit">
                <button class="btn-submit">Send Message ↗</button>
              </div>
            </form>
          </div>

          <div class="contact-info">
            <div class="expert-card">
              <div class="expert-overlay">
                <div class="expert-logo">◎ Hoho</div>
                <h3>Our experts will always help you</h3>
              </div>
            </div>
            
            <div class="info-list">
              <div class="info-item">
                <div class="info-icon">✉️</div>
                <div class="info-text">
                  <strong>Email</strong>
                  <span>support@hoho.com</span>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">📞</div>
                <div class="info-text">
                  <strong>Call</strong>
                  <span>+1 (800) 555-1234</span>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">📍</div>
                <div class="info-text">
                  <strong>Address</strong>
                  <span>123 Adventure Lane, Suite 100, Boulder, CO 80301</span>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">🕒</div>
                <div class="info-text">
                  <strong>Working Hours</strong>
                  <span>Mon-Fri: 9:00 AM - 6:00 PM (PST)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <HotelModal 
      v-if="selectedHotel" 
      :hotel="selectedHotel" 
      :isOpen="isModalOpen" 
      @close="isModalOpen = false" 
    />
  </main>
</template>

<style scoped>
.bg-light {
  background-color: white;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
}

.filter-tabs {
  display: flex;
  gap: 16px;
}

.tab-btn {
  padding: 8px 24px;
  border-radius: 20px;
  background: var(--bg-color);
  color: var(--text-secondary);
  font-weight: 500;
  transition: var(--transition);
}

.tab-btn:hover {
  background: var(--border-color);
}

.tab-btn.active {
  background: var(--primary);
  color: white;
}

.contact-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.contact-header h2 {
  font-size: 56px;
  color: #111;
  margin-bottom: 16px;
  letter-spacing: -1px;
}

.contact-header p {
  font-size: 16px;
  color: #111;
  opacity: 0.8;
  line-height: 1.6;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.contact-form-card {
  background: #fafafa;
  padding: 40px;
  border-radius: 24px;
}

.contact-form-card h3 {
  font-size: 24px;
  color: #111;
  margin-bottom: 8px;
}

.form-desc {
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 32px;
}

.form-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-row-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-col {
  display: flex;
  flex-direction: column;
}

.form label {
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
}

.form input, .form select, .form textarea {
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: white;
  font-size: 14px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.3s;
}

.form input:focus, .form select:focus, .form textarea:focus {
  border-color: #111;
}

.form-submit {
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
}

.btn-submit {
  background: #111;
  color: white;
  padding: 12px 32px;
  border-radius: 30px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: transform 0.3s;
}

.btn-submit:hover {
  transform: translateY(-2px);
  background: #084738;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.expert-card {
  background-image: url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');
  background-size: cover;
  background-position: center;
  border-radius: 24px;
  height: 300px;
  position: relative;
  overflow: hidden;
}

.expert-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to right, rgba(11, 93, 74, 0.9) 0%, rgba(11, 93, 74, 0.4) 100%);
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.expert-logo {
  color: white;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.expert-overlay h3 {
  color: white;
  font-size: 32px;
  max-width: 250px;
  line-height: 1.2;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #e2f0ec;
  padding: 16px 24px;
  border-radius: 12px;
}

.info-icon {
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #111;
}

.info-text {
  display: flex;
  flex-direction: column;
}

.info-text strong {
  font-size: 14px;
  color: #111;
  margin-bottom: 2px;
}

.info-text span {
  font-size: 14px;
  color: #555;
}

@media (max-width: 1024px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .contact-header h2 {
    font-size: 40px;
  }
}
</style>
