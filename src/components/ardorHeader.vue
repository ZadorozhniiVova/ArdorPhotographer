<template>
  <div class="ardorHeader">
    <header class="header">
      <video
        id="background-video"
        autoplay
        loop
        muted
        poster="https://assets.codepen.io/6093409/river.jpg"
      >
        <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
      </video>
      <div class="header__container">
        <nav class="header__container-menu">
          <ul class="menu__list">
            <li class="menu__list-item">
              <router-link to="/" class="menu__list-link"> Home </router-link>
            </li>
            <li class="menu__list-item">
              <router-link to="/AboutMe" class="menu__list-link">
                About me
              </router-link>
            </li>
            <li class="menu__list-item menu__list-item--hover">
              <a href="#" class="menu__list-link"> Portfolio </a>
              <ul class="menu__list--hover">
                <li class="menu__list-item">
                  <a
                    class="menu__list-link"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Weeding
                  </a>
                </li>
                <li class="menu__list-item">
                  <a
                    class="menu__list-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                  >
                    Lovestory
                  </a>
                </li>
                <li class="menu__list-item">
                  <a
                    class="menu__list-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                  >
                    Family
                  </a>
                </li>
                <li class="menu__list-item">
                  <a
                    class="menu__list-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                  >
                    Portrait
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="menu__logo">
            <router-link to="/" class="menu__logo-text">
              <h1 class="logo__text">Ardor Photographer</h1>
            </router-link>
            <router-link to="/" class="menu__logo-img">
              <svg class="logo__img">
                <use xlink:href="../assets/img/sprite.svg#logo"></use>
              </svg>
            </router-link>
          </div>
          <ul class="menu__list">
            <li class="menu__list-item menu__list-item--hover">
              <a href="#" class="menu__list-link"> For Clients </a>
              <ul class="menu__list--hover">
                <li class="menu__list-item">
                  <router-link to="/ClientPrice" class="menu__list-link">
                    Price
                  </router-link>
                </li>
                <!-- <li class="menu__list-item">
                                <a class="menu__list-link" target="_blank" rel="noopener noreferrer" href="#">
                                    Blog
                                </a>
                            </li> -->
                <li class="menu__list-item">
                  <a
                    class="menu__list-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                  >
                    Feedback
                  </a>
                </li>
                <li class="menu__list-item">
                  <a
                    class="menu__list-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                  >
                    Brand
                  </a>
                </li>
              </ul>
            </li>
            <li class="menu__list-item">
              <a href="#" class="menu__list-link"> Other </a>
            </li>
            <li class="menu__list-item">
              <a href="./contacts.html" class="menu__list-link"> Contacts </a>
            </li>
          </ul>
        </nav>
      </div>
      <ardorSideBar />
    </header>
  </div>
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

*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#background-video {
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -2;
}

.header {
  margin: auto;
  position: relative;
  overflow: hidden;
  width: 100%;
  z-index: 20;

  .header__bg {
    position: absolute;
    @include scale(0.5);
    z-index: -1;

    @include maxWidth($lg) {
      @include scale(0.4);
    }
    @include maxWidth(1130px) {
      @include scale(0.35);
    }
    @include maxWidth($md) {
      @include scale(0.3);
    }
    @include maxWidth($s) {
      @include scale(0.25);
    }
    @include maxWidth($xs) {
      @include scale(0.15);
    }
  }
  .header__bg-main {
    display: flex;
  }
  .header__text {
    padding-left: 80px;
    z-index: 3;
    position: absolute;
    left: 20px;
    top: 70vh;

    .header__title {
      margin-bottom: 15px;
      font-family: "Cormorant Garamond", serif;
      font-size: 74px;
      font-weight: 400;
      line-height: 84px;
      color: white;

      @include maxWidth($s) {
        font-size: 36px;
        line-height: 42px;
      }
    }

    .header__date {
      font-family: "Museo Sans", sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.75;
      color: black;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  .header__container {
    z-index: 5;
    position: relative;
    @include container($xlC);
    height: 100vh;
    width: 95%;

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
      padding-top: 30px;
      @include flex-between;
      width: 100%;
      align-items: flex-start;

      @include maxWidth(850px) {
        display: none;
      }
      .menu__list {
        @include flexStart;

        &-item {
          margin: 5px 0;
          list-style: none;
          position: relative;
          & + .menu__list-item {
            margin-top: 5px;
            margin-left: 15px;
          }
          &:last-child {
            margin-right: 0;
          }
        }

        &-link {
          color: $clText;
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
        }
      }
    }
  }
}
</style>
