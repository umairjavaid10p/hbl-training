export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface IProduct {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: number
}