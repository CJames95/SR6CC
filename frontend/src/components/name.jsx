import React, { useState } from 'react';
import { useAtom } from 'jotai';
import {
    runnerName as runnerNameAtom,
    page as pageAtom,
    primaryHeader as primaryHeaderAtom,
    textColor as textColorAtom,
    textHoverColor as textHoverColorAtom,
    textBorderColor as textBorderColorAtom,
    textBorderHoverColor as textBorderHoverColorAtom,
} from '../atoms.js';

export default function Name() {

    const [isNavToggled, setIsNavToggled] = useState(false);
    const handleNavToggle = () => {
        setIsNavToggled(!isNavToggled);
    };
    const handleNavToggleSetPage = (value) => {
        setIsNavToggled(!isNavToggled);
        handleSetPage(value);
    }

    const [isEditing, setIsEditing] = useState(false);

    const [runnerName, setRunnerName] = useAtom(runnerNameAtom);
    const [primaryHeader, setPrimaryHeader] = useAtom(primaryHeaderAtom);
    const [textColor, setTextColor] = useAtom(textColorAtom);
    const [textHoverColor, setTextHoverColor] = useAtom(textHoverColorAtom);
    const [textBorderColor, setTextBorderColor] = useAtom(textBorderColorAtom);
    const [textBorderHoverColor, setTextBorderHoverColor] = useAtom(textBorderHoverColorAtom);
    const [currentPage, setCurrentPage] = useAtom(pageAtom);
    const handleSetPage = (value) => {
        setCurrentPage(value)
    }

    return (
        <>
            <div className={`relative max-w-md mx-auto shadow-md md:max-w-2xl ${primaryHeader} hero-pattern`}>
                <div className='grid grid-cols-1 divide-y'>
                    <div className='flex items-center justify-between flex-wrap p-4'>
                        <div 
                            onClick={() => !isEditing && setIsEditing(true)}
                        >
                            {isEditing ? (
                                <input 
                                    type='text'
                                    value={runnerName}
                                    onChange={(e) => setRunnerName(e.target.value)}
                                    onBlur={() => setIsEditing(false)}
                                    autoFocus
                                    className={`uppercase tracking-wide text-3xl font-extrabold`}
                                />
                            ) : (
                                <div className={`uppercase tracking-wide text-3xl ${textColor} font-extrabold`}>
                                    {runnerName}
                                </div>
                            )}
                        </div>
                        <div className='block'>
                            <button onClick={handleNavToggle} className={`flex items-center px-3 py-2 border-2 rounded ${textColor} ${textHoverColor} ${textBorderColor} ${textBorderHoverColor}`}>
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
                                    <button onClick={() => handleNavToggleSetPage(0)} className={`flex justify-center items-center ${currentPage === 0 ? 'text-white' : 'text-gray-500'} hover:text-white hover:border-white`}>
                                        <span class="material-symbols-sharp mt-0.5">settings</span>
                                        Settings
                                    </button>
                                </li>
                                <li className='mr-3 py-1'>
                                    <button onClick={() => handleNavToggleSetPage(1)} className={`flex justify-center items-center ${currentPage === 1 ? 'text-white' : 'text-gray-500'} hover:text-white hover:border-white`}>
                                        <span class="material-symbols-sharp mt-0.5">priority</span>
                                        Priorities
                                    </button>
                                </li>
                                <li className='mr-3 py-1'>
                                    <button onClick={() => handleNavToggleSetPage(2)} className={`flex justify-center items-center ${currentPage === 2 ? 'text-white' : 'text-gray-500'} hover:text-white hover:border-white`}>
                                        <span class="material-symbols-sharp mt-0.5">face</span>
                                        Metatype
                                    </button>
                                </li>
                                <li className='mr-3 py-1'>
                                <button onClick={() => handleNavToggleSetPage(3)} className={`flex justify-center items-center ${currentPage === 3 ? 'text-white' : 'text-gray-500'} hover:text-white hover:border-white`}>
                                        <span class="material-symbols-sharp mt-0.5">school</span>
                                        Qualities
                                    </button>
                                </li>
                                <li className='mr-3 py-1'>
                                    <button onClick={() => handleNavToggleSetPage(4)} className={`flex justify-center items-center ${currentPage === 4 ? 'text-white' : 'text-gray-500'} hover:text-white hover:border-white`}>
                                        <span class="material-symbols-sharp mt-0.5">vital_signs</span>
                                        Attributes
                                    </button>
                                </li>
                                <li className='mr-3 py-1'>
                                    <button onClick={() => handleNavToggleSetPage(5)} className={`flex justify-center items-center ${currentPage === 5 ? 'text-white' : 'text-gray-500'} hover:text-white hover:border-white`}>
                                        <span class="material-symbols-sharp mt-0.5">school</span>
                                        Skills
                                    </button>
                                </li>
                                <li className='mr-3 py-1 border-b'>
                                    <button onClick={() => handleNavToggleSetPage(6)} className={`flex justify-center items-center ${currentPage === 6 ? 'text-white' : 'text-gray-500'} hover:text-white hover:border-white`}>
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
}