import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProposalsContext = createContext();

function ProposalProviderWrapper(props) {
    const [proposals, setProposals] = useState()

    const getProposals = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/proposals`)
        .then((res) => {
            setProposals(res.data)
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        // getProposals()
    },[])

    return (
        <ProposalsContext.Provider value={{ proposals, setProposals, getProposals}}>
            {props.children}
        </ProposalsContext.Provider>
    )
}

export {
    ProposalProviderWrapper, ProposalsContext
}