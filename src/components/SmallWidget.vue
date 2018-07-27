<template>
  <ul>
    <li v-for="(item, $index) in infoList" :key="$index">
      <p>{{item.name}}-{{item.age}}</p>
    </li>
  </ul>
</template>

<style>

</style>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['setData', 'infoList'],
  created () {
    setTimeout(()=>{
      this.$emit('setData', '这是子组件设置之后的信息');
    }, 2000)
  },
  mounted () {

  }
}
</script>

