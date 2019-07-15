<template>
   <div id='myView'>
      <smooth-load :loading=loading :pulsing=true />
      <h1>{{loadedData.title}}</h1>
      <p>{{loadedData.content}}</p>
    </div>
</template>

<script>
export default {
   name: 'AView',
   data() {
      return {
         loading: true,
         loadedData: Object,
      }
   },
   created() {
      this.loadData();
   },
   methods: {
      async loadData() {
         const response = await SomeAPIService.request();
         if(response.status === 200) {
            this.loadedData.title = response.title;
            this.loadedData.content = response.content;
            this.loading = false;
         }
      }
   }
}
</script>
