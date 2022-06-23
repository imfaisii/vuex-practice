<template>
  <div class="text-center">
    <div class="counter">
      <p>{{ $store.state.counter }}</p>
    </div>
    <div class="buttons">
      <button class="btn btn-danger" @click="$store.dispatch('decrement')">
        -
      </button>
      <button class="btn btn-primary" @click="$store.dispatch('increment')">
        +
      </button>
    </div>
    <div>
      <router-link class="btn btn-primary mt-2" :to="{ name: 'products' }"
        >Products</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
div {
  margin-bottom: 10px;
}
.counter {
  font-size: 80px;
}

.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>