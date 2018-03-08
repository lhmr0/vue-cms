<template> 
	<section class="hero is-fullheight">		
	  <div class="hero-body">
	    <div class="container">   
	     <h1 class="title has-text-centered">
	        NEW POST
	      </h1>  	     
	        <label class="label">Title</label>
	  		<div class="control">
	   		 	<input class="input" type="text" placeholder="Post title">
	  		</div>
			 	<p class="help">Try it not to be too long</p>
			<br>
   			<label class="label">Description</label>
	  		<div class="control">
	   		 	<input class="input" type="text" placeholder="Post description">
	  		</div>
			 	<p class="help">Make it between 30 and 60 letters</p>   
			<br>
   			<label class="label">Author</label>
	  		<b-field grouped>
            <b-input placeholder="Author"></b-input>            
        </b-field> 
			<br>
		    <label class="label">Content</label>
		      <div class="control">
		        <textarea class="textarea" placeholder="Put here the post content"></textarea>
		      </div>
			<br>
		      <div class="field">
				  <p class="control has-icons-left has-icons-right">
				    <input class="input" type="email" placeholder="image url">
				    <span class="icon is-small is-left">
				      <i class="fa fa-envelope"></i>
				    </span>
				    <span class="icon is-small is-right">
				      <i class="fa fa-check"></i>
				    </span>
				  </p>
			  </div>
  
			<div class="control">
				<br>
		  		<button class="button is-primary">Submit</button>
			</div>


    	</div>    

  	</div>
</section>

</template> 