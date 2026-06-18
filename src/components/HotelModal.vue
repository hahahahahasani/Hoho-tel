<script setup>
defineProps({
  hotel: {
    type: Object,
    required: true
  },
  isOpen: {
    type: Boolean,
    default: false
  }
});

defineEmits(['close']);
</script>

<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content fade-in">
      <button class="btn-close" @click="$emit('close')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
      
      <div class="modal-image">
        <img :src="hotel.image" :alt="hotel.name" />
        <button class="btn-favorite">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
        <div class="carousel-dots">
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>

      <div class="modal-body">
        <div class="modal-header-info">
          <div class="rating-reviews">
            <span class="rating">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              {{ hotel.rating }}
            </span>
            <span class="reviews">({{ hotel.reviews.toLocaleString() }} reviews)</span>
          </div>
          <div class="badge" v-if="hotel.badge">{{ hotel.badge }}</div>
        </div>

        <h2 class="modal-title">{{ hotel.name }}</h2>
        <p class="modal-location">{{ hotel.location }} <span v-if="hotel.distance">• {{ hotel.distance }}</span></p>

        <div class="amenities" v-if="hotel.amenities">
          <div class="amenity" v-for="(amenity, index) in hotel.amenities" :key="index">
            <span class="amenity-icon">{{ amenity.icon }}</span>
            <span>{{ amenity.text }}</span>
          </div>
        </div>

        <div class="modal-footer">
          <div class="price-info">
            <div class="price-main"><strong>${{ hotel.price.toLocaleString() }}</strong> <span class="per-night">/ night</span></div>
            <div class="price-total" v-if="hotel.totalPrice">${{ hotel.totalPrice.toLocaleString() }} total with taxes</div>
          </div>
          <button class="btn-detail">View Details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 440px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  animation: modalPop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes modalPop {
  0% { transform: scale(0.9); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.btn-close {
  position: absolute;
  top: 16px;
  left: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: var(--transition);
}

.btn-close:hover {
  background: white;
  transform: scale(1.1);
}

.modal-image {
  position: relative;
  height: 240px;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.btn-favorite {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: white;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: none;
  cursor: pointer;
  transition: var(--transition);
}

.btn-favorite:hover {
  transform: scale(1.1);
}

.carousel-dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  background: rgba(0, 0, 0, 0.3);
  padding: 4px 10px;
  border-radius: 12px;
}

.dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
}

.dot.active {
  background: white;
}

.modal-body {
  padding: 24px;
}

.modal-header-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.rating-reviews {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
}

.rating {
  font-weight: 700;
  color: var(--success);
  display: flex;
  align-items: center;
  gap: 4px;
}

.reviews {
  color: var(--primary);
}

.badge {
  background: #F3F4F6;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  color: var(--primary);
}

.modal-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 4px;
}

.modal-location {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.amenities {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
}

.amenity {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--primary);
}

.amenity-icon {
  font-size: 18px;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
}

.price-main {
  font-size: 24px;
}

.price-main strong {
  font-weight: 700;
}

.per-night {
  font-size: 15px;
  color: var(--text-secondary);
}

.price-total {
  font-size: 13px;
  color: var(--text-secondary);
  margin-top: 2px;
}

.btn-detail {
  background: var(--success);
  color: white;
  padding: 12px 24px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 15px;
  border: none;
  cursor: pointer;
  transition: var(--transition);
}

.btn-detail:hover {
  background: #15803d; /* darker green */
  transform: translateY(-2px);
}
</style>
