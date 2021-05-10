<template>
  <div>
    <h1>Superology Rooms</h1>
    <input type="text" v-model="searchQuery" placeholder="Search Rooms"/>
    <div v-if="rooms" class="home">
      <div v-if="rooms.length">
        <Room v-for="room in filteredRooms" :room="room" :key="room.id" />
      </div>
      <div v-else-if="rooms.length == 0">No rooms have been found.</div>
    </div>
    <div class="loader" v-else></div>
  </div>
</template>

<script>
import Room from "@/components/Room.vue";

export default {
  data(){
    return{
      searchQuery: '',
    }
  },
  created() {
    if (this.$store.getters.getRooms === null) this.$store.dispatch('fetchRooms');
  },
  computed:{
    rooms(){
      return this.$store.getters.getRooms
    },
    filteredRooms(){
      if(this.searchQuery.length >= 3){
        return this.rooms.filter((room) => {
          return room.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        })
      }else{
        return this.rooms;
      }
    }
  },
  name: "Home",
  components: {
    Room,
  },
};
</script>