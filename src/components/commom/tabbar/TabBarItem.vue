<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :class="{active:isActive}"><slot name="item-text"></slot></div>
    </div>
</template>


<script>
export default {
    name:"TabBarItem",
    data(){
        return{
            isActive:false
        }
    },
    props:{
        path:String
    },
    methods:{
        itemClick () {
            this.$router.push(this.path)
        }
    }
}
</script>


<style lang="less" scoped>

  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>