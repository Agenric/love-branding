<template>
  <div class="time">
    <h2>
      {{ days_old }}天，{{ hours_old }}小时，{{ minutes_old }}分钟，{{ seconds_old }}秒
    </h2>
  </div>
</template>

<script>
export default {
  name: "LoveBranding",
  data() {
    return {
      timer: "",
      days_old: 0,
      hours_old: 0,
      minutes_old: 0,
      seconds_old: 0
    };
  },
  mounted: function() {
    this.init();
  },
  methods: {
    init: function() {
      var meet = new Date("2019-06-10 20:59:00");
      var now = new Date();
      var date_diff = now.getTime() - meet.getTime(); //时间差的毫秒数
      this.days_old = Math.floor(date_diff / (24 * 3600 * 1000)); //计算出相差天数
      var leave1 = date_diff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
      this.hours_old = Math.floor(leave1 / (3600 * 1000)); //计算出小时数
      //计算相差分钟数
      var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
      this.minutes_old = Math.floor(leave2 / (60 * 1000)); //计算相差分钟数
      //计算相差秒数
      var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
      this.seconds_old = Math.round(leave3 / 1000);
      this.timer = setInterval(this.loopSecond, 1000);
    },
    loopSecond: function() {
      if (this.seconds_old < 59) {
        this.seconds_old++;
      } else {
        this.seconds_old = 0;
        if (this.minutes_old < 59) {
          this.minutes_old++;
        } else {
          this.minutes_old = 0;
          if (this.hours_old < 23) {
            this.hours_old++;
          } else {
            this.hours_old = 0;
            this.days_old++;
          }
        }
      }
    }
  },
  beforeDestroy: function() {
    clearInterval(this.timer);
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
