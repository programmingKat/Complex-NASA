//on page load display all 400 nasa facilities

//https://cors.io/?url=

//drop down value
//for loop
//use click event to loop through only those values
// 100 , 200, 300, 400, 500

//document.querySelector('button').addEventListener('click', run)
//https://cors.io/?url=
const nasaURL = 'https://data.nasa.gov/docs/legacy/gvk9-iz74.json'
const weatherAPIKEY = 'a1e6951b7a414f8faa0180642262209'

function getFacilities() {
    const res = fetch(nasaURL)
        .then(res => res.json())
        .then(data => {

            console.log(data)
            const arrCenters = JSON.parse(data.body)
            //console.log(arrCenters)
            // console.log(arrCenters[0])
            // console.log(arrCenters[0].location)
            // console.log(arrCenters[0].location.latitude)
            // console.log(arrCenters[0].location.longitude)
            // console.log("data.body: ", data.body)
            for (const center of arrCenters) {
                //console.log("center obj", center)
                const newDiv = document.createElement('div')
                newDiv.classList.add('facility-div')

                const centerName = document.createElement('span')
                centerName.innerText = center.center

                //facility
                const facilityName = document.createElement('span')
                facilityName.innerText = center.facility

                console.log(center.location)
                let weatherObj = getWeather(center.location.latitude, center.location.longitude)
                    .then(data => {
                        console.log("data", data)
                        //console.log("weatherObj", weatherObj)
                        // console.log("data.current", data.current)
                        // console.log("data.current.condition.text", weatherObj.current.condition.text)

                        const currentCondition = document.createElement('p')
                        currentCondition.innerText = data.current.condition.text


                        newDiv.appendChild(centerName)
                        newDiv.appendChild(facilityName)
                        newDiv.appendChild(currentCondition)
                        //newDiv.appendChild(currentCondition)
                        document.querySelector('.container').appendChild(newDiv)

                    })

            }
            return arrCenters
        })
        .catch(err => {
            console.log(`Error: ${err}`);

        })
    return res
}

function getWeather(lat, long) {
    let result = {}
    // https://api.openweathermap.org/data/4.0/onecall/current?lat=52.2297&lon=21.0122&units=metric&lang=en&appid={API key} 
    // https://api.openweathermap.org/data/4.0/onecall/current?lat={lat}&lon={lon}&appid={API key}
    return fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherAPIKEY}&q=${lat},${long}`)
        .then(result => result.json())
        .then(data => {
            //console.log("weather data", data)
            // result = data
             return data
            //map
        })
        .catch(err => {
            console.log(err)
        })

}
getFacilities()
//function run() {
    // console.log("allFacilities:", allFacilities)
    // console.log(allFacilities[0])
    //console.log(allFacilities[0].location)
    //    console.log(allFacilities[0].location.latitude)
    //    console.log(allFacilities[0].location.longitude)

    //   const facilityWeather = getWeather(allFacilities[0].location.latitude , allFacilities[0].location.longitude)
    //   console.log(facilityWeather)
//}
