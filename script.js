// async function hello() {
// }

// const sing = async () => {  
//     throw "OH NO, PROBLEM!" 
//     return "LA LA LA LA LA" ;
// }

// sing().then((data) => {
//     console.log('Promise resolved with:', data)
// })
// .catch(err => {
//     console.log('OH NO, PROMISE REJECTED!')
//     console.log(err);
// })



// const login = async (username, password) => {
//     if(!username || !password) throw 'Missing Creds'
//     if(password === 'corgifeet') return 'WELCOME!'
//     throw 'Invalid Password'
// }

// login('cjlawson1', 'corgifeet')
// .then(msg => {
//     console.log('LOGGED IN!')
//     console.log(msg)
// })
// .catch(err => {
//     console.log('ERROR!')
//     console.log(err);
// })





// 
// Making requests
// 


// Old way of making requests
// const req = new XMLHttpRequest();

// req.onload = function() {
//     console.log('IT LOADED!!');
//     const data = JSON.parse(this.responseText);
//     console.log(data.name, data.height);
// }

// req.onerror = function() {
//     console.log('ERROR!!!');
//     console.log(this);
// }

// req.open("GET", "https://swapi.dev/api/people/1");
// req.send();



// "https://swapi.dev/api/people/1"

// 
// Requests using Fetch
// 

// fetch("https://swapi.dev/api/people/1")
// .then(res => {
//     console.log("RESOLVED", res)
//     return res.json()
// })
// .then(data => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2")
// })
// .then(res => {
//     console.log('SECOND REQUEST RESOLVED!');
//     return res.json()
// })
// .then(data => {
//     console.log(data)
// })
// .catch(e => {
//     console.log('ERROR', e)
// })


//
// async with fetch
//
// const loadStarWarsPeople = async () => {
//   try {
//         const res = await fetch("https://swapi.dev/api/people/1");
//         const data = await res.json();
//         console.log(data);
//         const res2 = await fetch("https://swapi.dev/api/people/2");
//         const data2 = await res2.json();
//         console.log(data2);
// } catch (e) {
//     console.log('ERROR!!', e)
// }
//     }
    
// loadStarWarsPeople();


// "https://swapi.dev/api/people/1"

// axios.get("https://swapi.dev/api/people/1")
// .then((res) => {
//     console.log("RESPONSE", res);
// })
// .catch((e) => {
//     console.log('ERROR!', e);
// })

// const getStarWarsPerson = async (id) => {
//     try{
//         const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//         console.log(res.data);
//     } catch (e) {
//         console.log("ERROR", e)
//     }
// }

// getStarWarsPerson(5);



// get joke basic api call with dom manpulation 

// const jokes = document.querySelector('#jokes');
// const button = document.querySelector('button');

// const addNewJokeUi = async () => {
//     const joke = await getNewJokeApi();
//     const LI = document.createElement('LI');
//     LI.append(joke);
//     jokes.appendChild(LI);
    
// }

// const getNewJokeApi = async () => {
//     try {
//         const config = { headers: { Accept: 'application/json'} };
//         const res = await axios.get('https://icanhazdadjoke.com/', config);
//         console.log('Your request was successful! Here is your data:', res) 
//         return res.data.joke
//     } catch (e) {
//         console.log('OOPS, Something went wrong!', e);
//     }
// }

// button.addEventListener('click', addNewJokeUi);



// const form = document.querySelector('#searchForm');
// form.addEventListener('submit', async function (e) {
//     e.preventDefault();
//     const searchTerm = form.elements.query.value;

//     const config = { params: { q: searchTerm }, headers: {} }
//     const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
//     makeImages(res.data);

//     form.elements.query.value = '';
// })

// const makeImages = (shows) => {
//     for (let result of shows) {
//         if (result.show.image) {
//             const img = document.createElement('IMG');
//             img.src = result.show.image.medium;
//             document.body.append(img)
//         }
//     }
// }




const button = document.querySelector('#generate-meal-btn');
const recipeName = document.querySelector('#recipe-title');
const recipeDescription = document.querySelector('#recipe-description')


const updateRecipeUi = async () => {
    const recipe = await getNewRecipeApi();
    
    recipeName.textContent = recipe.recipeName;
    recipeDescription.textContent = recipe.recipeDescription;
}

const getNewRecipeApi = async () => {
    const res = await axios.get('https://themealdb.com/api/json/v1/1/random.php');
    console.log(res.data);
    
    const recipeData = {
        recipeName: res.data.meals[0].strMeal,
        recipeDescription: res.data.meals[0].strInstructions
    }

    return recipeData;
}


button.addEventListener('click', updateRecipeUi);
