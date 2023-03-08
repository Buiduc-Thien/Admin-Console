<script>
import ProductView from './ProductView.vue'
export default {
    components: {
        ProductView,
    },
    data() {
        return {
            products: [
                {
                    id: "1",
                    name: "san pham 1",
                    desc: "thong tin san pham 1",
                    price: "200",
                },
                {
                    id: "2",
                    name: "san pham 2",
                    desc: "thong tin san pham 2",
                    price: "200",
                },
                {
                    id: "3",
                    name: "san pham 3",
                    desc: "thong tin san pham 3",
                    price: "200",
                },
            ]
        }
    },
}
</script>
<template>
    <div class="home-page">
        <div class="container">
            <div class="row row-cols-4">
                <ProductView v-bind:ListProduct="products"></ProductView>
            </div>
        </div>
    </div>
</template>

<style scoped>
.h-100vh {
    height: 100vh;
}
</style>