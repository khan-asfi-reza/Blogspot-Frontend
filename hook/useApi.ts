import {useState} from "react";
import axios from "axios";

export interface PostApiHookState {
    loading: boolean,
    error: any,
    res: any,
}

export default function usePostApi<Data>(url: string, config: any = {}):
    [PostApiHookState, ((data: Data) => Promise<void>)] {

    const [state, setState] = useState(
        {
            loading: false,
            error: null,
            res: null,
        }
    );

    const post = async (data: Data,): Promise<void> => {
        await setState({...state, loading: true})
        let res, error;
        try {
            res = await axios.post(url, data, config);
        } catch (e) {
            error = e.response;
        }
        setState({loading: false, res: res, error: error})
    }

    return [state, post]
}