$(document).ready(function(){
	var cont = 1;
  $(document).keypress(function(e){
    e.preventDefault();
    if(e.which == 13) {
      var name = $("#tarea-nueva").val();
      if(name == ""){
		    alert("Debes escribir tu nombre y el ensaje");
	    }else{
	    	alert(name);
	    	$("#lista").append("<div><input type='checkbox' id='test" + cont +"'/><label for='test" + cont + "'>" + name + "</label><button class='remove'>Remove</button>");
	    	cont++;
	    }
    }
  });
});
