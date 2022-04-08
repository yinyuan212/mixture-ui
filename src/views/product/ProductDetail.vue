<template>
   <div>

        <div>
            <img class="card-ing-top" :src="product.imageUrl" alt="chain" width="300" height="300">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">
                NT$ {{product.price}}
            </p>
            <p class="card-text">
                {{product.size}}
            </p>
            <p class="card-text">
                {{product.description}}
            </p>
        </div>
    </div>
</template>

<script>
const axios = require('axios')
export default {
    name: "ProductDetail",
    data() {
        return {
            baseUrl: 'http://localhost:8888',
            product: {},
            
        }
    },
    methods:{
        getProductDetail() {
            var id = this.$route.params.id
            console.log('id: ' + id);
            axios.get(this.baseUrl + '/product/get/' + id)
            .then(res => {
                console.log(res);
                this.product = res.data;})
            .catch(err => console.log(err))
        }
    },
    mounted(){
        this.getProductDetail();
    }


}
</script>

<style>

</style>