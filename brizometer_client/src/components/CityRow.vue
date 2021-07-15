<template>
  <div class="city-row" v-on:mouseover="mouseOver()">
      <div class="row">
          <i :style="{color: this.mycolor}" class='col-md-1 bullet fas fa-circle'></i> 
          <span class="col-md-8 city-name"> {{ selectedCity.name }} </span> 
          <span v-show="!active" class='col-md-3 air-polution'> <span>{{ airPolution }}</span> /100</span>
          <span v-show="active" class='col-md-3 delete' v-on:click="deleteFromList()"> <i class='fas fa-trash'></i></span>  
       </div>
  </div>
</template>

<script>
export default {
    name: 'CityRow',
    data(){
        return {
            mycolor: this.randColor(),
        airPolution:'0',
        active: false,
        }
    },
  props: {
    selectedCity:{
        id:null,
        name:'',
        user_id:null,
        city_id:null,
        latitude:null,
        longtitude:null
    }
  },
  mounted:function () {
    this.getAirValues();
  },
  methods:{
      randColor(){
          return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      },
      getAirValues(){
          let url = `https://api.breezometer.com/air-quality/v2/current-conditions?lat=${this.selectedCity.latitude}&lon=${this.selectedCity.longtitude}&key=de4fef0f7fb349f29f3f21c275018069`;
          this.$http.get(url)
            .then(response => {
                console.log('Air Cond' + this.selectedCity.name + ":" , response);
                this.airPolution = response.data.data.indexes.baqi.aqi_display;
            })
            .catch(err => {
                console.error(err);
            })
      },
      mouseOver(){
        this.active = !this.active;   
      },
      deleteFromList(){
            let url = `http://localhost/popularLocation/`;
          this.$http.delete(url,{city_id:this.selectedCity.id,user_id:1})
            .then(response => {
                console.log("deleted",response)
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
    .city-row{
        padding:10px;
        border-bottom: 1px solid lightgray;
        cursor: pointer;
    }
    .city-row .bullet{
        font-size: 5px;
    }
    .city-row .city-name{
        font-size: 15px;
        font-weight: bold;
    }
    .city-row .air-polution{
        font-size: 15px;
    }
    .city-row .air-polution span{
        font-size: 20px;
        font-weight: bold;
    }
</style>
