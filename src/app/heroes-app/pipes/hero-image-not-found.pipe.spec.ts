import { HeroImageNotFoundPipe } from './hero-image-not-found.pipe';

describe('HeroImageNotFoundPipe', () => {

  let pipe = new HeroImageNotFoundPipe;

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  
  it('should return a default image when the send image url is a empty string', ()=>{
    const defaultImage = pipe.transform('');
    expect(defaultImage).toBe('https://i.postimg.cc/R0WYKH6t/marvel-image-not-found.png');
  });

  it('should return a default image when the send image url is a not available image url', ()=>{
    const defaultImage = pipe.transform('http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg');
    expect(defaultImage).toBe('https://i.postimg.cc/R0WYKH6t/marvel-image-not-found.png');
  });

  it('should return a default image when the send image url is a not available image url', ()=>{
    const defaultImage = pipe.transform('http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif');
    expect(defaultImage).toBe('https://i.postimg.cc/R0WYKH6t/marvel-image-not-found.png');
  });

});
