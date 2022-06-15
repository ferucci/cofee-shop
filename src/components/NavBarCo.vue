<template>
  <header>
    <ul
      class="
        header
        d-flex
        justify-content-center justify-content-md-start
        flex-wrap
      "
    >
      <nav-item :link="links.header.link" classItem="header__item">
        <img
          :src="require(`@/assets/logo/${links.header.icon}`)"
          :alt="links.header.icon"
        />
      </nav-item>

      <nav-item
        v-for="navLink in links.other"
        :key="navLink.id"
        classItem="header__item"
        :link="navLink.link"
        :text="navLink.text"
      />
    </ul>
  </header>
</template>

<script>
import NavItem from "@/components/NavItem.vue";

export default {
  components: { NavItem },
  computed: {
    links() {
      return this.$store.getters["getHeaderLinks"];
    },
  },
};
</script>
