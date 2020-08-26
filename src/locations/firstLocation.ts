import { ILocation } from "./ILocation";

export class FirstLocation implements ILocation{
    name: string = "firstLocation";
    question: string = "2 + 2 * 2? ";
    answer: string = "6";
}