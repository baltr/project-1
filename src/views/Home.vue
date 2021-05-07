<template>
  <div>
    <h1>Superology Rooms</h1>
    <div v-if="error">
      An error has occurred in fetching data from the server.
    </div>
    <div v-else-if="rooms" class="home">
      <div v-if="rooms.length">
        <Room v-for="room in rooms" :room="room" :key="room.id" />
      </div>
      <div v-else-if="rooms.length == 0">No rooms have been found.</div>
    </div>
    <div class="loader" v-else></div>
  </div>
</template>

<!-- IMPLEMENT STORE PROPERLY -->

<script>
import Room from "@/components/Room.vue";
import axios from "axios";

export default {
  data() {
    return {
      rooms: null,
      error: false,
    };
  },
  methods:{
    axiosGet(){
      axios
      .get("https://meeting-rooms.superology.dev/", { headers: { authentication: "drSsLeYSzdWVgwqKFk6mFt66X3ZWETQW" } })
      .then((response) => {
        this.rooms = response.data.rooms;
        this.$store.rooms = this.rooms;
      })
      .catch((response) => {
        console.log(response);
        this.error = true;
      });
    }
  },
  created() {
    if (this.$store.rooms == null){
      this.axiosGet();
    } else {
      this.rooms = this.$store.rooms
    }
  },
  name: "Home",
  components: {
    Room,
  },
};
</script>