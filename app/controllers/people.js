import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PeopleController extends Controller {
   @tracked name;
   @tracked position;
   @tracked pic;

   @action
   performPost(){
       console.log(name,position,pic)
   }
}
