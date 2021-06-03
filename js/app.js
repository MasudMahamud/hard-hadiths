//https://bn-hadith-api.herokuapp.com/hadiths/

   document.getElementById("search-button").addEventListener("click", function (){
     const userInput = document.getElementById("user-input").value;
            const inputCount= parseInt(userInput);
            userId(inputCount);
            document.getElementById('user-input').value="";
   })
  


   function userId(id) {
    fetch(`https://bn-hadith-api.herokuapp.com/hadiths/${id}`)
    .then(res => res.json())
    .then(result => {   
       document.getElementById('show-details').innerText =""
       const p = document.createElement("p");
       p.innerHTML = `
       <strong>${result.name}</strong><br><br>
       ${result.description}<br><br>
       <small>${result.references} -
       ${result.grade}</small>
       `
      document.getElementById('show-details').appendChild((p));
      document.getElementById('show-details').style.display ="block"
    }) 
   }


