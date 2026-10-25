//PROFILE SECTION
$("#btnclick").click(function(){
    $("#title").text("Hello, Student!")
    $("#state1").text("You change the title")
})  

$("#btnclick").mouseover(function(){
    $("#state1").text("You hover the change title button")
})

$("#hide").click(function(){
    $("#info").hide()
    $("state1").text("You click the Hide Profile button")
})

$("#show").click(function(){
    $("#info").show()
    $("state1").text("You click the Show Profile button")
})

$("#hide").mouseover(function(){
    $("#state1").text("You hover the Hide Profile button")
})

$("#show").mouseover(function(){
    $("#state1").text("You Hover the Show Profile button")
})
//-----------------------------------------------------------------
//COURSE SECTION

$("#selectid").change(function(){
    $("#course").text("Course: "+$(this).val())
    $("#state2").text("You change to " + $(this).val() + " course")
})

$("#selectid").mouseover(function(){
    $("#state2").text("You hover the selection")
    
})

$("#selectid").mouseleave(function(){
    $("#state2").text("You leave the selection")
})


//------------------------------------------------------------------
//TABLE SECTION

$("#btnodd").click(function(){
     
    $("tr:odd").css("background","red")
     $("tr:odd").css("color","white")

     $("tr:even").css("background","white")
     $("tr:even").css("color","black")

      $("#state3").text("Apply odd clicked!")
})

$("#btneven").click(function(){
     
    $("tr:even").css("background","blue")
     $("tr:even").css("color","white")

      $("tr:odd").css("background","white")
     $("tr:odd").css("color","black")

     $("#state3").text("Apply even clicked!")
})

$("#btneven").mouseover(function(){
    $("#state3").text("You hover the even button")
})

$("#btnodd").mouseover(function(){
    $("#state3").text("You hover the odd button")
})

$("#btneven").mouseleave(function(){
    $("#state3").text("You leave the even button")
})

$("#btnodd").mouseleave(function(){
    $("#state3").text("You leave the odd button")
})




