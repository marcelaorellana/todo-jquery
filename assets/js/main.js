$(document).ready(function(){
	var cont = 1;
  $(document).keypress(function(e){
   
    if(e.which == 13) {
       e.preventDefault();
      var name = $("#tarea-nueva").val();
      if(name == ""){
		    alert("Debes escribir tu nombre y el ensaje");
	    }else{
	    	//alert(name);
	    	$("#lista").append("<div><input type='checkbox' id='test" + cont +"'/><label for='test" + cont + "'>" + "<p>" + name +"</p>" + "</label><button class='remove'>Remove</button>");
	    	cont++;
	    }
    }
  });

    $('#lista').on("change", ":checkbox", function () {
        if (this.checked) {
        	var ide = this.id;
            console.log(this.id + ' is checked  ' +$(this).siblings().find("p").text() );
            $(this).parent().appendTo("#completed");
            //$("#completed").append($(this).parent().clone());
            //$(this).parent().empty();

        } else {
            console.log(this.id + ' is unchecked');
        }
    });

    $(document).on("click", ".remove",function(){
      $(this).parent().empty();
    });

});
