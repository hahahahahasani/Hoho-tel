<template>
  <div class="search-form-container animate-slide-up" style="--delay: 0.8s">
    <div class="content">
      <form class="search-form" @submit.prevent="handleSearch">
        <div class="form-group">
          <div class="icon">📍</div>
          <div class="input-wrapper">
            <label>Location</label>
            <input type="text" v-model="formData.location" placeholder="Switzerland" />
          </div>
        </div>
        
        <div class="divider"></div>
        
        <div class="form-group">
          <div class="icon">📅</div>
          <div class="input-wrapper">
            <label>Check in</label>
            <input type="text" v-model="formData.checkIn" placeholder="19 Dec 2025" />
          </div>
        </div>
        
        <div class="divider"></div>
        
        <div class="form-group">
          <div class="icon">📅</div>
          <div class="input-wrapper">
            <label>Check out</label>
            <input type="text" v-model="formData.checkOut" placeholder="02 Jan 2026" />
          </div>
        </div>

        <div class="divider"></div>
        
        <div class="form-group">
          <div class="icon">👤</div>
          <div class="input-wrapper">
            <label>Guest</label>
            <input type="text" v-model="formData.guests" placeholder="2 adults, 1 kid" />
          </div>
        </div>
        
        <button type="submit" class="btn-search">Search</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const formData = reactive({
  location: '',
  checkIn: '',
  checkOut: '',
  guests: ''
});

const handleSearch = () => {
  console.log('Search Form Data:', formData);
};
</script>

<style scoped>
.search-form-container {
  position: relative;
  margin-top: -80px;
  z-index: 20;
  opacity: 0;
  animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.search-form {
  background: white;
  border-radius: 100px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  padding: 12px 12px 12px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-group {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  border-radius: 40px;
  transition: background 0.3s ease;
  cursor: pointer;
}

.form-group:hover {
  background: #f3f4f6;
}

.icon {
  font-size: 20px;
  color: var(--text-secondary);
}

.input-wrapper {
  display: flex;
  flex-direction: column;
}

.input-wrapper label {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 2px;
}

.input-wrapper input {
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  color: var(--primary);
  background: transparent;
  width: 100%;
}

.input-wrapper input::placeholder {
  color: var(--primary);
  opacity: 0.8;
}

.divider {
  width: 1px;
  height: 40px;
  background-color: var(--border-color);
}

.btn-search {
  background: var(--primary);
  color: white;
  padding: 20px 48px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  transition: transform 0.3s ease;
  white-space: nowrap;
  border: none;
  cursor: pointer;
}

.btn-search:hover {
  transform: scale(1.05);
  background: #000;
}

@media (max-width: 1024px) {
  .search-form {
    flex-direction: column;
    border-radius: 24px;
    padding: 24px;
    gap: 16px;
  }
  .divider { display: none; }
  .form-group { width: 100%; }
  .btn-search { width: 100%; justify-content: center; padding: 16px; }
}
</style>
