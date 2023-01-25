import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Constants } from '../constants';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public signIn(): Observable<any> {
    //TODO: belore code does not work. Flickr authentication can be done only with the help server side scripting.
    /*var httpMethod = 'GET',
      url = 'https://www.flickr.com/services/oauth/request_token';

    var parameters = {
      oauth_callback: 'https%3A%2F%2Flocalhost%3A4200%2Fcallback',
      oauth_consumer_key: environment.flickrApiKey,
      oauth_nonce: 'bQ2wxiNbnHo',
      oauth_signature: 'Vg6DKnA%2BDdnXcwwNPoa1QWoN1C0%3D',
      oauth_timestamp: '1674306500',
      oauth_signature_method: 'HMAC-SHA1',
      oauth_version: '1.0',
      format: 'json',
    };

    var qp = '';
    Object.keys(parameters).forEach(function (key) {
      qp += `${key}=${parameters[key]}&`;
    });

    qp+='nojsoncallback=1'

    this.httpClient
      .get('https://www.flickr.com/services/rest?nojsoncallback=1&format=json&method=flickr.test.login&oauth_consumer_key=5ee393b99c627c4c42c5c9783bb22405&oauth_token=72157720871226712-5484c8b06a1c2361&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1674318820&oauth_nonce=HeBtCW9DtnW&oauth_version=1.0&oauth_callback=http%3A%2F%2Flocalhost%3A4200%2Fcallback&oauth_verifier=b8f3a271a5ab3747&oauth_signature=mrMShXLybLnNaOdKSFz594whXLg%3D')
      .subscribe((response) => console.log(response));*/

    //NOTE: dummy login
    localStorage.setItem(Constants.TOKEN_KEY, Constants.DUMMY_TOKEN);
    return of(true);
  }
}
