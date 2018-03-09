<template> 	
	<section class="hero is-fullheight">		
	  <div class="hero-body">
	    <div class="container">   
	     <h1 class="title has-text-centered">
	        LIST OF POSTS
	      </h1>  	     
		  
			<div v-for="i of data" class="field">           
               {{i.title}}  <i class="fa fa-edit"></i>  <i class="fa fa-trash"></i>
 
       	 </div>			              
			<div class="control">
				<a class="button is-success">Update</a>
				<a class="button is-danger">Delete</a>
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
			 }
		 }
	 }

 
</script>