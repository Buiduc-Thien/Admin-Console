<template>
    <div class="container py-5">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                </tr>

            </tbody>
        </table>
        <div class="registerForm col-6 pt-5">
            <form @submit.prevent="registerUser">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" v-model="formData.name">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                        v-model="formData.email">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" v-model="formData.password">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>
<script>
import { API_URL, apiClient } from '../api';

export default {
    data() {
        return {
            formData: {
                name: "",
                email: "",
                password: "",
            }
        };
    },
    methods: {
        registerUser() {
            // Make a POST request to the other project's API
            console.log(this.formData);
            apiClient.post(API_URL + 'register', this.formData)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        },
    },
};
</script>
<style scoped></style>