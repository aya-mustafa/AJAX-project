getRecipies("pizza")
var recipies=[];
var links=document.getElementsByClassName("nav-link");

for(var i=0;i<links.length;i++)
{
    links[i].addEventListener(("click"),function(eventInfo)
    {
        var srearchText=eventInfo.target.text;
         getRecipies(srearchText);
    })
}
function getRecipies(srearch)
{
    var http =new XMLHttpRequest();
    http.open('GET',`https://forkify-api.herokuapp.com/api/search?q=${srearch}`);
    http.send();
    http.addEventListener("readystatechange",function()
    {
        if(http.readyState==4&&http.status==200)
        {
            recipies=JSON.parse(http.response).recipes;
            displayRecipies()
        }
    })
}

function displayRecipies()
{
    var cartona='';
    for(var i=0;i<recipies.length;i++)
    {
        cartona+=
        `
        <div class="col-md-3 mt-4">
                <div>
                  <img class="img-fluid" src="${recipies[i].image_url}">
                  <h5 class="my-2">${recipies[i].title}</h5>
                  <a href="details.html?rid=${recipies[i].recipe_id}" target="_blank">
                    <button class="btn btn-outline-light">Details</button>
                  </a>
                </div>
        </div>
              
        `
    }
    document.getElementById("contain").innerHTML=cartona;
}

// getRecipies("pizza")
// var recipies=[];
// var links=document.getElementsByClassName("nav-link");

// for(var i=0;i<links.length;i++)
// {
//     links[i].addEventListener(("click"),function(eventInfo)
//     {
//         var srearchText=eventInfo.target.text;
//          getRecipies(srearchText);
//     })
// }
// async function getRecipies(srearch)
// {
//     var recipie=await (fetch(`https://forkify-api.herokuapp.com/api/search?q=${srearch}`));
//     var recipeget=await(recipie.json());
//     var r=recipeget.recipes;
//     console.log(r)
// }
let  x=5;
  x=7;