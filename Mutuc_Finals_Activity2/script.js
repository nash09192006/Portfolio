const message = document.getElementById("wait")
const btn1 = document.getElementById("btnload")
const profile = document.getElementById("profile")
const schedule = document.getElementById("sched")
const grade =  document.getElementById("grade")
const btn2 = document.getElementById("btn2")

function Load(){//function in
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Loading image...")
        },3000)
    })
}

btn1.addEventListener(
    "click",
    function(){//function in
        message.innerHTML = "Loading"

        Load()

        .then(function(result){
            message.innerHTML = result

            return new Promise(function(resolve){

                setTimeout(function(){
                    resolve("Loading Assets...")
                },2500)
            })
        })
        
         .then(function(result){
            message.innerHTML = result

            return new Promise(function(resolve){

                setTimeout(function(){
                    resolve("Loading Buseng...")
                },2500)
            })
        })

        .then(function(result){
            message.innerHTML = result
        })

    }//function end
)

btn2.addEventListener(
    "click",
    function(){
        message.innerHTML = "Loadingh Dashboard"

        profile.innerHTML ="Profile: Waiting..."
        grade.innerHTML = "Grade: Waiting..."
        schedule.innerHTML = "Schedule: Waiting..."

        const profilepromise = new Promise(function(resolve){
            setTimeout(function(){
                profile.innerHTML = "Profile: Loaded"
            },1000)
        })

        const gradepromise = new Promise(function(resolve){
            setTimeout(function(){
                grade.innerHTML = "Grade: Loaded"
            },2000)
        })

        const schedpromise = new Promise(function(){
            setTimeout(function(){
                schedule.innerHTML = "Schedule: Loaded"
            },3000)
        })

        Promise.all([profilepromise,gradepromise,schedpromise])

        setTimeout(function(){
            message.innerHTML = "Dashboard Ready!!"
        },4000)
    }
)