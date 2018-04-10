export class Member {
    FirstName: string;
    Surname: string;
    MiddleName: string;
    MobileNumber: string;
    EmailAddress: string;
    Gender: string;
    DateOfBirth: string;
    InitiationFlag: boolean;
    MagusFlag: boolean;
    MagusDate: string;
    MaritalStatus: string;
    _should_update: boolean;

    constructor() {
        this.MagusFlag = false;
        this.InitiationFlag = false;
    }
}
