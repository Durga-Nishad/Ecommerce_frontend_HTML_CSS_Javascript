function changeBgImageTitlePara(){
    var main = document.querySelector("main");
    var h1 = document.querySelector("#title");
    var p = document.querySelector("p");

    setInterval(()=>{

        if(h1.textContent==="Discover Your Style"){
            
            main.style.backgroundImage = "url('./images/shopping.png')";
            h1.textContent = "Shop Smart, Live Better";
            h1.style.color = "green";
            p.textContent = "Find everything you need at amazing prices Enjoy a seamless shopping experience with AI-MART."
            p.style.color = "white";
        }else if(h1.textContent ==="Shop Smart, Live Better"){
            main.style.backgroundImage =  "url('./images/offers.png')";
            h1.textContent = "Big Deals, Bigger Savings!";
            h1.style.color ="blue";
            p.textContent = "Don't miss out on exciting offers and special discounts Shop your favourite products today!"
            p.style.color ="white";
        }
        else if(h1.textContent === "Big Deals, Bigger Savings!"){
            main.style.backgroundImage = "url('./images/fashion.png')";
            h1.textContent ="Discover Your Style";
            h1.style.color = "yellow";
            p.textContent = "Explore the latest fashion trends and upgrade your wardrobe with our exclusive collection.";
            p.style.color = "white";
        }
           
        


    },3000)
}