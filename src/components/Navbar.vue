<template>
    <nav>
        <v-app-bar app
        absolute
        color="#43a047"
        dark
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll>

        <template v-slot:img="{ props }">
            <v-img v-bind="props" gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"></v-img>
        </template>
        <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title class="subtitle-1 text-uppercase white--text">
                    <span>My</span>
                    <span class="font-weight-light">Portfolio</span>
                    <span class="font-weight-light">Page</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn @click="move" small outlined class="success white--text">
                    <span>contact me</span>
                    <v-icon small right>mail</v-icon>
        </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app class="success">

        <v-list dense nav class="py-0">
          <v-list-item two-line class="px-0">
            <v-list-item-avatar>
              <img :src="image">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Nazih Ajanah</v-list-item-title>
              <v-list-item-subtitle>Frontend software developer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item v-for="link in links" :key="link.text" link router :to="link.route">
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>

          </v-list-item>

        </v-list>

        <div class="social-icons">
          <a href="https://twitter.com/i_am_nazeeh">
            <span style="margin-right: 20px; font-size:20px; color: grey">
          <i class="fab fa-twitter"></i>
        </span>
          </a>
          
          <a href="https://www.linkedin.com/Nazihibrahim">
            <span style="margin-right: 20px; font-size:20px; color: grey">
            <i class="fab fa-linkedin"></i>
            </span>
          </a>

          <a href="https://www.whatsapp.com/08139265575/">
            <span style="margin-right: 20px; font-size:20px; color: grey">
            <i class="fab fa-whatsapp"></i>
            </span>
          </a>
        </div>
        </v-navigation-drawer>
    </nav>
</template>
    
<script>
export default {
  data(){
      return{
          drawer: false,
          links: [
              {icon: 'dashboard', text: 'Dashboard', route: '/'},
              {icon: 'folder', text: 'My projects', route: '/project'},
              {icon: 'person', text: 'Bio Data', route: '/bio'}
          ],
          image: require('../assets/profile/pp.png')
      }
  },
  
  methods:{
    move(){
      this.$router.push({path: "/contact"});
    }
  }
}
</script>

<style scoped>

.social-icons{
  margin-top : 60px;
  text-align: center;
  
  
}
</style>