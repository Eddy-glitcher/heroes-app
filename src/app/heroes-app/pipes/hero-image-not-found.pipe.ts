import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroImageNotFound'
})
export class HeroImageNotFoundPipe implements PipeTransform {
  // This pipe will show a default image when the received path is some of these.
  transform(image : string): string {
    if (image == 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
      || image == 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif' || image == '') {
      return 'https://i.postimg.cc/R0WYKH6t/marvel-image-not-found.png';
    }
    // If the image doesn´t match whit any path the initial image will be returned
    return image.replaceAll('http', 'https'); // Fix the http insecure request image
  }

}
