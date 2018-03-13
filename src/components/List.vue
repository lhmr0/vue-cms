<template> 	
	<section class="hero is-fullheight">		
	  <div class="hero-body">
	    <div class="container">   
	     <h1 class="title has-text-centered">
	        LIST OF POSTS
	      </h1>  	     
		  
			<div v-for="i of data" class="field">           
               {{i.title}} <i class="fa fa-edit" @click="update(i._id)"></i>  <i class="fa fa-trash" @click="borrar(i._id)"></i>
 
       	 </div>			
			
    	</div>   
  	</div>
</section>
</template> 	


<script>
 import axios from 'axios';

 export default{
	 mounted(){
		 this.leerApi()
	 },

	 data(){
		 return{
			 data:[],
			  radio: 'post'
		 }
	 },
		 methods: {
			 leerApi(){
				 axios.get('https://rest-mbcode.herokuapp.com/api/mypost')
				 .then(response =>{					 
					 this.data = response.data
				 }).catch(e =>{
					 console.log(e)
				 })
			 },
     	update(dato){
          this.$router.push('/post/'+dato);
        },
       borrar(dato){       	
          axios.delete(`https://rest-mbcode.herokuapp.com/api/mypost/${dato}`)
				 .then(response =>{					 
					 this.data = response.data;
					 this.leerApi();
				 }).catch(e =>{
					 console.log(e)
				 })
        },	
	}

}

 
</script>