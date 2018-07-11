<template>
  <div id="menu">
    <!--<div class="zone-zones">-->
      <!--<a class="current-zone" @click="changeCity">{{city}}<i class="el-icon-caret-bottom el-icon"></i></a>-->
      <!--<ul class="zone-switcher-select" v-show="cityFlag">-->
        <!--<li v-for="region in regions">-->
          <!--<a @click="redirectMain(region.id,region.name)">{{region.name}}</a>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
    <div class="zone-items">
      <ul>
        <li v-for="(nav,index) in navigation" :class="{active: isSelect==nav.name}" @click="dropdown(nav,index)">
          <a>
            <span :class="nav.icon" class="icon"></span>
            {{nav.title}}
            <i v-if="nav.subMenu" class="el-icon-arrow-down el-icon"></i>
            <i v-if="!nav.subMenu" class="el-icon-arrow-right el-icon"></i>
          </a>
          <ul v-show="(currentMenu==index && dropFlag)" class="level-2">
            <li v-for="sub in nav.subMenu" @click="redirectRoute(sub.name)" >{{sub.title}}</li>
          </ul>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    props: ['dataLeft'],
    data() {
      return {
        city: '上海',
        cityFlag: false,
        isSelect: 'normalCompany',
        currentMenu: '',
        dropFlag: false,
        subShow: false,
        regions: {},
        navigation: {}
      }
    },
    mounted() {
      this.isSelect = this.$route.name
      this.regions = this.dataLeft.regions
      this.navigation = this.dataLeft.navigation
    },
    methods: {
      menuBlur() {
        this.isSelect = ''
      },
      dropdown(item, index) {
        if (item.subMenu) { // 有二级菜单
          this.dropFlag = !this.dropFlag
        } else {  // 没有二级菜单
          this.$router.push({name: item.name})
          this.isSelect = item.name
        }
      },
      changeCity() {
        this.cityFlag = !this.cityFlag
      },
      redirectMain(regionId, name) {
        this.regionId = regionId
        this.city = name
        this.$router.push({name: 'overview'})
        this.cityFlag = false
      },
      redirectRoute(routeName) {
        this.currentRoute = routeName
        this.$router.push({name: routeName})
      }
    },
    watch: {
      $route(curVal, oldVal) {
        if (curVal !== oldVal) {
          this.isSelect = curVal.name
        }
      }
    }
  }
</script>
<style lang="less">
  .iconstyle{
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
  #menu{
    width: 200px;
    background: #22222c;
    height: 100%;
    float: left;
    padding-top: 48px;
    position: fixed;
    z-index: 90;
    overflow-y: auto;
    .zone-zones {
      border-bottom: 1px solid #2a2a36;
      position: relative;
      .current-zone {
        line-height: 36px;
        color: #fff;
        vertical-align: middle;
        border-bottom: 1px solid #2a2a36;
        position: relative;
        display: block;
        height: 36px;
        cursor: pointer;
        font-size: 14px;
        padding-left: 45px;
        .el-icon{
          .iconstyle()
        }
      }
      .zone-switcher-select {
        position: absolute;
        top: 38px;
        left: 0;
        padding: 0;
        width: 190px;
        margin: 0 5px;
        z-index: 10;
        border-bottom: 0 none;
        background: #fff;
        border-radius: 3px;
        li{
          line-height: 36px;
          color: #333;
          font-size: 12px;
          padding: 0 10px;
          border-bottom: 1px solid #f5f5f5;
          a{
            color: #333;
            display: block;
          }
        }
        li:last-child{
          border: 0;
        }
      }
    }
    .zone-items{
      font-size: 13px;
      .active{
        background-color: #57b382;
        color:#fff;
        .el-icon{
          color:#fff;
        }
      }
      li{
        cursor: pointer;
        color: #c0bca9;
        line-height: 40px;
        padding-left: 30px;
        a{
          display: block;
          color:#fff;
          position: relative;
          .el-icon{
            .iconstyle();
            color:#c0c1c4;
          }
          .icon{margin-right: 5px;}
        }
        .level-2{
          display: block;
          li{
            padding-left:0;
          }
        }
      }
      li:hover{
        color: #ffffff;

      }
      li:first-child{
        margin-top: 10px;
      }
    }

  }
</style>
