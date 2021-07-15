<template>
  <div class="city-button" v-on:click="selectCity()">
      <i>+</i>
      <span>{{city.name}}</span>
  </div>
</template>

<script>
export default {
  name: 'CityButton',
  props: {
    city:{
        id:null,
        name:'default',
        lat:0,
        long:0
    }
  },
  methods:{
      selectCity(){
          this.$http.put('http://localhost:3000/popularLocation',{city_id:this.city.id,user_id:1})
        .then(response => {
            console.log('updated', response);
            this.$emit('refreshList')
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
    .city-button{
        background-color: #cbf8f8;
        color: #000;
        padding: 10px;
        border-radius: 5px;
        display: inline-block;
        margin-right: 5px;
        cursor: pointer;
        font-weight: bold;
         margin-top: 10px;
    }
    .city-button i{
        font-size: 25px;
        font-weight: bold;
        margin-right: 5px;
        color:rgb(140, 140, 216);
        margin-top: 10px;
    }
</style>
