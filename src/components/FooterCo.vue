<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <nav-item :link="links.footer.link" classItem="footer__item">
              <img
                :src="require(`@/assets/logo/${links.footer.icon}`)"
                :alt="links.footer.icon"
              />
            </nav-item>

            <nav-item
              v-for="footerLink in links.other"
              :key="footerLink.id"
              classItem="footer__item"
              :link="footerLink.link"
              :text="footerLink.text"
            />
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
</template>

<script>
import NavItem from "@/components/NavItem.vue";

export default {
  components: { NavItem },
  computed: {
    links() {
      return this.$store.getters["getFooterLinks"];
    },
  },
};
</script>