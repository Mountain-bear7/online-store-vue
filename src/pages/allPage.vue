<template>
  <div class="main-page">
    <router-view></router-view>
    <mainPage/>
    <CartBlock
        v-if="basket.length"
        :cart_data="basket"
    />
  </div>
</template>

<script>

 import mainPage from "@/pages/mainPage.vue";
 import CartBlock from "@/components/cart/Cart-block.vue";
 import {mapGetters} from "vuex";

export default {
  name: 'allPage',
  components: {
    mainPage,
    CartBlock
  },
  computed:{
    ...mapGetters([
      'basket'
    ])
  }
}
</script>

<style scoped lang="scss">

.main-page{ margin: 0 50px; }

</style>
