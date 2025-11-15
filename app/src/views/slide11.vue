<script setup>

</script>

<template>
<h1>Information Hiding (پنهان‌سازی اطلاعات)</h1>
  <hr>
  <p class="my-3">هر ماژول باید جزئیات داخلی خود را پنهان کند و فقط عملیات ضروری را ارائه دهد.
  </p>
  <strong class="bg-primary rounded-2 text-white p-2">مثال:</strong>
  <p class="my-3">کلاس Appointment نحوه ذخیره‌سازی زمان نوبت را پنهان می‌کند.
    فقط متدهایی مانند getTime() و reserve() را نشان می‌دهد.</p>
</template>

<style scoped>

</style>