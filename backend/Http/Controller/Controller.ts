import { Nullable } from "../../app/Domain/Helpers/types";
import Request from "../Request";
import Response from "../Response";
export default abstract class Controller{
    abstract control(request: Request, response: Response): Promise<Nullable<Response>>;
}