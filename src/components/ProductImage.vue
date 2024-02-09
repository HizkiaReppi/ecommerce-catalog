<template>
  <img :src="image" :alt="alt" />
</template>

<script>
export default {
  props: {
    image: String,
    alt: String
  }
}
</script>
