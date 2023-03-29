<template>
  <div>
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
    CatalogBlock,
    HeaderBlock
  }
}
</script>

<style scoped lang="scss">

</style>
