<template>
  <router-link :to="routePath">
    <div class="fl-left room col-12">
      <h4 class="name fl-left">{{ room.name }}</h4>
      <div class="fl-right">
        <img src="@/assets/arrow_right.png" />
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    room: {
      required: true,
      type: Object,
    },
  },
  computed: {
    routePath(){
      return `/details/${this.room.name}/${this.room.id}`
    }
  },
};
</script>