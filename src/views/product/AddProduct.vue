<template>
  
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Add Product</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
          <form action="">
           <div class="form-group">
             <label>Name</label>
             <input type="text" class="form-control" v-model="producrName">
           </div>
           <div class="form-group">
             <label>Price</label>
             <input type="number" class="form-control" v-model="price">
           </div>
           <div class="form-group">
             <label>Size</label>
             <input type="text" class="form-control" v-model="size">
           </div>
           <div class="form-group">
             <label>Description</label>
             <textarea type="text" class="form-control" v-model="description"/>
           </div>
           <div class="form-group">
             <label>Image url</label>
             <input type="text" class="form-control" v-model="imageUrl">
           </div>
           <button type="button" class="btn btn-secondary" @click="addProduct">Submit</button>
        </form>

      </div>
      <div class="col-3"></div>
        
    </div>
  </div>
</template>

<script>
const axios = require("axios")
const sweetalert = require("sweetalert")

export default {
  data() {
    return {
      producrName: "",
      price: 0,
      size: "",
      description: "",
      imageUrl: ""      

    }
  },
  methods:{
    addProduct(){
      console.log(this.producrName, this.price, this.size, this.description, this.imageUrl);

        const newProduct = {
          name: this.producrName,
          price: this.price,
          size: this.size,
          description: this.description,
          imageUrl: this.imageUrl
        }

        const baseUrl = "http://localhost:8888";

        axios({
          method: 'post',
          url: baseUrl + '/product/add',
          data: JSON.stringify(newProduct),
          headers:{
            'Content-Type':'application/json'
          }
        })
          .then(() => {
            sweetalert({
              text: 'Product added successfully',
              icon: 'Success'
            })
          })
          .catch((err) => {
              console.log(err)
          });

    }
  }
}
</script>

<style>
.container{

}
</style>