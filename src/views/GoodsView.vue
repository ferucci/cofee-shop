<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-co />
          </div>
        </div>
        <h1 class="title-big">For your pleasure</h1>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_goods.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <product-card
                v-for="item in goodsCofee"
                :key="item"
                classItem="shop__item"
                :name="item.name"
                :price="item.price"
                :image="item.image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarCo from "@/components/NavBarCo.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  data() {
    return {
      goodsCofee: [
        {
          id: 0,
          image: "coffee-1.jpg",
          name: "Solimo Coffee Beans 2kg",
          price: 10.93,
        },
        {
          id: 1,
          image: "coffee-2.jpg",
          name: "Presto Coffee Beans 1kg",
          price: 12.99,
        },
        {
          id: 2,
          image: "coffee-3.jpg",
          name: "AROMISTICO Coffee 1kg",
          price: 5.99,
        },
        {
          id: 3,
          image: "coffee-1.jpg",
          name: "Presto Coffee Beans 1kg",
          price: 27.99,
        },
        {
          id: 4,
          image: "coffee-2.jpg",
          name: "AROMISTICO Coffee 1kg",
          price: 33.99,
        },
        {
          id: 5,
          image: "coffee-1.jpg",
          name: "Solimo Coffee Beans 2kg",
          price: 21.99,
        },
      ],
    };
  },
  components: {
    NavBarCo,
    ProductCard,
  },
};
</script>