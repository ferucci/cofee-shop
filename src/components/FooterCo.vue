<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <nav-item :link="links.header.link" classItem="footer__item">
              <img
                :src="require(`@/assets/logo/${links.header.icon}`)"
                :alt="links.header.icon"
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

import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      links: {
        header: {
          id: uuidv4(),
          icon: "Logo_black.svg",
          link: "/",
        },
        other: [
          {
            id: uuidv4(),
            text: "Our coffee",
            link: "/our-coffee",
          },
          {
            id: uuidv4(),
            text: "For your pleasure",
            link: "/goods-view",
          },
          {
            id: uuidv4(),
            text: "Contact us",
            link: "/contacts",
          },
        ],
      },
    };
  },
  components: {
    NavItem,
  },
};
</script>