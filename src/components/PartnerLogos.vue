<template>
  <section class="partners section">
    <div class="content">
      <div class="logos-container">
        <div class="logo">HelloSign</div>
        <div class="logo">DoorDash</div>
        <div class="logo">Coinbase</div>
        <div class="logo">Airtable</div>
        <div class="logo">Pendo</div>
        <div class="logo">Treehouse</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners {
  padding: 40px 0;
  border-bottom: 1px solid var(--border-color);
}

.logos-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}

.logo {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary);
  filter: grayscale(100%) opacity(0.5);
  transition: var(--transition);
  cursor: pointer;
}

.logo:hover {
  filter: grayscale(0%) opacity(1);
}

@media (max-width: 768px) {
  .logos-container {
    justify-content: center;
  }
}
</style>
