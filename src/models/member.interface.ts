export class Member {
    Key: number;
    firstName: string;
    surname: string;
    middleName: string;
    mobileNumber: string;
    emailAddress: string;
    gender: string;
    dateOfBirth: string;
    initiationFlag: boolean;
    magusFlag: boolean;
    magusDate: string

    constructor(key: number) {
        this.Key = key;
        this.magusFlag = false;
        this.initiationFlag = false;
    }
}
