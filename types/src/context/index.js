import React, {
    createContext,
    useContext,
    useReducer,
    useMemo,
    useEffect,
} from "react";

const BlockchainContext = createContext();

export function useBlockchainContext() {
    return useContext(BlockchainContext);
}

function reducer(state, { type, payload }) {
    return {
        ...state,
        [type]: payload
    }
}

const INIT_STATE = {
    currentpage: 0,
    currentmode: 0,
    metastate: false
};

export default function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const setMetaState = (para) => { 
        dispatch({
            type: "metastate",
            payload: para
        })
    }

    const setCurrentPage = (para) => {
        dispatch({
            type: "currentpage",
            payload: para
        });
    }
    const setCurrentMode = (para) => {
        dispatch({
            type: "currentmode",
            payload: para
        });
    }

    return (
        <BlockchainContext.Provider
            value={useMemo(
                () => [
                    state,
                    {
                        setCurrentPage,
                        setCurrentMode,
                        setMetaState
                    }
                ],
                [state]
            )}
        >
            {children}
        </BlockchainContext.Provider>
    );
}