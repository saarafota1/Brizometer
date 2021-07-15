<template>
  <div class="selectable-cities">
        <CityButton @refreshList="refreshList()" v-for="city in cities" :key="city.id" :city="city" />
  </div>
</template>

<script>
import CityButton from './CityButton.vue'
export default {
  components: { CityButton },
  name: 'SelectableCities',
  props: {
    cities:[]
  },
  mounted: function () {
    this.getCities()
  },
  methods: {
      getCities(){
        this.$http.get('http://localhost:3000/cities')
        .then(response => {
            console.log(response);
            this.cities = response.data;
        })
        .catch(err => {
            console.error(err);
        })
      },
      refreshList(){
        this.$emit('refreshList')
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
