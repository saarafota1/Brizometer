<template>
  <div class="selected-cities-list">
      <CityRow v-for="selectedCity in selected_cities" :key="selectedCity.id" :selectedCity="selectedCity" />
  </div>
</template>

<script>
import CityRow from './CityRow.vue'
export default {
  components: { CityRow },
  name: 'SelectedCitiesList',
  props: {
    selected_cities:[]
  },
  mounted:function () {
    this.getSelectedCities();
  },
  methods:{
    getSelectedCities(){
      this.$http.get('http://localhost:3000/popularLocation/1')
      .then(response => {
          console.log(response);
          this.selected_cities = response.data;
      })
      .catch(err => {
          console.error(err);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .selected-cities-list{
    margin-bottom: 20px;
    padding:10px;
  }
</style>
