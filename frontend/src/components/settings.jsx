import React from 'react';
import { 
    Grid, 
    Typography, 
    ButtonGroup,
    Button,
    List,
    ListSubheader,
    ListItem
} from '@mui/joy';

// Static variables
const powerLevel = [
    'Street-Level Runner', 'Standard Runner', 'Elite Runner'
]    
const creatorType = [
    'Priority System', ['Sum-to-Eight System', 'Sum-to-Ten System', 'Sum-to-Twelve System'], 'Point Buy System', 'Life Path System'
]
const powerLevelDescription = [
        'This Power Level covers characters like gangers, wage slaves, rent-a-cops, and other low level members of society. \
        These are people who are at the bottom, or have recently fallen from the top echelons of society. \
        Alternatively, this Power Level might represent younger characterse that have less experience and fewer resources.',

        'This Power Level covers standard runners that are fairly new to shadowrunning. \
        These are shadowrunners that might have already done a few shadowruns or are looking to start their first shadowrun. \
        They have already met a few decent contacts and acrued enough resources to ensure they can fund the lifestyle and equipment they need for shadowrunning.',

        'This Power Level covers characters like high-level corporate operatives, high-level celebrities, powerful executives, and other high level members of society. \
        These people have experience, power, wealth, and the opportunities to put them to use.'
]
const creatorTypeDescription = [
    [
        <body>
        <p>
        The Street-Level Priority System is a modified version of the Standard Runner Priority System.
        You will select a letter for each of the five priorities, which are Adjustment Points, Attributes, Skills, Magic, and Resources.
        Each letter will offer you a different amount of points in the assigned priority for character creation.
        The letter A offers you the most amount of points, whereas the letter E offers the least amount of points.
        Some priorities will restrict you from performing magic or selecting certain metatypes if they are assigned a certain letter.
        </p>
        <li>One priority may be assigned the letter B</li>
        <li>Two priorities may be assigned the letter C</li>
        <li>One priority may be assigned the letter D</li>
        <li>One priority may be assigned the letter E</li>
        <br />
        <br />
        </body>,
        <body>
        <p>
        The Standard Priority System is the standard system for character creation in Shadowrun.
        In this system you will select a letter for each of the five priorities, which are Adjustment Points, Attributes, Skills, Magic, and Resources.
        Each letter will offer you a different amount of points in the assigned priority for character creation.
        The letter A offers you the most amount of points, whereas the letter E offers the least amount of points.
        Some priorities will restrict you from performing magic or selecting certain metatypes if they are assigned a certain letter.
        </p>
        <li>One priority may be assigned the letter A</li>
        <li>One priority may be assigned the letter B</li>
        <li>One priority may be assigned the letter C</li>
        <li>One priority may be assigned the letter D</li>
        <li>One priority may be assigned the letter E</li>
        <br />
        </body>,
        <body>
        <p>
        The Elite Priority System is a modified version of the Standard Runner Priority System.
        In this system you will select a letter for each of the five priorities, which are Adjustment Points, Attributes, Skills, Magic, and Resources.
        Each letter will offer you a different amount of points in the assigned priority for character creation.
        The letter A offers you the most amount of points, whereas the letter E offers the least amount of points.
        Some priorities will restrict you from performing magic or selecting certain metatypes if they are assigned a certain letter.
        </p>
        <li>One priority may be assigned the letter A</li>
        <li>Two priority may be assigned the letter B</li>
        <li>One priorities may be assigned the letter C</li>
        <li>One priority may be assigned the letter D</li>
        <br />
        <br />
        </body>,
    ],
    ['hey', 'yo', 'bub'],
    ['bye', 'cya', 'brb'],
    ['goodbye', 'gotta get some milk', 'lemme get some cigs']
]

