<template>
  <footer class="footer section">
    <div class="content">
      <div class="footer-grid">
        <div class="brand-info">
          <h2>Hoho</h2>
          <p>Beyond accommodation, creating memories of a lifetime with the best facilities and services.</p>
        </div>
        
        <div class="footer-links">
          <h3>About</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>
        
        <div class="footer-links">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Return</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        
        <div class="newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to get the latest updates and deals</p>
          <div class="input-group">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <div class="socials">
            <a href="#">IG</a>
            <a href="#">X</a>
            <a href="#">FB</a>
            <a href="#">DC</a>
            <a href="#">TK</a>
          </div>
        </div>
      </div>
      
      <div class="bottom-footer">
        <p>©2024 Hoho. All rights reserved.</p>
        <div class="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--secondary);
  border-top: 1px solid var(--border-color);
  padding-bottom: 40px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  gap: 40px;
  margin-bottom: 60px;
}

.brand-info h2 {
  font-size: 24px;
  color: var(--primary);
}

.brand-info p {
  color: var(--text-secondary);
  margin-top: 16px;
  max-width: 300px;
}

.footer-links h3, .newsletter h3 {
  font-size: 18px;
  margin-bottom: 24px;
}

.footer-links ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  color: var(--text-secondary);
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--success);
}

.newsletter p {
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.input-group {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
}

.input-group input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  outline: none;
}

.input-group button {
  background: var(--primary);
  color: white;
  padding: 0 20px;
  border-radius: 8px;
  font-weight: 500;
  transition: var(--transition);
}

.input-group button:hover {
  background: var(--success);
}

.socials {
  display: flex;
  gap: 16px;
}

.socials a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-weight: 600;
  font-size: 14px;
  transition: var(--transition);
}

.socials a:hover {
  background: var(--success);
  color: white;
}

.bottom-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
  color: var(--text-secondary);
}

.bottom-links {
  display: flex;
  gap: 24px;
}

.bottom-links a:hover {
  color: var(--success);
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  .bottom-footer {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
</style>
