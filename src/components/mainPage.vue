<template>
  <div class="main-page">
<!--    <router-view></router-view>-->
    <HeaderBlock/>
    <CatalogBlock/>
  </div>
</template>

<script>
import HeaderBlock from "@/components/Header/Header-block.vue";
import CatalogBlock from "@/components/catalog/Catalog-block.vue";

export default {
  name: 'mainPage',
  components: {
    HeaderBlock,
    CatalogBlock
  },
}
</script>

<style scoped lang="scss">

.main-page{ margin: 0 50px; }

</style>
