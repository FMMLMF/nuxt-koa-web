<template>
  <div class="dropdown">
    <a class="btn btn-forbidden dropdown-toggle" href="#"></a>
    <div class="dropdown-text">
      <span class="icon icon-more"></span>
      <span class="text">更多操作</span>
    </div>
    <div class="dropdown-content">
      <a v-for="item in moreLists" v-on:click="moreTap(item.id,item.disabled)" class="btn itemHover" :class="{'btn-forbidden': item.disabled}" href="#">
        <span class="icon" :class="{'icon-modify': item.type == 'edit','icon-delete': item.type == 'del'}"></span>
        <span class="text">{{item.btnText}}</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  /*eslint-disable*/
  data() {
    return {
    }
  },
  props: {
    moreLists: {
      type: Array,
      required: false,
      default: function () {
        return [
          {
            id: '0',
            type: 'edit',
            btnText: '修改',
            disabled: true
          },
          {
            id: '1',
            type: 'del',
            btnText: '删除',
            disabled: false
          }
        ]
      }
    }
  },
  mounted() {
    $('.dropdown').on("mouseenter mouseleave", function(){
      if($(this).children('.dropdown-content').css('opacity') == 0) {
        $(this).children('.dropdown-content').css({
          opacity: 1,
          visibility: 'visible'
        })
      } else {
        $(this).children('.dropdown-content').css({
            opacity: 0,
            visibility: 'hidden'
        })
      }
    })
  },
  methods: {
    moreTap(id,disabled) {
      if (!disabled) {
        this.$emit('moreTap',id)
      }
    }
  }
}
</script>
<style lang="less">
  .itemHover:hover{
    background-color: #2a2c36;
  }
</style>
