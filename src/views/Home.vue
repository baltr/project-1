<template>
  <div>
    <h1>Superology Rooms</h1>
    <div v-if="rooms" class="home">
      <div v-if="rooms.length">
        <Room v-for="room in rooms" :room="room" :key="room.id"/>
      </div>
      <div v-else-if="rooms.length==0">No rooms have been found.</div>
    </div>
    <div v-else-if="error">An error has occurred in fetching data from the server.</div>
    <div class="loader" v-else></div>
  </div>
</template>

<script>
import Room from '@/components/Room.vue'
import axios from 'axios'

export default {
  data(){
        return{
            rooms: null,
            error: false,
            link: 'https://meeting-rooms.superology.dev/',
            token: 'drSsLeYSzdWVgwqKFk6mFt66X3ZWETQW',
        }
    },
    created(){
      this.loading = true;
        axios.get(this.link, { headers: { 'authentication': this.token } }).then((response) => {
            this.rooms = response.data.rooms;
            this.visible = true;
        }).catch((response) => {
            this.error = true;
        }).finally(() => (this.loading = false))
    },
    name: 'Home',
    components: {
    Room
  }
}
</script>