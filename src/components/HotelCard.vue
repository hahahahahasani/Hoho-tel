<script setup>
defineProps({
  hotel: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="hotel-card" @click="$emit('click', hotel)">
    <div class="card-image">
      <img :src="hotel.image" :alt="hotel.name" />
      <button class="btn-favorite">♥</button>
    </div>
    <div class="card-content">
      <div class="location">{{ hotel.location }}</div>
      <h3 class="name">{{ hotel.name }}</h3>
      <p v-if="hotel.description" class="description">{{ hotel.description }}</p>
      <div class="rating-reviews">
        <span class="rating">★ {{ hotel.rating }}</span>
        <span class="reviews">({{ hotel.reviews.toLocaleString() }} reviews)</span>
      </div>
      <div class="price">
        <strong>${{ hotel.price }}</strong> <span class="per-night">/ night</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hotel-card {
  background: var(--secondary);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: var(--transition);
  cursor: pointer;
  border: 1px solid var(--border-color);
}

.hotel-card:hover {
  box-shadow: 0 12px 30px rgba(0,0,0,0.1);
  transform: translateY(-5px);
}

.card-image {
  position: relative;
  height: 240px;
}

.card-image img {
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
  background: rgba(255,255,255,0.8);
  color: #FF6B6B;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.btn-favorite:hover {
  background: white;
  transform: scale(1.1);
}

.card-content {
  padding: 20px;
}

.location {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.name {
  font-size: 18px;
  color: var(--primary);
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.description {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
}

.rating-reviews {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  margin-bottom: 16px;
}

.rating {
  font-weight: 600;
  color: #F59E0B;
}

.reviews {
  color: var(--text-secondary);
}

.price {
  font-size: 18px;
}

.price strong {
  font-weight: 700;
  color: var(--success);
}

.per-night {
  font-size: 14px;
  color: var(--text-secondary);
}
</style>
