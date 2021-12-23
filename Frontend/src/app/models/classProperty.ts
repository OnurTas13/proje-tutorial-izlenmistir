import { PropertyBase } from "./propertyBase";

export class CProperty implements PropertyBase{
    id: number;
    sellRent: number;
    name: string;
    propertyTypeId: number;
    propertyType: string;
    furnishingTypeId: number;
    furnishingType: string;
    age?: string;
    price: number;
    BHK: number;
    builtArea: number;
    cityId: number;
    city: string;
    readyToMove: boolean;
    image?: string;
    carpetArea?: number;
    address: string;
    address2?: string;
    floorNo?: string;
    totalFloors?: string;
    AOP?: string;
    mainEntrance?: string;
    security: number;
    gated?: boolean;
    maintenance?: number;
    estPossession?: string;
    description?: string;
    postedOn: string;
    postedBy: number;
    estPossessionOn : string;
}
