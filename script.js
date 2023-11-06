
// function to fetching error for url
function fetchingData(url){
  return new Promise((resolve, reject) => {
    fetch(url).then((response)=>{
      if(!response.ok){
        reject(new Error(`${response.status} ${response.statusText}`))
      }
      return response.json();
    })
    .then((data)=>{
      resolve(data);
    })
    .catch((error)=>{
      reject(error);
    })
  })
}

// async fucntion to get error from the fetching data

async function fetchData(url){
  try {
    const response = await fetchingData(url)
    display(response);
  } catch (error) {
    console.log("Error Found", error);
  }
}

let url = "https://rickandmortyapi.com/api/character";
fetchData(url);
let card = document.getElementById('card')

// // fetch('https://rickandmortyapi.com/api/character')
// .then((res)=>res.json())
// .then((res)=>display(res))
function display(data){
    let arr = Object.entries(data) 
    let arr1 = arr[1][1]
        for(let i=0; i<arr1.length ; i++){
            
          //  console.log(arr1[i]); 

        let cardDetails =`
        <div class="card p-4 my-4" style="width: 18rem;">
  <img src="${arr1[i].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h6>#${arr1[i].id}</h6>
    <h5 class="card-title">${arr1[i].name}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Status : ${arr1[i].status}</li>
    <li class="list-group-item">Species : ${arr1[i].species}</li>
    <li class="list-group-item">Gender : ${arr1[i].gender}</li>
    <li class="list-group-item">Origin : ${arr1[i].origin.name}</li>
  </ul>
</div>
     
       
        `
        card.innerHTML += cardDetails

            // console.log(cardDetails);
    
        }}
  


