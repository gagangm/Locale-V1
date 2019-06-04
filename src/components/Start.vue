<template>
  <div class="text-xs-center mt-4">
    <span>Select file to upload:</span>
    <label for="file-upload" class="custom-file-upload">
      Upload File
    </label>
    <input id="file-upload" @change="onFileChange" type="file">
    <p class="error" v-if="error">{{ error }}</p>
    <v-layout class="ma-3 lay-height">
      <v-flex xs6 class="ma-2">
        <div class="map border-xs3">
          <v-map :zoom="zoom" :center="center">
            <v-tile-layer :url="url" :attribution="attribution"></v-tile-layer>
            <v-marker 
              v-for="(ride, index) in rides"
              :key="index"
              :lat-lng="latLng(ride.from_lat, ride.from_long)">
                <!-- Kindly use the below code if it throws an error saying the data should be a string or else kindly ignore this.-->
                <!-- <v-popup 
                  v-for="(ride, index) in rides"
                  :key="index"
                  :content="ride.id.toString()"></v-popup> -->
                <v-popup 
                  v-for="(ride, index) in rides"
                  :key="index"
                  :content="ride.id"></v-popup>
            </v-marker>
          </v-map>
        </div>
        <h2 class="map-title">Maps</h2>
      </v-flex>
      <div class="border-l"/>
      <v-flex xs6 class="ma-2">
        <div class="small">
          <line-chart :chart-data="datacollection"/>
          <button @click="fillData()">Data Visualization</button>
        </div>
      </v-flex>
    </v-layout>
    <hr/>
    <div class="ma-5">
      <v-layout 
        v-if="rides.length > 0"
        row>
        <v-flex xs3 class="border-xs3">
          <h3>From Longitude</h3>
          <hr/>
          <ul
            v-for="(ride, index) in rides"
            v-bind:item="ride"
            v-bind:key="index">
            <li>
              {{ ride.from_long }}
            </li>  
          </ul>
        </v-flex>
        <v-flex xs3 class="border-xs3">
          <h3>To Longitude</h3>
          <hr/>
          <ul
            v-for="(ride, index) in rides"
            v-bind:item="ride"
            v-bind:key="index">
            <li>
              {{ ride.to_long }}
            </li>
          </ul>
        </v-flex>
        <v-flex xs3 class="border-xs3">
          <h3>From Latitude</h3>
          <hr/>
          <ul
            v-for="(ride, index) in rides"
            v-bind:item="ride"
            v-bind:key="index">
            <li>
              {{ ride.from_lat }}
            </li> 
          </ul>
        </v-flex>
        <v-flex xs3 class="border-xs3">
          <h3>To Latitude</h3>
          <hr/>
          <ul
            v-for="(ride, index) in rides"
            v-bind:item="ride"
            v-bind:key="index">
            <li>
              {{ ride.to_lat }}
            </li>
          </ul>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import { Icon } from "leaflet";
import RidesService from  "../ridesService"
import { Line, Bar } from 'vue-chartjs'
import LineChart from '../LineChart.js'

const papa = require("papaparse");


export default {
  name: "Start",
  extends: Line,
  props: 
    ['chartData', 'options'],
  components: {
    LineChart
  },  
  data() {
    return {
      datacollection: null,
      rides: [],
      error: "",
      text: "",
      seen: false,
      zoom:13,
      center: L.latLng(12.972442, 77.580643),
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png', // Used the basic tile layer for map styles.
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.413220, -1.219482),
      name: 'Contact'
    };
  },
  // async created() {
  //   try {
  //     this.rides = await RidesService.getRides()
  //   } catch(err) {
  //     this.error = err.message
  //   }
  // },
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
  methods: {
    onFileChange(e) {
      let file = e.target.files[0];
      papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: results => {
          let result = results.data;
          let xride = result.map(xride => ({
            ...xride
          }));
          this.rides = xride;
        }
      });
    },
    latLng: (lat, lng) => {
      return L.latLng(lat, lng)
    },
    fillData () {
      try {
        this.datacollection = {
        labels: ['Co-ordinates', 'Co-ordinates'],
        datasets: [
          {
          label: 'Latitude Co-ordinates',
          backgroundColor: '#f87979',
          data: this.rides.map(ride => ride.from_lat)
          },
          {
          label: 'Longitude Co-ordinates',
          backgroundColor: '#f87979',
          data: this.rides.map(ride => ride.from_long)
          }
          ]
        }
      } catch(err) {
          console.error(err)
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#out {
  display: block;
  margin-top: 4em;
  font-family: monospace;
  font-size: 0.8em;
}
#remove {
  cursor: pointer;
  border: 1px solid black;
  margin: 20px;
  padding: 5px;
  background: lightgray;
}
.custom-file-upload {
  cursor: pointer;
  border: 1px solid grey;
  margin: 20px;
  padding: 5px;
  background: lightgray;
}
input[type="file"] {
  display: none;
}
.border-xs3 {
  border: 1px solid grey;
}
p.error {
  border: 1px solid #ff5b5f;
  background-color: #fcfcfc;
  padding: 10px;
  margin-bottom: 15px;
}
.map {
  height: 100%;
}
.small {
  width: 100%;
  height: 70% !important;
}
.small button {
  border: 1px solid black;
  padding: 5px;
  background: lightgrey;
}
.lay-height {
  height: 70% !important;
}
.border-l {
  border-left: 1px solid grey;
  margin: 0 10px;
}
.map-title {
  position: relative;
  top: -2px;
}
</style>
