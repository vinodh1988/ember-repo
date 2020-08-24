import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PersonBoxComponent extends Component {
 
    constructor(...args){
         super(...args);
        this.data = this.args.persondata.name;
        this.event = this.args.temp;
         console.log(this.data);
         console.log(this.event)

    }

    @action
    perform(){
    
        this.event();
    }
    
}
