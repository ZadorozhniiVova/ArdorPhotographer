<template>
  <footer class="footer">
    <div class="footer__container">
      <router-link to="/" class="footer__title">
        Ardor Photographer
      </router-link>

      <nav class="footer__menu">
        <ul class="menu__list">
          <li class="menu__list-el">
            <a
              class="menu__link"
              href="#"
              target="_blank"
              rel="noindex nofollow"
            >
              Portfolio
            </a>
          </li>
          <li class="menu__list-el">
            <router-link to="/AboutMe" class="menu__link">
              About me
            </router-link>
          </li>
          <li class="menu__list-el">
            <router-link to="/ClientPrice" class="menu__link">
              Price
            </router-link>
          </li>
          <li class="menu__list-el">
            <a
              class="menu__link"
              href="#"
              target="_blank"
              rel="noindex nofollow"
            >
              Feedback
            </a>
          </li>
          <li class="menu__list-el">
            <a
              class="menu__link"
              href="./contacts.html"
              target="_blank"
              rel="noindex nofollow"
            >
              Contacts
            </a>
          </li>
          <br class="break" />
        </ul>
      </nav>
      <ul class="socials__list flex__center-space__between">
        <li class="socials__list-el">
          <a class="socials__link" href="mailto:ardor.photographer@gmail.com">
            <svg
              class="social__icon"
              height="30px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 483.3 483.3"
            >
              <path
                d="M424.3,57.75H59.1c-32.6,0-59.1,26.5-59.1,59.1v249.6c0,32.6,26.5,59.1,59.1,59.1h365.1c32.6,0,59.1-26.5,59.1-59.1
			v-249.5C483.4,84.35,456.9,57.75,424.3,57.75z M456.4,366.45c0,17.7-14.4,32.1-32.1,32.1H59.1c-17.7,0-32.1-14.4-32.1-32.1v-249.5
			c0-17.7,14.4-32.1,32.1-32.1h365.1c17.7,0,32.1,14.4,32.1,32.1v249.5H456.4z"
              />
              <path
                d="M304.8,238.55l118.2-106c5.5-5,6-13.5,1-19.1c-5-5.5-13.5-6-19.1-1l-163,146.3l-31.8-28.4c-0.1-0.1-0.2-0.2-0.2-0.3
			c-0.7-0.7-1.4-1.3-2.2-1.9L78.3,112.35c-5.6-5-14.1-4.5-19.1,1.1c-5,5.6-4.5,14.1,1.1,19.1l119.6,106.9L60.8,350.95
			c-5.4,5.1-5.7,13.6-0.6,19.1c2.7,2.8,6.3,4.3,9.9,4.3c3.3,0,6.6-1.2,9.2-3.6l120.9-113.1l32.8,29.3c2.6,2.3,5.8,3.4,9,3.4
			c3.2,0,6.5-1.2,9-3.5l33.7-30.2l120.2,114.2c2.6,2.5,6,3.7,9.3,3.7c3.6,0,7.1-1.4,9.8-4.2c5.1-5.4,4.9-14-0.5-19.1L304.8,238.55z"
              />
            </svg>
          </a>
        </li>
        <li class="socials__list-el">
          <a class="socials__link" href="tel:+380936568354">
            <svg
              class="social__icon"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 22.75H9C8.00544 22.75 7.05161 22.3549 6.34835 21.6517C5.64509 20.9484 5.25 19.9946 5.25 19V5C5.25 4.00544 5.64509 3.05161 6.34835 2.34835C7.05161 1.64509 8.00544 1.25 9 1.25H15C15.9946 1.25 16.9484 1.64509 17.6517 2.34835C18.3549 3.05161 18.75 4.00544 18.75 5V19C18.75 19.9946 18.3549 20.9484 17.6517 21.6517C16.9484 22.3549 15.9946 22.75 15 22.75ZM9 2.75C8.40326 2.75 7.83097 2.98705 7.40901 3.40901C6.98705 3.83097 6.75 4.40326 6.75 5V19C6.75 19.5967 6.98705 20.169 7.40901 20.591C7.83097 21.0129 8.40326 21.25 9 21.25H15C15.5967 21.25 16.169 21.0129 16.591 20.591C17.0129 20.169 17.25 19.5967 17.25 19V5C17.25 4.40326 17.0129 3.83097 16.591 3.40901C16.169 2.98705 15.5967 2.75 15 2.75H9Z"
              />
              <path
                d="M13 19.75H11C10.8011 19.75 10.6103 19.671 10.4697 19.5303C10.329 19.3897 10.25 19.1989 10.25 19C10.25 18.8011 10.329 18.6103 10.4697 18.4697C10.6103 18.329 10.8011 18.25 11 18.25H13C13.1989 18.25 13.3897 18.329 13.5303 18.4697C13.671 18.6103 13.75 18.8011 13.75 19C13.75 19.1989 13.671 19.3897 13.5303 19.5303C13.3897 19.671 13.1989 19.75 13 19.75Z"
              />
            </svg>
          </a>
        </li>
        <li class="socials__list-el">
          <a
            class="socials__link"
            href="https://www.instagram.com/ardor.photographer/"
            target="_blank"
            rel="noindex noffollow"
          >
            <svg
              class="social__icon"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.46494 1.066C8.63828 1.01222 9.01228 1 12 1C14.9883 1 15.3617 1.01283 16.5344 1.066C17.7059 1.11917 18.5059 1.30556 19.2056 1.5775C19.9395 1.85381 20.6043 2.28674 21.1538 2.84617C21.7133 3.3956 22.1463 4.06046 22.4225 4.79439C22.6944 5.49411 22.8802 6.29406 22.934 7.46494C22.9878 8.63828 23 9.01228 23 12C23 14.9877 22.9872 15.3617 22.934 16.5351C22.8808 17.7059 22.6944 18.5059 22.4225 19.2056C22.1414 19.9286 21.7649 20.5427 21.1538 21.1538C20.6044 21.7133 19.9395 22.1463 19.2056 22.4225C18.5059 22.6944 17.7059 22.8802 16.5351 22.934C15.3617 22.9878 14.9877 23 12 23C9.01228 23 8.63828 22.9872 7.46494 22.934C6.29406 22.8808 5.49411 22.6944 4.79439 22.4225C4.07144 22.1414 3.45728 21.7649 2.84617 21.1538C2.28664 20.6044 1.85368 19.9395 1.5775 19.2056C1.30556 18.5059 1.11978 17.7059 1.066 16.5351C1.01222 15.3617 1 14.9883 1 12C1 9.01167 1.01283 8.63828 1.066 7.46556C1.11917 6.29406 1.30556 5.49411 1.5775 4.79439C1.85381 4.06051 2.28674 3.39568 2.84617 2.84617C3.39559 2.28664 4.06045 1.85368 4.79439 1.5775C5.49411 1.30556 6.29406 1.11978 7.46494 1.066ZM16.4452 3.046C15.2853 2.99344 14.937 2.98183 12 2.98183C9.063 2.98183 8.71467 2.99344 7.55478 3.046C6.48228 3.09489 5.89989 3.27394 5.51244 3.42489C4.99911 3.62411 4.63244 3.86244 4.24744 4.24744C3.86306 4.63244 3.62411 4.99911 3.42489 5.51244C3.27394 5.89989 3.09489 6.48228 3.046 7.55478C2.99344 8.71467 2.98183 9.063 2.98183 12C2.98183 14.937 2.99344 15.2853 3.046 16.4452C3.09489 17.5177 3.27394 18.1001 3.42489 18.4876C3.60111 18.9654 3.88219 19.3976 4.24744 19.7526C4.60234 20.1178 5.03461 20.3989 5.51244 20.5751C5.89989 20.7261 6.48228 20.9051 7.55478 20.954C8.71467 21.0066 9.06239 21.0182 12 21.0182C14.9376 21.0182 15.2853 21.0066 16.4452 20.954C17.5177 20.9051 18.1001 20.7261 18.4876 20.5751C19.0009 20.3759 19.3676 20.1376 19.7526 19.7526C20.1178 19.3977 20.3989 18.9654 20.5751 18.4876C20.7261 18.1001 20.9051 17.5177 20.954 16.4452C21.0066 15.2853 21.0182 14.937 21.0182 12C21.0182 9.063 21.0066 8.71467 20.954 7.55478C20.9051 6.48228 20.7261 5.89989 20.5751 5.51244C20.3759 4.99911 20.1376 4.63244 19.7526 4.24744C19.3676 3.86306 19.0009 3.62411 18.4876 3.42489C18.1001 3.27394 17.5177 3.09489 16.4452 3.046ZM10.5955 15.3909C11.0408 15.5754 11.518 15.6703 12 15.6703C12.9735 15.6703 13.907 15.2836 14.5953 14.5953C15.2837 13.907 15.6704 12.9734 15.6704 12C15.6704 11.0266 15.2837 10.093 14.5953 9.40468C13.907 8.71636 12.9735 8.32966 12 8.32966C11.518 8.32966 11.0408 8.4246 10.5955 8.60905C10.1501 8.7935 9.74553 9.06385 9.40471 9.40468C9.06389 9.7455 8.79353 10.1501 8.60908 10.5954C8.42463 11.0407 8.3297 11.518 8.3297 12C8.3297 12.482 8.42463 12.9593 8.60908 13.4046C8.79353 13.8499 9.06389 14.2545 9.40471 14.5953C9.74553 14.9361 10.1501 15.2065 10.5955 15.3909ZM8.00205 8.00201C9.06238 6.94168 10.5005 6.34599 12 6.34599C13.4996 6.34599 14.9377 6.94168 15.998 8.00201C17.0583 9.06234 17.654 10.5005 17.654 12C17.654 13.4995 17.0583 14.9376 15.998 15.998C14.9377 17.0583 13.4996 17.654 12 17.654C10.5005 17.654 9.06238 17.0583 8.00205 15.998C6.94172 14.9376 6.34603 13.4995 6.34603 12C6.34603 10.5005 6.94172 9.06234 8.00205 8.00201ZM18.9077 7.18838C19.1583 6.93773 19.2991 6.59779 19.2991 6.24333C19.2991 5.88886 19.1583 5.54892 18.9077 5.29828C18.657 5.04764 18.3171 4.90683 17.9626 4.90683C17.6082 4.90683 17.2682 5.04764 17.0176 5.29828C16.7669 5.54892 16.6261 5.88886 16.6261 6.24333C16.6261 6.59779 16.7669 6.93773 17.0176 7.18838C17.2682 7.43902 17.6082 7.57983 17.9626 7.57983C18.3171 7.57983 18.657 7.43902 18.9077 7.18838Z"
              />
            </svg>
          </a>
        </li>
        <li class="socials__list-el">
          <a class="socials__link" href="tg://resolve?domain=ArdorPhotographer">
            <svg
              class="social__icon"
              width="30px"
              height="30px"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 189.473 189.473"
            >
              <path
                d="M152.531,179.476c-1.48,0-2.95-0.438-4.211-1.293l-47.641-32.316l-25.552,18.386c-2.004,1.441-4.587,1.804-6.914,0.972
		c-2.324-0.834-4.089-2.759-4.719-5.146l-12.83-48.622L4.821,93.928c-2.886-1.104-4.8-3.865-4.821-6.955
		c-0.021-3.09,1.855-5.877,4.727-7.02l174.312-69.36c0.791-0.336,1.628-0.53,2.472-0.582c0.302-0.018,0.605-0.018,0.906-0.001
		c1.748,0.104,3.465,0.816,4.805,2.13c0.139,0.136,0.271,0.275,0.396,0.42c1.11,1.268,1.72,2.814,1.835,4.389
		c0.028,0.396,0.026,0.797-0.009,1.198c-0.024,0.286-0.065,0.571-0.123,0.854L159.898,173.38c-0.473,2.48-2.161,4.556-4.493,5.523
		C154.48,179.287,153.503,179.476,152.531,179.476z M104.862,130.579l42.437,28.785L170.193,39.24l-82.687,79.566l17.156,11.638
		C104.731,130.487,104.797,130.533,104.862,130.579z M69.535,124.178l5.682,21.53l12.242-8.809l-16.03-10.874
		C70.684,125.521,70.046,124.893,69.535,124.178z M28.136,86.782l31.478,12.035c2.255,0.862,3.957,2.758,4.573,5.092l3.992,15.129
		c0.183-1.745,0.974-3.387,2.259-4.624L149.227,38.6L28.136,86.782z"
              />
            </svg>
          </a>
        </li>
        <li class="socials__list-el">
          <a class="socials__link" href="viber://chat/?number=380936568354">
            <svg
              class="social__icon"
              width="30px"
              height="30px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.198 0.005c-2.568 0.031-8.089 0.453-11.177 3.286-2.297 2.276-3.099 5.641-3.193 9.802-0.078 4.146-0.172 11.932 7.333 14.052v3.229c0 0-0.047 1.292 0.807 1.557 1.052 0.333 1.651-0.661 2.651-1.729l1.865-2.109c5.135 0.427 9.068-0.557 9.521-0.703 1.042-0.333 6.911-1.083 7.87-8.87 0.984-8.042-0.479-13.109-3.12-15.401h-0.016c-0.797-0.734-4-3.068-11.156-3.094 0 0-0.531-0.036-1.385-0.021zM15.286 2.266c0.729-0.005 1.172 0.026 1.172 0.026 6.057 0.016 8.948 1.839 9.63 2.453 2.224 1.906 3.37 6.474 2.531 13.188-0.797 6.51-5.557 6.922-6.438 7.203-0.375 0.12-3.839 0.974-8.203 0.693 0 0-3.25 3.922-4.266 4.932-0.161 0.177-0.349 0.229-0.469 0.203-0.172-0.042-0.224-0.255-0.214-0.547l0.031-5.359c-6.365-1.76-5.99-8.401-5.922-11.87 0.078-3.469 0.729-6.307 2.667-8.229 2.609-2.359 7.297-2.677 9.479-2.693zM15.766 5.734c-0.219-0.005-0.401 0.177-0.401 0.396 0 0.224 0.182 0.401 0.401 0.401 2.005-0.036 3.938 0.724 5.375 2.12 1.453 1.411 2.161 3.307 2.188 5.786 0 0.219 0.177 0.401 0.401 0.401v-0.016c0.219 0 0.401-0.177 0.401-0.396 0.099-2.359-0.776-4.651-2.417-6.349-1.583-1.547-3.589-2.344-5.948-2.344zM10.495 6.651c-0.281-0.042-0.573 0.016-0.818 0.161h-0.021c-0.542 0.318-1.047 0.719-1.526 1.255-0.365 0.422-0.563 0.849-0.615 1.26-0.031 0.245-0.010 0.49 0.063 0.724l0.026 0.016c0.411 1.208 0.948 2.37 1.604 3.464 0.844 1.536 1.885 2.958 3.094 4.229l0.036 0.052 0.057 0.042 0.036 0.042 0.042 0.036c1.276 1.214 2.698 2.255 4.24 3.109 1.76 0.958 2.828 1.411 3.469 1.599v0.010c0.188 0.057 0.359 0.083 0.531 0.083 0.547-0.042 1.063-0.26 1.469-0.63 0.521-0.469 0.932-0.984 1.24-1.531v-0.010c0.307-0.578 0.203-1.125-0.24-1.495-0.885-0.776-1.849-1.464-2.865-2.057-0.682-0.37-1.375-0.146-1.656 0.229l-0.599 0.755c-0.307 0.375-0.865 0.323-0.865 0.323l-0.016 0.010c-4.161-1.063-5.271-5.276-5.271-5.276s-0.052-0.573 0.333-0.865l0.75-0.604c0.359-0.292 0.609-0.984 0.224-1.667-0.589-1.021-1.276-1.979-2.052-2.865-0.167-0.208-0.406-0.349-0.672-0.401zM16.458 7.839c-0.531 0-0.531 0.802 0.005 0.802 1.333 0.021 2.604 0.573 3.531 1.531 0.844 0.932 1.281 2.172 1.198 3.427 0.005 0.219 0.182 0.396 0.401 0.396l0.016 0.021c0.219 0 0.401-0.182 0.401-0.401 0.036-1.589-0.458-2.922-1.427-3.99-0.974-1.068-2.333-1.667-4.068-1.786-0.021 0-0.036 0-0.057 0zM17.115 9.995c-0.547-0.016-0.568 0.802-0.026 0.818 1.318 0.068 1.958 0.734 2.042 2.104 0.005 0.219 0.182 0.391 0.396 0.391h0.016c0.224-0.010 0.401-0.203 0.385-0.427-0.094-1.786-1.068-2.792-2.797-2.885-0.005 0-0.010 0-0.016 0z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/_mixins.scss";
