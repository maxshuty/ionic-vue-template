<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login i18n</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <form @submit.prevent="login">
        <ion-item>
          <ion-label position="floating">Email i18n</ion-label>
          <ion-input
            :value="email"
            @ionInput="email = $event.target.value"
            type="email"
            required
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Password i18n</ion-label>
          <ion-input
            :value="password"
            @ionInput="password = $event.target.value"
            type="password"
            required
          ></ion-input>
        </ion-item>
        <ion-button expand="block" type="submit">Login i18n</ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      if (!this.email || !this.password) {
        console.error('Email and password are required.');
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        console.error('Invalid email format.');
        return;
      }

      try {
        const trimmedEmail = this.email.trim();
        const trimmedPassword = this.password.trim();
        const userCredential = await signInWithEmailAndPassword(
          auth,
          trimmedEmail,
          trimmedPassword
        );
        console.log('Logged in:', userCredential.user);
      } catch (error) {
        console.error('Login failed:', error.message);
      }
    },
  },
};
</script>
