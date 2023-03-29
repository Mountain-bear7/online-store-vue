<template>
  <div>
    <CartItem
        v-for="item in cart_data"
        :key="item.id"
        :cartItem_data="item"
        @removeProductCart="removeProductCart(index)"
    />
  </div>
</template>

<script>
import CartItem from "@/components/cart/cart-item/Cart-item.vue";
import {mapActions} from "vuex";
export default {
  name: 'Cart-block',

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
h1{
  text-align: center;
}
</style>