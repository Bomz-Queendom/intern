<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w w-full space-y-6">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { LockClosedIcon } from "@heroicons/vue/solid";
export default {
  name: "Auth",
};
</script>

<style scoped></style>
