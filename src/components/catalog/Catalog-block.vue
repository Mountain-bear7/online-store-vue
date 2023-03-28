<template>
  <div class="catalog">
    <h1>Apple</h1>
    <div class="catalog__list">
      <CatalogItem
          v-for="product in products"
          :key="product.id"
          :product_data="product"
          @addCart = 'addCart'
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from "@/components/catalog/catalog-item/Catalog-item.vue";
import {mapActions} from "vuex";
export default {
  name: 'Catalog-block',
  components: {
    CatalogItem
  },
  data(){
    return{
      products: [
      {
        id: 1,
        image: "product-img3.png",
        name: "Iphone 14",
        price: 64500,
        category: "Iphone"
      },
      {
        id: 2,
        image: "product-img4.png",
        name: "Iphone 14 Pro",
        price: 85400,
        category: "Iphone"
      },
      {
        id: 3,
        image: "product-img5.png",
        name: "Apple Watch Series SE Gen",
        price: 25100,
        category: "Watch"
      },
      {
        id: 4,
        image: "product-img6.png",
        name: "Apple Watch Ultra",
        price: 65600,
        category: "Watch"
      },
      {
        id: 5,
        image: "product-img7.png",
        name: "Apple AirPods 3",
        price: 14990,
        category: "AirPods"
      },
      {
        id: 6,
        image: "product-img8.png",
        name: "Apple AirPods 2",
        price: 10200,
        category: "AirPods"
      }
    ]
    }
  },
  methods:{
    ...mapActions([
       'add_basket'
    ]),
    addCart(data){
      this.add_basket(data)
    }
  }
}
</script>

<style scoped lang="scss">
  .catalog{
    display: flex;
    flex-direction: column;
    //flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    &__list{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
