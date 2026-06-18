<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav :class="['navbar', { 'navbar-scrolled': isScrolled }]">
    <div class="content navbar-content">
      <div class="logo animate-fade-in" style="--delay: 0.1s">
        <router-link to="/">Hoho</router-link>
      </div>
      
      <ul class="nav-links animate-fade-in" style="--delay: 0.2s">
        <li><a href="#hero">Home</a></li>
        <li><a href="#trending">Trending</a></li>
        <li><a href="#promo">Promo</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div class="nav-actions animate-fade-in" style="--delay: 0.3s">
        <button class="btn-host">Become a Host</button>
        <button class="btn-user">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: absolute;
  top: 16px;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 32px 0;
  transition: all 0.3s ease;
  color: white;
}

.navbar-scrolled {
  position: fixed;
  top: 0;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 16px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  color: #111;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -1px;
}

.logo a {
  color: inherit;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-links a {
  font-weight: 500;
  font-size: 15px;
  position: relative;
  transition: var(--transition);
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  background-color: currentColor;
  transition: var(--transition);
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.btn-host {
  background: transparent;
  color: inherit;
  font-weight: 600;
  font-size: 15px;
}

.btn-user {
  background: rgba(0,0,0,0.05);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.btn-user:hover {
  background: rgba(0,0,0,0.1);
}

.animate-fade-in {
  opacity: 0;
  animation: fadeIn 1s ease forwards;
  animation-delay: var(--delay);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 1024px) {
  .nav-links { display: none; }
}
</style>
