const button = document.querySelector(".submit")
const inputID = document.querySelector("#id-type")
const inputPASS = document.querySelector("#password-type")
const SMS = document.querySelector("#problem")
const body = document.querySelector("body")





const checkbox = ()=>{
    if(inputID.value === "" && inputPASS.value === ""){
        console.log("plese please insult password")
        SMS.innerText="Please Enter Valid Input"
        SMS.style.color="yellow"

    }
    else if(inputID.value === "kiran thakur" && inputPASS.value === "4519"){
        console.log("this is open")
        body.innerHTML="<h1>Open Universe OF United</h1>"
        
    }
    else{
        console.log("somithig went worng")
        SMS.innerText="Somthing Went Worrng"
        SMS.style.color="red"

    }
}

button.addEventListener("click",()=>{
    checkbox();
  
})
