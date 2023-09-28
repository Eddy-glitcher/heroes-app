import { routes } from "./heroes-app-routing.module";
import { CharactersPageComponent } from "./pages/characters-page/characters-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";

describe ('Seccundary Routes Testing', ()=>{

  it('should Home route exists', () => {
    expect(routes[0].children).toContain({
        path: 'Home',
        component: HomePageComponent
    });
  });

  it('should Characters route exists', () => {
    expect(routes[0].children).toContain(  {
      path: 'Characters',
      component: CharactersPageComponent
    });
  });

});
