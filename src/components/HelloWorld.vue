<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="stepTo">Essential Links</h2>


    <h2 ref="infoTitle">{{info}}</h2>
    <small-widget @setData="onSetData" :infoList="infoList"></small-widget>

  </div>
</template>

<script>
import SmallWidget from './SmallWidget.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      info: '这是子组件设置之前的信息',
      infoList: [
        {name: 'lucy', age: '25'},
        {name: 'lily', age: '23'},
        {name: 'mona', age: '27'}
      ]
    }
  },
  components: {
    SmallWidget
  },
  methods: {
    onSetData (value) {
      this.info = value;
      this.$refs.infoTitle.style.color = 'color: #f00';
    },
    stepTo () {
      this.$router.push('/Main')
    },
  },
  beforecreated () {
    let curData = this.msg;
    console.log('beforecreated', curData);
  },
  created () {
    let curData = this.msg;
    console.log('created', curData);
  },
  beforeMount () {
    let curData = this.msg;
    console.log('beforeMount', curData);
  },
  mounted () {
    let curData = this.msg;
    console.log('mounted', curData);
  },
  beforeDestroy () {
    let curData = this.msg;
    console.log('beforeDestroy', curData);
  },
  destroyed () {
    let curData = this.msg;
    console.log('destroyed', curData);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
