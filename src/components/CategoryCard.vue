<script setup>
defineProps({
  category: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="category-card fade-in">
    <div class="card-image">
      <img :src="category.image" :alt="category.title" />
    </div>
    <div class="card-content">
      <div class="info">
        <h3>{{ category.title }}</h3>
        <p>{{ category.available.toLocaleString() }} Available</p>
      </div>
      <button class="btn-arrow">&rarr;</button>
    </div>
  </div>
</template>

<style scoped>
.category-card {
  background: var(--secondary);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: var(--transition);
  cursor: pointer;
  border: 1px solid var(--border-color);
}

.category-card:hover {
  box-shadow: 0 12px 30px rgba(0,0,0,0.1);
  transform: translateY(-5px);
}

.card-image {
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.category-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info h3 {
  font-size: 18px;
  color: var(--primary);
  margin-bottom: 4px;
}

.info p {
  font-size: 14px;
  color: var(--text-secondary);
}

.btn-arrow {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-color);
  color: var(--primary);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.category-card:hover .btn-arrow {
  background: var(--primary);
  color: white;
}
</style>
