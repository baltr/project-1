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
      <div @click="emitActiveEvent" class="col-12 fl-left specDetail cursor">
        <label for="summ">SUMMARY</label>
        <div id="summ" class="description"><span v-html="details.summary" /></div>
      </div>
      <transition name="collapse">
        <div v-if="isVisible">
          <div class="col-9 fl-left specDetail">
            <label for="org">ORGANIZER</label>
            <div id="org" class="description">{{ details.organizer }}</div>
          </div>
          <div class="col-2 fl-right specDetail ta-right">
            <label for="no">ATTENDEE</label>
            <div id="no">{{ details.attendees }}</div>
          </div>
          <div class="col-12 fl-left specDetail">
            <label for="desc">DESCRIPTION</label>
            <div id="desc" class="description">
              <span v-html="details.description" />
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { DateTime } from "luxon";

export default {
  methods: {
    emitActiveEvent() {
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
      return this.details.id === this.activeEvent
    },
  },
};
</script>