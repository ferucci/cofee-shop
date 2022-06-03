<template>
  <div class="wrapper">
    <hero-view />

    <footer-co />
  </div>
</template>

<script>
import HeroView from "@/views/HeroView.vue";
import FooterCo from "@/components/FooterCo.vue";

export default {
  components: { HeroView, FooterCo },
};
</script>

<style>
</style>
