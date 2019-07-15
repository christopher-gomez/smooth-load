<template>
  <div class='example' style='text-align:center'>
    <div class='frame'>
      <smooth-load :loading='loading' class='framedSpinner' :pulse=pulsing :spin=spinning v-if='renderComponent'/>
    </div>
    <button @click='togglePulse()'>Toggle Pulse</button><button @click='toggleSpin()'>Toggle Spin</button>
  </div>
</template>

<script>
export default {
   data() {
      return {
         loading: true,
         spinning: true,
         pulsing: false,
         renderComponent: true,
      }
   },
   mounted() {
      this.load();
   },
   methods: {
     load() {
        this.dummyLoad();
     },
     toggleSpin() {
        this.spinning = !this.spinning;
        this.key+=1;
     },
     togglePulse() {
        this.pulsing = !this.pulsing;
        this.forceRerender();
        console.log('pulsing: '+this.pulsing);
     },
     forceRerender() {
        // Remove my-component from the DOM
        this.renderComponent = false;

        this.$nextTick(() => {
          // Add the component back in
          this.renderComponent = true;
        });
      },
     async dummyLoad() {
        await new Promise(resolve => setTimeout(resolve, 3000));
     },
   }
};
</script>
<style scoped>
.example {
   text-overflow: wrap !important;
   width:100%;
}
.frame {
   height:400px;
   width:100%;
   border:1px solid black;
   display:block;
   text-overflow: wrap !important;
   width:100%;
}
.framedSpinner {
   position:relative !important;
   width:100%;
   z-index:2 !important;
}
.simulateHide {
   display:none;
}
button {
   color: white;
   background: #F3F3F3;
   border: 1px #DADADA solid;
   padding: 5px 10px;
   border-radius: 2px;
   font-weight: bold;
   font-size: 9pt;
   outline: none;
   background: #4C8FFB;
   border: 1px #3079ED solid;
   box-shadow: inset 0 1px 0 #80B0FB;
   margin:1em;
}
button:hover {
   border: 1px #2F5BB7 solid;
   box-shadow: 0 1px 1px #EAEAEA, inset 0 1px 0 #5A94F1;
   background: #3F83F1;
}

button:active {
   box-shadow: inset 1px 1px 1px #DFDFDF;
}
</style>
