// function addressMaker(city, state) {
//     const newAddress = {newCity: city, newState: state}
//     console.log(newAddress)
// }
// addressMaker("Ludhiana", "punjab")


function addressMaker(address) {
    
    const {city, state} = address;
    const newAddress = {
        city,
        state,
        country: 'India'
    };

    console.log(`${newAddress.city} = ${newAddress.state} = ${newAddress.country}`)
}

addressMaker({city: 'Ludhiana', state: 'Punjab'});