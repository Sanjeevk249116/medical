const url="https://grumpy-frog-outerwear.cyclic.cloud";

const userData = async function(){
    try{
       let res = await fetch(`${url}/Address/${12}`);
       let data = await res.json();

       let {firstName,lastName,number,pincode,address,city,state,locality} = data;
     
       document.getElementById("fName").value = firstName;
       document.getElementById("lName").value = lastName;
       
       document.getElementById("number").value = number;
     
    }
    catch(error){
        console.log(error);
    }
}

userData();

let changeBtn= document.getElementById("change_btn");

changeBtn.addEventListener("click",async function(){
    try{
        event.preventDefault();
     
       let firstName = document.getElementById("fName").value;
       let lastName = document.getElementById("lName").value;
   
       let number = document.getElementById("number").value;
      
   
       if(
          firstName == ""  ||
          lastName == ""  ||
         
          number == ""  
         
          ){
           alert("Please Fill All The Required Fields");
           return;
          }
   
       let new_obj= {
           firstName : firstName,
           lastName : lastName,
           number : number,
              
       }
   
      await fetch(`https://ill-jade-chiton.cyclic.cloud/Address/${12}`,{
       method:"PATCH",
       body: JSON.stringify(new_obj),
       headers:{
           "Content-Type" : "application/json"
       }
      });

      window.location.href = "address.html"

       }
       catch(err){
           console.log(err);
       }
})