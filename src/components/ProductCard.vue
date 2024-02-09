<!-- eslint-disable prettier/prettier -->
<template>
  <div class="product-page">
    <div
      class="container-page"
      :class="
        !isProductAvailable ? 'bg-page-gray' : this.isMen ? 'bg-page-blue' : 'bg-page-magenta'
      "
    >
      <div class="bg-pattern">
        <img src="/bg-pattern.svg" alt="pattern background" />
      </div>
      <div class="product-card">
        <product-unavailable v-if="!isProductAvailable" @next-product="getNextProduct" />
        <div v-else class="product-available-container">
          <div class="product-image">
            <product-image :image="product.image" :alt="product.title" />
          </div>
          <div class="product-content" :class="isMen ? 'scrollbar-mens' : 'scrollbar-womens'">
            <product-details
            :title="product.title"
            :category="product.category"
            :description="product.description"
            :rating="product.rating.rate"
            :isMen="this.isMen"
            />
            <product-checkout :price="product.price" :isMen="this.isMen" @next-product="getNextProduct" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/libs/axios'
import ProductImage from './ProductImage.vue'
import ProductDetails from './ProductDetails.vue'
import ProductCheckout from './ProductCheckout.vue'
import ProductUnavailable from './ProductUnavailable.vue'

export default {
  name: 'ProductCard',
  components: {
    ProductImage,
    ProductDetails,
    ProductCheckout,
    ProductUnavailable
  },
  data() {
    return {
      product: {},
      currentProductId: 1,
      isLoading: true,
      isProductAvailable: false,
      isWomen: false,
      isMen: false
    }
  },
  methods: {
    async getProducts() {
      this.isLoading = true
      try {
        const response = await axios.get(`/products/${this.currentProductId}`)
        const product = response.data
        const isAvailable = product.category.includes('clothing')
        const isMen = product.category === "men's clothing"
        const isWomen = product.category === "women's clothing"

        // Update state
        this.product = product
        this.isProductAvailable = isAvailable
        this.isWomen = isWomen
        this.isMen = isMen
      } catch (error) {
        console.error(error)
      } finally {
        this.isLoading = false
      }
    },
    getNextProduct() {
      if (this.currentProductId < 20) {
        this.currentProductId++
      } else {
        this.currentProductId = 1
      }

      this.getProducts()
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>
