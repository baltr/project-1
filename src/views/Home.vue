<template>
  <div>
    <h1>Superology Rooms</h1>
    <div v-if="rooms" class="home">
      <div v-if="rooms.length">
        <Room v-for="room in rooms" :room="room" :key="room.id" />
      </div>
      <div v-else-if="rooms.length == 0">No rooms have been found.</div>
    </div>
    <div class="loader" v-else></div>
  </div>
</template>

<script>
import Room from "@/components/Room.vue";

export default {
  created() {
    if (this.$store.getters.getRooms === null) this.$store.dispatch('fetchRooms');
  },
  computed:{
    rooms(){
      return this.$store.getters.getRooms
    }
  },
  name: "Home",
  components: {
    Room,
  },
};
</script>