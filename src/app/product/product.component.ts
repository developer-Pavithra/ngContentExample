import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  laptopDetails = [
    {
      id: 1,
      name: 'Lenovo',
      cost: '62000',
      icon: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822__480.jpg',
    },
    {
      id: 2,
      name: 'Dell',
      cost: '78250',
      icon: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822__480.jpg',
    },
    {
      id: 3,
      name: 'HP',
      cost: '52000',
      icon: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822__480.jpg',
    },
    {
      id: 4,
      name: 'Acer',
      cost: '40000',
      icon: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822__480.jpg',
    },
  ];
  mobileDetails = [
    {
      id: 1,
      name: 'Lenovo',
      cost: '12000',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwABmKlOQUKj8237pq5I9651XMh_fzjmTgfg&usqp=CAU',
    },
    {
      id: 2,
      name: 'Samsung',
      cost: '25000',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwABmKlOQUKj8237pq5I9651XMh_fzjmTgfg&usqp=CAU',
    },
    {
      id: 3,
      name: 'One plus',
      cost: '35000',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwABmKlOQUKj8237pq5I9651XMh_fzjmTgfg&usqp=CAU',
    },
    {
      id: 4,
      name: 'poko',
      cost: '40000',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwABmKlOQUKj8237pq5I9651XMh_fzjmTgfg&usqp=CAU',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
