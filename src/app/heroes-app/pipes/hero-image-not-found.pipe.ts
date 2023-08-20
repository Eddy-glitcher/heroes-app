import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroImageNotFound'
})
export class HeroImageNotFoundPipe implements PipeTransform {

  transform(image : string): string {

    if (image == 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
      || image == 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif') {
      return 'https://i.postimg.cc/R0WYKH6t/marvel-image-not-found.png';
    }
    return image;
  }

}
