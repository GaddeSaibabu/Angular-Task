
import { UnauthorizedComponent } from "./unauthorized/unauthorized.component";
import { ExplorePageComponent } from "./explore/expplore.component";
import { SigninComponent } from "./sign-in/sign-in.component";

export const PAGES = [ExplorePageComponent, SigninComponent, UnauthorizedComponent];

export * from './explore/expplore.component';
export * from './sign-in/sign-in.component';
export * from './unauthorized/unauthorized.component';
