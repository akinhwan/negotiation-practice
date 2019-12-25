<template>
  <div>
    <header class="site-header">
      <div class="container">
        <div class="row my-header-row align-items-center position-relative">
          <div class="brand">
            <router-link to="/"
              ><img class="header-logo" src="@/assets/footer-logo.png" alt=""
            /></router-link>
          </div>

          <!-- Menu Block -->
          <div class="main-navigation">
            <ul class="main-menu">
              <li class="menu-item">
                <router-link to="/" v-scroll-to="'#how-it-works'"
                  >How it Works</router-link
                >
              </li>
              <li class="menu-item">
                <router-link to="/" v-scroll-to="'#who-its-for'"
                  >Who it's For</router-link
                >
              </li>
              <li class="menu-item">
                <router-link to="/" v-scroll-to="'#pricing'"
                  >Pricing</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      img: null,
      roomId: "public-room"
    };
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style lang="scss"></style>
