import React, { useEffect } from 'react';
import {
    Grid,
    List,
    ListItem,
    ListSubheader,
    ListItemButton,
    ListDivider,
    Table,
    Button,
    ButtonGroup,
    IconButton,
    ListItemDecorator,
    Input,
} from '@mui/joy';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import max from '../json/metatype_max_attrib.json';
import { textAlign } from '@mui/system';

const header = [
    'Attribute Name',
    'Adjustment Points',
    'Attribute Points',
    'Karma Points',
    'Karma Cost',
    'Value',
    'Max Value'
]
const headerWidths = {
    'Attribute Name' : '15.5%',
    'Adjustment Points' : '18.5%',
    'Attribute Points' : '18.5%',
    'Karma Points' : '18.5%',
    'Karma Cost' : '12.5%',
    'Value' : '5%',
    'Max Value' : '11.5%'
}

export default function Abilities({ priorityButtons, attributes, handleAttributePoints, chosenMetatype, karma, attributePoints }) {

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
    const headerCells = header.map((header) => {
        return (
            <ListItem
                sx={{
                    width: headerWidths[header],
                    height: '100%',
                    fontFamily: 'Segoe UI',
                    color: '#ffffff',
                    fontSize: '.6vw',
                    justifyContent: 'center',
                }}
            >
                {header}
            </ListItem>
        );
    })

    const rows = attributeRows.map((attributeRows) => {
        if (
            (attributeRows.name === 'Magic' || attributeRows.name === 'Resonance') &&
            priorityButtons.magic === 4
        ) {
            return null
        }

        return (
            <div className='grid grid-cols-5 gap-0.5'>
                <div className='text-center h-full py-2'>
                    <div className='flex text-center items-center justify-center font-bold' style={{fontSize: 16}}>
                        {attributeRows.name}
                    </div>
                </div>
                <div className='text-center h-full py-2'>
                    {(attributeRows.max > 6 || attributeRows.name === 'Edge' || attributeRows.name === 'Magic' && priorityButtons.magic !== 4 || attributeRows.name === 'Resonance' && priorityButtons.magic !== 4) &&
                        <>
                            <div className='grid grid-cols-3 gap-0.5'>
                                <button onClick={e => attributeRows.handlePoints('adjustment', 1, attributeRows.attrName)} className="flex flex-auto items-end justify-end hover:text-white">
                                    <span class="material-symbols-sharp">do_not_disturb_on</span>
                                </button>
                                <div className='flex text-center items-center justify-center font-bold' style={{fontSize: 16}}>
                                    {attributeRows.adjust}
                                </div>
                                <button onClick={e => attributeRows.handlePoints('adjustment', -1, attributeRows.attrName)} className="flex flex-auto items-start justify-start hover:text-white">
                                    <span class="material-symbols-sharp">add_circle</span>
                                </button>
                            </div>
                        </>
                    }
                </div>
                <div className='text-center h-full py-2'>
                    {(attributeRows.name === 'Magic' && priorityButtons.magic !== 4 || attributeRows.name === 'Resonance' && priorityButtons.magic !== 4 || attributeRows.name !== 'Magic' && attributeRows.name !== 'Resonance') &&
                        <>
                            <div className='grid grid-cols-3 gap-0.5'>
                                <button onClick={e => attributeRows.handlePoints('attribute', 1, attributeRows.attrName)} className="flex flex-auto items-end justify-end hover:text-white">
                                    <span class="material-symbols-sharp">do_not_disturb_on</span>
                                </button>
                                <div className='flex text-center items-center justify-center font-bold' style={{fontSize: 16}}>
                                    {attributeRows.attr}
                                </div>
                                <button onClick={e => attributeRows.handlePoints('attribute', -1, attributeRows.attrName)} className="flex flex-auto items-start justify-start hover:text-white">
                                    <span class="material-symbols-sharp">add_circle</span>
                                </button>
                            </div>
                        </>
                    }
                </div>
                <div className='text-center h-full py-2'>
                    {(attributeRows.name === 'Magic' && priorityButtons.magic !== 4 || attributeRows.name === 'Resonance' && priorityButtons.magic !== 4 || attributeRows.name !== 'Magic' && attributeRows.name !== 'Resonance') &&
                        <>
                            <div className='grid grid-cols-3 gap-0.5'>
                                <button onClick={e => attributeRows.handlePoints('karma', 1, attributeRows.attrName)} className="flex flex-auto items-end justify-end hover:text-white">
                                    <span class="material-symbols-sharp">do_not_disturb_on</span>
                                </button>
                                <div className='flex text-center items-center justify-center font-bold' style={{fontSize: 16}}>
                                    {attributeRows.karma}/{attributeRows.cost}
                                </div>
                                <button onClick={e => attributeRows.handlePoints('karma', -1, attributeRows.attrName)} className="flex flex-auto items-start justify-start hover:text-white">
                                    <span class="material-symbols-sharp">add_circle</span>
                                </button>
                            </div>
                        </>
                    }
                </div>
                <div className='text-center h-full py-2'>
                    <div className='flex text-center items-center justify-center font-bold' style={{fontSize: 16}}>
                        {(attributeRows.name === 'Magic' && priorityButtons.magic !== 4 || attributeRows.name === 'Resonance' && priorityButtons.magic !== 4 || attributeRows.name !== 'Magic' && attributeRows.name !== 'Resonance') ? `${attributeRows.value}/${attributeRows.max}` : 0}
                    </div>
                </div>
            </div>
        );
    })

    return (
        <>
            <div className='h-[calc(100vh-74px)] z-0 max-w-md mx-auto shadow-md md:max-w-2xl bg-gray-400'>
                <div className='px-4 py-2'>
                    <div className='grid grid-cols-1 bg-gray-500'>
                        <div className='grid grid-cols-5 gap-0.5 border-b border-black'>
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
                    <div className='grid grid-cols-1 bg-gray-500'>
                        <div className='flex items-center justify-between flex-wrap px-4 py-2.5'>
                            Help with Magic
                        </div>
                        <div className='h-[calc(100vh-695px)] bg-gray-600 items-center p-4'>
                            <p>The two numbers under the magic column are a shorthand for the points you get based on your magic archetype choice.</p>

                            <p>For example, 5/4 would translate into: </p>
                            <ul>
                                <li>
                                    Aspected Magician: 5 Magic Points
                                </li>
                                <li>
                                    Magician: 4 Magic Points
                                </li>
                                <li>
                                    Mystic Adept: 4 Magic Points
                                </li>
                                <li>
                                    Adept: 4 Magic Points
                                </li>
                                <li>
                                    Technomancer: 4 Resonance Points
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='px-4 py-2'>
                    <div className='grid grid-cols-3 bg-gray-500'>
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