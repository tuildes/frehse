<script setup lang="js">

const icons = [
  {
    icon: 'mdi-instagram',
    link: ''
  },
  {
    icon: 'mdi-linkedin',
    link: ''
  },
  {
    icon: 'mdi-github',
    link: ''
  }
]

</script>

<template>
  <v-footer border class="footer-wrapper py-3 d-flex flex-column text-center">
    <div class="footer-icons d-flex">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon.icon"
        class="footer-icon mx-1"
        variant="text"
      />
    </div>
    <span class="footer-citation">
      "Não há nada mais motivador, do que não ter saída" - <strong>Cesar MC</strong>
    </span>
    <v-divider class="footer-divider my-1" />
    <span class="footer-credit">
      <strong>tuildes</strong> - 2024
    </span>
  </v-footer>
</template>

<style scoped>

  .footer-wrapper {
      border-color: var(--color-secondary);
      background-color: var(--color-background);
      color: var(--color-primary);
  }

  .footer-citation { opacity: 0.75; }

</style>