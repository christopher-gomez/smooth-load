<template>
  <div class="bubble-wrapper" v-if="loading">
    <div ref="bubble" :class="{bubble: pulse, bubbleVis:!pulse}" >
      <div class="spinner2" :class="{spinning: spin}" :style='spinColor'></div>
    </div>
    <div class="text" v-if="text" v-html="text"></div>
    <div ref="bubblePulse" :class="{bubblePulse: pulse, bubblePulseVis:!pulse}" :style='pulseCol'></div>
  </div>
</template>

<script>
import { TimelineLite, Back, Elastic, Expo } from "gsap";
export default {
  props: {
    loading: {
      type: Boolean,
      default: true,
      required: true,
    },
    spin: {
      type: Boolean,
      required: false,
      default: true,
    },
    spinnerColor: {
      type: String,
      required: false,
      default: '#ffffff',
    },
    pulse: {
      type: Boolean,
      required: false,
      default: true,
    },
    pulseColorLeft: {
      type: String,
      required: false,
      default: '#1565c0',
    },
    pulseColorRight: {
      type: String,
      required: false,
      default: '#149ac36b',
    },
    text: {
      type: String,
      required: false,
    }
  },
  data() {
     return {
        timeline: null,
     };
  },
  mounted() {
     if(this.pulse) {
        this.createTimeline();
     }
  },
  methods: {
     createTimeline() {
        const bubble = this.$refs.bubble;
        const bubblePulse = this.$refs.bubblePulse;
         this.timeline = new TimelineLite({
           onComplete: () => this.timeline.restart()
         });
         this.timeline.to(bubble, 0.4, {
            scale: 0.8,
            rotation: 16,
            ease: Back.easeOut.config(1.7)
         });

         this.timeline.to(bubblePulse, 0.5, {
            scale: 0.9,
            opacity: 1
         },"-=0.6");

        this.timeline.to(bubble, 1.2, {
            scale: 1,
            rotation: "-=16",
            ease: Elastic.easeOut.config(2.5, 0.5)
         });

         this.timeline.to(bubblePulse,1.1,{
            scale: 3,
            opacity: 0,
            ease: Expo.easeOut
         },"-=1.2");
      },
  },
  computed: {
    spinColor() {
      return {'--color': this.spinnerColor};
    },
    pulseCol() {
      return {'--color1': this.pulseColorLeft, '--color2':this.pulseColorRight};
    }
  },
  watch: {
     pulse: {
        immediate: true,
        handler(val, oldVal) {
          if(val === true) {
             this.createTimeline();
          } else {
             if(this.timeline !== null) {
                this.timeline.kill();
                this.timeline = null;
             }
          }
        }
     }
  }
};
</script>

<style scoped>
.spinner2 {
  position: relative;
}
.spinner2::before,
.spinner2::after {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  transform-origin: left top;
  border: 5px solid transparent;
  border-radius: 50%;
  border-top-color: var(--color);
  border-bottom-color: var(--color);
  content: "";
}
.spinner2::before {
  padding: 20px;
}
.spinner2::after {
  padding: 40px;
}
.spinning::before {
  padding: 20px;
  animation: spin-spinner2 0.6s infinite linear;
}
.spinning::after {
  padding: 40px;
  animation: spin-spinner2 1s infinite linear reverse;
}
@keyframes spin-spinner2 {
  from {
    transform: rotateZ(0deg) translate3d(-50%, -50%, 0);
  }
  to {
    transform: rotateZ(360deg) translate3d(-50%, -50%, 0);
  }
}
.bubble-wrapper {
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
}

.bubble {
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  margin-top: -60px;
  margin-left: -60px;
  top: 50%;
  left: 50%;
}

.bubbleVis {
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  margin-top: -60px;
  margin-left: -60px;
  top: 50%;
  left: 50%;
}

.bubblePulseVis {
  position: absolute;
  z-index: 1;
  height: 120px;
  width: 120px;
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -60px;
  background: var(--color1); /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    var(--color1),
    var(--color2)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    var(--color1),
    var(--color2)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-radius: 50%;
  opacity: 1;
}

.text {
  position: absolute;
  z-index: 2;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  top: 60%;
  color: black;
  text-align:center;
  font-family:inherit
}

.bubblePulse {
  position: absolute;
  z-index: 1;
  height: 120px;
  width: 120px;
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -60px;
  background: var(--color1); /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    var(--color1),
    var(--color2)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    var(--color1),
    var(--color2)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
}

.bubble-image {
  height: 50%;
  background: transparent !important;
  border-radius: 50%;
}
</style>
