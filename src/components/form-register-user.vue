<template>
    <div>
        <div class="container register-container">
            <div class="row align-items-center">
                <div class="register-wrap col-lg-5">
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
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Nhập email của ban" id="name"
                                v-model="formData.email" aria-describedby="inputGroupPrepend2" required>
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="email" placeholder="Nhập mật khẩu của bạn"
                                aria-describedby="emailHelp" v-model="formData.password">
                        </div>
                        <div class="mb-4">
                            <input type="password" class="form-control" id="exampleInputPassword1"
                                placeholder="Nhập lại mật khẩu của bạn" v-model="formData.password_confirmation">
                        </div>
                        <button type="submit" class="btn btn-primary btn-color-primary">Đăng ký</button>
                    </form>
                    <div class="redirect-login d-flex align-items-center justify-content-center">
                        <p class="mb-0 me-2 text-black">Bạn đã có tài khoản?</p>
                        <router-link to="/login">Đăng nhập!</router-link>
                    </div>
                    <div class="license mt-5 text-center">
                        © 2023 Atclouds. Developed by Mr. Binh and Mr. Thien
                    </div>
                </div>
                <div class="images-banner col-lg-7">
                    <div class="images-banner__img">
                        <img class="w-100 h-100 object-fit-cover" src="../assets/login.jpg" alt="Banner">
                    </div>
                </div>
            </div>
        </div>
        <div class="register-toast toast-container position-fixed bottom-0 end-0 p-3">
            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <img class="me-2" src="../assets/logo.svg" alt="Icon Logo">
                    <strong class="me-auto">Atclouds</strong>
                    <small>Now</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    {{ msg }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { API_URL, apiClient } from '../routes/api';
import { toastSuccess } from '../helpers/toasts';

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
                });
        },
    },
    setup() {
        toastSuccess("Registration successful!");
    },

};
</script>
<style scoped lang="scss">
.wrap-component {
    margin: 0 !important;
    width: 100%;
    // height: 100%;
    display: flex;
    padding: 60px 111px;
    align-items: center;
    justify-content: center;

    .register-container {
        padding: 60px;
        background-color: #fff;
        border-radius: 32px;

        .register-wrap {
            .register-form {
                margin-bottom: 32px;

                .form-control {
                    height: 41px;
                    color: #000;
                    font-size: 14px;
                    padding: 12px 16px;
                    transition: .4s;

                    &::placeholder {
                        color: #00000073;
                    }

                    &:focus {
                        transition: .4s;
                        border: 1px solid #1F69EF;
                        box-shadow: none;
                    }
                }

                .btn-color-primary {
                    border-color: #1F69EF;
                    background-color: #1F69EF;
                    font-size: 14px;
                    height: 41px;
                    width: 100%;

                    &:hover {
                        background-color: #105ae5;
                        border-color: #105ae5;
                    }
                }
            }

            .redirect-login {
                font-size: 14px;
            }

            .license {
                font-size: 14px;
                color: #00000073;
            }
        }
    }
}
</style>