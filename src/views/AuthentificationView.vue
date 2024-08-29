<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="login-title">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="username">Benutzername</label>
          <input
              type="text"
              id="username"
              v-model="username"
              required
              placeholder="Dein Benutzername"
          />
        </div>
        <div class="input-group">
          <label for="password">Passwort</label>
          <input
              type="password"
              id="password"
              v-model="password"
              required
              placeholder="Dein Passwort"
          />
        </div>
        <button type="submit" class="login-button">Anmelden</button>
      </form>
<!--      <p class="register-link">-->
<!--        Noch kein Konto? <router-link to="/register">Registrieren</router-link>-->
<!--      </p>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthentificationView",
  data() {
    return {
      username: "", // Benutzername statt E-Mail
      password: "",
    };
  },
  methods: {
    handleLogin() {
      // Beispielhafte Authentifizierung
      if (this.username === "testuser" && this.password === "password") {
        localStorage.setItem('authToken', 'example-token'); // Dummy-Token speichern
        this.$router.push('/'); // Weiterleitung zur Home-Seite
      } else {
        alert('Falscher Benutzername oder Passwort');
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Höhe auf gesamte Bildschirmhöhe setzen */
  background-color: #f0f2f5;
  padding: 20px;
}

.login-box {
  width: 100%;
  max-width: 400px;
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.login-title {
  margin-bottom: 20px;
  font-size: 28px;
  color: #2c3e50;
}

.input-group {
  margin-bottom: 20px;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #2c3e50;
}

.input-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.login-button {
  width: 100%;
  padding: 12px;
  background-color: #42b983;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #2c3e50;
}

.register-link {
  margin-top: 15px;
  font-size: 14px;
  color: #2c3e50;
}
</style>
