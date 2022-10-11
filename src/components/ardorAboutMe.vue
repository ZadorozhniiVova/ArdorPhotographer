<template>
  <div class="container__content-box">
    <div class="about__box-left">
      <img
        class="about__img"
        src="../assets/img/Maksim_i_Natasha_104.jpg"
        alt=""
      />
      <p class="about__name">Olya Ardor</p>
    </div>
    <div class="about__box-right">
      <h2 class="container__content-title">About Me</h2>
      <p class="about__text">
        Hello, my name is Olya - I am a photographer from Ukraine, from sunny
        Odessa.
      </p>
      <p class="about__text">About my photo</p>
      <p class="about__text">
        I want to tell about people, about their history, who they are, how they
        laugh, how they love and enjoy life, show them sincere, alive with a
        bright gleam in their eyes, real. I want to tell about you through a
        photo. If this is a wedding, through the years, after reviewing the
        album, you were able to return to that day again and smile. A portrait
        shooting - to see yourself as beautiful, unique, as I see each person in
        the frame, love story - to show feelings through a frozen moment. And if
        it is a family shooting is to preserve the happy memories of parents
        with them children, which are growing up so fast.
      </p>
      <p class="about__text">
        Naturalness is my priority, because it is what gives life to the frame.
        A simple photograph that conveys feelings through light, play of color,
        composition and a bit of magic.
      </p>
      <p class="about__text">
        My photo is about people, about their life - about beauty. Let yourself
        be who you are.
      </p>
      <div class="about__signature">
        <svg class="logo__img">
          <use
            class="logo__img-sign"
            xlink:href="../assets/img/sprite.svg#logo--black"
          ></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/_mixins.scss";
@import "../assets/_variables.scss";
.container__content-box {
  @include container($xlC);
  width: 95%;
  height: 100vh;
  display: grid;
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;
  margin: 0 auto;
  grid-template-columns: 0.3fr 0.7fr;
  grid-auto-rows: 90%;
  gap: 10px;
  align-content: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
  @include maxWidth($md) {
    grid-template-columns: 0.4fr 0.6fr;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  @include maxWidth($s) {
    @include flex-center-column;
    height: auto;
  }

  .about__box-left {
    width: 100%;
    @include flex-center-column;
    height: 100%;
    @include maxWidth($s) {
      width: 50%;
    }
    .about__img {
      height: 100%;
    }
    .about__name {
      font-size: 22px;
      line-height: 35px;
      font-weight: 500;
      text-transform: uppercase;
      font-family: "Times New Roman", sans-serif;
    }
  }
  .about__box-right {
    @include flex-left-column;
    @include maxWidth($s) {
      text-align: center;
      width: 100%;
    }
    .container__content-title {
      font-family: "Times New Roman", sans-serif;
      width: 100%;
    }
    .about__text {
      width: 100%;
      font-family: "Times New Roman", sans-serif;
      line-height: 20px;
      font-size: 15px;
      letter-spacing: 1.1px;
      margin-bottom: 0 !important;
      & + .about__text {
        margin-top: 10px;
      }

      @include maxWidth($md) {
        line-height: 16px;
        font-size: 12px;
      }
    }
    .about__signature {
      align-self: flex-end;
    }
  }
}
</style>
