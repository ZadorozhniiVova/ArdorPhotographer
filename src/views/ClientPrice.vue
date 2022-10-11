<template>
  <div class="componentContainer">
    <ardorHeaderShort />
    <ardorPrice />
    <ardorFooter />
  </div>
</template>

<script>
import ardorHeaderShort from "@/components/ardorHeaderShort.vue";
import ardorPrice from "@/components/ardorPrice.vue";
import ardorFooter from "@/components/ardorFooter.vue";
export default {
  components: {
    ardorHeaderShort,
    ardorPrice,
    ardorFooter,
  },
};
</script>

<style></style>
