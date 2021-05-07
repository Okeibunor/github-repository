<template>
  <div
    class="card"
    :class="{
      'light-background': !getDarkMode,
      'dark-background': getDarkMode,
    }"
  >
    <div class="card-text">
      <a :href="htmlUrl">{{ title }}</a>
      <p>{{ body ? body : "No description available" }}</p>
      <div class="f6">Updated {{ update | moment("from", "now") }}</div>
    </div>
    <div class="card-graph">
      <button class="btn">
        <svg
          class="octicon octicon-star mr-1"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
          ></path>
        </svg>
        Star
      </button>
      <line-chart
        :chartdata="plotData"
        :options="chartOptions"
        :height="15"
        :width="200"
        v-if="plotData"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LineChart from "./Chart.js";
export default {
  name: "repocard",
  data: function () {
    return {
      plotData: {
        labels: JSON.parse(localStorage.getItem(this.title)).map((x) => x.week),
        datasets: [
          {
            backgroundColor: "transparent",
            data: JSON.parse(localStorage.getItem(this.title)).map(
              (x) => x.total
            ),
          },
        ],
      },
      chartOptions: {
        responsive: false,
        legend: {
          display: false,
        },
        elements: {
          line: {
            borderColor: "#9ACD32",
            borderWidth: 1.5,
          },
          point: {
            radius: 0,
          },
        },
        tooltips: {
          enabled: false,
        },
        scales: {
          yAxes: [
            {
              display: false,
            },
          ],
          xAxes: [
            {
              display: false,
            },
          ],
        },
      },
    };
  },
  props: ["title", "body", "update", "htmlUrl", "chartData"],
  components: {
    LineChart,
  },
  computed: {
    ...mapGetters(["getDarkMode"]),
  },
  beforeMount() {
    this.$store.dispatch("fetchAllCommits", this.title);
  },
};
</script>

<style scoped>
.card {
  display: flex;
  border-top: 0.5px solid #eaecef;
  padding: 24px 0px;
}
.card .card-text {
  width: 50%;
}
.card .card-graph {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
}
.btn {
  padding: 3px 12px;
  font-size: 12px;
  line-height: 20px;
  color: #24292e;
  background-color: #fafbfc;
  border-radius: 6px;
  user-select: none;
  border: 1px solid rgba(27, 31, 35, 0.15);
  vertical-align: middle;
  box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04),
    inset 0 1px 0 hsla(0, 0%, 100%, 0.25);
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;
}
.btn:focus {
  outline: none;
}
.dark-background .btn {
  background-color: #21262d;
  border-color: #30363d;
  box-shadow: none;
  color: rgba(187, 187, 187, 0.692);
}
.card.dark-background {
  border-top: 0.5px solid rgba(255, 255, 255, 0.24);
}
.card .card-text a {
  color: #0366d6;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
}
.card .card-text p {
  color: #586069;
  font-size: 14px;
}
.card .card-text .f6 {
  color: #586069;
  font-size: 12px;
}
svg {
  vertical-align: middle;
}
@media only screen and (max-width: 600px) {
  .chart-text {
    width: 60% !important;
  }
}
</style>
