<template>
 <div>   
   <Header></Header>
    <div  class="body">
      <router-view></router-view>
    </div>
    <div  class="footer">
     <Footer></Footer>
    </div>
 </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
     export default {
       components:{Header,Footer}

     }
</script>