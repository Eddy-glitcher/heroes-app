import { Component } from '@angular/core';
import { HeroeImages } from '../../interfaces/heroe-images';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  heroImageList: HeroeImages[] = [
    { id: 'first-hero-image' , name: 'Spiderman', alt: 'Spiderman Image', imageUrl: 'https://i.postimg.cc/QdB5wbCH/Spiderman.jpg' },
    { id: 'second-hero-image', name: 'Iron Man' , alt: 'Iron Man Image' , imageUrl: 'https://i.postimg.cc/XJ9bXTvt/Iron-Man.jpg'  },
    { id: 'third-hero-image' , name: 'Deadpool' , alt: 'Deadpool Image' , imageUrl: 'https://i.postimg.cc/zBYZh8V8/Deadpool.jpg'  },
    { id: 'fourth-hero-image', name: 'Thor'     , alt: 'Thor Image'     , imageUrl: 'https://i.postimg.cc/XJ66Pgtw/Thor.jpg'      },
  ];

}
