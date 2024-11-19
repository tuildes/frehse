<script setup lang="js">

const links = [
  {
    icon: 'mdi-web-box',
    text: 'Portfolio',
    link: '/'
  },
  {
    icon: 'mdi-camera',
    text: 'Gallery',
    link: '/gallery'
  },
  {
    icon: 'mdi-account',
    text: 'Contact',
    link: '/'
  }
]

</script>

<template>
  <v-container fluid class="navbar-wrapper d-flex justify-space-between">
    <div>
      tuildes
    </div>
    <div>
      <v-btn 
        v-for="(item, index) in links" 
        :key="index" 
        :prepend-icon="item.icon" 
        :to="item.link"
        variant="plain" 
        class="navbar-link ml-1"
      >
        {{ item.text }}
      </v-btn>
    </div>
  </v-container>
</template>

<style scoped>

.navbar-wrapper {
  position: absolute;
  z-index: 100;
}

.navbar-link :deep(.v-btn__content) {
  font-family: "Inter", sans-serif;
  font-weight: 800;
}

</style>