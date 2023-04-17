import { InputTypes } from "../enums";

export interface InputData {
     type: InputTypes;
     name: string;
     id: number;
     placeholder?: string;
}
