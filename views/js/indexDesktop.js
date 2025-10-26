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

    const portfolioGraphicDesignContainer = document.getElementById("backgroundGraphicDesign");
    const portfolioGraphicDesignButton = document.getElementById("graphicDesign");
    
    //Habilitamos el funcionamiento de Quién soy
    
    whoIAmButton.addEventListener("click", function(){
        whoIAmContainer.classList.add("visible");
        containerMyCV.classList.remove("visible");
        portfolioWebContainer.classList.remove("visible");
        portfolioGraphicDesignContainer.classList.remove("visible");
        graphicDesignMenuContainer.classList.remove("visibleDesign");
        brandsContainer.classList.remove("visibleDesign");
    });

    //Habilitamos el funcionamiento de my CV

    myCVButton.addEventListener("click", function(){
        containerMyCV.classList.add("visible");
        whoIAmContainer.classList.remove("visible");
        portfolioWebContainer.classList.remove("visible");
        portfolioGraphicDesignContainer.classList.remove("visible");
        graphicDesignMenuContainer.classList.remove("visibleDesign");
        brandsContainer.classList.remove("visibleDesign");
    });

    //Habilitamos el funcionamiento de Portfolio Web

    portfolioWebButton.addEventListener("click", function(){
        portfolioWebContainer.classList.add("visible");
        whoIAmContainer.classList.remove("visible");
        containerMyCV.classList.remove("visible");
        portfolioGraphicDesignContainer.classList.remove("visible");
        graphicDesignMenuContainer.classList.remove("visibleDesign");
        brandsContainer.classList.remove("visibleDesign");
    });

    //Habilitamos el funcionamiento de Portfolio Diseño Gráfico

    portfolioGraphicDesignButton.addEventListener("click", function(){
        portfolioGraphicDesignContainer.classList.add("visible");
        whoIAmContainer.classList.remove("visible");
        containerMyCV.classList.remove("visible");
        portfolioWebContainer.classList.remove("visible");
        graphicDesignMenuContainer.classList.add("visibleDesign");
        brandsContainer.classList.remove("visibleDesign");
        cardsContainer.classList.remove("visibleDesign");
    });

    //Habilitamos el funcionamiento del menú del Portfolio Diseño Gráfico

    const brandsContainer = document.getElementById("brands");
    const brandsButton = document.getElementById("brandsButton");
    const graphicDesignMenuContainer = document.getElementById("typeDesign");
    const backButton = document.querySelectorAll(".back");

    const cardsContainer = document.getElementById("cards");
    const cardsButton = document.getElementById("cardsButton");
    const cardImage = document.querySelectorAll(".cardImage");
    const xButton = document.querySelectorAll(".x");

    brandsButton.addEventListener("click", function(){
        brandsContainer.classList.add("visibleDesign");
        graphicDesignMenuContainer.classList.remove("visibleDesign");
        cardsContainer.classList.remove("visibleDesign");
    });

    cardsButton.addEventListener("click", function(){
        cardsContainer.classList.add("visibleDesign");
        brandsContainer.classList.remove("visibleDesign");
        graphicDesignMenuContainer.classList.remove("visibleDesign");
    });

    cardImage.forEach(card => {
        card.addEventListener("click", function(){
            const bigImage = this.parentElement.querySelector(".bigImage");
            bigImage.classList.add("bigImageVisible");
        });
    });

    xButton.forEach(x => {
        x.addEventListener("click", function(){
            const bigImage = this.closest(".bigImage");
            bigImage.classList.remove("bigImageVisible");
        });
    });

    backButton.forEach(back => {
        back.addEventListener("click", function(){
            graphicDesignMenuContainer.classList.add("visibleDesign");
            brandsContainer.classList.remove("visibleDesign");
            cardsContainer.classList.remove("visibleDesign");
        });
    }); 
    
});
