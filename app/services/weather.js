import Service from '@ember/service';

export default class WeatherService extends Service {
    async getWeather(city){
       let apikey = "8086a9b5cd38a04bef488f6154b2770a";
       let url= "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey;

      let response = await fetch(url)
      let data =  await response.json();
      return data;
    }
}
