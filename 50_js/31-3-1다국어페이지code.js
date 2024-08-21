

window.addEventListener("DOMContentLoaded", ()=>{
    const sel = document.querySelector("select");
    const logo = document.querySelector(".logo img");
    const gnb = document.querySelectorAll(".gnb a");
    const tit = document.querySelectorAll(".tit span");
    const flogo = document.querySelector(".flogo img");
    const fmenu = document.querySelectorAll(".fmenu a");
    const addr = document.querySelector(".addr");

    
    sel.onchange = (e) => {
      
        let opt = e.currentTarget.value;
        consol.log("opt?",opt);
        let data = main_data[opt];

      
        logo.setAttribute("src",`${data["logo"]}`);
       
        
        tit.forEach((ele,idx)=>
            ele.innerText = data["tit"][idx]);

      
        gnb.forEach((ele,idx)=>
            ele.innerText = data["gnb"][idx]);

        fmenu.forEach((ele,idx)=>
            ele.innerText = data["fmenu"][idx]);

      
        flogo.setAttribute("src",`${data["flogo"]}`);
        console.log(data["flogo"]);

    
        addr.innerText = data["addr"];
    };
});







