<script setup lang="js">

defineProps({
    text: String,
})

</script>
<template>
    <v-parallax
        src="src/assets/images/mixer-Saso-Tusar.jpg"
        height="100vh"
        class="banner-parallax"
    >
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1 class="text-h1 font-weight-thin mb-4">
                {{ text }}
            </h1>
            <h4 class="subheading">
            Estudante de Informática Biomédica
            </h4>
        </div>
    </v-parallax>
</template>
<style lang="css" scoped>

.banner-parallax :deep(.v-img__img) {
    filter: brightness(0.40)
}

</style>