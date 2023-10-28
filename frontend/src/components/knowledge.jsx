import React, { useState, useEffect, useRef } from 'react';
import { useAtom } from 'jotai';
import PropTypes from 'prop-types';
import {
    karma as karmaAtom,
    knowledge as knowledgeAtom,
    knowledgePoints as knowledgePointsAtom,
    language as languageAtom
} from '../atoms.js';


function KnowledgeDialog(props) {
    const { onClose, open } = props;
    const [tempValue, setTempValue] = React.useState('');
    useEffect(() => {
        console.log(tempValue)
    }, [tempValue])

    const handleClose = () => {
        // add knowledge point handling here
        onClose(tempValue);
    };
    const handleInputChange = (value) => {
        setTempValue(value)
    }
    const handleEnterKeyDown = (event) => {
        console.log(event.key)
        if(event.key === 'Enter') {
            event.preventDefault();
            handleClose();
        }
    }

    return (
        <div className={`${open ? 'fixed' : 'hidden'} inset-0 flex items-center justify-center z-50`}>
            <div className="bg-white p-6 w-full max-w-xl rounded shadow-lg">
                <h2 className="text-lg font-bold mb-4">Enter Knowledge Name:</h2>
                <div className="grid gap-4">
                    <input
                        type="text"
                        placeholder="Knowledge Name"
                        className="border rounded p-2 w-full focus:border-blue-500"
                        autoFocus
                        onChange={(e) => handleInputChange(e.target.value)}
                        onKeyDown={(e) => handleEnterKeyDown(e)}
                    />
                    <button onClick={handleClose} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

KnowledgeDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
};

export default function Knowledge() {

    const [karma, setKarma] = useAtom(karmaAtom);
    const [knowledgePoints, setKnowledgePoints] = useAtom(knowledgePointsAtom);
    const [knowledgeTaken, setKnowledgeTaken] = useAtom(knowledgeAtom);
    const [languageTaken, setLanguageTaken] = useAtom(languageAtom);
    const handleKnowledgeTaken = (value, option) => {
        switch(option) {
            case 'add':
                if( knowledgePoints.knowledge === 0 ) {
                    return;
                }
                setKnowledgePoints(prevPoints => ({
                    ...prevPoints,
                    know: prevPoints.know - 1
                }))
                setKnowledgeTaken((prevKnowledgeTaken) => [...prevKnowledgeTaken, value])
                break;
            case 'sub':
                console.log(value, ':', option)
                if( knowledgePoints.knowledge === knowledgePoints.maxKnowledge ) {
                    console.log(knowledgePoints.knowledge, ':', knowledgePoints.maxKnowledge)
                    return;
                }
                setKnowledgePoints(prevPoints => ({
                    ...prevPoints,
                    know: prevPoints.know + 1
                }))
                setKnowledgeTaken(prevKnowledgeTaken => prevKnowledgeTaken.filter(item => item !== value))
                break;
            default:
                break;
        }
    }
    const handleLanguageTaken = (value, option) => {
        switch(option) {
            case 'add':
                if( knowledgePoints.knowledge === 0 ) {
                    return;
                }
                setKnowledgePoints(prevPoints => ({
                    ...prevPoints,
                    know: prevPoints.know - 1
                }))
                setLanguageTaken((prevLanguageTaken) => [...prevLanguageTaken, value])
                break;
            case 'sub':
                if( knowledgePoints.knowledge === knowledgePoints.maxKnowledge ) {
                    return;
                }
                setKnowledgePoints(prevPoints => ({
                    ...prevPoints,
                    know: prevPoints.know + 1
                }))
                setLanguageTaken(prevLanguageTaken => prevLanguageTaken.filter(item => item !== value))
                break;
            default:
                break;
        }
    }
    

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

    const [open, setOpen] = React.useState(false);
    const handleOpen = (event) => {
        event.currentTarget.blur()
        setOpen(true);
    }
    const handleClose = (value) => {
        setOpen(false);
        handleKnowledgeTaken(value, 'add')
    }

    const knowledgeList = knowledgeTaken.sort(function(a, b) {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    }).map((name, index) => {

        return (
            <div className='w-full grid grid-cols-12 bg-gray-200'>
                <div className='flex items-center justify-between flex-wrap col-span-2'>
                    <button onClick={(e) => handleKnowledgeTaken(name, 'sub')} className="flex flex-auto justify-center items-center py-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-100">
                        <span class="material-symbols-sharp">do_not_disturb_on</span>
                    </button>
                </div>
                <div className='flex items-center justify-between flex-wrap px-4 py-2 col-span-10'>
                    {name}
                </div>
            </div>
        );
    });

    return (
        <div className='h-[calc(100vh-74px)] z-0 max-w-md mx-auto shadow-md md:max-w-2xl bg-gray-400'>
            <div className='px-4 py-2'>
                <div className='grid grid-cols-1 rounded bg-gray-500'>
                    <div className={`grid grid-cols-12 rounded-t bg-gray-500 border-b border-black ${scrollbarVisible ? 'pr-4' : ''}`}>
                        <div className='flex items-center text-center justify-center flex-wrap py-2.5 col-span-2 border-r border-black'>
                            Remove
                        </div>
                        <div className='flex items-center justify-start text-left flex-wrap px-4 py-2.5 col-span-10'>
                            Knowledge Name
                        </div>
                    </div>
                    <div id="scrollContainer" className='flex items-center justify-between flex-wrap overflow-auto' style={{ maxHeight: 'calc(100vh - 194px)' }}>
                        {knowledgeList}
                        <div className='w-full grid grid-cols-12'>
                            <button onClick={(e) => handleOpen(e)} className='flex justify-center text-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-b col-span-12'>
                                Add Knowledge
                            </button>        
                        </div>
                    </div>
                </div>
            </div>
            {/* duplicate for language here and adjust heights */}
            <div className='px-4 py-2'>
                <div className='grid grid-cols-1 bg-gray-500'>
                    <div className='flex items-center justify-between flex-wrap px-4 py-2.5'>
                        test
                    </div>
                </div>
            </div>
            <KnowledgeDialog
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}