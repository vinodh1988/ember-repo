import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ContactLocationRoute extends Route {
@service  weather;
    async model(param){
        let result = await this.weather.getWeather(param.location);
        console.log(result)
        return {place: param.location, temperature : Math.round(result.main.temp-273,2)} ;
    }
}
