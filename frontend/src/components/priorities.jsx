import React from 'react';
import { useAtom } from 'jotai';
import {
    priorities as prioritiesAtom,
    settings as settingsAtom,
    attributePoints as attributePointsAtom,
    skillPoints as skillPointsAtom,
    primaryBackgroundEnd as primaryBackgroundEndAtom,
    primaryBackgroundStart as primaryBackgroundStartAtom,
    secondaryBackground as secondaryBackgroundAtom,
    secondaryBackgroundBorder as secondaryBackgroundBorderAtom,
    secondaryHeader as secondaryHeaderAtom,
    buttonColor as buttonColorAtom,
    hoverButtonColor as hoverButtonColorAtom,
    activeButtonColor as activeButtonColorAtom,
    selectedButtonColor as selectedButtonColorAtom,
    selectedHoverButtonColor as selectedHoverButtonColorAtom,
    selectedActiveButtonColor as selectedActiveButtonColorAtom,
    textColor as textColorAtom,

} from '../atoms.js';

export default function Priorities() {
    
    const [prioritySelections, setPrioritySelections] = useAtom(prioritiesAtom);
    const [settings, setSettings] = useAtom(settingsAtom);
    const [attributePoints, setAttributePoints] = useAtom(attributePointsAtom);
    const [skillPoints, setSkillPoints] = useAtom(skillPointsAtom);
    const [primaryBackgroundEnd, setPrimaryBackground] = useAtom(primaryBackgroundEndAtom);
    const [primaryBackgroundStart, setPrimaryBackgroundStart] = useAtom(primaryBackgroundStartAtom);
    const [secondaryBackground, setSecondaryBackground] = useAtom(secondaryBackgroundAtom);
    const [secondaryBackgroundBorder, setSecondaryBackgroundBorder] = useAtom(secondaryBackgroundBorderAtom);
    const [secondaryHeader, setSecondaryHeader] = useAtom(secondaryHeaderAtom);
    const [buttonColor, setButtonColor] = useAtom(buttonColorAtom);
    const [hoverButtonColor, setHoverButtonColor] = useAtom(hoverButtonColorAtom);
    const [activeButtonColor, setActiveButtonColor] = useAtom(activeButtonColorAtom);
    const [selectedButtonColor, setSelectedButtonColor] = useAtom(selectedButtonColorAtom);
    const [selectedHoverButtonColor, setSelectedHoverButtonColor] = useAtom(selectedHoverButtonColorAtom);
    const [selectedActiveButtonColor, setSelectedActiveButtonColor] = useAtom(selectedActiveButtonColorAtom);
    const [textColor, setTextColor] = useAtom(textColorAtom);
    const handlePriorityButtons = (name, value) => {
        const parsedValue = parseInt(value);
    
        if (settings.creatorState === 0 && settings.powerState === 1) {
            const buttons = ['metatype', 'attribute', 'skill', 'magic', 'resource'];
            buttons.forEach(button => {
                if (button !== name && prioritySelections[button] === parsedValue) {
                    setPrioritySelections(prevButtons => ({
                        ...prevButtons,
                        [button]: prioritySelections[name],
                    }));
                }
            });
        }
        setPrioritySelections(prevButtons => ({
            ...prevButtons,
            [name]: parsedValue,
        }));
        setAttributePoints({ type: 'RESET' });
        setSkillPoints({ type: 'RESET' });
    }

    // This section handles magic category warning text to simplify amount of code in priorityRows
    const AwakenedOrEmerged = [
        [
            'Magician, Mystic Adept, Adept: ',
            '4 Magic',
            'Aspected Magician: ',
            '5 Magic',
            'Technomancer: ',
            '4 Resonance'
        ],
        [
            'Magician, Mystic Adept, Adept: ',
            '3 Magic',
            'Aspected Magician: ',
            '4 Magic',
            'Technomancer: ',
            '3 Resonance'
        ],
        [
            'Magician, Mystic Adept, Adept: ',
            '2 Magic',
            'Aspected Magician: ',
            '3 Magic',
            'Technomancer: ',
            '2 Resonance'
        ],
        [
            'Magician, Mystic Adept, Adept: ',
            '1 Magic',
            'Aspected Magician: ',
            '2 Magic',
            'Technomancer: ',
            '1 Resonance'
        ],
        [
            '',
            'No Magic or Resonance',
            '',
            '',
            '',
            ''
        ]
    ]
    const metatypeRestrictions = [
        { restriction: 'Elf', indexes: [0] },
        { restriction: 'Dalakitnon', indexes: [0] },
        { restriction: 'Dryad', indexes: [0] },
        { restriction: 'Nocturna', indexes: [0] },
        { restriction: 'Wakyambi', indexes: [0, 4] },
        { restriction: 'Xaipiri Thëpë', indexes: [0] },
        { restriction: 'Human', indexes: [0, 1] },
        { restriction: 'Nartaki', indexes: [0, 1, 4] },
        { restriction: 'Valkyrie', indexes: [0, 4] },
        { restriction: 'No restrictions', indexes: [2, 3] },
        { restriction: 'Menehune', indexes: [4] },
        { restriction: 'Satyr', indexes: [4] },
        { restriction: 'Fomorian', indexes: [4] },
        { restriction: 'Centaurs', indexes: [4] },
        { restriction: 'Merrow', indexes: [4] },
        { restriction: 'Naga', indexes: [4] },
        { restriction: 'Pixie', indexes: [4] },
        { restriction: 'Sasquatch', indexes: [4] }
    ];
    const rowValues = [
        [13, 24, 32, '5/4', '¥450,000'],
        [11, 16, 24, '4/3', '¥275,000'],
        [9, 12, 20, '3/2', '¥150,000'],
        [4, 8, 16, '2/1', '¥50,000'],
        [1, 2, 10, '0/0', '¥8,000']
    ]

    const rows = rowValues.map((rowValues, index) =>  {  
        return (
            <>
                <div className='text-center h-full'>
                    <button onClick={() => handlePriorityButtons('metatype', index)} className={`w-full py-3 shadow-md focus:outline-none font-semibold
                        ${index === 4 ? 'rounded-bl-md' : ''}
                        ${prioritySelections.metatype === index ? selectedButtonColor : buttonColor} 
                        ${prioritySelections.metatype === index ? selectedHoverButtonColor : hoverButtonColor} 
                        ${prioritySelections.metatype === index ? selectedActiveButtonColor : activeButtonColor}
                        ${prioritySelections.metatype === index ? textColor : ''} 
                    `}>
                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'>
                            {rowValues[0]}
                        </div>
                    </button>
                </div>
                <div className='text-center h-full'>
                    <button onClick={() => handlePriorityButtons('attribute', index)} className={`w-full py-3 shadow-md focus:outline-none font-semibold
                        ${prioritySelections.attribute === index ? selectedButtonColor : buttonColor}
                        ${prioritySelections.attribute === index ? selectedHoverButtonColor : hoverButtonColor}
                        ${prioritySelections.attribute === index ? selectedActiveButtonColor : activeButtonColor}
                        ${prioritySelections.attribute === index ? textColor : ''} 
                    `}>
                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'>
                            {rowValues[1]}
                        </div>
                    </button>
                </div>
                <div className='text-center h-full'>
                    <button onClick={() => handlePriorityButtons('skill', index)} className={`w-full py-3 shadow-md focus:outline-none font-semibold
                        ${prioritySelections.skill === index ? selectedButtonColor : buttonColor}
                        ${prioritySelections.skill === index ? selectedHoverButtonColor : hoverButtonColor}
                        ${prioritySelections.skill === index ? selectedActiveButtonColor : activeButtonColor}
                        ${prioritySelections.skill === index ? textColor : ''}
                    `}>
                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'>
                            {rowValues[2]}
                        </div>
                    </button>
                </div>
                <div className='text-center h-full'>
                    <button onClick={() => handlePriorityButtons('magic', index)} className={`w-full py-3 shadow-md focus:outline-none font-semibold
                        ${prioritySelections.magic === index ? selectedButtonColor : buttonColor}
                        ${prioritySelections.magic === index ? selectedHoverButtonColor : hoverButtonColor}
                        ${prioritySelections.magic === index ? selectedActiveButtonColor : activeButtonColor}
                        ${prioritySelections.magic === index ? textColor : ''}
                    `}>
                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'>
                            {rowValues[3]}
                        </div>
                    </button>
                </div>
                <div className='text-center h-full'>
                    <button onClick={() => handlePriorityButtons('resource', index)} className={`w-full py-3 shadow-md focus:outline-none font-semibold
                        ${index === 4 ? 'rounded-br-md' : ''}
                        ${prioritySelections.resource === index ? selectedButtonColor : buttonColor}
                        ${prioritySelections.resource === index ? selectedHoverButtonColor : hoverButtonColor}
                        ${prioritySelections.resource === index ? selectedActiveButtonColor : activeButtonColor}
                        ${prioritySelections.resource === index ? textColor : ''}
                    `}>
                        <div className='flex items-center justify-center flex-wrap px-4 py-2.5'>
                            {rowValues[4]}
                        </div>
                    </button>
                </div>     
            </>    
        );
    });

    return (
        <>
            <div className={`h-[calc(100vh-76px)] z-0 max-w-md mx-auto shadow-md md:max-w-2xl bg-gradient-to-t ${primaryBackgroundStart} ${primaryBackgroundEnd}`}>
                <div className='px-4 py-2'>
                    <div className={`grid grid-cols-1 ${secondaryBackground} rounded-md`}>
                        <div className={`grid grid-cols-5 gap-0.5 ${secondaryHeader} rounded-t-md border-b-2 ${secondaryBackgroundBorder}`}>
                            <div className={`flex items-center justify-center flex-wrap px-4 py-2.5 ${textColor} font-semibold`}>
                                Metatype
                            </div>
                            <div className={`flex items-center justify-center flex-wrap px-4 py-2.5 ${textColor} font-semibold`}>
                                Attributes
                            </div>
                            <div className={`flex items-center justify-center flex-wrap px-4 py-2.5 ${textColor} font-semibold`}>
                                Skills
                            </div>
                            <div className={`flex items-center justify-center flex-wrap px-4 py-2.5 ${textColor} font-semibold`}>
                                Magic
                            </div>
                            <div className={`flex items-center justify-center flex-wrap px-4 py-2.5 ${textColor} font-semibold`}>
                                Resources
                            </div>
                        </div>
                        <div className='grid grid-cols-5 gap-x-0.5 gap-y-0.5 shadow-md'>
                            {rows}
                        </div>
                    </div>
                </div>
                <div className='px-4 py-2'>
                    <div className={`grid grid-cols-1 gap-0.5 ${secondaryHeader} rounded-md`}>
                        <div className={`flex items-center justify-between flex-wrap px-4 py-2.5 ${textColor} font-semibold`}>
                            How to Read Magic
                        </div>
                        <div className={`flex flex-wrap h-[calc(100vh-548px)] items-center justify-between px-4 py-2.5 rounded-b-md shadow-md ${secondaryBackground} ${textColor}`}>
                            <div className='w-full'>
                                <p className='text-lg mb-3 font-semibold'>The two numbers under the magic column are a shorthand for the points you get based on your magic archetype choice.</p>
                            </div>
                            
                            <div className='w-full'>
                                <p className='mb-2'>For example, 5/4 would translate into: </p>
                                <ul className='list-disc pl-5'>
                                    <li className='mb-1'>
                                        Aspected Magician: <span className='font-bold'>5 Magic Points</span>
                                    </li>
                                    <li className='mb-1'>
                                        Magician: <span className='font-bold'>4 Magic Points</span>
                                    </li>
                                    <li className='mb-1'>
                                        Mystic Adept: <span className='font-bold'>4 Magic Points</span>
                                    </li>
                                    <li className='mb-1'>
                                        Adept: <span className='font-bold'>4 Magic Points</span>
                                    </li>
                                    <li>
                                        Technomancer: <span className='font-bold'>4 Resonance Points</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}