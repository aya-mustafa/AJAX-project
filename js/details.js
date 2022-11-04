var img =document.getElementById("img")
var search=new URLSearchParams(window.location.search)
var searchParam=search.get("rid");
var recipies=[];

getRecipies(searchParam)
function getRecipies(param)
{
    var http =new XMLHttpRequest();
    http.open('GET',`https://forkify-api.herokuapp.com/api/get?rId=${param}`);
    http.send();
    http.addEventListener("readystatechange",function()
    {
        if(http.readyState==4&&http.status==200)
        {
            recipies=JSON.parse(http.response).recipe;
            displayRecipies()
        }
    })
}

function displayRecipies()
{
    img.src=recipies.image_url;

    var ingredients=recipies.ingredients;
    var cartona='';
    for(var i=0;i<ingredients.length;i++)
    {
        cartona+=
        `
        <li>${ingredients[i]}</li>
        `
    }
    document.getElementById("myUl").innerHTML=cartona;   
}