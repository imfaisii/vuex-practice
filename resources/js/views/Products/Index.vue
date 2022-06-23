<template>
  <div class="text-center">
    <products-one />
    <products-two />
    <router-link class="btn btn-danger mt-2" :to="{ name: 'counter' }">Counter</router-link>
  </div>
</template>

<script>
import ProductsOne from "../../components/Products/ProductOne.vue";
import ProductsTwo from "../../components/Products/ProductTwo.vue";

export default {
  components: {
    ProductsOne,
    ProductsTwo,
  },
};
</script>