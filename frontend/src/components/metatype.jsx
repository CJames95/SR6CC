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

    const rows = metatypes[priorityButtons.metatype].map((metatypes) => 
        <ListItem 
            key={metatypes.metatypeName} 
            sx={{ 
                borderBottom: 1,
            }}
        >
            <ListItemButton 
                onClick={handleChosenMetatype(metatypes.metatypeName, metatypes.karma)}
                divider={true}
                color={(chosenMetatype.race === metatypes.metatypeName) ? 'info' : 'primary'}
                sx={{
                    height: '100%',
                    padding: 1
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
                        {metatypes.metatypeName}
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
                        {metatypes.karma}
                    </ListItem>
                </List>
            </ListItemButton>
        </ListItem>
    );

    return (
        <>
            <Grid xs={25} spacing={2} sx={{ bgcolor: '#e1e1da', padding: 1, height: "100%" }}>
                <Item sx={{ boxSizing: 'border-box', height: '100%', padding: 0 }}>
                    <List
                        ref={listRef}
                        sx={{
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: '100%',
                            padding: 0,
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
                            borderTopRightRadius: isOverflowing ? 0 : 4,
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
                                borderTopRightRadius: isOverflowing ? 0 : 4,
                                borderTopLeftRadius: 4,
                                padding: 0
                            }}>
                                <List
                                    orientation='horizontal'
                                    sx={{
                                        height: '100%',
                                        width: '100%',
                                        padding: 0
                                    }}
                                >
                                    <ListItem
                                        sx={{
                                            width: '65%',
                                            padding: 1,
                                            justifyContent: 'left',
                                            color: '#ffffff'
                                        }}
                                    >
                                        Name
                                    </ListItem>
                                    <ListItem
                                        sx={{
                                            width: '35%',
                                            padding: 1,
                                            justifyContent: 'right',
                                            color: '#ffffff'
                                        }}
                                    >
                                        Karma Cost
                                    </ListItem>
                                </List>
                            </ListSubheader>
                        {rows}
                    </List>
                </Item>
            </Grid>
            <Grid xs={75} spacing={2} sx={{ bgcolor: '#e1e1da', padding: 1, height: "100%" }}>
                <Item sx={{ boxSizing: 'border-box', height: '100%' }}>
                    hi
                </Item>
            </Grid>
        </>
    );
}