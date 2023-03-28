<template>
  <div class="catalog-item">
    <img
        :src=" require('../../../assets/product-img/' + product_data.image) "
        alt="img"
        width="100"
        height="130"
    >
    <p>{{product_data.name}}</p>
    <p>Price: {{product_data.price}} ₽</p>
    <p>Category: {{product_data.category}}</p>
    <button class="catalog-item__addBtn" @click="addCart">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: 'Catalog-item',
  props:{
    product_data:{
      type: Object,
      default(){
        return{}
      }
    }
  },
  data(){
    return{}
  },
  methods:{
    addCart(){
      this.$emit('addCart',this.product_data)
    }
  }
}

</script>

<style lang="scss">
  .catalog-item{
    flex-basis: 20%;
    box-shadow: 0 0 15px 0 #8c8989;
    padding: 24px;
    margin: 40px;
    text-align: center;
    border-radius: 30px;

    &__addBtn{
      padding: 15px;
      background-color: white;
      border-color: #b3b3b3;
      border-radius: 15px;
      cursor: pointer;
    }
  }
</style>
