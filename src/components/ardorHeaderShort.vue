<template>
  <header class="header">
    <div class="header__container">
      <nav class="header__container-menu">
        <div class="menu__list">
          <router-link to="/" class="menu__list-link"> Home </router-link>
          <router-link to="/AboutMe" class="menu__list-link">
            About me
          </router-link>
          <v-menu open-on-hover offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-text class="menu__list-link" v-bind="attrs" v-on="on">
                Portfolio
              </v-text>
            </template>

            <v-list dark class="d-flex flex-column">
              <router-link to="/" class="menu__list-link">
                Weeding
              </router-link>
              <router-link to="/" class="menu__list-link">
                Lovestory
              </router-link>
              <router-link to="/" class="menu__list-link"> Family </router-link>
              <router-link to="/" class="menu__list-link">
                Portrait
              </router-link>
            </v-list>
          </v-menu>
        </div>
        <div class="menu__logo">
          <router-link to="/" class="menu__logo-text">
            <h1 class="logo__text">Ardor Photographer</h1>
          </router-link>
        </div>
        <div class="menu__list">
          <v-menu open-on-hover offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-text class="menu__list-link" v-bind="attrs" v-on="on">
                For Clients
              </v-text>
            </template>

            <v-list dark class="d-flex flex-column">
              <router-link to="/ClientPrice" class="menu__list-link">
                Price
              </router-link>
              <router-link to="/" class="menu__list-link">
                Feedback
              </router-link>
              <router-link to="/" class="menu__list-link"> Brand </router-link>
            </v-list>
          </v-menu>
          <router-link to="/" class="menu__list-link"> Other </router-link>
          <router-link to="/AboutMe" class="menu__list-link">
            Contacts
          </router-link>
        </div>
      </nav>
    </div>
    <ardorSideBar />
  </header>
</template>

<script>
import ardorSideBar from "@/components/ardorSideBar.vue";
export default {
  components: {
    ardorSideBar,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/_mixins.scss";
@import "../assets/_variables.scss";

.header {
  position: relative;
  // overflow: hidden;
  width: 100%;
  z-index: 2;
  background-color: black;

  .header__container {
    z-index: 5;
    position: relative;
    @include container($xlC);
    width: 95%;
    padding: 10px 0;
    margin: 0 auto;

    @include maxWidth($lg) {
      max-width: $lgC;
    }

    @include maxWidth($md) {
      max-width: $md;
    }
    @include maxWidth($s) {
      max-width: $s;
    }
    @include maxWidth($xs) {
      max-width: $xs;
    }

    &-menu {
      @include flex-between;
      width: 100%;
      align-items: center;

      @include maxWidth(850px) {
        display: none;
      }
      .menu__list {
        @include flexStart;

        &-item {
          margin: 3px 0;
          list-style: none;
          position: relative;

          & + .menu__list-item {
            margin-top: 3px;
            margin-left: 15px;
          }
          &:last-child {
            margin-right: 0;
          }
        }

        &-link {
          color: white;
          text-decoration: none;
          overflow: hidden;
          font-size: 12px;
          line-height: 2;
          font-weight: 500;
          text-transform: uppercase;
          font-family: "Museo Sans";
          padding: 5px;
        }

        &--hover {
          position: relative;
          opacity: 0;
          @include transition(0.3s);

          @include transition(1s);
          .menu__list-item {
            margin: 5px 0 5px;

            @include transition(0.3s);
          }
        }

        .menu__list-item--hover:hover .menu__list--hover {
          opacity: 1;
          top: 0;
          background-color: black;
        }
      }

      .menu__logo {
        position: relative;
        @include flex-center-column;
        &-img {
          //   min-width: 200px;
          //   width: 400px;
          //   position: absolute;
          margin-top: 60vh;
          @include flexCenter;

          @include maxWidth(1780px) {
            margin-top: 55vh;
          }

          @include maxWidth(1680px) {
            margin-top: 50vh;
          }

          @include maxWidth(1360px) {
            margin-top: 40vh;
          }

          @include maxWidth(780px) {
            margin-top: 30vh;
          }
        }

        &-text {
          //   min-width: 200px;
          //   position: absolute;
          //   top: 30px;
          text-decoration: none;
          color: $clText;
          text-transform: uppercase;
          font-family: "Cormorant SC", serif;
          font-weight: 300;
          font-size: 22px;

          @include maxWidth(1200px) {
            font-weight: 300;
            font-size: 15px;
          }
          @include maxWidth(900px) {
            font-weight: 300;
            font-size: 13px;
          }
          @include maxWidth(800px) {
            font-weight: 300;
            font-size: 11px;
          }

          @include maxWidth(600px) {
            font-weight: 300;
            font-size: 10px;
          }
          .logo__text {
            margin-bottom: 0 !important;
          }
        }
      }
    }
  }
}
.menu__list-link {
  color: white;
  text-decoration: none;
  overflow: hidden;
  font-size: 12px;
  line-height: 2;
  font-weight: 500;
  text-transform: uppercase;
  font-family: "Museo Sans";
  padding: 5px 10px;
}
</style>
