    $(document).ready(function(){
    $("#title").text("Good Afternoon sir!")

    $("p").css("color","green")
   
    $("h1").css("color","pink")
     

      $("#btn_1").mouseover(function(){
        $(this).css("transition","0.2s")
    $(this).css("transform","scale(1.2)")

    })

     $("#btn_1").mouseout(function(){
        $(this).css("transition","0.2s")
    $(this).css("transform","scale(1.0)")

    })

    $("[href]").css("color","green  ")

    $("ul li:first-child").css("color","red")

    
     $("th").css("background","violet")
     $("tr:even").css("background","blue")
     $("tr:odd").css("background","red")

    $("#btn").click(function(){
        $("#message").text("Output: You click the button")
    })
    
      $("#btn").mouseenter(function(){
        $("#message").text("Output: Your mouse is in the button")
    })

     $("#btn").mouseout(function(){
        $("#message").text("Output: Your mouse is out")
    })

     $("#btn").mousedown(function(){
        $(this).css("background","blue")
         $(this).css("color","black")
    })

      $("#btn").mouseup(function(){
        $(this).css("background","brown")
         $(this).css("color","white")
    })

    $("#name").focus(function(){
         $("#message").text("Output: You select the textbox")
         $(this).css("background","blue")
         $(this).css("color","white")
    })

     $("#name").blur(function(){
         $("#message").text("Output: You unselect the textbox")
         $(this).css("background","white")
         
    })

    $("#course").change(function(){
        $("#message").text($(this).val())
    })

    $("#btn_1").click(function(){
        $("#tb").hide("slow")
    })

    $("#btn_1").dblclick(function(){
        $("#tb").show("fast")
    })




    
    
})