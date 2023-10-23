import React, { useEffect, useRef, useState } from 'react';
import {
    Grid,
    List,
    ListItem,
    ListSubheader,
    ListItemButton,
} from '@mui/joy'

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

export default function Metatype({Item, handleChosenMetatype, chosenMetatype, priorityButtons, karma}) {

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

    const rows = metatypes[priorityButtons.metatype].map((metatypes, index, array) =>  {
        const isLastItem = index === array.length - 1;
        
        return (
            <div className='w-full grid grid-cols-12'>
                <div className='flex items-center col-span-2'>
                    <button onClick className={`flex justify-center items-center w-full py-3 shadow-md focus:outline-none border-r border-black
                        ${isLastItem ? '' : 'border-b'}
                        ${chosenMetatype.race === metatypes.metatypeName ? 'bg-blue-500' : 'bg-gray-200'} 
                        ${chosenMetatype.race === metatypes.metatypeName ? 'hover:bg-blue-600' : 'hover:bg-gray-300'} 
                        ${chosenMetatype.race === metatypes.metatypeName ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                    `}>
                        <span className="material-symbols-sharp pr-2">search</span>
                    </button>
                </div>
                <button onClick={handleChosenMetatype(metatypes.metatypeName, metatypes.karma)} className={`w-full py-3 shadow-md col-span-10 focus:outline-none border-black
                ${isLastItem ? '' : 'border-b'}
                ${chosenMetatype.race === metatypes.metatypeName ? 'bg-blue-500' : 'bg-gray-200'} 
                ${chosenMetatype.race === metatypes.metatypeName ? 'hover:bg-blue-600' : 'hover:bg-gray-300'} 
                ${chosenMetatype.race === metatypes.metatypeName ? 'active:bg-blue-300' : 'active:bg-gray-100'}
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
            <div className='h-[calc(100vh-74px)] z-0 max-w-md mx-auto shadow-md md:max-w-2xl bg-gray-400'>
                <div className='px-4 py-2'>
                    <div className='grid grid-cols-1 bg-gray-500'>
                        <div className={`grid grid-cols-12 bg-gray-500 ${scrollbarVisible ? 'pr-4' : ''}`}>
                            <div className='flex items-center justify-between flex-wrap px-4 py-2.5 col-span-2 border-r border-black'>
                                More Info
                            </div>
                            <div className='grid grid-cols-2 bg-gray-500 col-span-10'>
                                <div className='flex items-center justify-between flex-wrap px-4 py-2.5'>
                                    Metatype
                                </div>
                                <div className='flex justify-end items-center text-right px-4'>
                                    Karma Cost
                                </div>
                            </div>
                        </div>
                        <div id="scrollContainer" className='flex items-center justify-between flex-wrap overflow-auto' style={{ maxHeight: 'calc(100vh - 194px)' }}>
                            {rows}
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
        </>
    );
}