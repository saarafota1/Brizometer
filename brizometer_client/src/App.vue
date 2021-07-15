<template>
  <div id="app">
    <Brizometer msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Brizometer from './components/Brizometer.vue'
import SelectedCitiesList from './components/SelectedCitiesList.vue'
import CityRow from './components/CityRow.vue'
import TopFiveCities from './components/TopFiveCities.vue'
import SelectableCities from './components/SelectableCities.vue'
import CityButton from './components/CityButton.vue'

export default {
  name: 'App',
  components: {
    Brizometer,
    SelectedCitiesList,
    CityRow,
    TopFiveCities,
    SelectableCities,
    CityButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
