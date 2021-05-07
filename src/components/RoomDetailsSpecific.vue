<template>
  <div>
    <div class="details col-12 fl-left">
      <div class="col-5 fl-left specDetail">
        <label for="start">START</label>
        <div id="start">{{ startTime }}</div>
      </div>
      <div class="col-5 fl-right specDetail ta-right">
        <label for="end">END</label>
        <div id="end">{{ endTime }}</div>
      </div>
      <div v-if="isVisible" class="col-5 fl-left specDetail">
        <label for="org">ORGANIZER</label>
        <div id="org">{{ details.organizer }}</div>
      </div>
      <div v-if="isVisible" class="col-5 fl-right specDetail ta-right">
        <label for="no">ATTENDEES</label>
        <div id="no">{{ details.attendees }}</div>
      </div>
      <div @click="emitActiveEvent" class="col-12 fl-left specDetail cursor">
        <label for="summ">SUMMARY</label>
        <div id="summ"><span v-html="details.summary" /></div>
      </div>
      <div v-if="isVisible" class="col-12 fl-left specDetail">
        <label for="desc">DESCRIPTION</label>
        <div id="desc" class="description">
          <span v-html="details.description" />
        </div>
      </div>
    </div>
  </div>
</template>

<!-- ADD TRANSITIONS -->

<script>
import { DateTime } from "luxon";

export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    emitActiveEvent() {
      this.visible = !this.visible;
      this.$emit("setActiveEvent", this.details.id);
    },
  },
  props: {
    details: {
      required: true,
      type: Object,
    },
    activeEvent: {
      type: String,
    },
  },
  computed: {
    startTime() {
      return DateTime.fromISO(this.details.start).toFormat("d. M. yyyy. H:mm");
    },
    endTime() {
      return DateTime.fromISO(this.details.end).toFormat("d. M. yyyy. H:mm");
    },
    isVisible() {
      if (this.details.id != this.activeEvent || !this.visible) {
        this.visible = false;
        return false;
      }
      return true;
    },
  },
};
</script>

<style>
label {
  font-size: 12px;
}
.details {
  margin-bottom: 15px;
  background-color: #3a434d;
  padding: 10px 0 10px 20px;
}
.details a {
  text-decoration: revert;
  color: revert;
}
.specDetail {
  margin-bottom: 10px;
}
.cursor {
  cursor: pointer;
}
.description {
  padding-right: 15px;
  text-align: justify;
}
</style>