<template>
  <div class="relative flex flex-col justify-center items-center w-full min-h-screen px-10 font-rf-dewi">
    <slider />
    <popup>
      <person />
    </popup>
  </div>
</template>

<script setup>
import Slider from '@components/Slider'
import Popup from '@components/Popup'
import Person from '@components/Person';
</script>