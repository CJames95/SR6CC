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
    ListItemDecorator
} from '@mui/joy';

export default function Qualities({ qualitiesArray, handleUpdateQualitiesArray, qualityState, handleQualityState }) {

    const [isOverflowing, setIsOverflowing] = useState(false)
    const listRef = useRef(null)
    useEffect(() => {
        const listNode = listRef.current
        if(listNode) {
            setIsOverflowing(listRef.current.scrollHeight > listRef.current.clientHeight)
        }
    }, []);
    useEffect(() => {
        console.log('Scrollbar visible:', isOverflowing)
    }, [isOverflowing])

    const mouseDown = e => {
        e.stopPropagation();
    }

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
                ref={listRef}
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
                        borderTopRightRadius: isOverflowing ? 0 : 4,
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
                                    <Button startDecorator={<span class="material-symbols-sharp">delete</span>} 
                                        sx={{ 
                                            width: '50%',
                                            borderTopRightRadius: 0, 
                                            borderTopLeftRadius: 0, 
                                            borderBottomLeftRadius: 0, 
                                            borderBottomRightRadius: 0 
                                        }}>
                                        Delete
                                    </Button>
                                    <Button startDecorator={<span class="material-symbols-sharp">add</span>} 
                                        sx={{ 
                                            width: '50%',
                                            borderTopRightRadius: isOverflowing ? 0 : 4,
                                            borderTopLeftRadius: 0, 
                                            borderBottomLeftRadius: 0, 
                                            borderBottomRightRadius: 0 
                                        }}>
                                        Add
                                    </Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    </Table>
                </ListSubheader>
                {listEntries}
            </List>
        </>
    );
}