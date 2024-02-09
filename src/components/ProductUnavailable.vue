<template>
  <div class="product-unavailable-container">
    <div class="bg-unavailable">
      <img src="/sad-face.png" alt="Background Sad Face" />
    </div>
    <div class="detail-product">
      <p>This product is unavailable to show</p>
      <div class="buttons">
        <button @click="nextProduct" class="button-next">Next Product</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    nextProduct() {
      this.$emit('next-product')
    }
  }
}
</script>
