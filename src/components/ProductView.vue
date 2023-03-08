<template>
    <div v-for="item in ListProduct" :key="item.id" class="product">
        <p>{{ item.id }}</p>
        <h1>{{ item.name }}</h1>
        <p>{{ item.desc }}</p>
        <p>{{ item.price }}</p>
    </div>
</template>
<style></style>

<script>
export default {
    props: ['ListProduct'],
}
</script>
