import axios from 'axios'
import City from '../models/city.js'
import Weather from '../models/weather.js'
import Alert from '../models/alert.js'

const fetchWeatherData = async () => {
    const cities = await City.find();
    if (!cities.length) {
        console.log('no cities found')
        return;
    }

    for (const city of cities) {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${process.env.WEATHER_API_KEY}&units=metric`);
            const { temp } = response.data.main;
            const condition = response.data.weather[0].description;

            console.log(`Fetched weather for ${city.name}: ${temp}°C, ${condition}`);

            await Weather.create({ city: city.name, temperature: temp, condition });
            if (condition.includes("rain")) {
                console.log(`Alert: Rain detected in ${city.name}`);
                await Alert.create({ city: city.name, type: "Rain" });
            }
            if (temp > 30) {
                console.log(`Alert: High temperature (${temp}°C) detected in ${city.name}`);
                await Alert.create({ city: city.name, type: "High Temperature" });
            }
            if (temp < 10) {
                console.log(`Alert: Low temperature (${temp}°C) detected in ${city.name}`);
                await Alert.create({ city: city.name, type: "Low Temperature" });
            }

        } catch (error) {
            console.error(`Error fetching weather for ${city.name}:`, error.message);
        }
    }
};

export default fetchWeatherData
