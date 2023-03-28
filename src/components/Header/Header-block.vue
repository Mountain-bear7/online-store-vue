<template>
  <div class="header">
    <MenuBlock/>
    <SearchBlock/>
    <CartBlock
        v-if="basket.length"
        :cart_data="basket"
    />
  </div>
</template>

<script>
import MenuBlock from "@/components/Header/menu/Menu-block.vue";
import SearchBlock from "@/components/Header/search/Search-block.vue";
import CartBlock from "@/components/Header/cart/Cart-block.vue";
import {mapGetters} from "vuex";

export default {
  name: 'Header-block',
  components: {
    CartBlock,
    SearchBlock,
    MenuBlock
  },
  computed:{
    ...mapGetters([
        'basket'
    ])
  }
}
</script>

<style scoped lang="scss">
  .header{
    display: flex;
    justify-content: space-between;
    //margin: 20px 24px;
  }
</style>
