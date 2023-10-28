import React, { useState } from 'react';
import { useAtom } from 'jotai';
import {
    karma as KarmaAtom,
    priorities as prioritiesAtom,
    metatype as metatypeAtom,
    attributes as attributesAtom,
    attributePoints as attributePointsAtom,
    secondaryHeader as secondaryHeaderAtom,
    primaryBackgroundStart as primaryBackgroundStartAtom,
    primaryBackgroundEnd as primaryBackgroundEndAtom,
    secondaryBackgroundBorder as secondaryBackgroundBorderAtom,
    textColor as textColorAtom,
    buttonColor as buttonColorAtom,
    selectedButtonColor as selectedButtonColorAtom,
    selectedHoverButtonColor as selectedHoverButtonColorAtom,
    selectedActiveButtonColor as selectedActiveButtonColorAtom,
    text
} from '../atoms.js';
import max from '../json/metatype_max_attrib.json';
import { fontGrid } from '@mui/material/styles/cssUtils.js';

export default function Abilities() {

    const [karma, setKarma] = useAtom(KarmaAtom);
    const [prioritySelections, setPrioritySelections] = useAtom(prioritiesAtom);
    const [chosenMetatype, setChosenMetatype] = useAtom(metatypeAtom);
    const [attributes, setAttributes] = useAtom(attributesAtom);
    const [attributePoints, setAttributePoints] = useAtom(attributePointsAtom);
    const [secondaryHeader, setSecondaryHeader] = useAtom(secondaryHeaderAtom);
    const [primaryBackgroundStart, setPrimaryBackgroundStart] = useAtom(primaryBackgroundStartAtom);
    const [primaryBackgroundEnd, setPrimaryBackgroundEnd] = useAtom(primaryBackgroundEndAtom);
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

        if ((attributePoints[name] === 0 && value === -1) ||                                                    // Avoid going below zero
            (name === 'adjustment' && attributePoints[name] === attributePoints.maxAdjust && value === 1) ||    // Avoid going above Ajustment Point max
            (name === 'adjustment' && attributes[adjustPointsName] === 0 && value === 1) ||                     // Avoid going below zero for Adjustment Points
            (name === 'attribute' && attributePoints[name] === attributePoints.maxAttrib && value === 1) ||     // Avoid going above Attribute Point max
            (name === 'attribute' && attributes[attribPointsName] === 0 && value === 1) ||                      // Avoid going below zero for Attribute Points
            (attributes[attributeName] === 1 && value === 1) ||
            (attributes[attributeName] === maxAttributeValue && value === -1) ||
            (name === 'karma' && karma - ((attributes[attributeName] + 1) * 5) < 0 && value === -1) ||          // Avoid going above maximum Karma
            (name === 'karma' && attributes[karmaPointsName] === 0 && value === 1)) {                           // Avoid going below zero for Karma Points
            console.log('name: ', name, '; value', value, '; attributeName: ', attributeName)
            return;
        }
        if(name !== 'karma') {
            setAttributePoints(prevPoints => ({
                ...prevPoints,
                [name]: (attributePoints[name] + value)
            }))
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
    }

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
            <div className={`grid grid-cols-5 gap-1.5 ${buttonColor} ${isLastItem ? 'rounded-b-md' : ''} ${isLastItem ? '' : 'border-b'} ${secondaryBackgroundBorder}`}>
                <div className={`text-center h-full py-3 px-2`}>
                    <div className={`flex text-center items-center justify-center font-semibold`} style={{fontSize: 16}}>
                        {attributeRows.name}
                    </div>
                </div>
                <div className={`text-center h-full py-3 px-2`}>
                    {(attributeRows.max > 6 || attributeRows.name === 'Edge' || attributeRows.name === 'Magic' && prioritySelections.magic !== 4 || attributeRows.name === 'Resonance' && prioritySelections.magic !== 4) &&
                        <>
                            <div className='grid grid-cols-3 gap-0.5'>
                                <button onClick={e => attributeRows.handlePoints('adjustment', 1, attributeRows.attrName)} className={`flex flex-auto items-center justify-center rounded-md ${textColor} ${selectedButtonColor} ${selectedHoverButtonColor} ${selectedActiveButtonColor}`}>
                                    <span class="material-symbols-sharp">do_not_disturb_on</span>
                                </button>
                                <div className={`flex text-center items-center justify-center font-semibold`} style={{fontSize: 16}}>
                                    {attributeRows.adjust}
                                </div>
                                <button onClick={e => attributeRows.handlePoints('adjustment', -1, attributeRows.attrName)} className={`flex flex-auto items-center justify-center rounded-md ${textColor} ${selectedButtonColor} ${selectedHoverButtonColor} ${selectedActiveButtonColor}`}>
                                    <span class="material-symbols-sharp">add_circle</span>
                                </button>
                            </div>
                        </>
                    }
                </div>
                <div className={`text-center h-full py-3 px-2`}>
                    {(attributeRows.name === 'Magic' && prioritySelections.magic !== 4 || attributeRows.name === 'Resonance' && prioritySelections.magic !== 4 || attributeRows.name !== 'Magic' && attributeRows.name !== 'Resonance') &&
                        <>
                            <div className='grid grid-cols-3 gap-0.5'>
                                <button onClick={e => attributeRows.handlePoints('attribute', 1, attributeRows.attrName)} className={`flex flex-auto items-center justify-center rounded-md ${textColor} ${selectedButtonColor} ${selectedHoverButtonColor} ${selectedActiveButtonColor}`}>
                                    <span class="material-symbols-sharp">do_not_disturb_on</span>
                                </button>
                                <div className={`flex text-center items-center justify-center font-semibold`} style={{fontSize: 16}}>
                                    {attributeRows.attr}
                                </div>
                                <button onClick={e => attributeRows.handlePoints('attribute', -1, attributeRows.attrName)} className={`flex flex-auto items-center justify-center rounded-md ${textColor} ${selectedButtonColor} ${selectedHoverButtonColor} ${selectedActiveButtonColor}`}>
                                    <span class="material-symbols-sharp">add_circle</span>
                                </button>
                            </div>
                        </>
                    }
                </div>
                <div className={`text-center h-full py-3 px-2`}>
                    {(attributeRows.name === 'Magic' && prioritySelections.magic !== 4 || attributeRows.name === 'Resonance' && prioritySelections.magic !== 4 || attributeRows.name !== 'Magic' && attributeRows.name !== 'Resonance') &&
                        <>
                            <div className='grid grid-cols-3 gap-0.5'>
                                <button onClick={e => attributeRows.handlePoints('karma', 1, attributeRows.attrName)} className={`flex flex-auto items-center justify-center rounded-md ${textColor} ${selectedButtonColor} ${selectedHoverButtonColor} ${selectedActiveButtonColor}`}>
                                    <span class="material-symbols-sharp">do_not_disturb_on</span>
                                </button>
                                <div className={`flex text-center items-center justify-center font-semibold`} style={{fontSize: 16}}>
                                    {attributeRows.karma}/{attributeRows.cost}
                                </div>
                                <button onClick={e => attributeRows.handlePoints('karma', -1, attributeRows.attrName)} className={`flex flex-auto items-center justify-center rounded-md ${textColor} ${selectedButtonColor} ${selectedHoverButtonColor} ${selectedActiveButtonColor}`}>
                                    <span class="material-symbols-sharp">add_circle</span>
                                </button>
                            </div>
                        </>
                    }
                </div>
                <div className={`text-center h-full py-3 px-2`}>
                    <div className={`flex text-center items-center justify-center font-semibold`} style={{fontSize: 16}}>
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
                        <div className={`grid grid-cols-5 gap-0.5 border-b-2 rounded-t-md ${secondaryBackgroundBorder} ${secondaryHeader} ${textColor} font-semibold`}>
                            <div className='flex items-center justify-center flex-wrap text-center py-2.5'>
                                Name
                            </div>
                            <div className='flex items-center justify-center flex-wrap text-center py-2.5'>
                                Adjustment
                            </div>
                            <div className='flex items-center justify-center flex-wrap text-center py-2.5'>
                                Attribute
                            </div>
                            <div className='flex items-center justify-center flex-wrap text-center py-2.5'>
                                Karma/Cost
                            </div>
                            <div className='flex items-center justify-center flex-wrap text-center py-2.5'>
                                Value/Max
                            </div>
                        </div>
                        {rows}
                    </div>
                </div>
                <div className='px-4 py-2'>
                    <div className={`grid grid-cols-3 rounded-md ${secondaryHeader} ${textColor} font-semibold shadow-md`}>
                        <div className='flex items-center justify-between flex-wrap px-4 py-2.5'>
                            Karma: {karma}
                        </div>
                        <div className='flex items-center justify-between flex-wrap px-4 py-2.5'>
                            Attribute: {attributePoints.attribute}
                        </div>
                        <div className='flex items-center justify-between flex-wrap px-4 py-2.5'>
                            Adjustment: {attributePoints.adjustment}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}