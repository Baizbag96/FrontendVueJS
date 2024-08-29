<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">MyApp</router-link>
      <button
          class="navbar-burger"
          :class="{ 'is-active': isBurgerActive }"
          @click="toggleBurger"
          aria-label="menu"
          aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isBurgerActive }">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <!-- Füge hier weitere Links hinzu -->
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      isBurgerActive: false,
    };
  },
  methods: {
    toggleBurger() {
      this.isBurgerActive = !this.isBurgerActive;
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #2c3e50;
  padding: 10px;
}

.navbar-brand {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-burger {
  display: none;
  border: none;
  background: transparent;
  cursor: pointer;
}

.navbar-burger span {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  background-color: white;
}

.navbar-item {
  font-weight: bold;
  color: white;
  padding: 10px 15px;
  text-decoration: none;
}

.navbar-item:hover {
  color: #42b983;
}

.navbar-menu.is-active {
  display: block;
}

@media screen and (max-width: 768px) {
  .navbar-burger {
    display: block;
  }
  .navbar-menu {
    display: none;
  }
  .navbar-menu.is-active {
    display: block;
  }
}
</style>
