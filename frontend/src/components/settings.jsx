import React from 'react';
import { Grid, Typography, ButtonGroup, Button, Select, FormControl, Option, Item } from 'joyui';

// Static variables
const powerLevel = ['Street', 'Standard', 'Prime'];
const powerLevelDescription = ['Street level description', 'Standard level description', 'Prime level description'];
const creatorType = ['Priority', ['Sum to Ten', 'Sum to Ten'], 'Karma', 'Life'];
const creatorTypeDescription = [['Priority description', 'Priority description', 'Priority description'], ['Sum to Ten description', 'Sum to Ten description'], 'Karma description', 'Life description'];

export default function Settings({ powerState, handlePowerState, buttonState, handleButtonState }) {
    return (
        <>
            <Grid xs={40} sx={{ bgcolor: "#e1e1da", padding: 1, height: '100%' }}>
                <Item sx={{ height: '100%', boxSizing: 'border-box' }}>
                    <ButtonGroup orientation='vertical' variant='solid'> 
                        <FormControl variant='filled' fullWidth={true}>
                            <Select sx={{marginBottom: 1}} defaultValue={1} label='Power Level' onChange={handlePowerState}>
                                <Option value={0}>
                                    {powerLevel[0]}
                                </Option>
                                <Option value={1}>
                                    {powerLevel[1]}
                                </Option>
                                <Option value={2}>
                                    {powerLevel[2]}
                                </Option>
                            </Select>
                        </FormControl>
                        <Button value={0} onClick={e => handleButtonState(0)} sx={{height: 80}}>
                            {creatorType[0]}
                        </Button>
                        <Button value={1} onClick={e => handleButtonState(1)} sx={{height: 80}}>
                            {creatorType[1][powerState]}
                        </Button>
                        <Button value={2} onClick={e => handleButtonState(2)} sx={{height: 80}}>
                            {creatorType[2]}
                        </Button>
                        <Button value={3} onClick={e => handleButtonState(3)} sx={{height: 80}}>
                            {creatorType[3]}
                        </Button>                                
                    </ButtonGroup>
                </Item>
            </Grid>
            <Grid xs={60} sx={{ bgcolor: "#e1e1da", padding: 1, height: '100%' }}>
                <Item sx={{ height: '100%', boxSizing: 'border-box' }}>
                    <Typography
                        variant='h1'
                        style={{
                            fontSize: 36,
                            fontFamily: 'Segoe UI',
                            fontWeight: 500
                        }}
                        sx={{
                            paddingLeft: 2,
                            paddingTop: 2
                        }}
                    >
                        {powerLevel[powerState]}
                    </Typography>
                    <Typography
                        variant='body1'
                        style={{
                            fontSize: 18,
                            fontFamily: 'Segoe UI',
                            fontWeight: 400
                        }}
                        sx={{
                            paddingLeft: 2, 
                            paddingTop: 2
                        }}
                    >
                        {powerLevelDescription[powerState]}
                    </Typography>
                    <Typography
                        variant='h1'
                        style={{
                            fontSize: 36,
                            fontFamily: 'Segoe UI',
                            fontWeight: 500
                        }}
                        sx={{
                            paddingLeft: 2,
                            paddingTop: 4
                        }}
                    >
                        {buttonState == 1 ? creatorType[buttonState][powerState] : creatorType[buttonState]}
                    </Typography>
                    <Typography
                        variant='body1'
                        style={{
                            fontSize: 18,
                            fontFamily: 'Segoe UI',
                            fontWeight: 400
                        }}
                        sx={{
                            paddingLeft: 2, 
                            paddingTop: 0
                        }}
                    >
                        {creatorTypeDescription[buttonState][powerState]}
                    </Typography>
                </Item>
            </Grid>
        </>
    );
}
