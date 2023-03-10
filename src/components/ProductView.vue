<style></style>
<template>
    <div v-for="item in ListProduct" :key="item.id" class="product">
        <p>{{ item.id }}</p>
        <h1>{{ item.name }}</h1>
        <div v-for="size in item.sizes" :key="size.id">
            {{ size.name }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['ListProduct'],
    components: {

    }
}
</script>
