<template>
    <div id="product" class="card w-100 h-100">
        <div>
            <a :href="'detail/' + product.id" class="btn btn-dark">            
                <img class="card-ing-top" :src="product.imageUrl" alt="chain" width="300" height="300">
            </a>
        </div>
        <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">
                NT$ {{product.price}}
            </p>
              <p class="card-text">
                {{product.description}}
            </p>
           
        </div>
    </div>
</template>
<script>

export default ({
    name: 'ProductBox',
    props: ["product"],
    methods: {

    },
})
</script>
<style scoped>
#product{
    background-color: black;
}
</style>
