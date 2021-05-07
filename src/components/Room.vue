<template>
  <router-link :to="routePath">
    <div class="fl-left room col-12">
      <div class="name fl-left">
        <h4>{{ room.name }}</h4>
      </div>
      <div class="fl-left">
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

<style>
h4 {
  margin: 0;
  padding: 6px 0 0 20px;
}
img {
  padding-top: 3px;
  height: 24px;
}
a {
  text-decoration: none;
  color: white;
}
.room {
  margin-bottom: 15px;
  background-color: #3a434d;
  padding: 10px 0px;
  border-radius: 5px;
}
.room:hover {
  background-color: #673ab7;
  transition: all 0.3s ease;
}
.name {
  width: 92%;
}
</style>