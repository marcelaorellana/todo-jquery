$(document).ready(function(){
	var cont = 1;
  $(document).keypress(function(e){
    e.preventDefault();
    if(e.which == 13) {
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
            //var str = $( "p:first" ).text();
            //$( "p:last" ).html( str );
            $("#completed").append($(this).parent().clone());

        } else {
            console.log(this.id + ' is unchecked');
        }
    });

});
