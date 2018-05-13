export class PaymentViewModel {
  PhoneNumber: string;
  Name: string;
  EmailAddress: string;
  MemberId: string;
  Narration: string;
  Currency: string;
  Reference: string;
  Amount: string;
  PaymentType: PaymentType;
  constructor() {}
}

class PaymentType {
  Id: string;
  Name: string;
}

class PaymentMode {
  Id: string;
  Name: string;
}
