$(function() {

 

   $.ajax({
    	url: 'https://www.codeschool.com/users/isabelc.json',
    	dataType: 'jsonp',
    	success: function(response) {
      		console.log(response)
    		var completedCourses = response.courses.completed
    		console.log(completedCourses)
    		completedCourses.forEach(function(element){
    			var newDiv = $('<div></div>')
    			$('#badges').append(newDiv)
    			newDiv.addClass('course')
    			var title = $('<h3></h3>')
    			title.html(element.title)
    			newDiv.append(title)
    			var image = $('<img></img>')
    			image.attr('src', element.badge)
    			newDiv.append(image)
    			var anchorTag = $('<a>See Course</a>')
    			anchorTag.attr('href', element.url)
    			anchorTag.attr('target', '_blank')
    			anchorTag.addClass('btn btn-primary')
    			newDiv.append(anchorTag)
    		})
    	}
  	});

});

// Now let's add an a tag to our .course elements. These anchor tags need to include: - the href attribute set as each course's url property - the target attribute set as _blank - the btn & btn-primary CSS classes - See Course as its text contents
