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

export default function Qualities({ qualitiesArray, handleUpdateQualitiesArray, qualityState, handleQualityState, Item }) {

    const [isOverflowingQualities, setIsOverflowingQualities] = useState(false)
    const listRefQualities = useRef(null)
    useEffect(() => {
        const listNode = listRefQualities.current
        if(listNode) {
            setIsOverflowingQualities(listRefQualities.current.scrollHeight > listRefQualities.current.clientHeight)
        }
    }, []);
    useEffect(() => {
        console.log('Scrollbar visible:', isOverflowingQualities)
    }, [isOverflowingQualities])
    const [isOverflowingModal, setIsOverflowingModal] = useState(false)
    const listRefModal = useRef(null)
    useEffect(() => {
        const listNode = listRefModal.current
        if(listNode) {
            setIsOverflowingModal(listRefModal.current.scrollHeight > listRefModal.current.clientHeight)
        }
    }, []);
    useEffect(() => {
        console.log('Scrollbar visible:', isOverflowingModal)
    }, [isOverflowingModal])

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

    return (
        <>
            <List 
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
            </Modal>
        </>
    );
}