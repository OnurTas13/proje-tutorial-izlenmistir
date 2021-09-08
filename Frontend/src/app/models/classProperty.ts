import { PropertyBase } from "./propertyBase";

export class CProperty implements PropertyBase{
    id: number;
    sellRent: number;
    name: string;
    pType: string;
    fType: string;
    price: number;
    BHK: number;
    builtArea: number;
    city: string;
    RTM: number;
    image?: string;
    carpetArea?: number;
    address: string;
    address2?: string;
    floorNo?: string;
    totalFloor?: string;
    AOP?: string;
    mainEntrance?: string;
    security: number;
    gated?: number;
    maintenance?: number;
    possession?: string;
    description?: string;
    postedOn: string;
    postedBy: number;
}
