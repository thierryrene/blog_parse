/**
* Created with blog_parse.
* User: thierryrene
* Date: 2014-12-03
* Time: 09:26 AM
* To change this template use Tools | Templates.
*/

$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("FdPe0toroOBHxqr6ajHOw0PlEnmipPocMGnAIUXJ", "Lzmu6Ajm6peDYqXLIrOY1eaPxHlVAE9Ls4hCPylH");
 
		//     var TestObject = Parse.Object.extend("TestObject");
		//     var testObject = new TestObject();
		//     testObject.save({foo: "bar"}).then(function(object) {
		//       alert("yay! it worked");
		//     });
	
		//
	
		var Blog = Parse.Object.extend("Blog");	
		var Blogs = Parse.Collection.extend({
				model: Blog
		});
	
		var blogs = new Blogs();	
		blogs.fetch({
				success: function(blogs) {
						var blogsView = new BlogsView({ collection: blogs });
						blogsView.render();
						$('.main-container').html(blogsView.el);
				},
				error: function(blogs, error) {
						console.log(error);
				}
		});

		//
		
		var BlogsView =  Parse.View.extend({
				template: Handlebars.compile($('#blogs-tpl').html()),
				render: function(){
						var collection = { blog: this.collection.toJSON() };
						this.$el.html(this.template(collection));
				}
		});
	
		//	
	
});