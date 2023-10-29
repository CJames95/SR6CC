import React, { useState, useEffect, useRef } from 'react';
import { useAtom } from 'jotai';
import PropTypes from 'prop-types';
import {
    karma as karmaAtom,
    knowledge as knowledgeAtom,
    knowledgePointsBase as knowledgePointsBaseAtom,
    knowledgePoints as knowledgePointsAtom,
    language as languageAtom,
    secondaryHeader as secondaryHeaderAtom,
    primaryBackgroundEnd as primaryBackgroundEndAtom,
    primaryBackgroundStart as primaryBackgroundStartAtom,
    secondaryBackground as secondaryBackgroundAtom,
    secondaryBackgroundBorder as secondaryBackgroundBorderAtom,
    textColor as textColorAtom,
    selectedButtonColor as selectedButtonColorAtom,
    selectedHoverButtonColor as selectedHoverButtonColorAtom,
    selectedActiveButtonColor as selectedActiveButtonColorAtom,
    buttonColor as buttonColorAtom,
    hoverButtonColor as hoverButtonColorAtom,
    activeButtonColor as activeButtonColorAtom,
} from '../atoms.js';


function KnowledgeDialog(props) {
    const { onClose, open, type } = props;
    const [tempValue, setTempValue] = React.useState('');
    useEffect(() => {
        console.log(tempValue)
    }, [tempValue])

    const handleClose = () => {
        // add knowledge point handling here
        onClose(tempValue, type);
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
    open: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired
};

export default function Knowledge() {

    const [karma, setKarma] = useAtom(karmaAtom);
    const [knowledgePointsBase, setKnowledgePointsBase] = useAtom(knowledgePointsBaseAtom);
    const [knowledgePoints, setKnowledgePoints] = useAtom(knowledgePointsAtom);
    const [knowledgeTaken, setKnowledgeTaken] = useAtom(knowledgeAtom);
    const [languageTaken, setLanguageTaken] = useAtom(languageAtom);
    const [secondaryHeader, setSecondaryHeader] = useAtom(secondaryHeaderAtom);
    const [primaryBackgroundEnd, setPrimaryBackgroundEnd] = useAtom(primaryBackgroundEndAtom);
    const [primaryBackgroundStart, setPrimaryBackgroundStart] = useAtom(primaryBackgroundStartAtom);
    const [secondaryBackground, setSecondaryBackground] = useAtom(secondaryBackgroundAtom);
    const [secondaryBackgroundBorder, setSecondaryBackgroundBorder] = useAtom(secondaryBackgroundBorderAtom);
    const [textColor, setTextColor] = useAtom(textColorAtom);
    const [selectedButtonColor, setSelectedButtonColor] = useAtom(selectedButtonColorAtom);
    const [selectedHoverButtonColor, setSelectedHoverButtonColor] = useAtom(selectedHoverButtonColorAtom);
    const [selectedActiveButtonColor, setSelectedActiveButtonColor] = useAtom(selectedActiveButtonColorAtom);
    const [buttonColor, setButtonColor] = useAtom(buttonColorAtom);
    const [hoverButtonColor, setHoverButtonColor] = useAtom(hoverButtonColorAtom);
    const [activeButtonColor, setActiveButtonColor] = useAtom(activeButtonColorAtom);

    const handleKnowledgeTaken = (value, option) => {
        switch(option) {
            case 'add':
                if( knowledgePoints.knowledge === 0 ) {
                    return;
                }
                setKnowledgePoints({
                    type: 'UPDATE', 
                    payload: {
                        ...knowledgePointsBase,
                        knowledge: knowledgePointsBase.knowledge - 1
                }});
                setKnowledgeTaken((prevKnowledgeTaken) => [...prevKnowledgeTaken, value])
                break;
            case 'sub':
                console.log(value, ':', option)
                if( knowledgePoints.knowledge === knowledgePoints.maxKnowledge ) {
                    console.log(knowledgePoints.knowledge, ':', knowledgePoints.maxKnowledge)
                    return;
                }
                setKnowledgePoints({
                    type: 'UPDATE', 
                    payload: {
                        ...knowledgePointsBase,
                        knowledge: knowledgePointsBase.knowledge + 1
                }});
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
                setKnowledgePoints({
                    type: 'UPDATE', 
                    payload: {
                        ...knowledgePointsBase,
                        knowledge: knowledgePointsBase.knowledge - 1
                }});
                setLanguageTaken((prevLanguageTaken) => [...prevLanguageTaken, value])
                break;
            case 'sub':
                if( knowledgePoints.knowledge === knowledgePoints.maxKnowledge ) {
                    return;
                }
                setKnowledgePoints({
                    type: 'UPDATE', 
                    payload: {
                        ...knowledgePointsBase,
                        knowledge: knowledgePointsBase.knowledge + 1
                }});
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
    const [type, setType] = React.useState('');
    const handleOpen = (event, value) => {
        event.currentTarget.blur()
        setOpen(true);
        setType(value);
    }
    const handleClose = (value, type) => {
        setOpen(false);
        if(type === 'know') {
            handleKnowledgeTaken(value, 'add')
        }
        else if(type === 'lang') {
            handleLanguageTaken(value, 'add')
        }
    }

    const languageList = languageTaken.sort(function(a, b) {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    }).map((name, index) => {
        return (
            <div className={`w-full grid grid-cols-12 ${buttonColor}`}>
                <div className={`flex items-center justify-between flex-wrap col-span-2 border-r-2 ${secondaryBackgroundBorder}`}>
                    <button onClick={(e) => handleLanguageTaken(name, 'sub')} className={`flex flex-auto justify-center items-center py-3 ${buttonColor} ${hoverButtonColor} ${activeButtonColor}`}>
                        <span class="material-symbols-sharp">do_not_disturb_on</span>
                    </button>
                </div>
                <div className='flex font-semibold items-center justify-between flex-wrap py-3 px-4 col-span-10'>
                    {name}
                </div>
            </div>
        );
    });

    const knowledgeList = knowledgeTaken.sort(function(a, b) {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    }).map((name, index) => {
        return (
            <div className={`w-full grid grid-cols-12 ${secondaryBackgroundBorder} ${buttonColor}`}>
                <div className={`flex items-center justify-between flex-wrap col-span-2 border-r-2 ${secondaryBackgroundBorder}`}>
                    <button onClick={(e) => handleKnowledgeTaken(name, 'sub')} className={`flex flex-auto justify-center items-center py-3 ${buttonColor} ${hoverButtonColor} ${activeButtonColor}`}>
                        <span class="material-symbols-sharp">do_not_disturb_on</span>
                    </button>
                </div>
                <div className='flex font-semibold items-center justify-between flex-wrap py-3 px-4 col-span-10'>
                    {name}
                </div>
            </div>
        );
    });

    return (
        <div className={`h-[calc(100vh-76px)] z-0 max-w-md mx-auto shadow-md md:max-w-2xl ${primaryBackgroundEnd} ${primaryBackgroundStart} bg-gradient-to-t`}>
            <div className='px-4 py-2'>
                <div className='grid grid-cols-1 rounded'>
                    <div className={`grid grid-cols-12 rounded-t ${secondaryHeader} ${textColor} font-semibold border-b-2 ${secondaryBackgroundBorder} ${scrollbarVisible ? 'pr-4' : ''}`}>
                        <div className={`flex items-center text-center justify-center flex-wrap py-2.5 col-span-2 border-r-2 ${secondaryBackgroundBorder}`}>
                            Remove
                        </div>
                        <div className='flex items-center justify-start text-left flex-wrap px-4 py-2.5 col-span-10'>
                            Knowledge Name
                        </div>
                    </div>
                    <div id="scrollContainer" className={`flex items-center justify-between flex-wrap overflow-auto scroll ${secondaryBackground}`} style={{ maxHeight: 'calc(100vh - 194px)' }}>
                        {knowledgeList}
                        <div className={`w-full grid grid-cols-12 border-t-2 ${secondaryBackgroundBorder}`}>
                            <button onClick={(e) => handleOpen(e, 'know')} className={`flex justify-center py-3 text-center items-center ${textColor} ${selectedButtonColor} ${selectedHoverButtonColor} ${selectedActiveButtonColor} font-semibold px-4 py-2 rounded-b col-span-12`}>
                                Add Knowledge
                            </button>        
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-4 py-2'>
                <div className='grid grid-cols-1 rounded'>
                    <div className={`grid grid-cols-12 rounded-t ${secondaryHeader} ${textColor} font-semibold border-b-2 ${secondaryBackgroundBorder} ${scrollbarVisible ? 'pr-4' : ''}`}>
                        <div className={`flex items-center text-center justify-center flex-wrap py-2.5 col-span-2 border-r-2 ${secondaryBackgroundBorder}`}>
                            Remove
                        </div>
                        <div className='flex items-center justify-start text-left flex-wrap px-4 py-2.5 col-span-10'>
                            Language Name
                        </div>
                    </div>
                    <div id="scrollContainer" className={`flex items-center justify-between flex-wrap overflow-auto scroll ${secondaryBackground}`} style={{ maxHeight: 'calc(100vh - 194px)' }}>
                        {languageList}
                        <div className={`w-full grid grid-cols-12 border-t-2 ${secondaryBackgroundBorder}`}>
                            <button onClick={(e) => handleOpen(e, 'lang')} className={`flex justify-center py-3 text-center items-center ${textColor} ${selectedButtonColor} ${selectedHoverButtonColor} ${selectedActiveButtonColor} font-semibold px-4 py-2 rounded-b col-span-12`}>
                                Add Language
                            </button>        
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-4 py-2'>
                <div className={`grid grid-cols-1 rounded-md ${textColor} font-semibold ${secondaryHeader}`}>
                    <div className='flex items-center justify-between flex-wrap px-4 py-2.5'>
                        Knowledge Points: {knowledgePointsBase.knowledge}
                    </div>
                </div>
            </div>
            <KnowledgeDialog
                open={open}
                onClose={handleClose}
                type={type}
            />
        </div>
    );
}