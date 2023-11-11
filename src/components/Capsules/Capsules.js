import { useEffect, useState } from "react";
import Capsule from "../Capsule/Capsule";

const Capsules = () => {
    const [ capsules, setCapsules ] = useState([])

    useEffect(() => {
        getCapsules();
    }, [])

    const getCapsules = async () => {
        try {
            let response = await fetch('https://api.spacexdata.com/v3/capsules/')

            let data = await response.json()
            setCapsules(data);
        } catch {}
    }

    return (
        <>
            {capsules?.map((capsule) => <Capsule key={capsule.capsule_serial} capsule={capsule}/>)}
        </>
    )
    
}

export default Capsules;