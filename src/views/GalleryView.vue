<script setup lang="js">
import Banner from '@/components/banner.vue';
</script>

<template>
  <main>
    <Banner text="Gallery" />
    <!-- Imagem -->
    <div>
      <v-col cols="4">
        <v-img 
          class="imagem"
          aspect-ratio="1"
          cover
          src="https://i2.wp.com/beebom.com/wp-content/uploads/2023/06/Shaders-Minecraft-1.20-CHOCAPIC13.jpg?ssl=1" 
        />
      </v-col>
    </div>
  </main>
</template>

<style scoped>
  main{
    min-height: 100vh;
  }

  .imagem {
    transition: filter 0.5s;
  }

  .imagem:hover{
    filter: brightness(0.5)
  }
</style>