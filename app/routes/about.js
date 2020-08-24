import Route from '@ember/routing/route';

export default class AboutRoute extends Route {
    model(){
        return [
            {type:"General", message :"This is a general message"},
            {type:"General", message :"This is a general message 2"},
            {type:"General", message :"This is a general message 3"},
            {type:"Technical", message :"This is a Technical message"},
            {type:"Technical", message :"This is a Technical message 2"},
            {type:"Technical", message :"This is a Technical message 3"},
            {type:"Finance", message :"This is a Finance message"},
            {type:"Finance", message :"This is a Finance message 2"},
            {type:"Finance", message :"This is a Finance message 3"},
            {type:"Recruitment", message :"This is a Recruitment Message1"},
            {type:"Recruitment", message :"This is a Recruitment Message2"}
         ]
    }
}
