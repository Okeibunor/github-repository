<template>
  <div class="card">
    <div class="card-text">
      <a :href="htmlUrl">{{title}}</a>
      <p>{{body?body:'No description available'}}</p>
      <div class="f6">Updated {{ update | moment("from", "now") }}</div>
    </div>
    <div class="card-graph">
      <line-chart :chartdata="chartData" :options="chartOptions" :height="20" :width="200" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LineChart from './Chart.js'
export default {
  name: "repocard",
  data:function(){
    return {
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            backgroundColor:'transparent',
            data: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
          }
        ]
      },
      chartOptions: {
        responsive: false,
        legend: {
          display: false
        },
        elements: {
          line: {
            borderColor: 'green',
            borderWidth: 1
          },
          point: {
            radius: 0
          }
        },
        tooltips: {
          enabled: false
        },
        scales: {
          yAxes: [
            {
              display: false
            }
          ],
          xAxes: [
            {
              display: false
            }
          ]
        }
      }
    }
  },
  props:["title","body","update","htmlUrl"],
  components:{
    LineChart
  },
  computed:{
    // ...mapGetters(['getAllCommits'])
  },
  mounted(){
    // this.$store.dispatch("fetchAllCommits");
  }
};
</script>

<style scoped>
  .card{
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #eaecef;
    padding: 24px 0px;
  }
  .card .card-text a{
    color: #0366d6;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
  }
  .card .card-text p{
    color: #586069;
    font-size: 14px;
  }
  .card .card-text .f6{
    color: #586069;
    font-size: 12px;
  }
  svg{
    vertical-align: middle;
  }
</style>
