<template>
    <form @submit.prevent="createProduct">

        <div class="mb-3">
            <label for="name" class="form-label">Tên sản phẩm:</label>
            <input type="input" class="form-control" id="name" placeholder="Nhập tên của sản phẩm" v-model="productName">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Example textarea</label>
            <textarea class="form-control" id="description" rows="3" v-model="productDescription"></textarea>
        </div>
        <div class="mb-3">
            <label for="sizes" class="form-label">Sizes</label>
            <input type="input" class="form-control" id="sizes" placeholder="Sizes" v-model="productSizes">
        </div>

        <button type="submit" class="btn btn-primary">Primary</button>
    </form>
</template>

<script>
import { API_URL, apiClient } from '../api';


export default {
    data() {
        return {
            productName: '',
            productDescription: '',
            productSizes: ''
        };
    },
    methods: {
        createProduct() {
            const data = {
                name: this.productName,
                description: this.productDescription,
                sizes: this.productSizes
            };
            console.log(data);
            apiClient.post(API_URL+'admin/products/create', data)
                .then(response => {
                    console.log(response.data);
                    this.$emit('product-added', 'Product created successfully');
                    // Thực hiện các thao tác cần thiết sau khi tạo sản phẩm thành công
                })
                .catch(error => {
                    console.log(error.response.data);
                    // Hiển thị thông tin lỗi nếu tạo sản phẩm thất bại
                });
        },
    }
};
</script>
