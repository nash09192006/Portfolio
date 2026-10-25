const Form = document.getElementById("studentform")
const studentlist = document.getElementById("list")



Form.addEventListener("submit",function(event){
    event.preventDefault();

    const number =  document.getElementById("studid").value
    const first =  document.getElementById("fname").value
    const last = document.getElementById("lname").value
    const course = document.getElementById("select_course").value

    const row = document.createElement("tr")
    const numcell = document.createElement("td")
    const firstcell =  document.createElement("td")
    const lastcell = document.createElement("td")
    const coursecell = document.createElement("td")

    numcell.textContent = number
    firstcell.textContent = first
    lastcell.textContent = last
    coursecell.textContent = course

    row.appendChild(numcell)
    row.appendChild(firstcell)
    row.appendChild(lastcell)
    row.appendChild(coursecell)

    studentlist.appendChild(row)

    window.alert("Student added successfully")

    Form.reset()

    $(document).ready(function(){

         $("#light").click(function(){
        $("body").css("background","white")
        $("*").css("color","black")
        
    })

    $("#dark").click(function(){
        $("body").css("background","black")
         $("*").css("color","white")
    })

    })
   
})