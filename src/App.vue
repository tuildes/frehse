<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/layout/navbar.vue';
import Footer from '@/components/layout/footer.vue';
</script>

<template>
  <NavBar />
  <RouterView />
  <Footer />
</template>