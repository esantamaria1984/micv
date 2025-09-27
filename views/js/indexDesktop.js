document.addEventListener("DOMContentLoaded", function(){
    
    //Efecto de ocultamiento y deslizamiento submenú portfolio

    const portfolio = document.getElementById("portfolio");
    const submenu = document.getElementById("submenu");

    portfolio.addEventListener("click", function(e){
        if (e.target === portfolio) {
            submenu.classList.toggle("open"); 
        }
    });  

    //Habilitamos el funcionamiento del menú
    
    const whoIAmContainer = document.getElementById("backgroundWhoIAm");
    const whoIAmButton = document.getElementById("whoIAm");

    const containerMyCV = document.getElementById("containerMyCV");
    const myCVButton = document.getElementById("myCV");
    
    //Habilitamos el funcionamiento de Quién soy
    
    whoIAmButton.addEventListener("click", function(){
        //whoIAmContainer.style.display = "block";
        //containerMyCV.style.display = "none";
        whoIAmContainer.classList.add("visible");
        containerMyCV.classList.remove("visible");
    });

    //Habilitamos el funcionamiento de my CV

    myCVButton.addEventListener("click", function(){
        //containerMyCV.style.display = "block";
        //whoIAmContainer.style.display = "none";
        containerMyCV.classList.add("visible");
        whoIAmContainer.classList.remove("visible");
    });
});
