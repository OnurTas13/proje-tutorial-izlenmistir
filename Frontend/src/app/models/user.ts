
export interface UserForLogin{
    userName: string;
    password: string;
}
export interface UserForRegister{
    userName: string;
    email?: string;
    password: string;
    mobile?: number;
}
export interface UserForLoginRes{
    userName: string;
    token:string;
}