import React, { useState, useRef, useEffect } from 'react';
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
    ListItemDecorator,
    Modal,
    ModalDialog,
    ModalClose,
    Box
} from '@mui/joy';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

export default function Qualities({ qualitiesArray, handleUpdateQualitiesArray, qualityState, handleQualityState, Item, karma }) {

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

    const [addQuality, setAddQuality] = useState(false);
    const [data, setData] = useState([])
    useEffect(() => {
        console.log('Qualities Data: ', data)
    }, [data])
    const handleAddQuality = (value) => {
        if(value == true) {
            axios
            .get(`http://localhost:8000/qualities/`)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.error(error)
            })
        }
        setAddQuality(value)
    }

    const mouseDown = e => {
        e.stopPropagation();
    }

    const qualityList = data/*.sort(function(a, b) {
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
    })*/
    .map((data) => 
        <ListItem
            key={data.id}
            sx={{ 
                borderBottom: 1,
            }}
        >
            <ListItemButton
                divider={true}
                sx={{
                    height: '100%',
                    padding: 0
                }}
                alignItems='center'
                variant='solid'
            >
                <List
                    orientation='horizontal'
                    sx={{
                        height: '100%',
                        width: '100%',
                        padding: 0,
                        fontFamily: 'Segoe UI',
                        fontSize: '1vw',
                        fontWeight: 500,
                    }}
                >
                    <ListItem
                        sx={{
                            width: '60%',
                            padding: 0,
                            justifyContent: 'left',
                            fontFamily: 'Segoe UI',
                            fontSize: '1vw',
                            fontWeight: 500,
                        }}
                    >
                        {data.id}
                    </ListItem>
                    <ListItem
                        sx={{
                            width: '40%',
                            padding: 0,
                            justifyContent: 'right',
                            fontFamily: 'Segoe UI',
                            fontSize: '1vw',
                            fontWeight: 500,
                        }}
                    >
                        {data.karma}
                    </ListItem>
                </List>
            </ListItemButton>
        </ListItem>
    )

    const listEntries = qualitiesArray.sort(function(a, b) {
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
        })
        .map((qualitiesArray) => 
        <ListItem disablePadding={true} sx={{ borderBottom: 1 }}>
            <ListItemButton variant='solid' color='neutral'>
                <Table>
                    <tbody>
                        <tr>
                            <td align='left'>
                                {qualitiesArray.name}
                            </td>
                            <td align='right'>
                                {qualitiesArray.cost}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </ListItemButton>
        </ListItem>
    );

    const [addQualityScreen, setAddQualityScreen] = useState(false);
    const handleAddQualityScreen = (value) => {
        setAddQualityScreen(value)
        if(value == true) {
            axios
            .get(`http://localhost:8000/qualities/`)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.error(error)
            })
        }
    }

    const AddQualityRows = data.map((data, index, array) =>  {
        const isLastItem = index === array.length - 1;
        
        return (
            <div className='w-full grid grid-cols-12'>
                <div className='flex items-center col-span-2'>
                    <button onClick className={`flex justify-center items-center w-full py-3 shadow-md focus:outline-none border-r border-black
                        ${isLastItem ? '' : 'border-b'}
                        ${false ? 'bg-blue-500' : 'bg-gray-200'} 
                        ${false ? 'hover:bg-blue-600' : 'hover:bg-gray-300'} 
                        ${false ? 'active:bg-blue-300' : 'active:bg-gray-100'}
                    `}>
                        <span className="material-symbols-sharp pr-2">search</span>
                    </button>
                </div>
                <button onClick className={`w-full py-3 shadow-md col-span-10 focus:outline-none border-black
                ${isLastItem ? '' : 'border-b'}
                ${false ? 'bg-blue-500' : 'bg-gray-200'} 
                ${false ? 'hover:bg-blue-600' : 'hover:bg-gray-300'} 
                ${false ? 'active:bg-blue-300' : 'active:bg-gray-100'}
            `}>
                    <div className='grid grid-cols-2'>
                        <div className='text-left px-4'>
                            {data.id}
                        </div>
                        <div className='flex justify-end items-center text-right px-4'>
                            {data.karma}
                        </div>
                    </div>
                </button>        
            </div>
        );
    });

    return (
        <>
            {addQualityScreen === true &&
                <div className='absolute h-[calc(100vh-74px)] left-1/2 transform -translate-x-1/2 z-10 w-full max-w-md mx-auto shadow-md md:max-w-2xl bg-gray-400'>
                    <div className='px-4 py-2'>
                        <div className='grid grid-cols-1 bg-gray-600'>
                            <div className='flex items-center justify-between flex-wrap'>
                                <button onClick={() => handleAddQualityScreen(false)} className="w-full bg-gray-200 py-3 shadow-md hover:bg-gray-300 active:bg-gray-100 focus:outline-none">
                                    <div className='grid grid-cols-10'>
                                        <div className='flex justify-start items-center text-left px-4 col-span-1'>
                                            <span class="material-symbols-sharp">arrow_back</span>
                                        </div>
                                        <div className='flex items-center justify-start flex-wrap text-left px-4 col-span-9'>
                                            Return to Qualities
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='px-4 py-2'>
                        <div className='grid grid-cols-1 bg-gray-500'>
                            <div className={`grid grid-cols-12 bg-gray-500 ${scrollbarVisible ? 'pr-4' : ''}`}>
                                <div className='flex items-center justify-between flex-wrap px-4 py-2.5 col-span-2 border-r border-black'>
                                    More Info
                                </div>
                                <div className='grid grid-cols-2 bg-gray-500 col-span-10'>
                                    <div className='flex items-center justify-between flex-wrap px-4 py-2.5'>
                                        Quality
                                    </div>
                                    <div className='flex justify-end items-center text-right px-4'>
                                        Karma Cost
                                    </div>
                                </div>
                            </div>
                            <div id="scrollContainer" className='flex items-center justify-between flex-wrap overflow-auto' style={{ height: 'calc(100vh - 258px)' }}>
                                {AddQualityRows}
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
            }
            <div className='h-[calc(100vh-74px)] z-0 max-w-md mx-auto shadow-md md:max-w-2xl bg-gray-400'>
                <div className='px-4 py-2'>
                    <div className='grid grid-cols-1 bg-gray-500'>
                        <div className='flex items-center justify-between flex-wrap'>
                            <button onClick={() => handleAddQualityScreen(true)} className="w-full bg-gray-200 py-3 shadow-md hover:bg-gray-300 active:bg-gray-100 focus:outline-none">
                                <div className='grid grid-cols-2'>
                                    <div className='text-left px-4'>
                                        Add Quality
                                    </div>
                                    <div className='flex justify-end items-center text-right px-4'>
                                        <span class="material-symbols-sharp">chevron_right</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='px-4 py-2'>
                    <div className='grid grid-cols-1 bg-gray-500'>
                        <div className={`grid grid-cols-12 bg-gray-500 ${scrollbarVisible ? 'pr-4' : ''}`}>
                            <div className='flex items-center justify-between flex-wrap px-4 py-2.5 col-span-2 border-r border-black'>
                                More Info
                            </div>
                            <div className='grid grid-cols-2 bg-gray-500 col-span-10'>
                                <div className='flex items-center justify-between flex-wrap px-4 py-2.5'>
                                    Quality
                                </div>
                                <div className='flex justify-end items-center text-right px-4'>
                                    Karma Cost
                                </div>
                            </div>
                        </div>
                        <div id="scrollContainer" className='flex items-center justify-between flex-wrap overflow-auto' style={{ height: 'calc(100vh - 258px)' }}>
                            temp
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

{/*<List 
                ref={listRefQualities}
                sx={{ 
                    paddingTop: 0, 
                    overflow: 'auto',
                    maxHeight: '100%',
                    '&::-webkit-scrollbar': {
                        width: '10px'
                    },
                    '&::-webkit-scrollbar-track': {
                        boxShadow: 'inset 0 0 5px grey',
                        borderTopRightRadius: 4,
                        borderBottomRightRadius: 4,
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#424242',
                        borderTopRightRadius: 4,
                        borderBottomRightRadius: 4,
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: '#b30000',
                    },
                }}
            >
                <ListSubheader sticky
                    sx={{
                        height: 40,
                        bgcolor: '#424242', 
                        color: 'white',
                        fontFamily: 'Segoe UI',
                        fontSize: 20,
                        fontWeight: 500,
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: isOverflowingQualities ? 0 : 4,
                        paddingRight: 0
                    }}
                >
                    <Table>
                        <tr>
                            <td align='left' style={{ width: '40%', fontFamily: 'Segoe UI', fontSize: 20, fontWeight: 500, borderBottom: 'none' }}>
                                Qualities
                            </td>
                            <td align='right' style={{ width: '60%', fontFamily: 'Segoe UI', fontSize: 20, fontWeight: 500, borderBottom: 'none', paddingRight: 0 }}>
                                <ButtonGroup buttonFlex={1} variant='solid' color='primary' sx={{ width: '100%' }}>
                                    <Button
                                        startDecorator={
                                            <span class="material-symbols-sharp">delete</span>
                                        } 
                                        sx={{ 
                                            width: '50%',
                                            borderTopRightRadius: 0, 
                                            borderTopLeftRadius: 0, 
                                            borderBottomLeftRadius: 0, 
                                            borderBottomRightRadius: 0 
                                        }}
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        onClick={() => handleAddQuality(true)}
                                        startDecorator={
                                            <span class="material-symbols-sharp">add</span>
                                        } 
                                        sx={{ 
                                            width: '50%',
                                            borderTopRightRadius: isOverflowingQualities ? 0 : 4,
                                            borderTopLeftRadius: 0, 
                                            borderBottomLeftRadius: 0, 
                                            borderBottomRightRadius: 0 
                                        }}
                                    >
                                        Add
                                    </Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    </Table>
                </ListSubheader>
                {listEntries}
            </List>
            <Modal 
                open={addQuality} 
                onClose={() => setAddQuality(false)}
            >
                <ModalDialog
                    sx={(theme) => ({
                        height: '100%',
                        [theme.breakpoints.only('xs')]: {
                            bottom: 0,
                            left: 0,
                            right: 0,
                            borderRadius: 0,
                            transform: 'none',
                            maxWidth: 'unset'
                        },
                    })}
                >
                    <ModalClose />
                    <Item sx={{ boxSizing: 'border-box', height: '100%', padding: 0 }}>
                        <List 
                            ref={listRefModal}
                            sx={{
                                bgcolor: 'background.paper',
                                position: 'relative',
                                overflow: 'auto',
                                height: '100%',
                                padding: 0,
                                '&::-webkit-scrollbar': {
                                    width: '10px'
                                },
                                '&::-webkit-scrollbar-track': {
                                    boxShadow: 'inset 0 0 5px grey',
                                    borderTopRightRadius: 4,
                                    borderBottomRightRadius: 0,
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    background: '#424242',
                                    borderTopRightRadius: 4,
                                    borderBottomRightRadius: 4,
                                },
                                '&::-webkit-scrollbar-thumb:hover': {
                                    background: '#b30000',
                                },
                                borderTopRightRadius: isOverflowingModal ? 0 : 4,
                                borderTopLeftRadius: 4,
                                borderBottomLeftRadius: 4
                            }}
                        >
                            <ListSubheader
                                sticky
                                sx={{
                                    height: '5%',
                                    bgcolor: '#424242', 
                                    fontFamily: 'Segoe UI',
                                    fontSize: '1vw',
                                    fontWeight: 500,
                                    borderTopRightRadius: isOverflowingModal ? 0 : 4,
                                    borderTopLeftRadius: 4,
                                    padding: 0,
                                }}
                            >
                                Qualities
                            </ListSubheader>
                            {qualityList}
                        </List>
                    </Item>
                </ModalDialog>
</Modal>*/}
{/*
<button onClick={handleAddQualityScreen} className='flex items-center h-6 hover:text-gray-300 active:text-gray-100 focus:outline-none'>
                                    <span class="material-symbols-sharp mt-0.5">arrow_back</span>
                                </button>
                                <div className='px-4'>
                                    Return to Qualities
</div>
*/}