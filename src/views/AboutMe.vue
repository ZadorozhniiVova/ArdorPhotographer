<template>
  <div class="componentContainer">
    <ardorHeaderShort />
    <ardorAboutMe />
    <ardorFooter />
  </div>
</template>

<script>
import ardorHeaderShort from "@/components/ardorHeaderShort.vue";
import ardorAboutMe from "@/components/ardorAboutMe.vue";
import ardorFooter from "@/components/ardorFooter.vue";
export default {
  components: {
    ardorHeaderShort,
    ardorAboutMe,
    ardorFooter,
  },
};
</script>

<style>
.componentContainer {
  width: 100%;
}
</style>
