<script>
export default {
    props:["bookName","bookPrice","bookImageURL","bookWish","bookTheme"],
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
        ],
      }
    },
}
</script>

<template>
    <div class="w-full">
        <img class="object-cover h-60  w-full" src='../../assets/images/ADbanner.png' alt="">
    </div>
</template>

<style>

</style>