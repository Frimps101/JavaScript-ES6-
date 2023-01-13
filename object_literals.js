function addressMaker(city, region){
    // const newAddress = {newCity: city, newRegion: region}
    const newAddress = {city, region}


    console.log(newAddress)
}

function info(firstName, lastName){
    const fullName = {firstName, lastName}

    // console.log(fullName)
    return fullName;
}

//addressMaker("Accra", "Greater Accra Region")
console.log(info("Josephine", "Kwakye"))

// Challenge
// Use destructing and object literals and template literals
function addressCreator(address){
    const newAddress = {
        city: address.city,
        region: address.region,
        country: address.country
    }
}

//addressCreator({city: "Accra", region: "Greater Accra Region", country: "Ghana"})
 
function newAddressCreator(address){
    const {city, region, country} = address;

    console.log(`City: ${city} Region: ${region} Country: ${country}`)
}

const myAddress = {
    city: "Accra",
    region: "Greater Accra Region",
    country: "Ghana"
}

newAddressCreator(myAddress)