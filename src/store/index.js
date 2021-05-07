import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: null,
  },
  getters: {
    getRooms: state => {
      return state.rooms
    }
  },
  mutations: {
    setRooms (state, payload){
      state.rooms = payload
    }
  },
  actions: {
    fetchRooms({context}){
      axios
      .get("https://meeting-rooms.superology.dev/", { headers: { authentication: "drSsLeYSzdWVgwqKFk6mFt66X3ZWETQW" } })
      .then((response) => {
        this.commit('setRooms', response.data.rooms)
      })
      .catch((response) => {
        console.log(response);
      });
    }
  }
})
