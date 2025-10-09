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

    const portfolioWebContainer = document.getElementById("backgroundPortfolioWeb");
    const portfolioWebButton = document.getElementById("webDeveloper");
    
    //Habilitamos el funcionamiento de Quién soy
    
    whoIAmButton.addEventListener("click", function(){
        whoIAmContainer.classList.add("visible");
        containerMyCV.classList.remove("visible");
        portfolioWebContainer.classList.remove("visible");
    });

    //Habilitamos el funcionamiento de my CV

    myCVButton.addEventListener("click", function(){
        containerMyCV.classList.add("visible");
        whoIAmContainer.classList.remove("visible");
        portfolioWebContainer.classList.remove("visible");
    });

    //Habilitamos el funcionamiento de Portfolio Web

    portfolioWebButton.addEventListener("click", function(){
        portfolioWebContainer.classList.add("visible");
        whoIAmContainer.classList.remove("visible");
        containerMyCV.classList.remove("visible");
    });

});
