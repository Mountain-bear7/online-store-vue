<template>
  <div class="header">
    <MenuBlock/>
    <SearchBlock/>
  </div>
</template>

<script>
import MenuBlock from "@/components/Header/menu/Menu-block.vue";
import SearchBlock from "@/components/Header/search/Search-block.vue";

export default {
  name: 'Header-block',
  components: {
    SearchBlock,
    MenuBlock
  },
}
</script>

<style scoped lang="scss">
  .header{
    display: flex;
    justify-content: space-between;
  }
</style>
