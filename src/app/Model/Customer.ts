export class Customer {
  public slNo: number;
  public name: string;
  public designation: string;
  public address: string;
  public town: string;
  public district: string;
  public state: string;
  public pin: string;
  public mobileNo: number;
  public emailId: string;
  public panNo: string;
  public application: string[];
  public model: string[];
  public info: string [];
  public remarks: string;
  public createdOn:string;


  constructor(slNo: number, name: string, designation: string, address: string, town: string, district: string, state: string, pin: string, mobileNo: number,
     emailId: string, panNo: string, application: string[], model: string[], info: string[], remarks: string,createdOn:string) {
    this.slNo = slNo;
    this.name = name;
    this.designation = designation;
    this.address = address;
    this.town = town;
    this.district = district;
    this.state = state;
    this.pin = pin;
    this.mobileNo = mobileNo    ;
    this.emailId = emailId;
    this.panNo = panNo;
    this.application = application;
    this.model = model ;
    this.info = info ;
    this.remarks = remarks;
    this.createdOn=createdOn;
  }
}
