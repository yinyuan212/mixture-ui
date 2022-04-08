<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Products</h3>
        <!-- <div>{{products}}</div> -->
      </div>
    </div>
    <div class="row">
      <div v-for="p of products" :key="p.id" class="col-xl-4 col-md-6 pt-3 d-flex">
          <ProductBox :product="p" ></ProductBox>
      </div>
        
    </div>
  </div>
</template>

<script>
const axios = require("axios")
import ProductBox from '../../components/prodcut/ProductBox.vue'

export default {
  name: "Product",
  components:{ProductBox},
  data() {
    return {
        baseUrl: 'http://localhost:8888',
        products: []   

    }
  },
  methods:{
    async getProducts() {
      
      await axios.get(this.baseUrl + '/product/all')
              .then(res => this.products = res.data)
              .catch(err => console.log(err))
    }
  },
  mounted() {
    this.getProducts();
  }
}
</script>

<style>
</style>