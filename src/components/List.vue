<template> 	
	<section class="hero is-fullheight">		
	  <div class="hero-body">
	    <div class="container">   
	     <h1 class="title has-text-centered">
	        LIST OF POSTS
	      </h1>  	     
		  <div v-for="i of data">
			  <span>{{i.title}}</span>
			</div>

	        <label class="checkbox">
			  <input type="checkbox">
			 Ejemplo de post
			</label>
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
			 data:[]
		 }
	 },
		 methods: {
			 leerApi(){
				 axios.get('https://rest-mbcode.herokuapp.com/api/mypost')
				 .then(response =>{
					 
					 this.data = response.data
					 console.log(this.data.title)
				 }).catch(e =>{
					 console.log(e)
				 })
			 }
		 }
	 }

 
</script>