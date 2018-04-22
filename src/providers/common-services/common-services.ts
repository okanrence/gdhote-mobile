import { DateObj } from './../../models/date.interface';
import { Injectable } from '@angular/core';
import { Dictionary } from '../dictionary-services/dictionary-services';

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

  GetMaritalStatusList(): any {
    let maritalStatus  = [{
      value: "S",
      text: 'Single'
  }, {
      value: "M",
      text: 'Married'
  }, {
      value: "D",
      text: 'Divorced'
  }, {
      value: "W",
      text: 'Widowed'
  }]
    return maritalStatus;
}


  IsNullValue(x:any): boolean {
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

    GetDate(date:string): DateObj{
      let dateObj = new DateObj();
      if (date){
        dateObj.day = +date.substring(8,10);;
        dateObj.month = +date.substring(5,7);
        dateObj.year = +date.substring(0,4);
      }
      
      return dateObj;
  }

  GetDateString(date:DateObj): string{
    let formattedDate: string = "No Date Supplied"
    if(date){
      formattedDate = `${date.day ? date.day.toString() : "01"}-${date.month ? date.month : "07"}-${date.year ? date.year.toString() : "1904" }`;
    }
    return formattedDate;
  }

  GetMonths(): any {
  var months  = [{
    value: "01",
    text: 'January'
  }, {
    value: "02",
    text: 'February'
  }, {
    value: "03",
    text: 'March'
  }, {
    value: "04",
    text: 'April'
  }, {
    value: "05",
    text: 'May'
  }, {
    value: "06",
    text: 'June'
  }, {
    value: "07",
    text: 'July'
  }, {
    value: "08",
    text: 'August'
  }, {
    value: "09",
    text: 'September'
  }, {
    value: "10",
    text: 'October'
  }, {
    value: "11",
    text: 'November'
  }, {
    value: "12",
    text: 'December'
  }]
  return months;
}
GetYears(){
   let yearList = [];
    let i = new Date().getFullYear() + 1;

    while (i-- && i >= 1904) {
      yearList.push(i);
    }

    return yearList;
}

GetDays():any{
let daysList = [];
    
for (let j = 1; j <= 31; j++) {
  daysList.push(j);
}
return daysList;
}



}
