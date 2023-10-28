import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import {
    karma as karmaAtom,
    priorities as prioritiesAtom,
    metatype as metatypeAtom,
    secondaryHeader as secondaryHeaderAtom,
    primaryBackgroundEnd as primaryBackgroundEndAtom,
    primaryBackgroundStart as primaryBackgroundStartAtom,
    secondaryBackground as secondaryBackgroundAtom,
    secondaryBackgroundBorder as secondaryBackgroundBorderAtom,
    selectedButtonColor as selectedButtonColorAtom,
    selectedHoverButtonColor as selectedHoverButtonColorAtom,
    selectedActiveButtonColor as selectedActiveButtonColorAtom,
    buttonColor as buttonColorAtom,
    hoverButtonColor as hoverButtonColorAtom,
    activeButtonColor as activeButtonColorAtom,
    textColor as textColorAtom,
    secondaryBackground,

} from '../atoms.js';

const metatypes = [
    [
        {metatypeName: 'Troll', karma: 0},
        {metatypeName: 'Cyclops', karma: 5},
        {metatypeName: 'Fomorian', karma: 10},
        {metatypeName: 'Giant', karma: 5},
        {metatypeName: 'Minotaur', karma: 5},

        {metatypeName: 'Ork', karma: 0},
        {metatypeName: 'Hobgoblin', karma: 5},
        {metatypeName: 'Ogre', karma: 5},
        {metatypeName: 'Oni', karma: 5},
        {metatypeName: 'Satyr', karma: 10},

        {metatypeName: 'Dwarf', karma: 0},
        {metatypeName: 'Duende', karma: 10},
        {metatypeName: 'Gnome', karma: 5},
        {metatypeName: 'Hanuman', karma: 5},
        {metatypeName: 'Koborokuru', karma: 5},
        {metatypeName: 'Menehune', karma: 5},

        {metatypeName: 'Centaur', karma: 15},
        {metatypeName: 'Merrow', karma: 15},
        {metatypeName: 'Naga', karma: 15},
        {metatypeName: 'Pixie', karma: 10},
        {metatypeName: 'Sasquatch', karma: 10},
    ],
    [
        {metatypeName: 'Troll', karma: 0},
        {metatypeName: 'Cyclops', karma: 5},
        {metatypeName: 'Fomorian', karma: 10},
        {metatypeName: 'Giant', karma: 5},
        {metatypeName: 'Minotaur', karma: 5},

        {metatypeName: 'Ork', karma: 0},
        {metatypeName: 'Hobgoblin', karma: 5},
        {metatypeName: 'Ogre', karma: 5},
        {metatypeName: 'Oni', karma: 5},
        {metatypeName: 'Satyr', karma: 10},

        {metatypeName: 'Dwarf', karma: 0},
        {metatypeName: 'Duende', karma: 10},
        {metatypeName: 'Gnome', karma: 5},
        {metatypeName: 'Hanuman', karma: 5},
        {metatypeName: 'Koborokuru', karma: 5},
        {metatypeName: 'Menehune', karma: 5},
        
        {metatypeName: 'Elf', karma: 0},
        {metatypeName: 'Dalakitnon', karma: 5},
        {metatypeName: 'Dryad', karma: 5},
        {metatypeName: 'Nocturna', karma: 5},
        {metatypeName: 'Wakyambi', karma: 10},
        {metatypeName: 'Xapiri Thepe', karma: 5},

        {metatypeName: 'Valkyrie', karma: 15},

        {metatypeName: 'Centaur', karma: 15},
        {metatypeName: 'Merrow', karma: 15},
        {metatypeName: 'Naga', karma: 15},
        {metatypeName: 'Pixie', karma: 10},
        {metatypeName: 'Sasquatch', karma: 10},
    ],
    [
        {metatypeName: 'Troll', karma: 0},
        {metatypeName: 'Cyclops', karma: 5},
        {metatypeName: 'Fomorian', karma: 10},
        {metatypeName: 'Giant', karma: 5},
        {metatypeName: 'Minotaur', karma: 5},

        {metatypeName: 'Ork', karma: 0},
        {metatypeName: 'Hobgoblin', karma: 5},
        {metatypeName: 'Ogre', karma: 5},
        {metatypeName: 'Oni', karma: 5},
        {metatypeName: 'Satyr', karma: 10},

        {metatypeName: 'Dwarf', karma: 0},
        {metatypeName: 'Duende', karma: 10},
        {metatypeName: 'Gnome', karma: 5},
        {metatypeName: 'Hanuman', karma: 5},
        {metatypeName: 'Koborokuru', karma: 5},
        {metatypeName: 'Menehune', karma: 5},
        
        {metatypeName: 'Elf', karma: 0},
        {metatypeName: 'Dalakitnon', karma: 5},
        {metatypeName: 'Dryad', karma: 5},
        {metatypeName: 'Nocturna', karma: 5},
        {metatypeName: 'Wakyambi', karma: 10},
        {metatypeName: 'Xapiri Thepe', karma: 5},

        {metatypeName: 'Human', karma: 0},
        {metatypeName: 'Nartaki', karma: 5},
        {metatypeName: 'Valkyrie', karma: 15},

        {metatypeName: 'Centaur', karma: 15},
        {metatypeName: 'Merrow', karma: 15},
        {metatypeName: 'Naga', karma: 15},
        {metatypeName: 'Pixie', karma: 10},
        {metatypeName: 'Sasquatch', karma: 10},
    ],
    [
        {metatypeName: 'Troll', karma: 0},
        {metatypeName: 'Cyclops', karma: 5},
        {metatypeName: 'Fomorian', karma: 10},
        {metatypeName: 'Giant', karma: 5},
        {metatypeName: 'Minotaur', karma: 5},

        {metatypeName: 'Ork', karma: 0},
        {metatypeName: 'Hobgoblin', karma: 5},
        {metatypeName: 'Ogre', karma: 5},
        {metatypeName: 'Oni', karma: 5},
        {metatypeName: 'Satyr', karma: 10},

        {metatypeName: 'Dwarf', karma: 0},
        {metatypeName: 'Duende', karma: 10},
        {metatypeName: 'Gnome', karma: 5},
        {metatypeName: 'Hanuman', karma: 5},
        {metatypeName: 'Koborokuru', karma: 5},
        {metatypeName: 'Menehune', karma: 5},
        
        {metatypeName: 'Elf', karma: 0},
        {metatypeName: 'Dalakitnon', karma: 5},
        {metatypeName: 'Dryad', karma: 5},
        {metatypeName: 'Nocturna', karma: 5},
        {metatypeName: 'Wakyambi', karma: 10},
        {metatypeName: 'Xapiri Thepe', karma: 5},

        {metatypeName: 'Human', karma: 0},
        {metatypeName: 'Nartaki', karma: 5},
        {metatypeName: 'Valkyrie', karma: 15},

        {metatypeName: 'Centaur', karma: 15},
        {metatypeName: 'Merrow', karma: 15},
        {metatypeName: 'Naga', karma: 15},
        {metatypeName: 'Pixie', karma: 10},
        {metatypeName: 'Sasquatch', karma: 10},
    ],
    [
        {metatypeName: 'Troll', karma: 0},
        {metatypeName: 'Cyclops', karma: 5},
        {metatypeName: 'Giant', karma: 5},
        {metatypeName: 'Minotaur', karma: 5},

        {metatypeName: 'Ork', karma: 0},
        {metatypeName: 'Hobgoblin', karma: 5},
        {metatypeName: 'Ogre', karma: 5},
        {metatypeName: 'Oni', karma: 5},

        {metatypeName: 'Dwarf', karma: 0},
        {metatypeName: 'Duende', karma: 10},
        {metatypeName: 'Gnome', karma: 5},
        {metatypeName: 'Hanuman', karma: 5},
        {metatypeName: 'Koborokuru', karma: 5},
        
        {metatypeName: 'Elf', karma: 0},
        {metatypeName: 'Dalakitnon', karma: 5},
        {metatypeName: 'Dryad', karma: 5},
        {metatypeName: 'Nocturna', karma: 5},
        {metatypeName: 'Xapiri Thepe', karma: 5},

        {metatypeName: 'Human', karma: 0},
    ],
]

