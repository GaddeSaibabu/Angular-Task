import { AuthService } from './auth.service';
import { FlickrService } from './flickr.service';

export const SERVICES = [FlickrService, AuthService];

export * from './flickr.service';
export * from './auth.service';
