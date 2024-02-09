<template>
  <div class="product-title" :class="isMen ? 'text-mens' : 'text-womens'">
    <p>{{ title }}</p>
  </div>
  <div class="product-label">
    <p>{{ category }}</p>
    <div class="product-rate">
      <p>{{ rating }}/5</p>
      <div>
        <div class="circles-rate">
          <span
            v-for="(circle, index) in circles"
            :key="index"
            class="circle"
            :class="circleClass(rating, circle)"
          ></span>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div class="product-description">
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    category: String,
    description: String,
    rating: Number,
    isMen: Boolean
  },
  data() {
    return {
      circles: [0.5, 1.5, 2.5, 3.5, 4.5]
    }
  },
  methods: {
    circleClass(productRate, circle) {
      if (productRate < circle) {
        return this.isMen ? 'dot-white-men' : 'dot-white-women'
      } else {
        return this.isMen ? 'dot-blue-men' : 'dot-magenta-women'
      }
    }
  }
}
</script>
