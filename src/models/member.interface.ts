export class Member {
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
    maritalStatus: string

    constructor() {
        this.magusFlag = false;
        this.initiationFlag = false;
    }
}
