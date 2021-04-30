<template>
  <div class="detailsList">
    <h1>{{ $route.params.roomName }}</h1>
    <div v-if="roomDetails">
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
    <div v-else-if="error">An error occurred while showing room details.</div>
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
      link: "https://meeting-rooms.superology.dev/room?id=",
      token: "drSsLeYSzdWVgwqKFk6mFt66X3ZWETQW",
      activeEvent: null,
    };
  },
  methods: {
    setActiveEvent(value) {
      this.activeEvent = value;
    },
  },
  created() {
    axios
      .get(this.link + this.$route.params.id, {
        headers: { authentication: this.token },
      })
      .then((response) => {
        this.roomDetails = response.data.events.map((event) => {
          return {
            ...event,
            id: uuidV4(),
          };
        });
      })
      .catch((response) => {
        this.error = true;
      });
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