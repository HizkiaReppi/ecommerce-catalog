<template>
  <div class="product-checkout">
    <hr />
    <div class="product-price" :class="isMen ? 'text-mens' : 'text-womens'">
      <p>${{ price }}</p>
    </div>
    <div class="product-button">
      <button class="btn-buy" :class="isMen ? 'btn-mens' : 'btn-womens'">Buy Now</button>
      <button
        class="btn-next"
        :class="isMen ? 'btn-mens-border' : 'btn-womens-border'"
        @click="nextProduct"
      >
        Next Product
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    price: Number,
    isMen: Boolean
  },
  methods: {
    nextProduct() {
      this.$emit('next-product')
    }
  }
}
</script>
