<template>
  <myScroll @handle-scroll="handleScroll">
    <div class="container vScroll">
      <div class="row justify-content-center align-items-center">
        <EventCard
          v-for="event in event.events"
          :key="event.id"
          :event="event"
        ></EventCard>

        <div class="loading_data" v-if="loading_data">
          <span class="fa fa-spinner fa-spin"></span> Loading
        </div>

        <div class="loading_data" v-if="show_end_message">No More Posts :)</div>
      </div>
    </div>
  </myScroll>
</template>

<script>
import EventCard from "@/components/EventCard.vue";

import { mapState } from "vuex";

export default {
  components: {
    EventCard,
  },

  data() {
    return {
      limit: 50,
      offset: 0,
      loading: false,
      loading_data: false,
      show_end_message: false,
    };
  },
  methods: {
    loadGif() {
      this.offset += 50;
      this.$store.dispatch("event/fetchEvents", {
        limit: this.limit,
        offset: this.offset,
      });
    },

    handleScroll() {
      // console.log(vertical, horizontal, nativeEvent);
      this.loadGif();
    },
  },

  created() {
    this.$store.dispatch("event/fetchEvents", {
      limit: this.limit,
      offset: this.offset,
    });

    window.addEventListener("scroll", () => {
      console.log('ok');
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      if (bottomOfPage || pageHeight < visible) {
        this.loadGif();
      }
    });
  },

  computed: {
    ...mapState(["event"]),
  },
};
</script>

<style scope>
.vScroll {
  height: 100vh;
}

</style>
