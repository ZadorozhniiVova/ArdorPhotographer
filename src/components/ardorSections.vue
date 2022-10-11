<template>
  <div class="container__content" id="portfolio">
    <div class="content__box">
      <div class="container__content-item">
        <span class="content__item-title"> Wedding </span>
        <div href="#" class="content">
          <a href="#" target="_blank" class="container__content-link">
            <img
              src="../assets/img/Maksim_i_Natasha_35.jpg"
              alt=""
              class="content__link-bg"
            />
            <span class="content__link-text"> Choose &#8594; </span>
          </a>
          <Slider
            class="slider"
            animation="fade"
            :indicators="false"
            :control-btn="false"
            :duration="5000"
            :speed="1250"
            :interval="1000"
          >
            <SliderItem class="slider__item">
              <div href="#" target="_blank" class="slider__item-link">
                <img
                  src="../assets/img/portfolio/portrait/Kristina/Ardor (8).webp"
                  alt=""
                  class="slider__item-link-bg"
                />
              </div>
            </SliderItem>
            <SliderItem class="slider__item">
              <div href="#" target="_blank" class="slider__item-link">
                <img
                  src="../assets/img/portfolio/portrait/Kristina/Ardor (12).webp"
                  alt=""
                  class="slider__item-link-bg"
                />
              </div>
            </SliderItem>
            <SliderItem class="slider__item">
              <div href="#" target="_blank" class="slider__item-link">
                <img
                  src="../assets/img/portfolio/portrait/Kristina/Ardor (6).webp"
                  alt=""
                  class="slider__item-link-bg"
                />
              </div>
            </SliderItem>
          </Slider>
        </div>
      </div>
      <div class="container__content-item">
        <span class="content__item-title"> Lovestory </span>
        <div href="#" class="content">
          <a href="#" target="_blank" class="container__content-link">
            <img
              src="../assets/img/portfolio/LoveStory/VladAndLena/Ardor (23).jpg"
              alt=""
              class="content__link-bg"
            />
            <span class="content__link-text"> Choose &#8594; </span>
          </a>
          <Slider
            class="slider"
            animation="fade"
            :indicators="false"
            :control-btn="false"
            :duration="5000"
            :speed="1350"
            :interval="1100"
          >
            <SliderItem class="slider__item">
              <div href="#" target="_blank" class="slider__item-link">
                <img
                  src="../assets/img/portfolio/portrait/Kristina/Ardor (8).webp"
                  alt=""
                  class="slider__item-link-bg"
                />
              </div>
            </SliderItem>
            <SliderItem class="slider__item">
              <div href="#" target="_blank" class="slider__item-link">
                <img
                  src="../assets/img/portfolio/portrait/Kristina/Ardor (12).webp"
                  alt=""
                  class="slider__item-link-bg"
                />
              </div>
            </SliderItem>
            <SliderItem class="slider__item">
              <div href="#" target="_blank" class="slider__item-link">
                <img
                  src="../assets/img/portfolio/portrait/Kristina/Ardor (6).webp"
                  alt=""
                  class="slider__item-link-bg"
                />
              </div>
            </SliderItem>
          </Slider>
        </div>
      </div>
      <div class="container__content-item">
        <span class="content__item-title"> Family </span>
        <div href="#" class="content">
          <a href="#" target="_blank" class="container__content-link">
            <img
              src="../assets/img/portfolio/portrait/Kristina/Ardor (3).webp"
              alt=""
              class="content__link-bg"
            />
            <span class="content__link-text"> Choose &#8594; </span>
          </a>
          <Slider
            class="slider"
            animation="fade"
            :indicators="false"
            :control-btn="false"
            :duration="5000"
            :speed="1250"
            :interval="1150"
          >
            <SliderItem class="slider__item">
              <div href="#" target="_blank" class="slider__item-link">
                <img
                  src="../assets/img/portfolio/portrait/Kristina/Ardor (8).webp"
                  alt=""
                  class="slider__item-link-bg"
                />
              </div>
            </SliderItem>
            <SliderItem class="slider__item">
              <div href="#" target="_blank" class="slider__item-link">
                <img
                  src="../assets/img/portfolio/portrait/Kristina/Ardor (12).webp"
                  alt=""
                  class="slider__item-link-bg"
                />
              </div>
            </SliderItem>
            <SliderItem class="slider__item">
              <div href="#" target="_blank" class="slider__item-link">
                <img
                  src="../assets/img/portfolio/portrait/Kristina/Ardor (6).webp"
                  alt=""
                  class="slider__item-link-bg"
                />
              </div>
            </SliderItem>
          </Slider>
        </div>
      </div>
      <div class="container__content-item">
        <span class="content__item-title"> Portrait </span>
        <div href="#" class="content">
          <a href="#" target="_blank" class="container__content-link">
            <img
              src="../assets/img/portfolio/portrait/Kristina/Ardor (3).webp"
              alt=""
              class="content__link-bg"
            />
            <span class="content__link-text"> Choose &#8594; </span>
          </a>
          <Slider
            class="slider"
            animation="fade"
            :indicators="false"
            :control-btn="false"
            :duration="5000"
            :speed="1250"
            :interval="1250"
          >
            <SliderItem class="slider__item">
              <div href="#" target="_blank" class="slider__item-link">
                <img
                  src="../assets/img/portfolio/portrait/Kristina/Ardor (8).webp"
                  alt=""
                  class="slider__item-link-bg"
                />
              </div>
            </SliderItem>
            <SliderItem class="slider__item">
              <div href="#" target="_blank" class="slider__item-link">
                <img
                  src="../assets/img/portfolio/portrait/Kristina/Ardor (12).webp"
                  alt=""
                  class="slider__item-link-bg"
                />
              </div>
            </SliderItem>
            <SliderItem class="slider__item">
              <div href="#" target="_blank" class="slider__item-link">
                <img
                  src="../assets/img/portfolio/portrait/Kristina/Ardor (6).webp"
                  alt=""
                  class="slider__item-link-bg"
                />
              </div>
            </SliderItem>
          </Slider>
        </div>
      </div>
    </div>
    <div class="content__box-subtitle">
      <span class="content__box-title"> Let yourself be who you are. </span>
    </div>
  </div>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";
