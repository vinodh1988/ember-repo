import Route from '@ember/routing/route';


export default class ContactRoute extends Route {
    async model(){
        let response = await fetch("http://localhost:4800/api/offices");
        let data = await response.json();
        return data;
        
    }
}
