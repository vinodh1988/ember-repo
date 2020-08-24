import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PeopleController extends Controller {
   @tracked name;
   @tracked position;
   @tracked pic;

   @action
   performPost(){
       console.log(this.name,this.position,this.pic)
           
       let post = this.store.createRecord('person', {
           name : this.name,
           position: this.position,
           pic: this.pic
       } );


      post.save();  //this will create a post request to  http://localhost:4800/api/people


   }

   @action
   temp(){
       console.log("fired...!!!");
   }
}
