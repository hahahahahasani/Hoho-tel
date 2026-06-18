<script setup>
</script>

<template>
  <section class="hero" id="hero">
    <div class="hero-background"></div>
    <div class="hero-overlay"></div>
    
    <div class="hero-content">
      <div class="hero-text-container">
        <h1 class="hero-title animate-slide-up" style="--delay: 0.1s">
          Stay Where Every<br/>Moment <span class="text-white">Feels Special</span>
        </h1>
        <p class="hero-subtitle animate-slide-up" style="--delay: 0.2s">
          Explore handpicked hotels, villas, and apartments across top destinations.
        </p>
      </div>

      <div class="hero-floating-elements">
        <!-- Left Badges -->
        <div class="left-badges animate-slide-right" style="--delay: 0.4s">
          <div class="glass-badge"><span class="arrow">&gt;</span> 2M+ Travelers Booked With Us</div>
          <div class="glass-badge"><span class="arrow">&gt;</span> Top Rated Stays 2024</div>
          <div class="glass-badge"><span class="arrow">&gt;</span> Secure Booking Guaranteed</div>
        </div>

        <!-- Center Play Button -->
        <div class="center-play animate-zoom-in" style="--delay: 0.5s">
          <div class="play-button">
            <svg viewBox="0 0 24 24" fill="white" width="24" height="24"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <!-- <span class="play-text">Watch<br/>Reel</span> -->
        </div>

        <!-- Right Reviews -->
        <div class="right-reviews animate-slide-left" style="--delay: 0.6s">
          <div class="avatars">
            <img src="https://i.pravatar.cc/100?img=1" alt="User" class="avatar" />
            <img src="https://i.pravatar.cc/100?img=2" alt="User" class="avatar" />
            <img src="https://i.pravatar.cc/100?img=3" alt="User" class="avatar" />
            <img src="https://i.pravatar.cc/100?img=4" alt="User" class="avatar" />
          </div>
          <div class="review-text">
            <span class="stars">☆ 4.9</span> • <span class="underline">Based on 2.4M+ Reviews</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 95vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 16px;
  border-radius: 32px;
  background-color: #f0f0f0;
}

.hero-background {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background-image: url('/images/hero.png');
  background-size: cover;
  background-position: center;
  transition: transform 10s ease-out;
  animation: zoomBg 20s infinite alternate;
}

@keyframes zoomBg {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}

.hero-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.3) 100%);
}

.hero-content {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1440px;
  padding: 0 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 18vh;
}

.hero-text-container {
  text-align: center;
  margin-bottom: 80px;
}

.hero-title {
  font-size: 72px;
  line-height: 1.1;
  font-weight: 600;
  color: white;
  margin-bottom: 24px;
  letter-spacing: -1.5px;
}

.hero-title .text-white {
  color: white;
  text-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.hero-subtitle {
  font-size: 20px;
  color: white;
  font-weight: 500;
  text-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.hero-floating-elements {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  margin-bottom: 140px; /* Space for search form */
}

/* Left Badges */
.left-badges {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.glass-badge {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 10px 20px 10px 10px;
  border-radius: 30px;
  color: white;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.glass-badge .arrow {
  background: white;
  color: black;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

/* Center Play */
.center-play {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  cursor: pointer;
}

.play-button {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.center-play:hover .play-button {
  background: rgba(255,255,255,0.3);
  transform: scale(1.05);
}

.play-text {
  position: absolute;
  top: -20px;
  left: -20px;
  color: white;
  font-weight: 600;
  font-size: 14px;
  text-align: right;
  line-height: 1.2;
}

/* Right Reviews */
.right-reviews {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}

.avatars {
  display: flex;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid white;
  margin-left: -16px;
  object-fit: cover;
}

.avatar:first-child {
  margin-left: 0;
}

.review-text {
  color: white;
  font-size: 14px;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.review-text .underline {
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* Animations */
.animate-slide-up {
  opacity: 0;
  animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--delay);
}

.animate-slide-right {
  opacity: 0;
  animation: slideRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--delay);
}

.animate-slide-left {
  opacity: 0;
  animation: slideLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--delay);
}

.animate-zoom-in {
  opacity: 0;
  animation: zoomIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes slideRight {
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes slideLeft {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes zoomIn {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

@media (max-width: 1024px) {
  .hero-title { font-size: 56px; }
  .hero-floating-elements { flex-direction: column; gap: 40px; margin-bottom: 160px; }
  .left-badges, .right-reviews { align-items: center; }
  .play-text { position: static; text-align: center; margin-top: -10px; }
}
@media (max-width: 768px) {
  .hero-title { font-size: 40px; }
  .hero-subtitle { font-size: 16px; }
}
</style>
