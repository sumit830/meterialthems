

export interface Users {
  active: User;
  list: User[];
}

export interface User {
  id?: number;
  name?: string;
}
export class Device {
    id: string;
    devicename: string;
    imeino: string;
    devicetype: string;
    simno: string;
    descriprtion: string;
}
export interface devices {
  
  list: Device[];
}