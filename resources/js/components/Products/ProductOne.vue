<template>
  <div>
    <li v-for="product in $store.state.products" :key="product.id">
      Name : {{ product.name }} Price : {{ product.price }}
    </li>
  </div>
</template>

<script>
export default {};
</script>