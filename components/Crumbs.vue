<template>
  <div id="crumbs">
    <div :class="crumbs">{{con}}</div>
  </div>
</template>
<script>
  /*eslint-disable*/
  export default {
    props:['id'],
    data() {
      return {
        crumbs: 'crumbs2',
        con: '上海'
      }
    },
    watch: {
      id(val1, val2){
        if(val1 == 2){
          this.con = '北京'
        }else if(val1==1){
          this.con = '上海'
        }
        this.crumbs = "crumbs"+val2;
      }
    },
    mounted() {

    }
  }
</script>
<style lang="less">
  #crumbs{
    width:100px;
    font-size: 14px;
    padding: 1px 6px;
    border-radius: 2px;
    margin-right: 5px;
    color:#fff;
    height: 30px;
    .crumbs1{
      background-color: #94cc68;
    }
    .crumbs2{
      background-color: yellowgreen;
    }
    .crumbs3{
      background-color:blueviolet;
    }
  }
</style>
