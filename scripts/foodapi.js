
const htmlLocation = document.querySelector(".foodList")

fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
     parsedFoods.forEach(food => {
         console.log(parsedFoods)
            const foodAsHTML = foodFactory(food)
            addFoodToDom(foodAsHTML)
        });
    })
    

const addFoodToDom = (AddfoodAsHTML) => {
    htmlLocation.innerHTML += AddfoodAsHTML

}
const foodFactory = (aFood) => {
    return `
       <div class = "foods">
            <h1>${aFood.name}</h1>
            <p>${aFood.category}</p>
            <p>${aFood.ethnicity}</p>
       </div>          
      `
}

