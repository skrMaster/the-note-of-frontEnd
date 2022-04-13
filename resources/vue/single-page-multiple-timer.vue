<template>
  <view>
    <view v-for="(item, index) in list" :key="index">
      时间：{{ item.time }}
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    
  },
  onLoad() {
    this.list = [{
      time: 0,
      time2: 15,
      time3: 15,
      count: null
    },
    {
      time: 0,
      time2: 16,
      time3: 16,
      count: null
    }]

    this.list = this.list.map((e, i) => {
      return {
        time: e.time2 + e.time3,
        count: e.count
      }
    })

    for (let i = 0; i < this.list.length; i++) {
      this.list[i].count = setInterval(() => {
        
        this.list[i].time--

        if (this.list[i].time === 0) {
          clearInterval(this.list[i].count)
        }
      }, 1000)
    }
  }
}
</script>

<style scoped></style>