export default function Metatype() {

    const [karma, setKarma] = useAtom(karmaAtom);
    const [prioritySelections, setPrioritySelections] = useAtom(prioritiesAtom);
    const [chosenMetatype, setChosenMetatype] = useAtom(metatypeAtom);
    const [secondaryHeader, setSecondaryHeader] = useAtom(secondaryHeaderAtom);
    const [primaryBackgroundEnd, setPrimaryBackgroundEnd] = useAtom(primaryBackgroundEndAtom);
    const [primaryBackgroundStart, setPrimaryBackgroundStart] = useAtom(primaryBackgroundStartAtom);
    const [secondaryBackground, setSecondaryBackground] = useAtom(secondaryBackgroundAtom);
    const [secondaryBackgroundBorder, setSecondaryBackgroundBorder] = useAtom(secondaryBackgroundBorderAtom);
    const [selectedButtonColor, setSelectedButtonColor] = useAtom(selectedButtonColorAtom);
    const [selectedHoverButtonColor, setSelectedHoverButtonColor] = useAtom(selectedHoverButtonColorAtom);
    const [selectedActiveButtonColor, setSelectedActiveButtonColor] = useAtom(selectedActiveButtonColorAtom);
    const [buttonColor, setButtonColor] = useAtom(buttonColorAtom);
    const [hoverButtonColor, setHoverButtonColor] = useAtom(hoverButtonColorAtom);
    const [activeButtonColor, setActiveButtonColor] = useAtom(activeButtonColorAtom);
    const [textColor, setTextColor] = useAtom(textColorAtom);

    const handleChosenMetatype = (value, karmaValue) => () => {
        setKarma((karma + chosenMetatype.cost) - karmaValue)
        setChosenMetatype(prevMetatype => ({
            ...prevMetatype,
            race: value,
            cost: karmaValue
        }))        
    }

    const [viewInfo, setViewInfo] = useState(false);
    const handleViewInfo = () => {
        setViewInfo(!viewInfo);
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

    const rows = metatypes[prioritySelections.metatype].map((metatypes, index, array) =>  {
        const isLastItem = index === array.length - 1;
        
        return (
            <div className='w-full grid grid-cols-12'>
                <button onClick={() => handleViewInfo()} className={`flex justify-center items-center w-full py-3 shadow-md focus:outline-none border-r-2 ${secondaryBackgroundBorder} font-semibold col-span-2
                    ${isLastItem ? '' : 'border-b'}
                    ${chosenMetatype.race === metatypes.metatypeName ? selectedButtonColor : buttonColor} 
                    ${chosenMetatype.race === metatypes.metatypeName ? selectedHoverButtonColor : hoverButtonColor} 
                    ${chosenMetatype.race === metatypes.metatypeName ? selectedActiveButtonColor : activeButtonColor}
                    ${chosenMetatype.race === metatypes.metatypeName ? textColor : ''}
                `}>
                    <span class="material-symbols-sharp">info</span>
                </button>
                <button onClick={handleChosenMetatype(metatypes.metatypeName, metatypes.karma)} className={`w-full py-3 shadow-md col-span-10 focus:outline-none ${secondaryBackgroundBorder} font-semibold
                ${isLastItem ? '' : 'border-b'}
                ${chosenMetatype.race === metatypes.metatypeName ? selectedButtonColor : buttonColor} 
                ${chosenMetatype.race === metatypes.metatypeName ? selectedHoverButtonColor : hoverButtonColor} 
                ${chosenMetatype.race === metatypes.metatypeName ? selectedActiveButtonColor : activeButtonColor}
                ${chosenMetatype.race === metatypes.metatypeName ? textColor : ''}
            `}>
                    <div className='grid grid-cols-2'>
                        <div className='text-left px-4'>
                            {metatypes.metatypeName}
                        </div>
                        <div className='flex justify-end items-center text-right px-4'>
                            {metatypes.karma}
                        </div>
                    </div>
                </button>        
            </div>
        );
    });

    return (
        <>
            <div className={`h-[calc(100vh-76px)] z-0 max-w-md mx-auto shadow-md md:max-w-2xl bg-gradient-to-t ${primaryBackgroundStart} ${primaryBackgroundEnd}`}>
                {viewInfo === false &&
                    <div className='px-4 py-2'>
                        <div className='grid grid-cols-1 shadow-md'>
                            <div className={`grid grid-cols-12 ${secondaryHeader} ${textColor} font-semibold border-b-2 ${secondaryBackgroundBorder} rounded-t-md`} style={{ paddingRight: `${padding}px`}}>
                                <div className={`flex items-center justify-center flex-wrap px-4 py-2.5 col-span-2 border-r-2 ${secondaryBackgroundBorder}`}>
                                    Info
                                </div>
                                <div className='grid grid-cols-2 col-span-10'>
                                    <div className='flex items-center justify-between flex-wrap px-4 py-2.5'>
                                        Metatype
                                    </div>
                                    <div className='flex justify-end items-center text-right px-4'>
                                        Karma Cost
                                    </div>
                                </div>
                            </div>
                            <div id="scrollContainer" className='flex items-center justify-between flex-wrap overflow-auto rounded-b-md scroll' style={{ maxHeight: 'calc(100vh - 198px)' }}>
                                {rows}
                            </div>
                        </div>
                    </div>
                }
                {viewInfo === true &&
                    <div className='px-4 py-2'>
                        <div className='grid grid-cols-1 shadow-md'>
                            <button onClick={() => handleViewInfo()} className={`${secondaryHeader} ${textColor} font-semibold border-b ${secondaryBackgroundBorder} rounded-t-md px-4 py-2.5`}>
                                Metatype Info
                            </button>
                            <div className={`flex items-center justify-between flex-wrap rounded-b-md h-[calc(100vh-197px)] ${secondaryBackground} ${textColor} px-4 py-2.5`}>
                                test
                            </div>
                        </div>
                    </div>
                }
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