<style>

</style>
<template>
    <div v-for="item in ListProduct" :key="item.id" class="product">
        <p>{{ item.id }}</p>
        <h1>{{ item.name }}</h1>
        <!-- <p>{{ item.sizes[0].name }}</p> -->
    </div>
</template>

<script>
export default {
    props: ['ListProduct'],
    components: {
        
    }
}
</script>
