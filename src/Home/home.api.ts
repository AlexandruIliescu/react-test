import Api from "../Common/api";
import { Game } from "../Common/types";

const getGamesList = async () => {
    const response = await Api.get<Game[]>('/games');   
    console.log(response.data)
    return response.data;
}

export { getGamesList };