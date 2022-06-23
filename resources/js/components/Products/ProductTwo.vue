<template>
  <div class="text-danger" style="background: black">
    <div>
      <li v-for="product in $store.state.products" :key="product.id">
        Name : {{ product.name }} Price : {{ product.price }}
      </li>
    </div>
  </div>
</template>

<script>
export default {};
</script>