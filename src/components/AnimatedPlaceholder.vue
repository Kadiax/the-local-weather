<template>
  <div class="animated-placeholder" :style="{ width: width, height: height }">
    &nbsp;
  </div>
</template>
<script setup>
defineProps({
  width: {
    type: String,
    default: "4rem",
  },
  height: {
    type: String,
    default: "1rem",
  },
});
</script>
<style scoped>
.animated-placeholder {
  background-size: 200% 100%;
  border-radius: 4px;
  background: linear-gradient(to right, #f3f4f6, #ffffff);
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
