import { Injectable } from '@angular/core';

/*
  Generated class for the CommonServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonServicesProvider {

  constructor() {
    console.log('Hello CommonServicesProvider Provider');
  }

  GetMaritalStatusCode(maritalStatus: string): string {

    switch (maritalStatus) {
      case "S": {
        return "Single";
      }
      case "M": {
        return "Married";
      }
      case "D": {
        return "Divorced";
      }
      case "W": {
        return "Widowed";
      }
      default: {
        return "Invalid Marital Status";
      }
    }
  }

  checkForNull(x): boolean {
    if (x == null) {
      return true;
    }

    if (x === null) {
      return true;
    }

    if (typeof x === 'undefined') {
      return true;
    }

    return false;
  }


}
