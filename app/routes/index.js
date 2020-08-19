import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  /*  data = [
        {title: "Industries" , itemlist: ["Aviation","Hospitality","Health Care", "Finance"]},
        {title: "Software Products", itemlist : ["XYZ ERP","ABD Developer Studio","Code Max","DTD DB"]},
        {title: "Technologies", itemlist :["Cloud Solution","Big Data Solution","Analytics"]}
    ] */
        
    
    async model() {
          return this.store.findAll('index');

          // it automatically search for api called indices
          // the api url and namespace depends upon your adapter configuration
  }
}