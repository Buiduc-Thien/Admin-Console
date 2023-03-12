<script>
export default {
    computed: {
        isLoginPageOrRegisterPage() {
            return ['/login', '/register'].includes(this.$route.path);
        }
    },
}
</script>
<template>
    <header v-if="!isLoginPageOrRegisterPage">
        <div class="layout-width">
            <nav class="header-nav d-flex align-items-center justify-content-between">
                <div class="header-nav__left d-flex align-items-center">
                    <div class="btn-toolbar me-4">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:svgjs="http://svgjs.com/svgjs" width="24" height="24" x="0" y="0" viewBox="0 0 24 24"
                            style="enable-background:new 0 0 512 512" xml:space="preserve">
                            <g>
                                <path fill="#1F69EF"
                                    d="M2 5a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm19 6H3a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2zm-9 7H3a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2z"
                                    data-original="#1F69EF"></path>
                            </g>
                        </svg>
                    </div>
                    <form action="" class="search-form">
                        <div class="input position-relative">
                            <input type="text" class="search-form__input form-control" placeholder="Tìm kiếm…">
                            <button
                                class="search-form__btn bg-transparent d-flex align-items-center me-3 border-0 position-absolute top-50 end-0 translate-middle-y"
                                type="submit"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"
                                    width="16" height="16" x="0" y="0" viewBox="0 0 512.005 512.005"
                                    style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
                                    <g>
                                        <path
                                            d="m505.749 475.587-145.6-145.6c28.203-34.837 45.184-79.104 45.184-127.317C405.333 90.926 314.41.003 202.666.003S0 90.925 0 202.669s90.923 202.667 202.667 202.667c48.213 0 92.48-16.981 127.317-45.184l145.6 145.6c4.16 4.16 9.621 6.251 15.083 6.251s10.923-2.091 15.083-6.251c8.341-8.341 8.341-21.824-.001-30.165zM202.667 362.669c-88.235 0-160-71.765-160-160s71.765-160 160-160 160 71.765 160 160-71.766 160-160 160z"
                                            fill="#000000" data-original="#000000" class=""></path>
                                    </g>
                                </svg></button>
                        </div>
                    </form>
                </div>
                <div class="header-nav__right d-flex align-items-center">
                    <div class="dropdown notification me-4">
                        <div class="notification__icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div class="position-relative">
                                <img src="../assets/bell.svg" alt="Icon Notification">
                                <span class="unread-status position-absolute rounded-circle end-0">
                                </span>
                            </div>
                        </div>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div class="user-action dropdown">
                        <div class="user-action__info d-flex align-items-center" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <div class="user-action__info-img me-2">
                                <div class="ratio ratio-14x14">
                                    <img class="rounded-circle" src="../assets/avatar.jpg" alt="User Avatar">
                                </div>
                            </div>
                            <div class="user-action__info-name fw-semibold">
                                Lê Huy Bính
                                <img src="../assets/drop.svg" alt="Icon Drop">
                            </div>
                        </div>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<style lang="scss">
header {
    background-color: #fff;
    left: 222px;
    right: 0;
    position: fixed;
    padding: 14px 34px 14px 24px;
    height: 70px;

    .ratio-14x14 {
        aspect-ratio: 14/14;
        height: 42px;
        width: 42px;
        object-fit: cover;
    }

    .header-nav {
        &__left {
            .search-form {
                &__input {
                    border-radius: 6px;
                    background-color: #F0F3FA;
                    border: 1px solid #F0F3FA;
                    width: 261px;
                    font-size: 14px;
                }
            }
        }

        &__right {
            .notification {
                &__icon {
                    .unread-status {
                        background-color: #ED4343;
                        width: 12px;
                        height: 12px;
                    }
                }
            }
        }
    }
}
</style>