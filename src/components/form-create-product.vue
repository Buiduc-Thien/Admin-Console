<template>
    <form @submit.prevent="createProduct">
        <div class="mb-3">
            <label for="name" class="form-label">Tên sản phẩm:</label>
            <input type="input" class="form-control" id="name" placeholder="Nhập tên của sản phẩm" v-model="formData.name">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Example textarea</label>
            <textarea class="form-control" id="description" rows="3" v-model="formData.description"></textarea>
        </div>
        <select class="form-select" aria-label="Default select example" v-model="formData.sizes">
            <option v-for="item in availableSizes" :key="item.id" :value="item.id">{{ item.name }}</option>
        </select>
        <button type="submit" class="btn btn-primary">Tạo sản phẩm</button>
    </form>
</template>

<script>
import { API_URL, apiClient } from '../api';


export default {
    data() {
        return {
            availableSizes: [],
            formData: {
                name: '',
                description: '',
                sizes: ''
            },
        };
    },
    methods: {
        getSize() {
            apiClient.get(API_URL + 'admin/sizes')
                .then(response => {
                    this.availableSizes = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        resetForm() {
            // Set formData back to its initial state
            this.formData = {
                name: '',
                description: '',
                sizes: ''
            }
        },
        createProduct() {
            apiClient.post(API_URL + 'admin/products/create', this.formData)
                .then(response => {
                    // Thực hiện các thao tác cần thiết sau khi tạo sản phẩm thành công
                    console.log(response.data);
                    // ResetForm
                    this.resetForm();
                    // Gửi thông báo lên Components là: Product created successfully
                    this.$emit('product-added', 'Product created successfully');
                })
                .catch(error => {
                    // Hiển thị thông tin lỗi nếu tạo sản phẩm thất bại
                    console.log(error.response.data);
                });
        },
    },
    mounted() {
        this.getSize();
    },
};

</script>
