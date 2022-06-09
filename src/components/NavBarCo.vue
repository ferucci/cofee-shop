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

import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      links: {
        header: {
          id: uuidv4(),
          link: "/",
          icon: "Logo.svg",
        },
        other: [
          {
            id: uuidv4(),
            link: "/our-coffee",
            text: "Our coffee",
          },
          {
            id: uuidv4(),
            link: "/goods-view",
            text: "For your pleasure",
          },
          {
            id: uuidv4(),
            link: "/contacts",
            text: "Contact us",
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
