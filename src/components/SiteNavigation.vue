<template>
  <!-- Mobile Navigation -->
  <nav class="mobile-nav">
    <a href="#" class="logo">
      <img src="/logo.svg" alt="" />
      <div class="label">
        <span>The Local</span><br />
        <span>Weather</span>
      </div>
    </a>

    <div class="menu-icon" @click="toggleMenu">
      <img src="@/assets/images/menu-icon.svg" alt="Menu Icon" />
    </div>
  </nav>

  <div :class="['mobile-nav-menu', { active: isMenuActive }]">
    <ul class="menu-items">
      <li @click="closeMenu">
        <RouterLink :to="{ name: 'dashboard' }">{{ $t('DashboardView.metaTitle') }}</RouterLink>
      </li>
      <li @click="closeMenu">
        <RouterLink :to="{ name: 'about' }">{{ $t('AboutView.metaTitle') }}</RouterLink>
      </li>
      <li @click="closeMenu">
        <i @click="toggleTheme" :class="['fa-solid', isDarkTheme ? 'fa-sun' : 'fa-moon']"></i>
      </li>
    </ul>
  </div>

  <!-- End of Mobile Navigation -->
  <nav class="desktop-nav">
    <RouterLink :to="{ name: 'dashboard' }">
      <a href="#" class="logo">
        <img src="/logo.svg" alt="" />
        <div class="label">
          <span>The Local</span><br />
          <span>Weather</span>
        </div>
      </a>
    </RouterLink>
    <ul class="menu-items">
      <li>
        <RouterLink :to="{ name: 'dashboard' }">
          <i class="fa-solid fa-home"></i>
        </RouterLink>
      </li>

      <li>
        <RouterLink :to="{ name: 'about' }">
          <i class="fa-solid fa-circle-info"></i>
        </RouterLink>
      </li>
      <li>
        <i @click="toggleTheme" :class="['fa-solid', isDarkTheme ? 'fa-sun' : 'fa-moon']"></i>
      </li>
    </ul>
  </nav>

  <!-- End of Desktop Navigation -->
</template>

<script setup>
  import { ref, onMounted } from 'vue';

  // Reactive state to track menu visibility
  const isMenuActive = ref(false);
  const isDarkTheme = ref(true);

  // Toggle the menu
  const toggleMenu = () => {
    isMenuActive.value = !isMenuActive.value;
  };

  // Close the menu when an item is clicked
  const closeMenu = () => {
    isMenuActive.value = false;
  };

  //Toggle Theme
  const toggleTheme = () => {
    isDarkTheme.value = !isDarkTheme.value;
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light');
  };

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      isDarkTheme.value = false;
      document.body.classList.toggle('light-theme');
    }
  });
</script>

<style>
  .desktop-nav {
    background: var(--color-bg-secondary);
    width: 87px;
    height: 95vh;
    border-radius: 30px;
    position: fixed;
  }

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    gap: 6px;
    margin-top: 20px;
  }

  .logo .label {
    text-align: center;
    color: var(--color-text-primary);
    font-size: 12px;
    font-family: Inter;
    font-weight: 400;
  }

  .desktop-nav .menu-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 153px;
    gap: 35px;
    margin-top: 60px;
  }

  .desktop-nav .menu-items i {
    color: var(--color-text-secondary);
    font-size: 25px;
    transition: color 0.3s ease; /* Smooth transition */
  }

  .desktop-nav .menu-items i:hover {
    color: var(--color-brand-primary);
  }

  /* Mobile Nav */
  .mobile-nav {
    display: none;
  }

  .mobile-nav-menu {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: fixed;
    left: 0;
    background: black;
    right: 0;
    z-index: 200;

    opacity: 0;
    pointer-events: none;
    top: -100%;
    transition: 400ms;
  }

  body.light-theme .mobile-nav-menu {
    background: var(--color-bg-primary);
  }

  .mobile-nav-menu.active {
    opacity: 1;
    pointer-events: auto;
    top: 0;
  }

  .mobile-nav-menu .menu-items {
    list-style: none;
    padding: 0;
  }

  .mobile-nav-menu .menu-items li {
    margin: 20px 0;
  }

  .mobile-nav-menu .menu-items li a {
    color: var(--color-text-primary);
    text-decoration: none;
  }

  /*Tablets*/
  @media (max-width: 1024px) {
    .mobile-nav {
      background: var(--color-bg-secondary);
      display: flex;
      justify-content: space-between;
      border-radius: 30px;
      padding: 2px 15px;
      margin-top: 25px;
      margin-left: 14px;
      margin-right: 14px;
      position: sticky;
    }

    .logo {
      flex-direction: row;
      margin-top: 0px;
    }

    .menu-icon {
      align-self: center;
    }
  }
</style>
