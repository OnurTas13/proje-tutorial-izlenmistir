export interface PropertyBase {
    id: number;
    sellRent: number;
    name: string;
    propertyType: string;
    furnishingType: string;
    price: number;
    BHK: number;
    builtArea: number;
    city: string;
    readyToMove: boolean;
    image?: string;
  }