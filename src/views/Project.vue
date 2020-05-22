<template>
    <div class="project">
        <h2 class="subtitle-1 grey--text">My projects</h2>
            <v-container my-5 class="d-inline-flex ">
                <v-row>
                    <v-flex xs12 md3 v-for="proj in projects" :key="proj.title">
                        <v-card class="mt-3" max-width="250">
                            <v-img class="white--text align-end" height="200px" :src="proj.image">
                                <v-card-title class="teal--text">{{proj.title}}</v-card-title>
                            </v-img>
                            <v-card-text class="text--primary">
                                <div>{{proj.text}}</div>
                            </v-card-text>
                            <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn icon>
                                    <v-icon>mdi-heart</v-icon>
                                    </v-btn>
                                    <a href="https://www.github.com" style="color: grey; margin-left: 10px">
                                    <i class="fab fa-github-square fa-2x "></i>
                                    </a>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-row>
            </v-container>
    </div>
</template>

<script>
export default {
   data(){
       return {
           projects: [
               {
                image: require('../assets/projects/ecommerce.jpg'), title: "E-commerce project", text: "Here is an Ecommerce web app that was built with Vue"
               },
               {
                image: require('../assets/projects/newsletter.jpg'), title: "Newsletter project", text: " A web app newsletter built with nodeJs, HTML5 and CSS3"
               },
               {
                image: require('../assets/projects/drummer.jpg'), title: "Drummer project", text: "The drum web app was built with HTML5 and CSS3"
               },
               {
                image: require('../assets/projects/live_weather_forecast.jpg'), title: "Weather project", text: "The weather forecast application is built with node js"
               }
           ]
       }
   }
}
</script>