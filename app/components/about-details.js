import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AboutDetailsComponent extends Component {
  @tracked firstpage = true;
  @tracked secondpage = false;
  @tracked thirdpage=false;
  pageno = 1;

  @action
  performForward(){
      this.pageno++;
      switch(this.pageno){
          case 2:
                  this.firstpage =false;
                  this.secondpage=true;
                  break;
           case 3:
                  this.secondpage =false;
                  this.thirdpage =true;
      }
  }

  @action
  performBackward(){
      this.pageno--;
      switch(this.pageno)
      {
          case 1:
                  this.firstpage =true;
                  this.secondpage=false;
                  break;
           case 2:
                  this.secondpage =true;
                  this.thirdpage =false;
      }
  }
}
