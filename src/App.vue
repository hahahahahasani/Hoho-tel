<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Add observer to elements slightly after mount to ensure DOM is ready
  setTimeout(() => {
    document.querySelectorAll('.fade-in, .section').forEach(el => {
      observer.observe(el);
    });
  }, 100);
});
</script>

<template>
  <div class="app-wrapper">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
