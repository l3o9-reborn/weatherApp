const body=document.querySelector('body')

const inputField=document.createElement('input');
inputField.type='text'
inputField.classList.add('cityInput')

const btn=document.createElement('button')
btn.innerText='Get Data'
btn.classList.add('GetData')


const inputSection=document.createElement('div')
inputSection.classList.add('inputSection')

inputSection.append(inputField, btn)


const dataSection=document.createElement('div')
dataSection.classList.add('dataSection')


const loading = document.createElement("p")
loading.innerText = "Loading..."
loading.classList.add("loading")
loading.style.display = "none"
dataSection.append(loading)



const api_token='887ed3c65192fa3ad79404986d334219'



async function weatherData(){
    const city=inputField.value.trim()
    console.log(city)
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_token}&units=metric`;

    loading.style.display = "block"
    dataSection.innerHTML = ""
    dataSection.append(loading)


    try{
        const fetchData= await fetch(url)
        const data = await fetchData.json()

        loading.style.display = "none"

        dataSection.innerText = JSON.stringify(data, null, 2); 
        console.log(`Data : `, data)
    }
    catch{
        dataSection.append(`error : 500 unable to access server data`);
        console.log(`error : 500 unable to access server data` )
    }
}



btn.onclick=()=>{
    weatherData()
    console.log('Button Clicked')
}



body.append(inputSection, dataSection)
