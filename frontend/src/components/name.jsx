import React, { useState } from 'react';
import {
    Grid,
    Typography,
    List,
    ListSubheader,
    ListItem,
    ListDivider
} from '@mui/joy'

export default function Name({ karma, attributePoints, skillPoints, knowledgePoints, resourcePoints, page, handleSetPage }) {

    const formattedResource = new Intl.NumberFormat('en-US').format(resourcePoints.resources);

    const infobar = [
        {
            name: 'Adjustment Points',
            var: attributePoints.adjustment
        },
        {
            name: 'Attribute Points',
            var: attributePoints.attribute
        },
        {
            name: 'Skill Points',
            var: skillPoints.skill
        },
        {
            name: 'Knowledge Points',
            var: knowledgePoints.knowledge
        },
        {
            name: 'Karma',
            var: karma
        },
        {
            name: 'Nuyen',
            var: `${formattedResource}¥`
        },
        {
            name: 'Essence',
            var: 0
        },
        {
            name: 'Essence Hole',
            var: 0
        },
    ]

    const info = infobar.map((infobar, index) => {
        return (
            <>
                {/*<ListItem key={index} sx={{ width: '10%', paddingRight: 0, justifyContent: 'left' }}>
                    <Typography sx={{ fontFamily: 'Segoe UI' }}>
                        {infobar.name}: 
                    </Typography>
                </ListItem>
                <ListItem key={index} sx={{ width: '2.5%', paddingLeft: 0, justifyContent: 'right' }}>
                    <Typography sx={{ fontFamily: 'Segoe UI', fontWeight: 500 }}>
                        {infobar.var}
                    </Typography>
                </ListItem>
                {(index !== 7) &&
                <ListDivider sx={{ margin: 0, bgcolor: '#9EA4A9' }} />
                }*/}
            </>
        );
    });

    const [isNavToggled, setIsNavToggled] = useState(false);
    const handleNavToggle = () => {
        setIsNavToggled(!isNavToggled);
    };
    const handleNavToggleSetPage = (value) => {
        setIsNavToggled(!isNavToggled);
        handleSetPage(value);
    }

    return (
        <>
            <div className='relative max-w-md mx-auto shadow-md md:max-w-2xl bg-[#37153D]'>
                <div className='grid grid-cols-1 divide-y'>
                    <div className='flex items-center justify-between flex-wrap p-4'>
                        <div className='uppercase tracking-wide text-3xl text-[#F3E2EE] font-semibold'>
                            Runner Name
                        </div>
                        <div className='block'>
                            <button onClick={handleNavToggle} className='flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white'>
                                <span class="material-symbols-sharp">menu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isNavToggled === true && 
                <div className='absolute left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md mx-auto shadow-md md:max-w-2xl bg-gray-800'>
                    <div className='grid grid-cols-1 divide-y'>
                        <div className='flex items-center justify-between flex-wrap px-4'>
                            <ul className='list-reset justify-end flex-1 items-center'>
                                <li className='mr-3 py-1 border-b'>
                                    <button onClick={() => handleNavToggleSetPage(0)} className={`flex justify-center items-center ${page === 0 ? 'text-white' : 'text-gray-500'} hover:text-white hover:border-white`}>
                                        <span class="material-symbols-sharp mt-0.5">settings</span>
                                        Settings
                                    </button>
                                </li>
                                <li className='mr-3 py-1'>
                                    <button onClick={() => handleNavToggleSetPage(1)} className={`flex justify-center items-center ${page === 1 ? 'text-white' : 'text-gray-500'} hover:text-white hover:border-white`}>
                                        <span class="material-symbols-sharp mt-0.5">priority</span>
                                        Priorities
                                    </button>
                                </li>
                                <li className='mr-3 py-1'>
                                    <button onClick={() => handleNavToggleSetPage(2)} className={`flex justify-center items-center ${page === 2 ? 'text-white' : 'text-gray-500'} hover:text-white hover:border-white`}>
                                        <span class="material-symbols-sharp mt-0.5">face</span>
                                        Metatype
                                    </button>
                                </li>
                                <li className='mr-3 py-1'>
                                <button onClick={() => handleNavToggleSetPage(3)} className={`flex justify-center items-center ${page === 3 ? 'text-white' : 'text-gray-500'} hover:text-white hover:border-white`}>
                                        <span class="material-symbols-sharp mt-0.5">school</span>
                                        Qualities
                                    </button>
                                </li>
                                <li className='mr-3 py-1'>
                                    <button onClick={() => handleNavToggleSetPage(4)} className={`flex justify-center items-center ${page === 4 ? 'text-white' : 'text-gray-500'} hover:text-white hover:border-white`}>
                                        <span class="material-symbols-sharp mt-0.5">vital_signs</span>
                                        Attributes
                                    </button>
                                </li>
                                <li className='mr-3 py-1'>
                                    <button onClick={() => handleNavToggleSetPage(5)} className={`flex justify-center items-center ${page === 5 ? 'text-white' : 'text-gray-500'} hover:text-white hover:border-white`}>
                                        <span class="material-symbols-sharp mt-0.5">school</span>
                                        Skills
                                    </button>
                                </li>
                                <li className='mr-3 py-1 border-b'>
                                    <button onClick={() => handleNavToggleSetPage(6)} className={`flex justify-center items-center ${page === 6 ? 'text-white' : 'text-gray-500'} hover:text-white hover:border-white`}>
                                        <span class="material-symbols-sharp mt-0.5">school</span>
                                        Knowledge
                                    </button>
                                </li>
                                <li className='mr-3 py-1'>
                                    <button className='flex justify-center items-center text-gray-500 hover:text-white hover:border-white'>
                                        <span class="material-symbols-sharp mt-0.5">person</span>
                                        Augmentation
                                    </button>
                                </li>
                                <li className='mr-3 py-1'>
                                    <button className='flex justify-center items-center text-gray-500 hover:text-white hover:border-white'>
                                        <span class="material-symbols-sharp mt-0.5">swords</span>
                                        Combat
                                    </button>
                                </li>
                                <li className='mr-3 py-1'>
                                    <button className='flex justify-center items-center text-gray-500 hover:text-white hover:border-white'>
                                        <span class="material-symbols-sharp mt-0.5">home_repair_service</span>
                                        Equipment
                                    </button>
                                </li>
                                <li className='mr-3 py-1 border-b'>
                                    <button className='flex justify-center items-center text-gray-500 hover:text-white hover:border-white'>
                                        <span class="material-symbols-sharp mt-0.5">directions_car</span>
                                        Drones & Vehicles
                                    </button>
                                </li>
                                <li className='mr-3 py-1 border-b'>
                                    <button className='flex justify-center items-center text-gray-500 hover:text-white hover:border-white'>
                                        <span class="material-symbols-sharp mt-0.5">home</span>
                                        Living & Contacts
                                    </button>
                                </li>
                                <li className='mr-3 py-1'>
                                    <button className='flex justify-center items-center text-gray-500 hover:text-white hover:border-white'>
                                        <span class="material-symbols-sharp mt-0.5">save</span>
                                        Save
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </>
    );
        {/*<Grid xs={100} sx={{ bgcolor: "#ecebe6", padding: 1, height: "100%", paddingLeft: 0, paddingBottom: 0, borderBottom: 1, borderColor: '#9EA4A9' }}>
            <List sx={{ height: '100%', padding: 1, overflow: 'hidden' }}>
                <ListSubheader sx={{ height: '60%', paddingTop: 0, borderBottom: 1, borderColor: '#9EA4A9' }}>
                    <Typography sx={{ fontFamily: 'Segoe UI', fontSize: '2vw' }}>
                        Unnamed Runner
                    </Typography>
                </ListSubheader>
                <ListItem sx={{ height: '40%', padding: 0 }}>
                    <List orientation='horizontal' sx={{ width: '100%', padding: 0 }}>
                        {info}
                    </List>
                </ListItem>
            </List>
        </Grid>*/}
}