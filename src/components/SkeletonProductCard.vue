<template>
  <div class="container">
    <div class="skeleton-card">
      <div class="skeleton-image animation-pulse"></div>
      <div class="skeleton-content animation-pulse">
        <div class="skeleton-title"></div>
        <div class="skeleton-detail"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonProductCard'
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.skeleton-card {
  display: flex;
  width: 100%;
  max-width: 1024px;
  height: 440px;
  padding: 40px 70px 40px 30px;
  border-radius: 10px;
  box-shadow: 0 3px 5px #dadada;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
}

.animation-pulse {
  animation: pulse 2s infinite;
  -webkit-animation: pulse 2s infinite;
}

.skeleton-image {
  width: 450px;
  height: 100%;
  background: #dcdcdc;
  margin-right: 20px;
}

.skeleton-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.skeleton-title {
  width: 100%;
  height: 100px;
  background: #dcdcdc;
  margin-bottom: 20px;
}

.skeleton-detail {
  width: 100%;
  height: 100%;
  background: #dcdcdc;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.9;
  }
  50% {
    opacity: 0.4;
  }
}

/* Media Query Tablet */
@media screen and (max-width: 768px) {
  .container {
    padding: 0 3em;
    width: auto;
  }
  .skeleton-card {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 20px;
    margin: 20px;
  }
  .skeleton-image {
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
  }
  .skeleton-title {
    height: 50px;
    margin-bottom: 10px;
  }
  .skeleton-detail {
    height: 200px;
  }
}

/* Media Query Mobile */
@media screen and (max-width: 480px) {
  .skeleton-card {
    height: auto;
    padding: 20px;
    margin: 10px;
  }
  .skeleton-image {
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }
  .skeleton-title {
    height: 60px;
    margin-bottom: 10px;
  }
  .skeleton-detail {
    height: 200px;
  }
}
</style>
