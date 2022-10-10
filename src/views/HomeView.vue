<template>
  <div class="home">
    <ardorHeader />
    <ardorSections />
    <ardorFooter />
  </div>
</template>

<script>
import ardorHeader from "@/components/ardorHeader.vue";
import ardorSections from "@/components/ardorSections.vue";
import ardorFooter from "@/components/ardorFooter.vue";

export default {
  components: {
    ardorSections,
    ardorHeader,
    ardorFooter,
  },
};
</script>
