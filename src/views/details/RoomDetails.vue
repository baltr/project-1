<template>
  <div class="detailsList">
    <h1>{{ $route.params.name }}</h1>
    <div v-if="error">An error occurred while showing room details.</div>
    <div v-else-if="roomDetails">
      <div v-if="roomDetails.length">
        <RoomDetailsSpecific
          @setActiveEvent="setActiveEvent"
          v-for="details in roomDetails"
          :details="details"
          :activeEvent="activeEvent"
          :key="details.id"
        />
      </div>
      <div v-else-if="roomDetails.length == 0">
        The room is currently empty.
      </div>
    </div>
    <div class="loader" v-else></div>
  </div>
</template>

<script>
import axios from "axios";
import RoomDetailsSpecific from "@/components/RoomDetailsSpecific.vue";
import { v4 as uuidV4 } from "uuid";

export default {
  data() {
    return {
      roomDetails: null,
      error: false,
      activeEvent: null,
    };
  },
  methods: {
    axiosGet(){
      axios
      .get("https://meeting-rooms.superology.dev/room?id=" + this.$route.params.id, {
        headers: { authentication: "drSsLeYSzdWVgwqKFk6mFt66X3ZWETQW" },
      })
      .then((response) => {
        this.roomDetails = response.data.events.map((event) => {
          if (event.description.length == 0){
            event.description = "This event has no description"
          }
          return {
            ...event,
            id: uuidV4(),
          };
        });
      })
      .catch((response) => {
        console.log(response);
        this.error = true;
      });
    },
    setActiveEvent(value) {
      if(this.activeEvent == value){
        this.activeEvent = null;
      } else {
        this.activeEvent = value;
      }
    },
  },
  created() {
    this.axiosGet();
  },
  components: {
    RoomDetailsSpecific,
  },
};
</script>

<style>
.detailsList {
  margin-right: 50px;
}
</style>