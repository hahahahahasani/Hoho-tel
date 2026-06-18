<script setup>
defineProps({
  promo: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="promo-card fade-in" :style="{ backgroundImage: `url(${promo.image})` }">
    <div class="overlay" :style="{ background: promo.bg }"></div>
    <div class="promo-content">
      <div class="text">
        <h3>{{ promo.title }}</h3>
        <p>{{ promo.subtitle }}</p>
      </div>
      <button class="btn-promo">Claim &rarr;</button>
    </div>
  </div>
</template>

<style scoped>
.promo-card {
  position: relative;
  height: 200px;
  border-radius: 16px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  transition: var(--transition);
  cursor: pointer;
}

.promo-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.promo-content {
  position: relative;
  z-index: 2;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
}

.text h3 {
  font-size: 24px;
  margin-bottom: 4px;
}

.text p {
  font-size: 14px;
  opacity: 0.9;
}

.btn-promo {
  align-self: flex-start;
  background: white;
  color: var(--primary);
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
  transition: var(--transition);
}

.promo-card:hover .btn-promo {
  transform: scale(1.05);
}
</style>
