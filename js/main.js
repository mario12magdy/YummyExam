
$("#open").click(function(){
    $(".LM").animate({left: "0%"},1000, function(){
        $("#open").slideUp(500,)
        $("#close").slideDown(500,)
        $("#Menu").animate({top:"0%"} , 500,)

    })
    
    
})

$("#close").click(function(){
    $("#Menu").animate({top:"500%"}, 500 , function(){
        $("#open").slideDown(500),
        $("#close").slideUp(500),
        $(".LM").animate({left: "-12.5%"},1000)
    })
    
})





async function getCategory(){
    var APIResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    var finalResult = await APIResponse.json();
    
    allItems =finalResult.categories;
    console.log(allItems);

   
    displayCategories();

}
$("#CategoriesLink").click(function(){
    getCategory();
})

function displayCategories(){
    var cartona =``;
    for(var i =0;i<allItems.length;i++){
        cartona += ` <div class="col-3 g-3 pointer">
        <div>
            <img src= ${allItems[i].strCategoryThumb} class="w-100 rounded" alt="">
        </div>
        <div class="inner d-flex align-items-center justify-content-center">
            <h2 class="">${allItems[i].strCategory}</h2>
        </div>
    </div>`
        
    }
    document.getElementById('rowData').innerHTML =cartona;
}

async function getArea(){
    var APIResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    var finalResult = await APIResponse.json()

    allAreas = finalResult.meals;
   

    displayAreas(allAreas);

}
function displayAreas(arr){
    var AreaCartona =``;
    for(var i =0;i<arr.length;i++){
        AreaCartona += ` <div class="col-3 g-3 pointer">
        <div class=" d-flex flex-column
         align-items-center justify-content-center">
            <i class="fa-solid fa-house-laptop fa-4x"></i>
            <h2 class="">${arr[i].strArea}</h2>
        </div>
    </div>`
        
    }
    document.getElementById('rowData').innerHTML =AreaCartona;

}
$("#AreaLink").click(function(){
    getArea();
})










async function getIngredients(){
    var APIResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    var finalResult = await APIResponse.json()

    allIngredientss = finalResult.meals;
   

    displayIngredientss(allIngredientss);

}
function displayIngredientss(arr){
    var IngredientsCartona =``;
    for(var i =0;i<arr.length;i++){
        IngredientsCartona += `
        <div class="col-md-6">
                <div onclick="getIngredientsMeals('${arr[i].strIngredient}')" class="rounded-2 text-center pointer">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${arr[i].strIngredient}</h3>
                        <p>${arr[i].strDescription}</p>
                </div>
        </div>`
        
    }
    document.getElementById('rowData').innerHTML =IngredientsCartona;

}

$("#IngredientsLink").click(function(){
    getIngredients();
})
function contactUS(){
    document.getElementById('rowData').innerHTML = `
    
    <form class=" d-flex justify-content-center align-items-center flex-wrap w-50">
              
    <div class="col-4 g-3">
     <input class="form-control m-4 g-4 w-100 col-3  custom " type="text" placeholder="Your Name">
     <input class="form-control m-4 g-4 w-100 col-3  custom" type="email" placeholder="Your Email">
     <input class="form-control m-4 g-4 w-100 col-3  custom" type="text" placeholder="subject" >
    </div>
    <div class="col-4 g-3">
     <input class="form-control m-4 g-5 w-100 col-3  custom " type="text" placeholder="Your Name">
     <input class="form-control m-4 g-5 w-100 col-3  custom" type="email" placeholder="Your Email">
     <input class="form-control m-4 g-5 w-100 col-3  custom" type="text" placeholder="subject" >
    </div>
     
     
     <input class="btn btn-primary w-50  rounded-5 p-3 custom " id="submit" type="submit" value="Send message">
 </form>
     

    
    `

}
$("#contactLink").click(function(){
    contactUS();
})






