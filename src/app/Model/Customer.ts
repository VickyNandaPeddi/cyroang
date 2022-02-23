export class Customer {
  public name: string;
  public designation: string;
  public address: string;
  public town: string;
  public district: string;
  public state: string;
  public pin: string;
  public phone: number;
  public emailid: string;
  public panno: string;
  public applicationuse: string[];
  public modelselection: string[];
  public inforequired: string [];
  public freetext: string;


  constructor(name: string, designation: string, address: string, town: string, district: string, state: string, pin: string, phone: number, emailid: string, panno: string, applicationuse: string[], modelselection: string[], inforequired: string[], freetext: string) {
    this.name = name;
    this.designation = designation;
    this.address = address;
    this.town = town;
    this.district = district;
    this.state = state;
    this.pin = pin;
    this.phone = phone;
    this.emailid = emailid;
    this.panno = panno;
    this.applicationuse = applicationuse;
    this.modelselection = modelselection;
    this.inforequired = inforequired;
    this.freetext = freetext;
  }
}
