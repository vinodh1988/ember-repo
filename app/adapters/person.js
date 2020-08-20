import RESTAdapter from '@ember-data/adapter/rest';

export default class PersonAdapter extends RESTAdapter{
    host = " http://localhost:4800"
    namespace = "api"
}

/*

store.find("person")  -> get -> http://localhost:4800/api/people
*/