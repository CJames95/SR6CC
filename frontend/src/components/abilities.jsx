import React, { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import {
    karma as KarmaAtom,
    priorities as prioritiesAtom,
    metatype as metatypeAtom,
    attributes as attributesAtom,
    attributePoints as attributePointsAtom,
    attributePointsBase as attributePointsBaseAtom,
    knowledgePoints as knowledgePointsAtom,
    secondaryHeader as secondaryHeaderAtom,
    primaryBackgroundStart as primaryBackgroundStartAtom,
    primaryBackgroundEnd as primaryBackgroundEndAtom,
    secondaryBackground as secondaryBackgroundAtom,
    secondaryBackgroundBorder as secondaryBackgroundBorderAtom,
    textColor as textColorAtom,
    buttonColor as buttonColorAtom,
    selectedButtonColor as selectedButtonColorAtom,
    selectedHoverButtonColor as selectedHoverButtonColorAtom,
    selectedActiveButtonColor as selectedActiveButtonColorAtom,
} from '../atoms.js';
import max from '../json/metatype_max_attrib.json';
import { fontGrid } from '@mui/material/styles/cssUtils.js';

export default function Abilities() {

    const [karma, setKarma] = useAtom(KarmaAtom);
    const [prioritySelections, setPrioritySelections] = useAtom(prioritiesAtom);
    const [chosenMetatype, setChosenMetatype] = useAtom(metatypeAtom);
    const [attributes, setAttributes] = useAtom(attributesAtom);
    const [attributePoints, setAttributePoints] = useAtom(attributePointsAtom);
    const [attributePointsBase, setAttributePointsBase] = useAtom(attributePointsBaseAtom);
    const [knowledgePoints, setKnowledgePoints] = useAtom(knowledgePointsAtom);
    const [secondaryHeader, setSecondaryHeader] = useAtom(secondaryHeaderAtom);
    const [primaryBackgroundStart, setPrimaryBackgroundStart] = useAtom(primaryBackgroundStartAtom);
    const [primaryBackgroundEnd, setPrimaryBackgroundEnd] = useAtom(primaryBackgroundEndAtom);
    const [secondaryBackground, setSecondaryBackground] = useAtom(secondaryBackgroundAtom);
    const [secondaryBackgroundBorder, setSecondaryBackgroundBorder] = useAtom(secondaryBackgroundBorderAtom);
    const [textColor, setTextColor] = useAtom(textColorAtom);
    const [buttonColor, setButtonColor] = useAtom(buttonColorAtom);
    const [selectedButtonColor, setSelectedButtonColor] = useAtom(selectedButtonColorAtom);
    const [selectedHoverButtonColor, setSelectedHoverButtonColor] = useAtom(selectedHoverButtonColorAtom);
    const [selectedActiveButtonColor, setSelectedActiveButtonColor] = useAtom(selectedActiveButtonColorAtom);
    const [karmaSpent, setKarmaSpent] = useState({                                                              // this handles the karma spent on attributes to avoid duplicating karma during attribute point adjustments
        bod: [],
        agi: [],
        rea: [],
        str: [],
        wil: [],
        log: [],
        int: [],
        cha: [],
        edg: [],
        mag: [],
        res: []
    });

    const handleAttributePoints = (name, value, attributeName) => {
        console.log(attributeName)
        const adjustPointsName = `adjustPoints${attributeName.charAt(0).toUpperCase()}${attributeName.slice(1)}`//
        const attribPointsName = `attribPoints${attributeName.charAt(0).toUpperCase()}${attributeName.slice(1)}`//
        const karmaPointsName = `karmaPoints${attributeName.charAt(0).toUpperCase()}${attributeName.slice(1)}`  //
        const maxAttributeValue = max[chosenMetatype.race][`max${attributeName}`];                              //

        if ((attributePointsBase[name] === 0 && value === -1) ||                                                    // Avoid going below zero
            (name === 'adjustment' && attributePointsBase[name] === attributePointsBase.maxAdjust && value === 1) ||    // Avoid going above Ajustment Point max
            (name === 'adjustment' && attributes[adjustPointsName] === 0 && value === 1) ||                     // Avoid going below zero for Adjustment Points
            (name === 'attribute' && attributePointsBase[name] === attributePointsBase.maxAttrib && value === 1) ||     // Avoid going above Attribute Point max
            (name === 'attribute' && attributes[attribPointsName] === 0 && value === 1) ||                      // Avoid going below zero for Attribute Points
            (attributes[attributeName] === 1 && value === 1) ||
            (attributes[attributeName] === maxAttributeValue && value === -1) ||
            (name === 'karma' && karma - ((attributes[attributeName] + 1) * 5) < 0 && value === -1) ||          // Avoid going above maximum Karma
            (name === 'karma' && attributes[karmaPointsName] === 0 && value === 1)) {                           // Avoid going below zero for Karma Points
            console.log('name: ', name, '; value', value, '; attributeName: ', attributeName)
            return;
        }
        if(name !== 'karma') {
            setAttributePoints({
                type: 'UPDATE', 
                payload: {
                    ...attributePointsBase,
                    [name]: attributePointsBase[name] + value
            }});
            setAttributes(prevAttributes => ({
                ...prevAttributes,
                [attributeName]: attributes[attributeName] - value,
                [name === 'adjustment' ? adjustPointsName : attribPointsName]: attributes[name === 'adjustment' ? adjustPointsName : attribPointsName] - value
            }));
        }
        else {
            setAttributes(prevAttributes => ({
                ...prevAttributes,
                [attributeName]: attributes[attributeName] - value,
                [karmaPointsName]: attributes[karmaPointsName] - value
            }));
            if(value === -1) {
                setKarmaSpent(prevKarmaSpent => ({
                    ...prevKarmaSpent,
                    [attributeName]: [...prevKarmaSpent[attributeName], ((attributes[attributeName] + 1) * 5)]
                }))
                setKarma(karma - ((attributes[attributeName] + 1) * 5))
            }
            else {
                const lastKarmaSpent = karmaSpent[attributeName].length > 0 ? karmaSpent[attributeName][karmaSpent[attributeName].length - 1] : 0;

                setKarmaSpent(prevKarmaSpent => {
                    const updatedAttributeArray = [...prevKarmaSpent[attributeName]];
                    if (updatedAttributeArray.length > 0) {
                        updatedAttributeArray.pop();
                    }
                    return {
                        ...prevKarmaSpent,
                        [attributeName]: updatedAttributeArray
                    };
                });

                setKarma(karma + lastKarmaSpent)
            }
        }

        if(attributeName === 'log') {
            setKnowledgePoints({ type: 'RESET' });
        }
    }

    const [padding, setPadding] = useState(0);
    useEffect(() => {
        const updatePadding = () => {
            const scrollbarWidth = getScrollbarWidth();
            const zoomLevel = window.outerWidth / document.documentElement.clientWidth;
            const adjustedPadding = scrollbarWidth / zoomLevel;
            setPadding(adjustedPadding);
        };
        // Initial setting of padding
        updatePadding();
        // Add event listener to update padding on window resize (zooming triggers resize)
        window.addEventListener('resize', updatePadding);
        // Cleanup - remove the event listener when component is unmounted
        return () => {
            window.removeEventListener('resize', updatePadding);
        };
    }, []);

    const attributeRows = [
        {
            name: 'Body',
            attrName: 'bod',
            adjust: attributes.adjustPointsBod,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsBod,
            karma: attributes.karmaPointsBod,
            cost: (attributes['bod'] + 1) * 5,
            value: attributes.bod,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxbod : 0
        },
        {
            name: 'Agility',
            attrName: 'agi',
            adjust: attributes.adjustPointsAgi,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsAgi,
            karma: attributes.karmaPointsAgi,
            cost: (attributes['agi'] + 1) * 5,
            value: attributes.agi,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxagi : 0
        },
        {
            name: 'Reaction',
            attrName: 'rea',
            adjust: attributes.adjustPointsRea,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsRea,
            karma: attributes.karmaPointsRea,
            cost: (attributes['rea'] + 1) * 5,
            value: attributes.rea,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxrea : 0
        },
        {
            name: 'Strength',
            attrName: 'str',
            adjust: attributes.adjustPointsStr,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsStr,
            karma: attributes.karmaPointsStr,
            cost: (attributes['str'] + 1) * 5,
            value: attributes.str,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxstr : 0
        },
        {
            name: 'Willpower',
            attrName: 'wil',
            adjust: attributes.adjustPointsWil,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsWil,
            karma: attributes.karmaPointsWil,
            cost: (attributes['wil'] + 1) * 5,
            value: attributes.wil,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxwil : 0
        },
        {
            name: 'Logic',
            attrName: 'log',
            adjust: attributes.adjustPointsLog,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsLog,
            karma: attributes.karmaPointsLog,
            cost: (attributes['log'] + 1) * 5,
            value: attributes.log,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxlog : 0
        },
        {
            name: 'Intuition',
            attrName: 'int',
            adjust: attributes.adjustPointsInt,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsInt,
            karma: attributes.karmaPointsInt,
            cost: (attributes['int'] + 1) * 5,
            value: attributes.int,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxint : 0
        },
        {
            name: 'Charisma',
            attrName: 'cha',
            adjust: attributes.adjustPointsCha,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsCha,
            karma: attributes.karmaPointsCha,
            cost: (attributes['cha'] + 1) * 5,
            value: attributes.cha,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxcha : 0
        },
        {
            name: 'Edge',
            attrName: 'edg',
            adjust: attributes.adjustPointsEdg,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsEdg,
            karma: attributes.karmaPointsEdg,
            cost: (attributes['edg'] + 1) * 5,
            value: attributes.edg,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxedg : 0
        },
        {
            name: 'Magic',
            attrName: 'mag',
            adjust: attributes.adjustPointsMag,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsMag,
            karma: attributes.karmaPointsMag,
            cost: (attributes['mag'] + 1) * 5,
            value: 0,
            max: null
        },
        {
            name: 'Resonance',
            attrName: 'res',
            adjust: attributes.adjustPointsRes,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsRes,
            karma: attributes.karmaPointsRes,
            cost: (attributes['res'] + 1) * 5,
            value: 0,
            max: null
        },
    ]

    const rows = attributeRows.map((attributeRows, index, array) => {
        const offset = prioritySelections.magic === 4 ? 3 : 1;
        const isLastItem = index === array.length - offset;

        if (
            (attributeRows.name === 'Magic' || attributeRows.name === 'Resonance') &&
            prioritySelections.magic === 4
        ) {
            return null
        }

        return (
            <div className={`grid grid-cols-10 gap-0.5 w-full ${buttonColor} ${isLastItem ? 'rounded-bl-md' : ''} ${isLastItem ? '' : 'border-b'} ${secondaryBackgroundBorder}`}>
                <div className={`text-center h-full px-4 col-span-2 flex items-center`}>
                    <div className={`flex text-left items-center justify-start font-semibold`} style={{fontSize: 16}}>
                        {attributeRows.name}
                    </div>
                </div>
                <div className={`text-center h-full px-2 col-span-2`}>
                    {(attributeRows.max > 6 || attributeRows.name === 'Edge' || attributeRows.name === 'Magic' && prioritySelections.magic !== 4 || attributeRows.name === 'Resonance' && prioritySelections.magic !== 4) &&
                        <>
                            <div className='grid grid-cols-1 gap-0.5 py-1.5'>
                                <button onClick={e => attributeRows.handlePoints('adjustment', -1, attributeRows.attrName)} className={`flex flex-auto items-center justify-center rounded w-1/2 m-auto ${textColor} ${selectedButtonColor} ${selectedHoverButtonColor} ${selectedActiveButtonColor}`}>
                                    <span class="material-symbols-sharp">add_circle</span>
                                </button>
                                <div className={`flex text-center items-center justify-center font-semibold`} style={{fontSize: 16}}>
                                    {attributeRows.adjust}
                                </div>
                                <button onClick={e => attributeRows.handlePoints('adjustment', 1, attributeRows.attrName)} className={`flex flex-auto items-center justify-center rounded w-1/2 m-auto ${textColor} ${selectedButtonColor} ${selectedHoverButtonColor} ${selectedActiveButtonColor}`}>
                                    <span class="material-symbols-sharp">do_not_disturb_on</span>
                                </button>
                            </div>
                        </>
                    }
                </div>
                <div className={`text-center h-full px-2 col-span-2`}>
                    {(attributeRows.name === 'Magic' && prioritySelections.magic !== 4 || attributeRows.name === 'Resonance' && prioritySelections.magic !== 4 || attributeRows.name !== 'Magic' && attributeRows.name !== 'Resonance') &&
                        <>
                            <div className='grid grid-cols-1 gap-0.5 py-1.5'>
                                <button onClick={e => attributeRows.handlePoints('attribute', -1, attributeRows.attrName)} className={`flex flex-auto items-center justify-center rounded w-1/2 m-auto ${textColor} ${selectedButtonColor} ${selectedHoverButtonColor} ${selectedActiveButtonColor}`}>
                                    <span class="material-symbols-sharp">add_circle</span>
                                </button>
                                <div className={`flex text-center items-center justify-center font-semibold`} style={{fontSize: 16}}>
                                    {attributeRows.attr}
                                </div>
                                <button onClick={e => attributeRows.handlePoints('attribute', 1, attributeRows.attrName)} className={`flex flex-auto items-center justify-center rounded w-1/2 m-auto ${textColor} ${selectedButtonColor} ${selectedHoverButtonColor} ${selectedActiveButtonColor}`}>
                                    <span class="material-symbols-sharp">do_not_disturb_on</span>
                                </button>
                            </div>
                        </>
                    }
                </div>
                <div className={`text-center h-full px-2 col-span-2`}>
                    {(attributeRows.name === 'Magic' && prioritySelections.magic !== 4 || attributeRows.name === 'Resonance' && prioritySelections.magic !== 4 || attributeRows.name !== 'Magic' && attributeRows.name !== 'Resonance') &&
                        <>
                            <div className='grid grid-cols-1 gap-0.5 py-1.5'>
                                <button onClick={e => attributeRows.handlePoints('karma', -1, attributeRows.attrName)} className={`flex flex-auto items-center justify-center rounded w-1/2 m-auto ${textColor} ${selectedButtonColor} ${selectedHoverButtonColor} ${selectedActiveButtonColor}`}>
                                    <span class="material-symbols-sharp">add_circle</span>
                                </button>
                                <div className={`flex text-center items-center justify-center font-semibold`} style={{fontSize: 16}}>
                                    {attributeRows.karma}/{attributeRows.cost}
                                </div>
                                <button onClick={e => attributeRows.handlePoints('karma', 1, attributeRows.attrName)} className={`flex flex-auto items-center justify-center rounded w-1/2 m-auto ${textColor} ${selectedButtonColor} ${selectedHoverButtonColor} ${selectedActiveButtonColor}`}>
                                    <span class="material-symbols-sharp">do_not_disturb_on</span>
                                </button>
                            </div>
                        </>
                    }
                </div>
                <div className={`text-center h-full px-4 col-span-2 flex items-center w-full`}>
                    <div className={`flex text-right justify-end font-semibold w-full`} style={{fontSize: 16}}>
                        {(attributeRows.name === 'Magic' && prioritySelections.magic !== 4 || attributeRows.name === 'Resonance' && prioritySelections.magic !== 4 || attributeRows.name !== 'Magic' && attributeRows.name !== 'Resonance') ? `${attributeRows.value}/${attributeRows.max}` : 0}
                    </div>
                </div>
            </div>
        );
    })

    return (
        <>
            <div className={`h-[calc(100vh-76px)] z-0 max-w-md mx-auto shadow-md md:max-w-2xl ${primaryBackgroundEnd} ${primaryBackgroundStart} bg-gradient-to-t`}>
                <div className='px-4 py-2'>
                    <div className={`grid grid-cols-1 shadow-md`}>
                        <div className={`grid grid-cols-5 gap-0.5 border-b-2 rounded-t-md ${secondaryBackgroundBorder} ${secondaryHeader} ${textColor} font-semibold`} style={{ paddingRight: `${padding}px`}}>
                            <div className='flex items-center justify-start flex-wrap text-left px-4 py-2.5 text-sm sm:text-base'>
                                Name
                            </div>
                            <div className='flex items-center justify-center flex-wrap text-center py-2.5 text-sm sm:text-base'>
                                Adjustment
                            </div>
                            <div className='flex items-center justify-center flex-wrap text-center py-2.5 text-sm sm:text-base'>
                                Attribute
                            </div>
                            <div className='flex items-center justify-center flex-wrap text-center py-2.5 text-sm sm:text-base'>
                                Karma/Cost
                            </div>
                            <div className='flex items-center justify-end flex-wrap text-right px-4 py-2.5 text-sm sm:text-base'>
                                Value/Max
                            </div>
                        </div>
                        <div id="scrollContainer" className={`flex items-center justify-between flex-wrap overflow-auto rounded-b-md scroll ${secondaryBackground}`} style={{ maxHeight: 'calc(100vh - 198px)' }}>
                            {rows}
                        </div>
                    </div>
                </div>
                <div className='px-4 py-2'>
                    <div className={`grid grid-cols-3 rounded-md ${secondaryHeader} ${textColor} font-semibold shadow-md`}>
                        <div className='flex items-center justify-between flex-wrap px-4 py-2.5'>
                            Karma: {karma}
                        </div>
                        <div className='flex items-center justify-between flex-wrap px-4 py-2.5'>
                            Attribute: {attributePointsBase.attribute}
                        </div>
                        <div className='flex items-center justify-between flex-wrap px-4 py-2.5'>
                            Adjustment: {attributePointsBase.adjustment}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function getScrollbarWidth() {
    // Create a temporary div element
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.msOverflowStyle = 'scrollbar'; // needed for Edge and IE 

    document.body.appendChild(outer);

    const widthNoScroll = outer.offsetWidth;

    // Make the temporary div scrollable
    outer.style.overflow = 'scroll';

    // Add inner div
    const inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);

    const widthWithScroll = inner.offsetWidth;

    // Remove the temporary divs from the DOM
    outer.parentNode.removeChild(outer);

    // Return the difference between the widths
    return widthNoScroll - widthWithScroll;
}