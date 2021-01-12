<template>
  <transition name="show">
    <div class="sidebar" v-if="open">
      <!-- appear : Whether to apply transition on initial render (Conditional rendering (using v-if)). Default: false  -->
      <transition-group appear name="fade">
        <a
          href="#"
          class="sidebar-element"
          v-for="(item, index) in navElements"
          :key="item.icon"
          :style="{ '--index': index }"
        >
          <fa-icon
            class="icon"
            :icon="['fas', item.icon]"
            @click="item.redirect"
            size="2x"
          />
        </a>
      </transition-group>
    </div>
  </transition>
</template>

<script>
export default {
  name: "TheSideBar",
  props: ["open"],
  methods: {
    redirectProfil() {
      this.$router.push({ path: "/Profil", addToHistory: false });
    },
    redirectMessages() {
      this.$router.push({ path: "/ChatContainer", addToHistory: false });
    },
    redirectHome() {
      this.$router.push({ path: "/", addToHistory: false });
    },
    redirectContactUs() {
      this.$router.push({ path: "/ContactUs", addToHistory: false });
    },
  },
  data() {
    return {
      navElements: [
        {
          icon: "home",
          redirect: () => {
            this.redirectHome();
          },
        },
        {
          icon: "user",
          redirect: () => {
            this.redirectProfil();
          },
        },
        {
          icon: "comments",
          redirect: () => {
            this.redirectMessages();
          },
        },

        {
          icon: "lightbulb",
          redirect: () => {
            this.redirectMessages();
          },
        },
        {
          icon: "calendar",
          redirect: () => {
            this.redirectMessages();
          },
        },
        {
          icon: "clipboard",
          redirect: () => {
            this.redirectMessages();
          },
        },
        {
          icon: "cogs",
          redirect: () => {
            this.redirectContactUs();
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  flex-direction: column;
  width: 60px;
  height: calc(100vh - 50px); // make display component when open slidebar
  padding-top: 48px;
  background-color: rgba($color: #242424, $alpha: 0.6);

  .sidebar-element {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    margin-bottom: 8px;
    cursor: pointer;
    color: #fefefe;
  }
}

// show is animation for the side bar when i click on the side bar it open with effect
.show {
  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateX(-60px);
  }

  &-enter-active,
  &-leave-active {
    transition: all 500ms;
  }
}

//fade animation for side bar : when we click in sidebar the icon show one by one with animation not all together .
.fade {
  &-enter {
    opacity: 0;
    transform: translateX(-60px);
  }

  &-enter-active {
    transition: all 500ms ease-in-out;
    transition-delay: calc(50ms * var(--index));
  }
}
</style>
