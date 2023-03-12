<template>
    <aside class="open">
        <div class="aside__top">
            <a class="logo__link d-flex align-items-center text-decoration-none" href="/">
                <img class="me-2" src="../assets/logo.svg" alt="Icon Logo">
                <p class="mb-0 h2 logo__link-name">Atclouds</p>
            </a>
        </div>
        <div class="aside__main">
            <ul class="menu-primary">
                <li class="menu-item">
                    <a href="" class="menu-link" @click="currentMenuItem = 0"
                        v-bind:class="{ active: currentMenuItem == 0 }">
                        <div class="menu-link__info">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                                xmlns:svgjs="http://svgjs.com/svgjs" width="17" height="17" x="0" y="0"
                                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve">
                                <g
                                    transform="matrix(-1,-1.2246467991473532e-16,1.2246467991473532e-16,-1,512.0000305175781,512.0000004768372)">
                                    <path
                                        d="M118.933 237.933a119 119 0 1 0-119-119 119.135 119.135 0 0 0 119 119zm0-206a87 87 0 1 1-87 87 87.1 87.1 0 0 1 87-87zM237.8 303.334a29.033 29.033 0 0 0-29-29H29.067a29.033 29.033 0 0 0-29 29v179.733a29.032 29.032 0 0 0 29 29H208.8a29.032 29.032 0 0 0 29-29zm-32 176.733H32.067V306.334H205.8zm277.267-205.733H303.335a29.033 29.033 0 0 0-29 29v179.733a29.032 29.032 0 0 0 29 29h179.732a29.032 29.032 0 0 0 29-29V303.334a29.033 29.033 0 0 0-29-29zm-3 205.733H306.335V306.334h173.732zm3-480H303.335a29.032 29.032 0 0 0-29 29V208.8a29.032 29.032 0 0 0 29 29h179.732a29.032 29.032 0 0 0 29-29V29.067a29.032 29.032 0 0 0-29-29zm-3 205.732H306.335V32.067h173.732z">
                                    </path>
                                </g>
                            </svg>
                            Tổng quan
                        </div>
                    </a>
                </li>
                <li class="menu-item">
                    <a class="menu-link collapsed" data-bs-toggle="collapse" href="#collapseExample" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        <div class="menu-link__info">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                                xmlns:svgjs="http://svgjs.com/svgjs" width="17" height="17" x="0" y="0"
                                viewBox="0 0 437.004 437" style="enable-background:new 0 0 512 512" xml:space="preserve">
                                <g>
                                    <path
                                        d="M229 14.645A50.173 50.173 0 0 0 192.371.015L52.293 3.586C25.672 4.25 4.246 25.673 3.582 52.298L.016 192.37a50.215 50.215 0 0 0 14.625 36.633l193.367 193.36c19.539 19.495 51.168 19.495 70.707 0l143.644-143.645c19.528-19.524 19.528-51.184 0-70.711zm179.219 249.933-143.645 143.64c-11.722 11.7-30.703 11.7-42.426 0L28.785 214.86a30.131 30.131 0 0 1-8.777-21.98l3.566-140.074c.403-15.973 13.254-28.828 29.227-29.227l140.074-3.57c.254-.004.5-.008.754-.008a30.129 30.129 0 0 1 21.223 8.79l193.367 193.362c11.695 11.723 11.695 30.703 0 42.426zm0 0">
                                    </path>
                                    <path
                                        d="M130.719 82.574c-26.59 0-48.145 21.555-48.149 48.145 0 26.59 21.559 48.144 48.145 48.144 26.59 0 48.144-21.554 48.144-48.144-.03-26.574-21.566-48.114-48.14-48.145zm0 76.29c-15.547 0-28.145-12.602-28.149-28.145 0-15.543 12.602-28.145 28.145-28.145s28.144 12.602 28.144 28.145c-.015 15.535-12.605 28.125-28.14 28.144zm0 0">
                                    </path>
                                </g>
                            </svg>
                            Sản phẩm
                        </div>
                        <a class="menu-link__icon">
                            <img src="../assets/drop-left.svg" alt="Icon DropLeft">
                        </a>
                    </a>
                    <div class="collapse" id="collapseExample">
                        <ul class="sub-menu">
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="menu-item">
                    <a class="menu-link collapsed" data-bs-toggle="collapse" href="#collapseExample" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        <div class="menu-link__info">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                                xmlns:svgjs="http://svgjs.com/svgjs" width="17" height="17" x="0" y="0"
                                viewBox="0 0 437.004 437" style="enable-background:new 0 0 512 512" xml:space="preserve">
                                <g>
                                    <path
                                        d="M229 14.645A50.173 50.173 0 0 0 192.371.015L52.293 3.586C25.672 4.25 4.246 25.673 3.582 52.298L.016 192.37a50.215 50.215 0 0 0 14.625 36.633l193.367 193.36c19.539 19.495 51.168 19.495 70.707 0l143.644-143.645c19.528-19.524 19.528-51.184 0-70.711zm179.219 249.933-143.645 143.64c-11.722 11.7-30.703 11.7-42.426 0L28.785 214.86a30.131 30.131 0 0 1-8.777-21.98l3.566-140.074c.403-15.973 13.254-28.828 29.227-29.227l140.074-3.57c.254-.004.5-.008.754-.008a30.129 30.129 0 0 1 21.223 8.79l193.367 193.362c11.695 11.723 11.695 30.703 0 42.426zm0 0">
                                    </path>
                                    <path
                                        d="M130.719 82.574c-26.59 0-48.145 21.555-48.149 48.145 0 26.59 21.559 48.144 48.145 48.144 26.59 0 48.144-21.554 48.144-48.144-.03-26.574-21.566-48.114-48.14-48.145zm0 76.29c-15.547 0-28.145-12.602-28.149-28.145 0-15.543 12.602-28.145 28.145-28.145s28.144 12.602 28.144 28.145c-.015 15.535-12.605 28.125-28.14 28.144zm0 0">
                                    </path>
                                </g>
                            </svg>
                            Sản phẩm
                        </div>
                        <a class="menu-link__icon">
                            <img src="../assets/drop-left.svg" alt="Icon DropLeft">
                        </a>
                    </a>
                    <div class="collapse" id="collapseExample">
                        <ul class="sub-menu">
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                            <li class="sub-menu__item">
                                <router-link to="/list-product" class="sub-menu__link">
                                    Tất cả sản phẩm
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

            </ul>
        </div>
    </aside>
