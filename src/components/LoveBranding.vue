<template>
  <div class="time">
    <h2>
      {{ days_old }}天，{{ hours_old }}小时，{{ minutes_old }}分钟，{{
        seconds_old
      }}秒
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
      var interval =
        new Date().getTime() - new Date("2019/06/10 20:59:00").getTime();
      this.days_old = Math.floor(interval / (24 * 3600 * 1000));

      interval = interval % (24 * 3600 * 1000);
      this.hours_old = Math.floor(interval / (3600 * 1000));

      interval = interval % (3600 * 1000);
      this.minutes_old = Math.floor(interval / (60 * 1000));

      interval = interval % (60 * 1000);
      this.seconds_old = Math.round(interval / 1000);

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
