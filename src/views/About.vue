<template>
  <div class="about">
    <v-layout row>
      <v-flex xs12>
          <v-list>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>Built on Vue.js Framework</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>Papaparse library is used to convert user uploaded file to JSON format file.</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>Vue2-leaflet and Leaflet-JS libraries are used for Map visualization.</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>Vue-ChartJS and Chart.JS libraries are used for Charts visualization.</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>On Home page, once the user uploads a file, the map will loop through the co-ordinates and list out the locations.</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>On click of each location, a popup will be displayed with the corresponding id of the location.</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>After user uploading a file, user can click on the Data Visualization button to visualize the charts.</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>User can click on the labels on top to the charts to filter the data that needs to be shown.</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>After user uploading a file, a table consisting of location co-ordinates will be shown to the user on Home page below Charts and Maps..</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>I truncated the given data.csv file to contain only 400 records of the data due to 'Out of Memory Crash' which will happen due to more consumption from the function and which will cause the application to come to halt. Kindly use the data file with less records for the using purpose of this small nifty app.</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>I worked on the Backend task using Node.JS and I surmised that this application will perform a heavy server-side computation/processing. Since, it will be mostly based on other server-side languages such as Python/Go or any other language which can handle the computation, due to that I stopped going ahead with it.</v-list-tile-content>
            </v-list-tile>
          </v-list>
      </v-flex>
    </v-layout>
  </div>
</template>
