import React, { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import axios from 'axios';
import {
    karma as karmaAtom,
    qualities as qualitiesAtom,
    secondaryHeader as secondaryHeaderAtom,
    primaryBackgroundStart as primaryBackgroundStartAtom,
    primaryBackgroundEnd as primaryBackgroundEndAtom,
    secondaryBackground as secondaryBackgroundAtom,
    secondaryBackgroundBorder as secondaryBackgroundBorderAtom,
    textColor as textColorAtom,
    selectedButtonColor as selectedButtonColorAtom,
    selectedHoverButtonColor as selectedHoverButtonColorAtom,
    selectedActiveButtonColor as selectedActiveButtonColorAtom,
} from '../atoms.js';

axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

export default function Qualities() {

    const [karma, setKarma] = useAtom(karmaAtom);
    const [qualities, setQualities] = useAtom(qualitiesAtom);
    const [secondaryHeader, setSecondaryHeader] = useAtom(secondaryHeaderAtom);
    const [primaryBackgroundStart, setPrimaryBackgroundStart] = useAtom(primaryBackgroundStartAtom);
    const [primaryBackgroundEnd, setPrimaryBackgroundEnd] = useAtom(primaryBackgroundEndAtom);
    const [secondaryBackground, setSecondaryBackground] = useAtom(secondaryBackgroundAtom);
    const [secondaryBackgroundBorder, setSecondaryBackgroundBorder] = useAtom(secondaryBackgroundBorderAtom);
    const [textColor, setTextColor] = useAtom(textColorAtom);
    const [selectedButtonColor, setSelectedButtonColor] = useAtom(selectedButtonColorAtom);
    const [selectedHoverButtonColor, setSelectedHoverButtonColor] = useAtom(selectedHoverButtonColorAtom);
    const [selectedActiveButtonColor, setSelectedActiveButtonColor] = useAtom(selectedActiveButtonColorAtom);

    const [scrollbarVisible, setScrollbarVisible] = useState(false);
    useEffect(() => {
        const element = document.getElementById('scrollContainer');
        function checkScrollbar() {
            if (element.scrollHeight > element.clientHeight) {
                setScrollbarVisible(true);
            } else {
                setScrollbarVisible(false);
            }
        }
        checkScrollbar(); // Initial check
        // Check again whenever the element's size changes
        window.addEventListener('resize', checkScrollbar);
        return () => window.removeEventListener('resize', checkScrollbar);
    }, []);

    const [addQuality, setAddQuality] = useState(false);
    const [data, setData] = useState([])
    useEffect(() => {
        console.log('Qualities Data: ', data)
    }, [data])
    const handleAddQuality = (value) => {
        if(value == true) {
            axios
            .get(`http://localhost:8000/qualities/`)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.error(error)
            })
        }
        setAddQuality(value)
    }

    const mouseDown = e => {
        e.stopPropagation();
    }

    const [addQualityScreen, setAddQualityScreen] = useState(false);
    const handleAddQualityScreen = (value) => {
        setAddQualityScreen(value)
        if(value == true) {
            axios
            .get(`http://localhost:8000/qualities/`)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.error(error)
            })
        }
    };

    const AddQualityRows = data.map((data, index, array) =>  {
        const isLastItem = index === array.length - 1;
        
        return (
            <div className='w-full grid grid-cols-12'>
                <div className='flex items-center col-span-2'>
                    <button onClick className={`flex justify-center items-center w-full py-3 shadow-md focus:outline-none border-r border-black
                        ${isLastItem ? '' : 'border-b'}
                        ${false ? 'bg-blue-500' : 'bg-gray-200'} 
                        ${false ? 'hover:bg-blue-600' : 'hover:bg-gray-300'} 
                        ${false ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                    `}>
                        <span className="material-symbols-sharp pr-2">search</span>
                    </button>
                </div>
                <button onClick className={`w-full py-3 shadow-md col-span-10 focus:outline-none border-black
                ${isLastItem ? '' : 'border-b'}
                ${false ? 'bg-blue-500' : 'bg-gray-200'} 
                ${false ? 'hover:bg-blue-600' : 'hover:bg-gray-300'} 
                ${false ? 'active:bg-blue-300' : 'active:bg-gray-100'}
            `}>
                    <div className='grid grid-cols-2'>
                        <div className='text-left px-4'>
                            {data.id}
                        </div>
                        <div className='flex justify-end items-center text-right px-4'>
                            {data.karma}
                        </div>
                    </div>
                </button>        
            </div>
        );
    });

    return (
        <>
            {addQualityScreen === true &&
                <div className={`absolute h-[calc(100vh-76px)] left-1/2 transform -translate-x-1/2 z-10 w-full max-w-md mx-auto shadow-md md:max-w-2xl bg-gradient-to-t ${primaryBackgroundEnd} ${primaryBackgroundStart}`}>
                    <div className='px-4 py-2'>
                        <div className='grid grid-cols-1 bg-gray-600'>
                            <div className='flex items-center justify-between flex-wrap'>
                                <button onClick={() => handleAddQualityScreen(false)} className="w-full bg-gray-200 py-3 shadow-md hover:bg-gray-300 active:bg-gray-100 focus:outline-none">
                                    <div className='grid grid-cols-10'>
                                        <div className='flex justify-start items-center text-left px-4 col-span-1'>
                                            <span class="material-symbols-sharp">arrow_back</span>
                                        </div>
                                        <div className='flex items-center justify-start flex-wrap text-left px-4 col-span-9'>
                                            Return to Qualities
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='px-4 py-2'>
                        <div className='grid grid-cols-1 bg-gray-500'>
                            <div className={`grid grid-cols-12 bg-gray-500 ${scrollbarVisible ? 'pr-4' : ''}`}>
                                <div className='flex items-center justify-between flex-wrap px-4 py-2.5 col-span-2 border-r border-black'>
                                    More Info
                                </div>
                                <div className='grid grid-cols-2 bg-gray-500 col-span-10'>
                                    <div className='flex items-center justify-between flex-wrap px-4 py-2.5'>
                                        Quality
                                    </div>
                                    <div className='flex justify-end items-center text-right px-4'>
                                        Karma Cost
                                    </div>
                                </div>
                            </div>
                            <div id="scrollContainer" className='flex items-center justify-between flex-wrap overflow-auto' style={{ height: 'calc(100vh - 260px)' }}>
                                {AddQualityRows}
                            </div>
                        </div>
                    </div>
                    <div className='px-4 py-2'>
                        <div className='grid grid-cols-1 bg-gray-500'>
                            <div className='flex items-center justify-between flex-wrap px-4 py-2.5'>
                                Karma: {karma}
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className={`h-[calc(100vh-76px)] z-0 max-w-md mx-auto shadow-md md:max-w-2xl bg-gradient-to-t ${primaryBackgroundEnd} ${primaryBackgroundStart}`}>
                <div className='px-4 py-2'>
                    <div className={`grid grid-cols-1 ${secondaryHeader} ${textColor} font-semibold rounded-md shadow-md`}>
                        <div className={`grid grid-cols-12 ${scrollbarVisible ? 'pr-4' : ''}`}>
                            <div className={`flex items-center justify-between flex-wrap px-4 py-2.5 col-span-2 border-r-2 ${secondaryBackgroundBorder}`}>
                                More Info
                            </div>
                            <div className='grid grid-cols-2 col-span-10'>
                                <div className='flex items-center justify-between flex-wrap px-4 py-2.5'>
                                    Quality
                                </div>
                                <div className='flex justify-end items-center text-right px-4'>
                                    Karma Cost
                                </div>
                            </div>
                        </div>
                        <div id="scrollContainer" className={`flex items-end rounded-b-md justify-between flex-wrap overflow-auto ${secondaryBackground}`} style={{ height: 'calc(100vh - 196px)' }}>
                            <div className='w-full grid grid-cols-12'>
                                <button onClick={() => handleAddQualityScreen(true)} className={`flex justify-center text-center ${selectedButtonColor} ${selectedHoverButtonColor} ${selectedActiveButtonColor} ${textColor} font-semibold px-4 py-3 rounded-b col-span-12`}>
                                    Add Quality
                                </button>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-4 py-2'>
                    <div className={`grid grid-cols-1 ${secondaryHeader} ${textColor} font-semibold rounded-md shadow-md`}>
                        <div className='flex items-center justify-between flex-wrap px-4 py-2.5'>
                            Karma: {karma}
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
}