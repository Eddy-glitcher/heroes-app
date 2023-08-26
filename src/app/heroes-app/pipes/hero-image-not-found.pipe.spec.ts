import { HeroImageNotFoundPipe } from './hero-image-not-found.pipe';

describe('HeroImageNotFoundPipe', () => {
  it('create an instance', () => {
    const pipe = new HeroImageNotFoundPipe();
    expect(pipe).toBeTruthy();
  });
});
