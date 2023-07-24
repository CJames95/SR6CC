import React from 'react';
import { 
    Button, 
    ButtonGroup,
    List,
    ListSubheader,
    ListItem,
    Table,
    Grid,
    ListDivider,
} from '@mui/joy';

export default function Priorities({ Item, priorityButtons, handlePriorityButtons }) {
    //Priorities (Child Component)
    const [openMetatypes, setMetatypesOpen] = React.useState(false);
    const handleOpenMetatypes = (value) => {
        setMetatypesOpen(value)
    }
    const [openAttributes, setAttributesOpen] = React.useState(false);
    const handleOpenAttributes = (value) => {
        setAttributesOpen(value)
    }
    const [openSkills, setSkillsOpen] = React.useState(false);
    const handleOpenSkills = (value) => {
        setSkillsOpen(value)
    }
    const [openMagic, setMagicOpen] = React.useState(false);
    const handleOpenMagic = (value) => {
        setMagicOpen(value)
    }
    const [openResources, setResourcesOpen] = React.useState(false);
    const handleOpenResources = (value) => {
        setResourcesOpen(value)
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
      
      
    
    // This section handles all other mapped information in priorityRows
    const priorities = [
        {
            name: 'Metatype',
            idA: 0,
            A: 13,
            idB: 1,
            B: 11,
            idC: 2,
            C: 9,
            idD: 3,
            D: 4,
            idE: 4,
            E: 1,
            state: priorityButtons.metatype,
            change: value => handlePriorityButtons('metatype', parseInt(value)),
            collapse: openMetatypes,
            set: handleOpenMetatypes
        },
        {
            name: 'Attributes',
            idA: 0,
            A: 24,
            idB: 1,
            B: 16,
            idC: 2,
            C: 12,
            idD: 3,
            D: 8,
            idE: 4,
            E: 2,
            state: priorityButtons.attribute,
            change: value => handlePriorityButtons('attribute', parseInt(value)),
            collapse: openAttributes,
            set: handleOpenAttributes
        },
        {
            name: 'Skills',
            idA: 0,
            A: 32,
            idB: 1,
            B: 24,
            idC: 2,
            C: 20,
            idD: 3,
            D: 16,
            idE: 4,
            E: 10,
            state: priorityButtons.skill,
            change: value => handlePriorityButtons('skill', parseInt(value)),
            collapse: openSkills,
            set: handleOpenSkills
        },
        {
            name: 'Magic or Resonance',
            idA: 0,
            A: 'Magical',
            idB: 1,
            B: 'Magical',
            idC: 2,
            C: 'Magical',
            idD: 3,
            D: 'Magical',
            idE: 4,
            E: 'Mundane',
            state: priorityButtons.magic,
            change: value => handlePriorityButtons('magic', parseInt(value)),
            collapse: openMagic,
            set: handleOpenMagic
        },
        {
            name: 'Resources',
            idA: 0,
            A: '450,000 ¥',
            idB: 1,
            B: '275,000 ¥',
            idC: 2,
            C: '150,000 ¥',
            idD: 3,
            D: '50,000 ¥',
            idE: 4,
            E: '8,000 ¥',
            state: priorityButtons.resource,
            change: value => handlePriorityButtons('resource', parseInt(value)),
            collapse: openResources,
            set: handleOpenResources
        }     
    ]

    const priorityRows = priorities.map((priorities, index) => {
        return (
            <ListItem
                sx={{
                    height: '19%',
                    width: '100%',
                    padding: 0
                }}
            >
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
                            height: '100%',
                            width: '20%',
                            bgcolor: '#424242',
                            color: '#ffffff',
                            justifyContent: 'center',
                            fontFamily: 'Segoe UI',
                            fontWeight: 500,
                            fontSize: '1vw',
                            borderBottomLeftRadius: priorities.name === 'Resources' ?  4 : 0
                        }}
                    >
                        {priorities.name}
                    </ListItem>
                    <ListItem
                        sx={{
                            height: '100%',
                            width: '16%',
                        }}
                    >
                        <Button 
                            value={priorities.idA} 
                            onClick={e => priorities.change(e.target.value)} 
                            color={(priorities.state == 0) ? 'info' : 'primary'} 
                            fullWidth 
                            variant='solid'
                            sx={{
                                height: '80%',
                                fontFamily: 'Segoe UI',
                                fontWeight: 500,
                                fontSize: '.9vw'   
                            }}
                        >
                            {priorities.A}
                        </Button>
                    </ListItem>
                    <ListItem
                        sx={{
                            height: '100%',
                            width: '16%',
                            
                        }}
                    >
                        <Button 
                            value={priorities.idB} 
                            onClick={e => priorities.change(e.target.value)} 
                            color={(priorities.state == 1) ? 'info' : 'primary'} 
                            fullWidth 
                            variant='solid'
                            sx={{
                                height: '80%',
                                fontFamily: 'Segoe UI',
                                fontWeight: 500,
                                fontSize: '.9vw'
                            }}
                        >
                            {priorities.B}
                        </Button>
                    </ListItem>
                    <ListItem
                        sx={{
                            height: '100%',
                            width: '16%',
                            
                        }}
                    >
                        <Button 
                            value={priorities.idC} 
                            onClick={e => priorities.change(e.target.value)} 
                            color={(priorities.state == 2) ? 'info' : 'primary'} 
                            fullWidth 
                            variant='solid'
                            sx={{
                                height: '80%',
                                fontFamily: 'Segoe UI',
                                fontWeight: 500,
                                fontSize: '.9vw'
                            }}
                        >
                            {priorities.C}
                        </Button>
                    </ListItem>
                    <ListItem
                        sx={{
                            height: '100%',
                            width: '16%',
                            
                        }}
                    >
                        <Button 
                            value={priorities.idD} 
                            onClick={e => priorities.change(e.target.value)} 
                            color={(priorities.state == 3) ? 'info' : 'primary'} 
                            fullWidth 
                            variant='solid'
                            sx={{
                                height: '80%',
                                fontFamily: 'Segoe UI',
                                fontWeight: 500,
                                fontSize: '.9vw'
                            }}
                        >
                            {priorities.D}
                        </Button>
                    </ListItem>
                    <ListItem
                        sx={{
                            height: '100%',
                            width: '16%',
                            
                        }}
                    >
                            <Button 
                                value={priorities.idE} 
                                onClick={e => priorities.change(e.target.value)} 
                                color={(priorities.state == 4) ? 'info' : 'primary'} 
                                fullWidth 
                                variant='solid'
                                sx={{
                                    height: '80%',
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500,
                                    fontSize: '.9vw'
                                }}
                            >
                                {priorities.E}
                            </Button>
                    </ListItem>
                </List>
            </ListItem>
        );
    });
    const metatypeRestrictionRows = metatypeRestrictions
        .filter(( {indexes }) => indexes.includes(priorityButtons.metatype))
        .map((metatype, index) => {
            return (
                <>
                    <ListItem 
                        key={index}
                        sx={{
                            height: '5%',
                            justifyContent: 'center',
                            fontFamily: 'Segoe UI',
                            fontWeight: 500,
                            fontSize: '.9vw'   
                        }}
                    >
                        {metatype.restriction}
                    </ListItem>
                    <ListDivider />
                </>
            );
    });

    return (
        <>
            <Grid xs={80} sx={{ bgcolor: '#e1e1da', padding: 1, height: "100%" }}>
                <Item sx={{ boxSizing: 'border-box', height: '100%', padding: 0 }}>
                    <List 
                        sx={{
                            height: '100%',
                            width: '100%',
                            padding: 0
                        }}
                    >
                        <ListSubheader sx={{
                            height: '5%',
                            width: '100%',
                            bgcolor: '#424242', 
                            borderTopLeftRadius: 4,
                            borderTopRightRadius: 4,
                            padding: 0,
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
                                        height: '100%',
                                        width: '20%',
                                        justifyContent: 'center',
                                        fontFamily: 'Segoe UI',
                                        color: '#ffffff',
                                        fontWeight: 500,
                                        fontSize: '1vw'
                                    }}
                                >
                                    Priority
                                </ListItem>
                                <ListItem
                                    sx={{
                                        height: '100%',
                                        width: '16%',
                                        justifyContent: 'center',
                                        fontFamily: 'Segoe UI',
                                        color: '#ffffff',
                                        fontWeight: 500,
                                        fontSize: '1vw'
                                    }}
                                >
                                    A
                                </ListItem>
                                <ListItem
                                    sx={{
                                        height: '100%',
                                        width: '16%',
                                        justifyContent: 'center',
                                        fontFamily: 'Segoe UI',
                                        color: '#ffffff',
                                        fontWeight: 500,
                                        fontSize: '1vw'
                                    }}
                                >
                                    B
                                </ListItem>
                                <ListItem
                                    sx={{
                                        height: '100%',
                                        width: '16%',
                                        justifyContent: 'center',
                                        fontFamily: 'Segoe UI',
                                        color: '#ffffff',
                                        fontWeight: 500,
                                        fontSize: '1vw'
                                    }}
                                >
                                    C
                                </ListItem>
                                <ListItem
                                    sx={{
                                        height: '100%',
                                        width: '16%',
                                        justifyContent: 'center',
                                        fontFamily: 'Segoe UI',
                                        color: '#ffffff',
                                        fontWeight: 500,
                                        fontSize: '1vw'
                                    }}
                                >
                                    D
                                </ListItem>
                                <ListItem
                                    sx={{
                                        height: '100%',
                                        width: '16%',
                                        justifyContent: 'center',
                                        fontFamily: 'Segoe UI',
                                        color: '#ffffff',
                                        fontWeight: 500,
                                        fontSize: '1vw'
                                    }}
                                >
                                    E
                                </ListItem>
                            </List>
                        </ListSubheader>
                        {priorityRows}
                    </List>
                </Item>
            </Grid>
            <Grid xs={20} sx={{ bgcolor: '#e1e1da', padding: 1, height: "100%" }}>
                <Item sx={{ boxSizing: 'border-box', height: '100%', padding: 0 }}>
                    <List
                        sx={{
                            height: '59%',
                            width: '100%',
                            padding: 0,
                            overflow: 'auto',
                        }}
                    >
                        <ListSubheader
                            sticky
                            sx={{
                                height: '5%',
                                width: '100%',
                                bgcolor: '#424242', 
                                justifyContent: 'center',
                                fontFamily: 'Segoe UI',
                                color: '#ffffff',
                                fontWeight: 500,
                                fontSize: '.9vw',
                                borderTopLeftRadius: 4,
                                borderTopRightRadius: 4,
                            }}
                        >
                            Metatypes Not Available
                        </ListSubheader>
                        <ListItem
                            sx={{
                                width: '100%',
                                padding: 0,
                            }}
                        >
                            <List
                                sx={{
                                    width: '100%',
                                    padding: 0,
                                }}
                            >
                                {metatypeRestrictionRows}
                            </List>
                        </ListItem>
                    </List>
                    <List
                        sx={{
                            height: '41%',
                            width: '100%',
                            padding: 0,
                            overflow: 'auto',
                        }}
                    >
                        <ListSubheader
                            sticky
                            sx={{
                                height: '5%',
                                width: '100%',
                                bgcolor: '#424242', 
                                justifyContent: 'center',
                                fontFamily: 'Segoe UI',
                                color: '#ffffff',
                                fontWeight: 500,
                                fontSize: '.9vw'
                            }}
                        >
                            Magic and Resonance
                        </ListSubheader>
                        {priorityButtons.magic !== 4 &&
                            <ListItem
                                sx={{
                                    flex: '1 1 auto',
                                    justifyContent: 'center',
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500,
                                    fontSize: '.9vw'
                                }}
                            >
                                {AwakenedOrEmerged[priorityButtons.magic][0]}
                            </ListItem>
                        }
                        <ListItem
                            sx={{
                                flex: '1 1 auto',
                                justifyContent: 'center',
                                fontFamily: 'Segoe UI',
                                fontWeight: 500,
                                fontSize: '.9vw'
                            }}
                        >
                            {AwakenedOrEmerged[priorityButtons.magic][1]}
                        </ListItem>
                        {priorityButtons.magic !== 4 &&
                            <ListItem
                                sx={{
                                    flex: '1 1 auto',
                                    justifyContent: 'center',
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500,
                                    fontSize: '.9vw'
                                }}
                            >
                                {AwakenedOrEmerged[priorityButtons.magic][2]}
                            </ListItem>
                        }
                        {priorityButtons.magic !== 4 &&
                            <ListItem
                                sx={{
                                    flex: '1 1 auto',
                                    justifyContent: 'center',
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500,
                                    fontSize: '.9vw'
                                }}
                            >
                                {AwakenedOrEmerged[priorityButtons.magic][3]}
                            </ListItem>
                        }
                        {priorityButtons.magic !== 4 &&
                            <ListItem
                                sx={{
                                    flex: '1 1 auto',
                                    justifyContent: 'center',
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500,
                                    fontSize: '.9vw'
                                }}
                            >
                                {AwakenedOrEmerged[priorityButtons.magic][4]}
                            </ListItem>
                        }
                        {priorityButtons.magic !== 4 &&
                            <ListItem
                                sx={{
                                    flex: '1 1 auto',
                                    justifyContent: 'center',
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 500,
                                    fontSize: '.9vw'
                                }}
                            >
                                {AwakenedOrEmerged[priorityButtons.magic][5]}
                            </ListItem>
                        }
                    </List>
                </Item>
            </Grid>
        </>
    );
}