@import "../assets/_variables.scss";
.footer {
  background-color: black;
  padding: 0 !important;
  z-index: 10;

  .footer__container {
    @include container($xlC);
    @include flexCenter;
    flex-direction: column;
    width: 95%;
    padding: 20px 0;

    @include maxWidth($lg) {
      max-width: $lgC;
    }

    @include maxWidth($md) {
      padding: 20px 0;
      max-width: $md;
    }
    @include maxWidth($s) {
      max-width: $s;
    }
    @include maxWidth($xs) {
      max-width: $xs;
    }

    .footer__title {
      text-decoration: none;
      color: $clText;
      text-transform: uppercase;
      font-family: "Cormorant SC", serif;
      font-weight: 300;
      font-size: 20px;
      margin-bottom: 20px;
    }

    .footer__menu {
      margin-bottom: 20px;

      .menu__list {
        @include flexCenter;
        width: 100%;
        padding-left: 0px !important;

        @include maxWidth($s) {
          flex-direction: column;

          .break {
            margin-top: 20px;
            width: 300%;
            content: "";
            border-bottom: white solid 1px;
          }
        }
        .menu__list-el {
          margin: 0 15px;

          @include maxWidth($s) {
            margin: 0 7px;
          }

          & + .menu__list-el {
            @include maxWidth($s) {
              margin-top: 30px;
            }
          }
          .menu__link {
            color: $clText;
            text-decoration: none;
            overflow: hidden;
            font-size: 12px;
            line-height: 2;
            font-weight: 500;
            text-transform: uppercase;
            font-family: "Museo Sans";
            @include transition(0.3s);

            @include maxWidth($s) {
              font-size: 10px;
            }

            &:hover {
              color: grey;
            }
          }
        }
      }
    }

    .socials__list {
      width: 250px;
      @include flex-between;
      padding-left: 0 !important;
      margin-bottom: 0 !important;
      .socials__list-el {
        width: 30px;

        .socials__link {
          display: flex;
          align-items: center;
          justify-content: center;

          .social__icon {
            fill: white;
            @include transition(0.3s);
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        &:hover .socials__link > .social__icon {
          fill: darkgray;
        }
        &:focus .socials__link > .social__icon {
          fill: darkgray;
        }
      }
    }
  }
}
</style>
