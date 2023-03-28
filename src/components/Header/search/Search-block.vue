<template>
  <div>
    <div class="container">
      <input type="text" maxlength= "12" placeholder="Search">
      <img src="https://images-na.ssl-images-amazon.com/images/I/41gYkruZM2L.png" alt="search icon">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search-block'
}
</script>

<style scoped lang="scss">
.container{
  position: relative;
  margin-top: 6px;
  margin-right: 300px;
  >input{
    padding: 15px;
    width: 350px;
    border: none;
    border-bottom: 1px solid #6f6f6f;
    outline: none;
  }
  >img{
    width: 15px;
    position: absolute;
    top: 15px;
    right: 20px;
  }
}
</style>
