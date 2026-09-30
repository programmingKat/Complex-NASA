//on page load display all 400 nasa facilities

//https://cors.io/?url=
fetch('https://cors.io/?url=https://data.nasa.gov/docs/legacy/gvk9-iz74.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const arrCenters = JSON.parse(data.body)
        console.log(arrCenters)

        //console.log("data.body: ", data.body)
        for(const center of arrCenters){
            console.log(center.center)
            const newLi = document.createElement('li')
            newLi.innerText = center.center
            
            document.querySelector('ol').appendChild(newLi)
        }
    })
    .catch(err => {
        console.log(`Error: ${err}`);
        
    })