<template>
  <div class="ardorSideBar">
    <b-button v-b-toggle.sidebar-backdrop class="transparent"
      ><b-icon
        icon="list"
        font-scale="2.5"
        
      ></b-icon
    ></b-button>

    <b-sidebar
      id="sidebar-backdrop"
      title="Sidebar with backdrop"
      :backdrop-variant="variant"
      backdrop
      shadow
    >
      <div class="px-3 py-2">
        <b-form-group label="Backdrop variant" label-for="backdrop-variant">
        </b-form-group>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      variant: "dark",
      isTransformMenuButton: false
    };
  },
  methods: {

    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_mixins.scss";
@import "../assets/_variables.scss";
.ardorSideBar {
  z-index: 999;
  display: none;
  @include maxWidth(850px) {
    display: block;
    position: fixed;
    right: 10px;
    top: 10px;
  }
}
</style>
