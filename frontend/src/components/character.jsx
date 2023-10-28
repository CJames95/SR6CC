import React from 'react';
import { useAtom } from 'jotai';
import 'material-symbols';
import axios from 'axios';
import Name from './name.jsx';
import Settings from './settings.jsx';
import Priorities from './priorities.jsx';
import Metatype from './metatype.jsx';
import Qualities from './qualities.jsx';
import Abilities from './abilities.jsx';
import Skills from './skills.jsx';
import Knowledge from './knowledge.jsx';
import { 
    page as pageAtom
} from '../atoms.js';

axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

export default function Character() {   

    const [page, setPage] = useAtom(pageAtom);

    /*const [qualityState, setQualityState] = React.useState(0); //handleQualityState
    const [qualityTakenState, setQualityTakenState] = React.useState(null); //handleQualityTakenState
    const [qualitiesArray, updateQualitiesArray] = React.useState(qualitiesList); //handleUpdateQualityArray
    const [qualitiesTakenArray, updateQualitiesTakenArray] = React.useState([]); //handleUpdateQualityTakenArray
    useEffect(() => {
        console.log(
            'qualities',
            qualityState
        )
    }, [qualityState])
    useEffect(() => {
        console.log(
            'qualities taken',
            qualityTakenState
        )
    }, [qualityTakenState])
    useEffect(() => {
        console.log(
            'qualities array',
            qualitiesArray
        )
    }, [qualitiesArray])
    useEffect(() => {
        console.log(
            'qualities taken array',
            qualitiesTakenArray
        )
    }, [qualitiesTakenArray])
    const handleQualityState = (value) => () => {
        setQualityState(value)
        setQualityTakenState(value)
    }
    const handleQualityTakenState = (value) => () => {
        setQualityTakenState(value)
        setQualityState(value)
    }
    const handleUpdateQualitiesArray = (value) => () => {
        const valueResult = qualitiesArray.find(qualitiesArray => qualitiesArray.id == value)
        updateQualitiesArray(qualitiesArray.filter(qualitiesArray => qualitiesArray.id !== value))
        updateQualitiesTakenArray([...qualitiesTakenArray, valueResult])
    }
    const handleUpdateQualityTakenArray = (value) => () => {
        const valueResult = qualitiesTakenArray.find(qualitiesTakenArray => qualitiesTakenArray.id == value)
        updateQualitiesTakenArray(qualitiesTakenArray.filter(qualitiesTakenArray => qualitiesTakenArray.id !== value))
        updateQualitiesArray([...qualitiesArray, valueResult])
    }*/

    return (
        <>
            <div className='relative h-screen'>
                <Name/>
                {page === 0 && 
                    <Settings/>
                }
                {page === 1 &&
                    <Priorities/>
                }
                {page === 2 &&
                    <Metatype/>
                }
                {page === 3 &&
                    <Qualities/>
                }
                {page === 4 &&
                    <Abilities/>
                }
                {page === 5 &&
                    <Skills/>
                }
                {page === 6 &&
                    <Knowledge/>
                }
            </div>
        </>
    );
}
