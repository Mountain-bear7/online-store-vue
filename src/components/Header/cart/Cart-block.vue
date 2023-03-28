<template>
  <div>
    <h1>Cart</h1>
    <CartItem
        v-for="item in cart_data"
        :key="item.id"
        :cartItem_data="item"
        @removeProductCart="removeProductCart(index)"
    />
  </div>
</template>

<script>
import CartItem from "@/components/Header/cart/cart-item/Cart-item.vue";
import {mapActions} from "vuex";
// import index from "vuex";
export default {
  name: 'Cart-block',
  // computed: {
  //   index() {
  //     return index
  //   }
  // },
  components:{
    CartItem
  },
  props:{
    cart_data:{
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods:{
    ...mapActions([
       'removeCart'
    ]),
    removeProductCart(index){
      this.removeCart(index)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
