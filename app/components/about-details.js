import Component from '@glimmer/component';
import { action,computed,set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AboutDetailsComponent extends Component {
    @tracked firstpage = true;
    @tracked secondpage = false;
    @tracked thirdpage=false;
    @tracked question1="yes";
    @tracked question2="yes";
    pageno = 1;
    info = [];
    constructor(...args){
      super(...args);
      this.info = this.args.messages;
      console.log(this.info)
  }

  @computed('info', 'question1','question2','secondpage','thirdpage')
  get questionList() {
    console.log("this is up and running")
    if(this.secondpage){
        let start;
        if(this.question1=="yes")
          start=0;
        else
          start=3;
        let temp=[];
        for(let i=start;i<6;i++)
          temp.push(this.info[i])
        return temp;
    }

    if(this.thirdpage){
        let end;
        if(this.question2=="yes")
          end=11;
        else
          end=9;
        let temp=[];
        for(let i=6;i<end;i++)
          temp.push(this.info[i])
        return temp;
    }
    
  }

  @action
  updateQuestion1(event){
    this.question1 = event.target.value;
    console.log(this.question1);
  }

  @action
  updateQuestion2(event){

    this.question2 = event.target.value;
    console.log(this.question2);

  }
 
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
  