export default function Settings({ Item, settings, handleSettings }) {
    return (
        <>
            <Grid xs={40} sx={{ bgcolor: "#e1e1da", padding: 1, height: '100%' }}>
                <Item sx={{ height: '100%', boxSizing: 'border-box', padding: 0 }}>
                    <List sx={{ height: '45%', padding: 0 }}>
                        <ListSubheader 
                            sx={{ 
                                height: '25%', 
                                width: '100%', 
                                bgcolor: '#424242',
                                color: 'white',
                                fontFamily: 'Segoe UI',
                                fontSize: '1vw',
                                fontWeight: 500,
                                justifyContent: 'center',
                                borderTopLeftRadius: 4,
                                borderTopRightRadius: 4
                            }}
                        >
                            Character Power Level
                        </ListSubheader>
                        <ListItem 
                            sx={{ 
                                height: '75%', 
                                width: '100%', 
                                padding: 0 
                            }}
                        >
                        <ButtonGroup orientation='vertical' variant='solid' sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
                            <Button
                                disabled
                                color={settings.powerState == 0 ? 'info' : 'primary'}
                                onClick={e => handleSettings(0, 0)} 
                                sx={{ 
                                    flexGrow: 1, 
                                    flexShrink: 1, 
                                    flexBasis: 0,
                                    borderTopLeftRadius: 0,
                                    borderTopRightRadius: 0
                                }}
                            >
                                {powerLevel[0]}
                            </Button>
                            <Button 
                                color={settings.powerState == 1 ? 'info' : 'primary'}
                                onClick={e => handleSettings(0, 1)} 
                                sx={{ 
                                    flexGrow: 1, 
                                    flexShrink: 1, 
                                    flexBasis: 0 
                                }}
                            >
                                {powerLevel[1]}
                            </Button>
                            <Button 
                                disabled
                                color={settings.powerState == 2 ? 'info' : 'primary'}
                                onClick={e => handleSettings(0, 2)} 
                                sx={{ 
                                    flexGrow: 1, 
                                    flexShrink: 1, 
                                    flexBasis: 0,
                                    borderBottomLeftRadius: 0,
                                    borderBottomRightRadius: 0
                                }}
                            >
                                {powerLevel[2]}
                            </Button>
                        </ButtonGroup>
                        </ListItem>
                    </List>
                    <List sx={{ height: '55%', padding: 0 }}>
                        <ListSubheader 
                            sx={{ 
                                height: '20%', 
                                width: '100%', 
                                bgcolor: '#424242',
                                color: 'white',
                                fontFamily: 'Segoe UI',
                                fontSize: '1vw',
                                fontWeight: 500,
                                justifyContent: 'center',
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0
                            }}
                        >
                            Character Creator System
                        </ListSubheader>
                        <ListItem sx={{ height: '80%', width: '100%', padding: 0 }}>
                            <ButtonGroup 
                                orientation='vertical' 
                                variant='solid' 
                                sx={{ 
                                    height: '100%', 
                                    width: '100%', 
                                    display: 'flex', 
                                    flexDirection: 'column',
                                }}
                            >
                                <Button 
                                    color={settings.creatorState == 0 ? 'info' : 'primary'} 
                                    onClick={e => handleSettings(1, 0)} 
                                    sx={{ 
                                        flexGrow: 1, 
                                        flexShrink: 1, 
                                        flexBasis: 0,
                                        borderTopLeftRadius: 0,
                                        borderTopRightRadius: 0
                                    }}
                                >
                                    {creatorType[0]}
                                </Button>
                                <Button 
                                    disabled
                                    color={settings.creatorState == 1 ? 'info' : 'primary'}
                                    onClick={e => handleSettings(1, 1)} 
                                    sx={{ 
                                        flexGrow: 1, 
                                        flexShrink: 1, 
                                        flexBasis: 0 
                                    }}
                                >
                                    {creatorType[1][settings.powerState]}
                                </Button>
                                <Button 
                                    disabled
                                    color={settings.creatorState == 2 ? 'info' : 'primary'}
                                    onClick={e => handleSettings(1, 2)} 
                                    sx={{ 
                                        flexGrow: 1, 
                                        flexShrink: 1, 
                                        flexBasis: 0 
                                    }}
                                >
                                    {creatorType[2]}
                                </Button>
                                <Button 
                                    disabled
                                    color={settings.creatorState == 3 ? 'info' : 'primary'}
                                    onClick={e => handleSettings(1, 3)} 
                                    sx={{ 
                                        flexGrow: 1, 
                                        flexShrink: 1, 
                                        flexBasis: 0,
                                        borderBottomLeftRadius: 4,
                                        borderBottomRightRadius: 4
                                    }}
                                >
                                    {creatorType[3]}
                                </Button>                                
                            </ButtonGroup>
                        </ListItem>
                    </List>
                </Item>
            </Grid>
            <Grid xs={60} sx={{ bgcolor: "#e1e1da", padding: 1, height: '100%' }}>
                <Item sx={{ height: '100%', boxSizing: 'border-box', padding: 0 }}>
                    <List sx={{ height: '45%', padding: 0 }}>
                        <ListSubheader 
                            sx={{ 
                                height: '25%', 
                                width: '100%', 
                                bgcolor: '#424242',
                                color: 'white',
                                fontFamily: 'Segoe UI',
                                fontSize: '1vw',
                                fontWeight: 500,
                                justifyContent: 'center',
                                borderTopLeftRadius: 4,
                                borderTopRightRadius: 4
                            }}
                        >
                            {powerLevel[settings.powerState]}
                        </ListSubheader>
                        <ListItem 
                            sx={{ 
                                height: '75%', 
                                width: '100%', 
                                padding: 0 ,
                                textAlign: 'left',
                            }}
                        >
                            <Typography
                                variant='body1'
                                style={{
                                    fontSize: '1vw',
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 400
                                }}
                                sx={{
                                    paddingLeft: 2, 
                                    paddingTop: 2,
                                    color: 'black'
                                }}
                            >
                                {powerLevelDescription[settings.powerState]}
                            </Typography>
                        </ListItem>
                    </List>
                    <List sx={{ height: '55%', padding: 0 }}>
                        <ListSubheader 
                            sx={{ 
                                height: '20%', 
                                width: '100%', 
                                bgcolor: '#424242',
                                color: 'white',
                                fontFamily: 'Segoe UI',
                                fontSize: '1vw',
                                fontWeight: 500,
                                justifyContent: 'center',
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0
                            }}
                        >
                            {settings.creatorState == 1 ? creatorType[settings.creatorState][settings.powerState] : creatorType[settings.creatorState]}
                        </ListSubheader>
                        <ListItem 
                            sx={{ 
                                height: '80%', 
                                width: '100%', 
                                padding: 0 ,
                                textAlign: 'left',
                                borderBottomLeftRadius: 4,
                                borderBottomRightRadius: 4
                            }}
                        >
                            <Typography
                                variant='body1'
                                style={{
                                    fontSize: '1vw',
                                    fontFamily: 'Segoe UI',
                                    fontWeight: 400
                                }}
                                sx={{
                                    paddingLeft: 2, 
                                    paddingTop: 2,
                                    color: 'black'
                                }}
                            >
                                {creatorTypeDescription[settings.creatorState][settings.powerState]}
                            </Typography>
                        </ListItem>
                    </List>
                </Item>
            </Grid>
        </>
    );
}
