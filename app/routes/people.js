import Route from '@ember/routing/route';

export default class PeopleRoute extends Route {
     
    async model() {
        return this.store.findAll('person');
   }
}
