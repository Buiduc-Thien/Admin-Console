
<template>
    <div class="list-product">
        <div class="">
            <ProductBlock v-bind:ListProduct="products"></ProductBlock>
        </div>
        <div class="">
            <FormCreateProduct @product-added="onProductAdded"></FormCreateProduct>
        </div>
    </div>
</template>
<script>
import FormCreateProduct from './form-create-product.vue'
import { getProducts } from '../helpers/get_list_product'
import ProductBlock from './product-block.vue'
export default {
    components: {
        ProductBlock,
        FormCreateProduct,
    },
    data() {
        return {
            products: [],
        };
    },
    methods: {
        onProductAdded() {
            getProducts().then((products) => {
                this.products = products;
            });
        },
    },
    mounted() {
        getProducts().then((products) => {
            this.products = products;
        });
    }
}
</script>