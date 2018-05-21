export class User {
    _id: string;
    username: string;
    password: string;
    repassword: string;
   // lastName: string;
}
export class Alert {
    type: AlertType;
    message: string;
}
export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}
export class Device {
    devicename: string;
    imeino: string;
    devicetype: string;
    simno: string;
    descriprtion: string;
}