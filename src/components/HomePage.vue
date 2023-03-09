
<template>
    <div class="home-page">
        <div class="container">
            <div class="row row-cols-4">
                <ProductView v-bind:ListProduct="products"></ProductView>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <FormCreateProduct @product-added="onProductAdded"></FormCreateProduct>
            </div>
        </div>
    </div>
</template>
<script>
import FormCreateProduct from './FormCreateProduct.vue'
import { API_URL, apiClient } from '../api';
import ProductView from './ProductView.vue'
export default {
    components: {
        ProductView,
        FormCreateProduct,
    },
    data() {
        return {
            products: [],
        };
    },
    methods: {
        getProducts() {
            apiClient.get(API_URL+'admin/products')
                .then(response => {
                    this.products = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        onProductAdded() {
            this.getProducts();
        },
        handleMsg: function (msg) {
            this.msg = msg;
        }
    },
    mounted() {
        this.getProducts();
    },
}
</script>