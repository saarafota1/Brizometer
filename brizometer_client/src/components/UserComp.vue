<template>
  <div class="user-list">
      <select class="users-list">
          <option v-for="userr in users" :key="userr.id" value="userr.id" >{{userr.name}}</option>
      </select>
  </div>
</template>

<script>
export default {
  name: 'UserComp',
  props: {
      users:[]
  },
  data(){
    return {
      user:{
        id:1,
        name:'saar'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .user-list{
        max-width: 800px;
        margin: 0 auto;
        text-align: left;
    }
</style>
