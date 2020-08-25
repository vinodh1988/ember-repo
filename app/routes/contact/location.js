import Route from '@ember/routing/route';

export default class ContactLocationRoute extends Route {

    async model(param){
        return {place: param.location} ;
    }
}
