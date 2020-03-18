const axios = require('axios');



const getClima = async(lat, lng) => {


    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=b9e1befef7191ffd600711683b9f13e3`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}