export default {
  data() {
    return {
      pauseOnHover: false,
      autoPlaying: true,
      internalAutoPlaying: true,
    };
  },
  components: {
    Slider,
    SliderItem,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/_mixins.scss";
@import "../assets/_variables.scss";

.container__content {
  width: 90%;
  padding-top: 50px;
  padding-bottom: 50px;
  @include flex-center-column;
  position: relative;
  margin: 0 auto;

  @include maxWidth($md) {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .content__box {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 150px;
    justify-content: center;
    align-content: start;
    justify-items: center;
    align-items: start;
    grid-auto-rows: max-content;
    gap: 10px;
    position: relative;
    @include maxWidth($s) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include maxWidth($xs) {
      grid-template-columns: repeat(1, 1fr);
    }
    .container__content-item {
      width: 100%;

      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      @include maxWidth($md) {
        margin-top: 20px;
      }

      .content__item-title {
        font-size: 20px;
        text-transform: uppercase;
        margin-bottom: 20px;

        @include maxWidth($s) {
          margin-bottom: 10px;
        }
      }

      .content {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
        .container__content-link {
          position: relative;
          overflow: hidden;
          width: 100%;
          min-height: 300px;
          height: 100%;
          @include flexCenter;
          text-decoration: none;
          @include transition(1s);
          opacity: 1;
          z-index: 5;

          &:hover {
            opacity: 0;
          }

          @include maxWidth($xs) {
            opacity: 0;
          }

          // &:hover .content__link-bg{
          //     transform: scale(1.15);
          //     -webkit-transform: scale(1.15);
          //     -moz-transform: scale(1.15);
          //     -ms-transform: scale(1.15);
          //     -o-transform: scale(1.15);
          // }

          .content__link-bg {
            position: relative;
            width: 100%;
            z-index: -1;
            @include scale(1.4);
            @include transition(1s);
          }

          .content__link-text {
            color: $clText;
            opacity: 1;
            position: absolute;
            bottom: 20px;
            @include transition(0.5s);
            text-transform: uppercase;
            font-size: 15px;
            z-index: 1;

            &:hover {
              font-size: 20px;
            }
            &:focus {
              font-size: 20px;
            }
          }

          &:hover .content__link-text {
            opacity: 1;
          }

          &:active .content__link-text {
            opacity: 1;
          }

          &--wedding {
            height: 411px;
          }

          @include maxWidth($s) {
            width: auto;

            height: auto;
          }
        }

        //Slider
        .v-window__container {
          min-hight: 100% !important;
          display: block !important;
        }
        .slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 100% !important;
          height: 100% !important;
          min-height: 100% !important;
          z-index: 1;

          &__item {
            height: 100%;
            width: 100%;

            &-link {
              width: 100%;

              &-bg {
                width: 100%;
              }
            }
          }
        }
      }

      // .container__content-link__prices {
      //   position: relative;
      //   overflow: hidden;
      //   width: 100%;
      //   min-height: 300px;
      //   height: 500px;
      //   @include flexCenter;
      //   text-decoration: none;
      //   @include transition(1s);
      //   opacity: 1;
      //   z-index: 1;

      //   .content__link-bg {
      //     position: relative;
      //     width: 100%;
      //     z-index: -1;
      //     @include scale(1.4);
      //     @include transition(1s);
      //   }

      //   .content__link-prices {
      //     color: $clText;
      //     position: absolute;
      //     bottom: 20px;
      //     @include transition(0.5s);
      //     text-transform: uppercase;
      //     font-size: 25px;
      //   }
      // }

      // &--w30 {
      //   width: 30%;
      // }
      // .container__content-desc {
      //   text-align: center;
      //   margin-top: 20px;
      //   background-color: rgba(0, 0, 0, 0.05);
      //   width: 100%;
      //   padding: 20px;
      //   height: 100%;

      //   .desc__text {
      //     font-family: "Museo Sans";
      //     color: black;
      //     font-size: 12px;
      //     font-weight: 300;
      //     text-transform: uppercase;
      //     margin-top: 7px;
      //   }
      // }
    }

    // .content__slider {
    //   min-width: 0;
    //   width: 100%;
    //   height: 100%;
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   z-index: 3;
    // }

    // &--evenly {
    //   justify-content: space-evenly;
    // }
    &-subtitle {
      color: black;
      font-size: 12px;
      line-height: 2;
      font-weight: 500;
      text-transform: uppercase;
      font-family: "Museo Sans";
      justify-content: center;
      margin-top: 0;
      margin-bottom: 10px;

      .content__box-title {
        color: black;
        text-transform: uppercase;
        font-family: "Cormorant SC", serif;
        font-weight: 700;
        font-size: 36px;
        justify-content: center;
      }
    }
    @include maxWidth($md) {
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
    }
  }

  // .content__box-title {
  //   width: 100%;
  //   &--between {
  //     justify-content: space-between;
  //   }

  //   &__text {
  //     text-align: center;
  //   }
  // }
  // .content__box-subtitle {
  //   display: block;
  // }

  // .content {
  //   position: relative;
  //   width: 100%;
  //   // min-height: 150px;
  //   // height: 500px;
  // }

  // .container__content-title {
  //   margin-bottom: 30px;
  //   font-size: 42px;
  //   line-height: 55px;
  //   font-weight: 500;
  //   text-transform: uppercase;
  //   font-family: "Times New Roman", sans-serif;
  //   width: 100%;
  //   text-align: center;
  // }

  // .container__content-box {
  //   @include maxWidth($md) {
  //     flex-direction: column;
  //     align-items: center;
  //   }
  //   .about__box-left {
  //     width: 30%;
  //     display: flex;
  //     flex-direction: column;
  //     align-items: center;
  //     justify-content: center;

  //     .about__img {
  //       width: 95%;

  //       @include maxWidth($md) {
  //         width: 60%;
  //       }
  //     }
  //     .about__name {
  //       font-size: 22px;
  //       line-height: 35px;
  //       font-weight: 500;
  //       text-transform: uppercase;
  //       font-family: "Times New Roman", sans-serif;
  //     }
  //     @include maxWidth($md) {
  //       display: flex;
  //       justify-content: center;
  //       align-items: center;
  //       flex-direction: column;
  //       width: 100%;
  //     }
  //   }

  //   .about__box-right {
  //     width: 60%;
  //     align-items: flex-start;
  //     margin-left: 50px;
  //     position: relative;
  //     @include maxWidth($s) {
  //       text-align: center;
  //     }

  //     @include maxWidth($s) {
  //       width: 100%;
  //     }

  //     @include maxWidth(1300px) {
  //       margin-left: 0;
  //     }
  //     .about__text {
  //       width: 100%;
  //       font-family: "Times New Roman", sans-serif;
  //       line-height: 20px;
  //       font-size: 15px;
  //       letter-spacing: 1.1px;
  //       & + .about__text {
  //         margin-top: 20px;
  //       }
  //     }
  //     .about__signature {
  //       width: 100%;
  //       margin: 20px 0;
  //       .logo__img {
  //         @include rotate(330deg);
  //       }
  //     }
  //   }
  // }
}
</style>
