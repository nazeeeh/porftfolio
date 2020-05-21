<template>
    <div class="dashboard">
        <h2 class="subtitle-1 grey--text">Dashboard</h2>
        <v-container my-5 class="black--text">
            <h2 class="mb-4"><strong> Frontend Software Developer </strong></h2>
            <p>Hi, I'm Nazih Ajanah. I am a tech enthusiast, over the years i have gained cognitive experience in HTML5,CSS3,JavaScript,Node
                which has further strengthen my capacity to learn frameworks like VueJs, Vuetify, bootstraps, express Js.
            </p>
            <p>
                Aside my technical skills, Over the 5 months of my tech career, I had the opportunity to be among the 30 participants on a bootcamp
                under the umbrella of Tech specialist Academy which was sponsored by ITF and NECA. During this period, i gained skills like Project management, leadership skills, Business idea canva
                and community development skills.
            </p>
        </v-container>
        <h3 style="text-align: center">My Skill Ratings</h3>
    <v-container >
        <v-row >
            <v-flex xs6 md3 class="justify-center">
                <v-progress-circular :rotate="360" :size="100" :width="5" :value="valueOne" color="teal">{{ valueOne }}
                </v-progress-circular>
                <p class="langs">JavaScript</p>
            </v-flex>
            <v-flex xs6 md3 class="justify-center">
                <v-progress-circular :rotate="-90" :size="100" :width="5" :value="valueTwo" color="primary">{{ valueTwo }}
                </v-progress-circular>
                <p class="langs">CSS3</p>
            </v-flex>
            <v-flex xs6 md3 class="justify-center">
                <v-progress-circular :rotate="90" :size="100" :width="5" :value="valueThree" color="red">{{ valueThree }}
                </v-progress-circular>
                <p class="langs">HTML5</p>
            </v-flex>
            <v-flex xs6 md3 class="justify-center">
                <v-progress-circular :rotate="180" :size="100" :width="5" :value="valueFour" color="pink">{{ valueFour }}
                </v-progress-circular>
                <p class="langs">VueJs</p>
            </v-flex>
            <v-flex xs6 md3 class="justify-center">
                <v-progress-circular :rotate="360" :size="100" :width="5" :value="valueFive" color="purple">{{ valueFive }}
                </v-progress-circular>
                <p class="langs">NodeJs</p>
            </v-flex>
            <v-flex xs6 md3 class="justify-center">
                <v-progress-circular :rotate="100" :size="100" :width="5" :value="valueSix" color="green">{{ valueSix }}
                </v-progress-circular>
                <p class="langs">MySQL</p>
            </v-flex>
            <v-flex xs6 md3 class="justify-center">
                <v-progress-circular :rotate="-90" :size="100" :width="5" :value="valueSeven" color="orange">{{ valueSeven }}
                </v-progress-circular>
                <p class="langs">Figma</p>
            </v-flex>
            <v-flex xs6 md3 class="justify-center">
                <v-progress-circular :rotate="90" :size="100" :width="5" :value="valueEight" color="yellow">{{ valueEight }}
                </v-progress-circular>
                <p class="langs">Microsoft Office</p>
            </v-flex>
            
        </v-row>
    </v-container>
    </div>
</template>
<script>
  export default {
    data () {
      return {
    
        valueOne: '70%',
        valueTwo: '80%',
        valueThree: '80%',
        valueFour: '60%',
        valueFive: '60%',
        valueSix: '70%',
        valueSeven: '60%',
        valueEight: '80%',
      }
    },

  }
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}

.langs{
    margin-left: 35px;
}

</style>
       

