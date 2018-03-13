<template> 
	<section class="hero is-fullheight">		
	  <div class="hero-body">
	    <div class="container">   
	     <h1 class="title has-text-centered" v-model="post.head">
	        POST
	      </h1>  	
	      <form @submit.prevent="send">     
	        <label class="label">Title</label>
	  		<div class="control">
	   		 	<input class="input" type="text" name="Mytitle" placeholder="Post title" v-model="post.title">
	  		</div>
			 	<p class="help">Try it not to be too long</p>
			<br>
   			<label class="label">Description</label>
	  		<div class="control">
	   		 	<input class="input" type="text" name="description" placeholder="Post description" v-model="post.description">
	  		</div>
			 	<p class="help">Make it between 30 and 60 letters</p>   
			<br>
   			<label class="label">Author</label>
	  		<b-field grouped>
            <b-input placeholder="Author" name="author" v-model="post.author"></b-input>     
        </b-field> 
			<br>
		    <label class="label">Content</label>
		      <div class="control">
		        <textarea class="textarea" name="content" v-model="post.content" placeholder="Put here the post content"></textarea>
		      </div>
			<br>
		      <div class="field">
				  <p class="control has-icons-left has-icons-right">
				    <input class="input"  placeholder="image url" name="url" v-model="post.url">
				    <span class="icon is-small is-left">
				      <i class="fa fa-link"></i>
				    </span>
				    <span class="icon is-small is-right">
				      <i class="fa fa-check"></i>
				    </span>
				  </p>
			  </div>
  
			<div class="control">
				<br>
		  		 <input type="submit" value="Submit" class="button is-dark">
			</div>
			 </form>

    	</div>    

  	</div>
</section>

</template> 


<script>
import axios from 'axios'
export default {
  data() {
    return {
      id: this.$route.params.id,      
      recuperado:{},
      post: {},
      isOpen: false
    }
  },
 created() {
  	if(typeof this.id !== "undefined") {
    window.document.title = "Update post " + this.id;
    this.details();
	}else{
	window.document.title = "New post";	
	}  	    
  },
  methods: {
   	 send() {
   	if(typeof this.id !== "undefined") {
    axios.put(`https://rest-mbcode.herokuapp.com/api/mypost/${this.id}`, {
		    title: this.post.title,
		    autor: this.post.author,
		    description: this.post.description,
		    content:this.post.content,
		    img:this.post.url
		  }).then(function (response) {
		    console.log(response);
		  }).catch(function (error) {
		    console.log(error);
		  });
	}else{
	 axios.post('https://rest-mbcode.herokuapp.com/api/mypost', {
		    title: this.post.title,
		    autor: this.post.author,
		    description: this.post.description,
		    content:this.post.content,
		    img:this.post.url
		  }).then(function (response) {
		    console.log(response);
		  }).catch(function (error) {
		    console.log(error);
		  });
	}  	    
  	this.post.title= '',
    this.post.author= '',
    this.post.description= '',
    this.post.content='',
    this.post.url=''    
    },
    details() {
    axios.get(`https://rest-mbcode.herokuapp.com/api/mypost/${this.id}`)
				 .then(response =>{		
				  this.recuperado = response.data[0],
					 this.post.title = this.recuperado.title,
					 this.post.description = this.recuperado.description,
      				 this.post.autor= this.recuperado.autor,
      				 this.post.content = this.recuperado.content,
      				 this.post.url = this.recuperado.img, 	
      				 console.log(this.recuperado)
				 }).catch(e =>{
					 console.log(e)
			});			   
    }, 
  }
}
</script>