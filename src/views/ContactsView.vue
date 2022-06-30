<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-co />
          </div>
        </div>
        <h1 class="title-big">Contact us</h1>
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img
              class="beanslogo mt-5"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />

            <form @submit.prevent="submit" action="#" class="mt-5">
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="name-input" class="mb-0">
                    Name
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    id="name-input"
                    v-model="v$.nameInput.$model"
                  />
                  <span v-for="error in v$.nameInput.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="email-input" class="mb-0">
                    E-mail
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    type="email"
                    class="form-control"
                    id="email-input"
                    v-model="v$.emailInput.$model"
                  />
                  <span
                    v-for="error in v$.emailInput.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="phone-input" class="mb-0"> Phone </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    type="tel"
                    class="form-control"
                    id="phone-input"
                    v-model="phoneInput"
                  />
                </div>
              </div>

              <div class="form-group row textarea">
                <div class="col col-12 d-flex justify-content-center">
                  <label for="message" class="mb-3 mt-3 text-center">
                    Your message
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12">
                  <textarea
                    class="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Leave your comments here"
                    v-model="v$.message.$model"
                  ></textarea>
                  <span v-for="error in v$.message.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
              </div>
              <div class="form-group row">
                <input
                  id="checkbox"
                  class="checkbox"
                  name="valid"
                  type="checkbox"
                  v-model="v$.checkbox.$model"
                />

                <label class="checkbox-label" for="checkbox"
                  >Согласен с договором оферты</label
                >
              </div>
              <span v-for="error in v$.checkbox.$errors" :key="error.$uid">
                {{ error.$message }}
              </span>
              <div class="row">
                <div class="col">
                  <button class="btn btn-outline-dark send-btn">Send us</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarCo from "@/components/NavBarCo.vue";

import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { helpers } from "@vuelidate/validators";

import { minLength } from "@/validators/minLength";
import { processingAgreement } from "@/validators/processingAgreement";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      nameInput: "",
      emailInput: "",
      phoneInput: "",
      message: "",
      checkbox: true,
    };
  },
  validations() {
    return {
      nameInput: { required },
      emailInput: { required, email },
      phoneInput: {},
      message: {
        required,
        minLength: helpers.withMessage(
          "Minimum message length 5 characters",
          minLength
        ),
      },
      checkbox: {
        required,
        processingAgreement: helpers.withMessage(
          "Обязательное поле!",
          processingAgreement
        ),
      },
    };
  },
  methods: {
    async submit() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;

      console.log({
        name: this.nameInput,
        email: this.emailInput,
        phone: this.phoneInput,
        message: this.message,
        checkbox: this.checkbox,
      });
    },
  },
  components: { NavBarCo },
};
</script>

<style scoped>
.checkbox {
  display: inline-block;
  margin: 10px;
}
.checkbox-label {
  padding-top: 5px;
}
</style>
