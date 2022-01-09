<template>
  <div class="loading"></div>
</template>

<script>
export default{
  name: 'Loading'
}
</script>

<style lang="scss" scoped>
.loading{
  height: 50px;
  width: 50px;
  margin: auto;
  border-radius: 50%;
  border: 3px solid $light-yellow;
  border-top-color: $yellow;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to{
    transform: rotate(360deg);
  }
}
</style>