<template>
    <div>
        <div class="register">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5">
                        <div class="logo mb-5">
                            <router-link to="/register"
                                class="logo__link d-flex justify-content-center align-items-center text-decoration-none">
                                <img class="me-2" src="../assets/logo.svg" alt="Icon Logo">
                                <p class="mb-0 h2 logo__link-name">Atclouds</p>
                            </router-link>
                        </div>
                        <div class="title mb-4 text-center">
                            <h4 class="text-black mb-0">Đăng ký</h4>
                        </div>
                        <form @submit.prevent="registerUser" class="register-form">
                            <div class="mb-3 input-email">
                                <input type="email" class="form-control placeholder--color-00073 focus-primary   h-41 fs-7"
                                    placeholder="Nhập email của bạn" id="name" v-model="formData.email"
                                    aria-describedby="inputGroupPrepend2" required>
                            </div>
                            <div class="mb-3 input-password">
                                <input type="password" class="form-control placeholder--color-00073 focus-primary    h-41 fs-7" id="email"
                                    placeholder="Nhập mật khẩu của bạn" aria-describedby="emailHelp"
                                    v-model="formData.password" required>
                            </div>
                            <div class="mb-4 input-confirmation">
                                <input type="password" class="form-control placeholder--color-00073 focus-primary    h-41 fs-7" id="exampleInputPassword1"
                                    placeholder="Nhập lại mật khẩu của bạn" v-model="formData.password_confirmation" required>
                            </div>
                            <div class="btn-register">
                                <button type="submit" class="btn btn-primary btn-color-primary w-100 mb-4 h-41">Đăng
                                    ký</button>
                            </div>
                        </form>
                        <div class="redirect-login d-flex align-items-center justify-content-center fs-7">
                            <p class="mb-0 me-2 text-black">Bạn đã có tài khoản?</p>
                            <router-link to="/login">Đăng nhập!</router-link>
                        </div>
                        <div class="license mt-5 text-center color-00073 fs-7">
                            © 2023 Atclouds. Developed by Mr. Binh and Mr. Thien
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <img src="../assets/login.jpg" alt="login imgae banner">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { API_URL, apiClient } from '../routes/api';
import { toastSuccess, toastError } from '../helpers/toasts';

export default {
    data() {
        return {
            formData: {
                email: "",
                password: "",
                password_confirmation: "",
            },
        };
    },
    methods: {
        registerUser() {
            // Make a POST request to the other project's API
            apiClient.post(API_URL + 'register', this.formData)
                .then(response => {
                    console.log(response.data.data);
                    toastSuccess(response.data.data);
                })
                .catch(error => {
                    console.log(error.response?.data);
                    if(error.response?.data.message == 'The email has already been taken.'){
                        toastError('Email đã được đăng ký')
                    }
                    if(error.response?.data.message == 'The password confirmation and password must match.'){
                        toastError('Xác nhận mật khẩu và mật khẩu phải khớp.')
                    }
                });
        },
    },
    // setup() {
    //     toastSuccess("Registration successful!");
    // },
    mounted() {
        // Thêm lớp CSS vào body
        document.body.classList.add('login-page')
    },
    beforeUnmount() {
        // Xóa lớp CSS khỏi body
        document.body.classList.remove('login-page')
    },

};
</script>
<style scoped lang="scss">
.wrap-component {
    .container {
        background-color: #fff;
        border-radius: 32px;
        padding: 60px;

        .h-41 {
            height: 41px;
        }

        .fs-7 {
            font-size: 14px;
        }

        .color-00073 {
            color: #00000073;

        }

        .placeholder--color-00073 {
            &::placeholder {
                color: #00000073;
            }
        }
        .btn-color-primary{
            background-color: #1F69EF !important;
            border-color: #1F69EF !important;
            &:hover{
                background-color: #1059e0 !important;
                border-color: #1059e0 !important;
            }
        }
        .focus-primary{
            transition: .4s;
            &:focus{
                box-shadow: none;
                border: 2px solid #1F69EF !important;
                transition: .4s;
            }
        }
    }
}</style>