<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <form @submit.prevent="register">
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input
            :value="email"
            @ionInput="email = $event.target.value"
            type="email"
            required
          ></ion-input>
          <ion-note v-if="!isEmailValid" slot="error" color="danger">
            Please enter a valid email address.
          </ion-note>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input
            :value="password"
            @ionInput="password = $event.target.value"
            type="password"
            required
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Confirm Password</ion-label>
          <ion-input
            :value="confirmPassword"
            @ionInput="confirmPassword = $event.target.value"
            type="password"
            required
          ></ion-input>
          <ion-note v-if="!isPasswordMatch" slot="error" color="danger">
            Passwords do not match.
          </ion-note>
        </ion-item>
        <ion-button :disabled="!canSubmit" expand="block" type="submit"
          >Register</ion-button
        >
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';

export default {
  name: 'RegisterPage',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  computed: {
    isEmailValid() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.email);
    },
    isPasswordMatch() {
      return this.password === this.confirmPassword;
    },
    canSubmit() {
      return this.isEmailValid && this.isPasswordMatch && this.password !== '';
    },
  },
  methods: {
    async register() {
      if (!this.isEmailValid) {
        alert('Please enter a valid email address.');
        return;
      }
      if (!this.isPasswordMatch) {
        alert('Passwords do not match.');
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        console.log('User registered:', userCredential.user);
        alert('Registration successful! Please log in.');
        this.$router.push('/login'); // Redirect to login page after registration
      } catch (error) {
        console.error('Registration failed:', error.message);
        alert('Registration failed: ' + error.message);
      }
    },
  },
};
</script>
