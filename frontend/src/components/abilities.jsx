import React, { useEffect } from 'react';
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
    IconButton,
    ListItemDecorator,
    Input,
} from '@mui/joy';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import max from '../json/metatype_max_attrib.json';
import { textAlign } from '@mui/system';

const header = [
    'Attribute Name',
    'Adjustment Points',
    'Attribute Points',
    'Karma Points',
    'Karma Cost',
    'Value',
    'Max Value'
]
const headerWidths = {
    'Attribute Name' : '15.5%',
    'Adjustment Points' : '18.5%',
    'Attribute Points' : '18.5%',
    'Karma Points' : '18.5%',
    'Karma Cost' : '12.5%',
    'Value' : '5%',
    'Max Value' : '11.5%'
}

export default function Abilities({ priorityButtons, attributes, handleAttributePoints, chosenMetatype }) {

    const attributeRows = [
        {
            name: 'Body',
            attrName: 'bod',
            adjust: attributes.adjustPointsBod,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsBod,
            karma: attributes.karmaPointsBod,
            cost: (attributes['bod'] + 1) * 5,
            value: attributes.bod,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxbod : 0
        },
        {
            name: 'Agility',
            attrName: 'agi',
            adjust: attributes.adjustPointsAgi,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsAgi,
            karma: attributes.karmaPointsAgi,
            cost: (attributes['agi'] + 1) * 5,
            value: attributes.agi,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxagi : 0
        },
        {
            name: 'Reaction',
            attrName: 'rea',
            adjust: attributes.adjustPointsRea,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsRea,
            karma: attributes.karmaPointsRea,
            cost: (attributes['rea'] + 1) * 5,
            value: attributes.rea,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxrea : 0
        },
        {
            name: 'Strength',
            attrName: 'str',
            adjust: attributes.adjustPointsStr,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsStr,
            karma: attributes.karmaPointsStr,
            cost: (attributes['str'] + 1) * 5,
            value: attributes.str,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxstr : 0
        },
        {
            name: 'Willpower',
            attrName: 'wil',
            adjust: attributes.adjustPointsWil,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsWil,
            karma: attributes.karmaPointsWil,
            cost: (attributes['wil'] + 1) * 5,
            value: attributes.wil,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxwil : 0
        },
        {
            name: 'Logic',
            attrName: 'log',
            adjust: attributes.adjustPointsLog,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsLog,
            karma: attributes.karmaPointsLog,
            cost: (attributes['log'] + 1) * 5,
            value: attributes.log,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxlog : 0
        },
        {
            name: 'Intuition',
            attrName: 'int',
            adjust: attributes.adjustPointsInt,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsInt,
            karma: attributes.karmaPointsInt,
            cost: (attributes['int'] + 1) * 5,
            value: attributes.int,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxint : 0
        },
        {
            name: 'Charisma',
            attrName: 'cha',
            adjust: attributes.adjustPointsCha,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsCha,
            karma: attributes.karmaPointsCha,
            cost: (attributes['cha'] + 1) * 5,
            value: attributes.cha,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxcha : 0
        },
        {
            name: 'Edge',
            attrName: 'edg',
            adjust: attributes.adjustPointsEdg,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsEdg,
            karma: attributes.karmaPointsEdg,
            cost: (attributes['edg'] + 1) * 5,
            value: attributes.edg,
            max: chosenMetatype && max[chosenMetatype.race] ? max[chosenMetatype.race].maxedg : 0
        },
        {
            name: 'Magic',
            attrName: 'mag',
            adjust: attributes.adjustPointsMag,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsMag,
            karma: attributes.karmaPointsMag,
            cost: (attributes['mag'] + 1) * 5,
            value: 0,
            max: null
        },
        {
            name: 'Resonance',
            attrName: 'res',
            adjust: attributes.adjustPointsRes,
            handlePoints: handleAttributePoints,
            attr: attributes.attribPointsRes,
            karma: attributes.karmaPointsRes,
            cost: (attributes['res'] + 1) * 5,
            value: 0,
            max: null
        },
    ]
    const headerCells = header.map((header) => {
        return (
            <ListItem
                sx={{
                    width: headerWidths[header],
                    height: '100%',
                    fontFamily: 'Segoe UI',
                    color: '#ffffff',
                    fontSize: '.6vw',
                    justifyContent: 'center',
                }}
            >
                {header}
            </ListItem>
        );
    })

    const rows = attributeRows.map((attributeRows) => {
        if (
            (attributeRows.name === 'Magic' || attributeRows.name === 'Resonance') &&
            priorityButtons.magic === 4
        ) {
            return null
        }

        return (
            <ListItem
                sx={{
                    flex: '1 1 auto',
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
                            width: headerWidths['Attribute Name'],
                            justifyContent: 'center',
                        }}
                    >
                        {attributeRows.name}
                    </ListItem>
                    <ListItem
                        sx={{
                            width: headerWidths['Adjustment Points'],
                            justifyContent: 'center',
                        }}
                    >
                        {(attributeRows.max > 6 || attributeRows.name === 'Edge' || attributeRows.name === 'Magic' && priorityButtons.magic !== 4 || attributeRows.name === 'Resonance' && priorityButtons.magic !== 4 ) &&
                        <ButtonGroup 
                            variant='solid'
                            sx={{
                                width: '98%',
                            }}
                        >
                            <IconButton 
                                onClick={e => attributeRows.handlePoints('adjust', 1, attributeRows.attrName)}
                                sx={{
                                    flex: '1 1 auto'
                                }}
                            >
                                <RemoveCircleIcon/>
                            </IconButton>
                            <Input 
                                variant='soft'
                                value={attributeRows.adjust} 
                                size='md'
                                sx={{
                                    flex: '1 1 auto',
                                    fontFamily: 'Segoe UI',                        
                                }}
                            />
                            <IconButton 
                                onClick={e => attributeRows.handlePoints('adjust', -1, attributeRows.attrName)}
                                sx={{
                                    flex: '1 1 auto'
                                }}
                            >
                                <AddCircleIcon/>
                            </IconButton>
                        </ButtonGroup>
                        }
                    </ListItem>
                    <ListItem
                        sx={{
                            width: headerWidths['Attribute Points'],
                            justifyContent: 'center',
                        }}
                    >
                        {(attributeRows.name === 'Magic' && priorityButtons.magic !== 4 || attributeRows.name === 'Resonance' && priorityButtons.magic !== 4 || attributeRows.name !== 'Magic' && attributeRows.name !== 'Resonance') &&
                        <ButtonGroup 
                            variant='solid'
                            sx={{
                                width: '98%',
                            }}
                        >
                            <IconButton 
                                onClick={e => attributeRows.handlePoints('attrib', 1, attributeRows.attrName)}
                                sx={{
                                    flex: '1 1 auto'
                                }}
                            >
                                <RemoveCircleIcon/>
                            </IconButton>
                            <Input 
                                variant='soft'
                                value={attributeRows.attr} 
                                size='md'
                                sx={{
                                    flex: '1 1 auto',
                                    fontFamily: 'Segoe UI',                     
                                }}
                            />
                            <IconButton 
                                onClick={e => attributeRows.handlePoints('attrib', -1, attributeRows.attrName)}
                                sx={{
                                    flex: '1 1 auto'
                                }}
                            >
                                <AddCircleIcon/>
                            </IconButton>
                        </ButtonGroup>
                        }
                    </ListItem>
                    <ListItem
                        sx={{
                            width: headerWidths['Karma Points'],
                            justifyContent: 'center',
                        }}
                    >
                        {(attributeRows.name === 'Magic' && priorityButtons.magic !== 4 || attributeRows.name === 'Resonance' && priorityButtons.magic !== 4 || attributeRows.name !== 'Magic' && attributeRows.name !== 'Resonance') &&
                        <ButtonGroup 
                            variant='solid'
                            sx={{
                                width: '98%'
                            }}
                        >
                            <IconButton 
                                onClick={e => attributeRows.handlePoints('karma', 1, attributeRows.attrName)}
                                sx={{
                                    flex: '1 1 auto'
                                }}
                            >
                                <RemoveCircleIcon/>
                            </IconButton>
                            <Input 
                                variant='soft'
                                value={attributeRows.karma} 
                                size='md'
                                sx={{
                                    flex: '1 1 auto',
                                    fontFamily: 'Segoe UI',                         
                                }}
                            />
                            <IconButton 
                                onClick={e => attributeRows.handlePoints('karma', -1, attributeRows.attrName)}
                                sx={{
                                    flex: '1 1 auto'
                                }}
                            >
                                <AddCircleIcon/>
                            </IconButton>
                        </ButtonGroup>
                        }
                    </ListItem>
                    <ListItem
                        sx={{
                            width: headerWidths['Karma Cost'],
                            justifyContent: 'center',
                            fontFamily: 'Segoe UI',
                        }}
                    >
                        {(attributeRows.name === 'Magic' && priorityButtons.magic !== 4 || attributeRows.name === 'Resonance' && priorityButtons.magic !== 4 || attributeRows.name !== 'Magic' && attributeRows.name !== 'Resonance') ? attributeRows.cost : 0}
                    </ListItem>
                    <ListItem
                        sx={{
                            width: headerWidths['Value'],
                            justifyContent: 'center',
                            fontFamily: 'Segoe UI',
                            fontWeight: 500
                        }}
                    >
                        {(attributeRows.name === 'Magic' && priorityButtons.magic !== 4 || attributeRows.name === 'Resonance' && priorityButtons.magic !== 4 || attributeRows.name !== 'Magic' && attributeRows.name !== 'Resonance') ? attributeRows.value : 0}
                    </ListItem>
                    <ListItem
                        sx={{
                            width: headerWidths['Max Value'],
                            justifyContent: 'center',
                            fontFamily: 'Segoe UI',
                            fontWeight: 500
                        }}
                    >
                        {(attributeRows.name === 'Magic' && priorityButtons.magic !== 4 || attributeRows.name === 'Resonance' && priorityButtons.magic !== 4 || attributeRows.name !== 'Magic' && attributeRows.name !== 'Resonance') ? attributeRows.max : 0}
                    </ListItem>
                </List>
            </ListItem>
        );
    })

    return (
        <List 
            orientation='vertical'
            sx={{
                height: '100%',
                width: '100%',
                overflow: 'auto',
                padding: 0,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4
            }}
        >
            <ListSubheader
                sx={{
                    height: '5%', 
                    width: '100%',
                    padding: 0,
                    bgcolor: '#424242',
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                }}
            >
                <List
                    orientation='horizontal'
                    sx={{
                        height: '100%',
                        width: '100%',
                        padding: 0,
                    }}
                >
                    {headerCells}
                </List>
            </ListSubheader>
            {rows}
        </List>
    );
}