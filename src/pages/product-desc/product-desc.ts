import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetProdDescription } from '../../providers/get-prod-description';
/*
  Generated class for the ProductDesc page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-desc',
  templateUrl: 'product-desc.html',

  providers:  [GetProdDescription]
})
export class ProductDescPage {

	product : any;
  imgurl : any;
  brand : any;
  title: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public getDetails : GetProdDescription) {
    
    this.product = navParams.get('subproduct');
    //console.log(this.product);
    // this.defaultUrl = navParams.get('defaultUrl');
    this.loadDetails();

  }

  loadDetails(){
  	 this.getDetails.load(this.product)

  .then(data => {

   this.product = data;

   console.log(this.product);
   this.imgurl = this.product.images[0].url;
   this.brand = this.product.brand.name;
   this.title = this.product.meta.title;
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDescPage');
  }

}
