import {useState} from "react";
import axios from "axios";

export interface PostApiHookState {
    loading: boolean,
    error: any,
    res: any,
}

// Hook to handle api post data
export default function usePostApi<Data>(url: string, config: any = {}):
    [PostApiHookState, ((data: Data, preInit?: Function) => Promise<void>)] {

    // State that will save loading state, error state and response object
    const [state, setState] = useState(
        {
            loading: false,
            error: null,
            res: null,
        }
    );

    // Post Function Hook
    /**
     *
     * @param {<Data>} data - Post API Request Data
     * @param {Function} preInit - Function preflight
     */
    const post = async (data: Data, preInit?: Function): Promise<void> => {
        await setState({...state, loading: true})
        if (preInit) {
            await preInit();
        }
        let res, error;
        try {
            res = await axios.post(url, data, config);
        } catch (e) {
            error = await e.response;
        }
        await setState({loading: false, res: res, error: error})
    }

    return [state, post]
}