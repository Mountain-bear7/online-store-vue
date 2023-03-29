<template>
  <div class="cart-item">
    <img
        class="cart-item__image"
        :src=" require('@/assets/product-img/' + cartItem_data.image) "
        alt=""
    >
    <div class="cart-item__info">
      <p>{{cartItem_data.name}}</p>
      <p>Price: {{cartItem_data.price}}</p>
      <p>Category: {{cartItem_data.category}}</p>
    </div>
    <div class="cart-item__quantity"></div>
    <button class="cart-item__btn" @click="removeProductCart">Remove</button>

  </div>
</template>

<script>
export default {
  name: 'Cart-item',
  props:{
    cartItem_data:{
      type: Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    removeProductCart(){
      this.$emit('removeProductCart')
    }
  }
}
</script>

<style lang="scss">
.cart-item{
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 0 15px 0 #8c8989;
  padding: 50px 50px;
  margin: 40px;
  text-align: center;
  border-radius: 30px;

  &__image{
    width: 100px;
  }
  &__btn{
    padding: 15px;
    background-color: white;
    border-color: #b3b3b3;
    border-radius: 15px;
    cursor: pointer;
  }
}
</style>