</template>
<script>
export default {
    data() {
        return {
            currentMenuItem: 0
        };
    }
}

</script>

<style lang="scss" scoped>
aside {
    // padding: 20px 24px;
    background-color: #fff;
    box-shadow: 0.75px -4px 3px #00000014;

    &.open {
        width: 222px;
        position: fixed;
        top: 0;
        height: 100vh;
    }

    .aside__top {
        .logo__link {
            color: #1F69EF;
            height: 70px;
            padding-left: 24px;
        }
    }

    .aside__main {
        height: 100vh;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            width: 6px;
        }

        &::-webkit-scrollbar-track {
            background: #fff;
            border-radius: 6px;
        }

        &::-webkit-scrollbar-thumb {
            background: #1F69EF;
            border-radius: 6px;
        }

        .menu-primary {
            list-style: none;
            margin: 0;
            padding: 0;

            .sub-menu {
                list-style: none;
                margin: 0;
                padding: 0;

                &__item {
                    .sub-menu__link {
                        font-size: .969rem;
                        color: #000;
                        text-decoration: none;
                        display: block;
                        padding: 8px 0px 8px 53px;
                        position: relative;
                        font-weight: 500;
                        position: relative;

                        &::after {
                            position: absolute;
                            width: 4px;
                            content: "";
                            height: 4px;
                            background-color: #000;
                            left: 45px;
                            border-radius: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                        }

                        &.active {
                            color: #1F69EF;

                            &::after {
                                background-color: #1F69EF;
                            }
                        }
                    }
                }
            }

            .menu-item {
                .menu-link {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: .969rem;
                    color: #000;
                    fill: #000;
                    padding: 16px 24px;
                    text-decoration: none;
                    font-weight: 500;

                    svg {
                        margin-right: 8px;
                    }

                    &.collapsed {
                        .menu-link__icon {
                            img {
                                transition: .4s;
                                -webkit-transform: rotate(0);
                                transform: rotate(0);
                            }
                        }
                    }

                    &.active {
                        background: transparent linear-gradient(91deg, #1F69EF1F 0%, #1F69EF05 100%) 0% 0% no-repeat padding-box;
                        fill: #1F69EF !important;
                        color: #1F69EF;

                        &:after {
                            width: 2px;
                            content: "";
                            position: absolute;
                            background-color: #1F69EF;
                            border-radius: 5px;
                            height: 37px;
                            left: 0;
                        }

                    }

                    .menu-link__icon {
                        img {
                            transition: .4s;
                            -webkit-transform: rotate(90deg);
                            transform: rotate(90deg);
                        }
                    }
                }

            }
        }
    }

}</style>