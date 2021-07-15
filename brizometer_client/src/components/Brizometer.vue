<template>
  <div class="brizometer">
      <TopFiveCities />
      <SelectedCitiesList  />
      <SelectableCities @refreshList="refreshList()" />
  </div>
</template>

<script>
import SelectableCities from './SelectableCities.vue'
import SelectedCitiesList from './SelectedCitiesList.vue'
import TopFiveCities from './TopFiveCities.vue'
export default {
  components: { TopFiveCities, SelectedCitiesList, SelectableCities },
  name: 'Brizometer',
  data(){
    return {
      selectedUser:{id:1,name:'Saar'},
      forceRefresh:false,
    }
  },
  props: {
    msg: String
  },
  methods:{
    refreshList(){
      this.forceRefresh = !this.forceRefresh;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .brizometer{
        max-width: 800px;
        margin: 0 auto;
        text-align: left;
    }
</style>
