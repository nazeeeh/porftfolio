<template>
    <div class="bio">
        <h2 class="subtitle-1 grey--text">Bio Data</h2>
            <v-container my-5 class="grey lighten-4">
                <v-card class="pa-3 mb-3" flat tile v-for="bio in bios" :key="bio.duties">
                    <v-row :class="` ${bio.trans}`" dense>
                        <v-flex xs12 md6>
                            <div class="caption">Organization</div>
                            <div>{{ bio.org }}</div>
                        </v-flex>
                        <v-flex xs6 sm4 md2>
                            <div class="caption">Position</div>
                            <div>{{ bio.position }}</div>
                        </v-flex>
                        <v-flex xs6 sm4 md2>
                            <div class="caption">Duties</div>
                            <div>{{ bio.duties }}</div>
                        </v-flex>
                        <v-flex xs6 sm4 md2>
                            <div class="caption">Year</div>
                            <div>{{ bio.year }}</div>
                        </v-flex>
                    </v-row>
                </v-card>
            </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            bios: [
                {
                    org: "Tech Specialist Academy", position: "TiideLab 2020 Fellow", duties: "Software developer", year:"2020", trans:"one"
                },
                {
                     org: "Vaccine Network for Disease Control", position: "Data Entry Officer", duties: "OVC Nomis system Administrator", year:"2018 - 2020", trans:"two"
                },
                {
                     org: "Ministry of Land and Housing Jigawa state", position: "Infomation Technology Support Officer", duties: "GIS system Administrator", year:"2016 - 2017", trans:"three"  
                }
            ]
        }
    }
}
</script>

<style scoped>
.one{
    border-left: 10px solid teal;
}
.two{
    border-left: 10px solid orangered;
}
.three{
    border-left: 10px solid greenyellow;
}
</style>