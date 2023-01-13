fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i`)
  .then(response => response.json())
  .then((response) => {
    console.log(response);
    let arr = Array.from(response.meals);
    let inner = "";
    arr.forEach((value) => {
      inner += `<div class="card all1" style="width: 18rem; margin:5px">
                   <img src="${value.strMealThumb}" class="card-img-top" alt="...">
                     <div class="card-body">
                        <h5 class="card-title">${value.strMeal}</h5>

                        <a href="#" class="btn btn-primary">Order Now</a>
                      </div>
                </div>`
    })
    let inner1 = document.getElementById("all");
    inner1.innerHTML = inner;
  })
  .catch(err => console.error(err));

function returnText() {
  let input = document.getElementById("userInput").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`)
    .then(response => response.json())
    .then((response) => {
      console.log(response);
      if(response.meals) {
      let arr = Array.from(response.meals);
      // console.log(arr);
      let inner = "";
     
      arr.forEach((value) => {
        inner += `<div class="card" style="width: 18rem;">
                   <img src="${value.strMealThumb}" class="card-img-top" alt="...">
                     <div class="card-body">
                        <h5 class="card-title">${value.strMeal}</h5>
                          
                        <a href="#" class="btn btn-primary">Order Now</a>
                      </div>
                </div>`
      })
      let inner1 = document.getElementById("all");
      inner1.innerHTML = inner;}
      else
      {
         let inner= `<div class="card" style="width: 18rem;">
                   "please try another food"
                </div>`
        let inner1 = document.getElementById("all");
        inner1.innerHTML = inner;
      }
    })
    .catch(err => console.error(err));
}


