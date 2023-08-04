

let age = document.querySelector('input')
console.log(age);
let salary = document.querySelector('.salary')
console.log(salary);
let button = document.querySelector('button')
console.log(button);
let getJob = document.querySelector('.getjob')
console.log(getJob);
let demo = document.querySelector('.demo')
console.log(demo);


button.addEventListener('click',function(){
    if(age.value>20){
        if( getJob.value =='yes'){
            if(salary.value>=20000){
                demo.innerHTML="you can get married"
            }
            else if(salary.value == ''){
                demo.innerHTML = "input your salary"
            }
            else{
                demo.innerHTML="Your salary is very low "
            }
        }
        else if (getJob.value == "no"){
            demo.innerHTML = "you need a job"
        }
        else{
            demo.innerHTML = "input your other details"
        }
        
    }
    else if (age.value == ''){
        demo.innerHTML = "invalid"
    }

    else{
        demo.innerHTML='You are not of marriageable age'
    }
})



