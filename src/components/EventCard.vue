<template>
  <div class="col-md-2 col-lg-2 col-xl-2 col-4">
    <router-link
      class="event-link scale-in-center"
      :to="{ name: 'event-show', params: { id: event.id } }"
    >
      <div class="card swirl-in-fwd m-auto mb-5 scale-in-center">
        <vue-load-image>
          <img
            slot="image"
            class="card-img-top"
            :src="event.images.original.url"
          />
          <img
            slot="preloader"
            class="w-50"
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          />
        </vue-load-image>

        <div class="card-body p-2">
          <svg
            class="card-svg float-start"
            viewBox="0 -10 511.98685 511"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m114.59375 491.140625c-5.609375 0-11.179688-1.75-15.933594-5.1875-8.855468-6.417969-12.992187-17.449219-10.582031-28.09375l32.9375-145.089844-111.703125-97.960937c-8.210938-7.167969-11.347656-18.519532-7.976562-28.90625 3.371093-10.367188 12.542968-17.707032 23.402343-18.710938l147.796875-13.417968 58.433594-136.746094c4.308594-10.046875 14.121094-16.535156 25.023438-16.535156 10.902343 0 20.714843 6.488281 25.023437 16.511718l58.433594 136.769532 147.773437 13.417968c10.882813.980469 20.054688 8.34375 23.425782 18.710938 3.371093 10.367187.253906 21.738281-7.957032 28.90625l-111.703125 97.941406 32.9375 145.085938c2.414063 10.667968-1.726562 21.699218-10.578125 28.097656-8.832031 6.398437-20.609375 6.890625-29.910156 1.300781l-127.445312-76.160156-127.445313 76.203125c-4.308594 2.558594-9.109375 3.863281-13.953125 3.863281zm141.398438-112.875c4.84375 0 9.640624 1.300781 13.953124 3.859375l120.277344 71.9375-31.085937-136.941406c-2.21875-9.746094 1.089843-19.921875 8.621093-26.515625l105.472657-92.5-139.542969-12.671875c-10.046875-.917969-18.6875-7.234375-22.613281-16.492188l-55.082031-129.046875-55.148438 129.066407c-3.882812 9.195312-12.523438 15.511718-22.546875 16.429687l-139.5625 12.671875 105.46875 92.5c7.554687 6.613281 10.859375 16.769531 8.621094 26.539062l-31.0625 136.9375 120.277343-71.914062c4.308594-2.558594 9.109376-3.859375 13.953126-3.859375zm-84.585938-221.847656s0 .023437-.023438.042969zm169.128906-.0625.023438.042969c0-.023438 0-.023438-.023438-.042969zm0 0"
            />
          </svg>

          <!-- <p class="card-text"></p> -->
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import VueLoadImage from "vue-load-image";

export default {
  name: "EventCard",
  props: {
    event: Object,
  },

  components: {
    VueLoadImage,
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #42b983;
}

.card-img-top {
  height: 136px;
}

.card-svg {
  fill: #42b983;
  width: 10%;
}

a {
  color: #42b983;
}

.swirl-in-fwd {
  -webkit-animation: swirl-in-fwd 0.6s ease-in-out 0.5s both;
  animation: swirl-in-fwd 0.6s ease-in-out 0.5s both;
}

@-webkit-keyframes swirl-in-fwd {
  0% {
    -webkit-transform: rotate(-540deg) scale(0);
    transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
    opacity: 1;
  }
}
@keyframes swirl-in-fwd {
  0% {
    -webkit-transform: rotate(-540deg) scale(0);
    transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
    opacity: 1;
  }
}

.scale-in-center:hover {
  -webkit-animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    0.8s both;
  animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s both;
}

@-webkit-keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
</style>
