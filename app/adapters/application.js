import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
    namespace = 'api';
  
    buildURL(...args) {
      return `${super.buildURL(...args)}.json`;
    }
  }
  


  /*

     host  -- http://localhos:3080/
     namespace : api 
 
     index  -indeces
     dept - depts
     buildUrl is not necassary if it is not file or if your are sticking to conventions
*/