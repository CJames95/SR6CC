import React, { useEffect } from 'react';
import {
    Grid,
    List,
    ListItem,
    ListSubheader,
    ListItemButton,
    ListDivider,
    Table
} from '@mui/joy'
import Qualities from './qualities.jsx';
import Abilities from './abilities.jsx';

export default function Overview({ Item, qualitiesArray, handleUpdateQualitiesArray, qualityState, handleQualityState, priorityButtons, attributes, handleAttributePoints, chosenMetatype }) {

    return (
        <>
            <Grid xs={80} sx={{ bgcolor: "#e1e1da", padding: 1, height: "100%" }}>
                <Grid container columns={100} sx={{ flexGrow: 1, height: '25%' }}>
                    <Grid xs={100}>
                        <Item sx={{ boxSizing: 'border-box', height: '100%', margin: 0 }}>
                            char
                        </Item>
                    </Grid>
                </Grid>
                <Grid container columns={100} sx={{ flexGrow: 1, height: '75%' }}>
                    <Grid xs={65} sx={{ paddingTop: 2 }}>
                        <Item sx={{ boxSizing: 'border-box', height: '100%', margin: 0, padding: 0 }}>
                            <Abilities
                                priorityButtons={priorityButtons}
                                attributes={attributes}
                                handleAttributePoints={handleAttributePoints}
                                chosenMetatype={chosenMetatype}
                            />
                        </Item>
                    </Grid>
                    <Grid xs={35} sx={{ paddingTop: 2, paddingLeft: 2, maxHeight: '100%' }}>
                        <Item sx={{ boxSizing: 'border-box', height: '100%', margin: 0, padding: 0 }}>
                            <Qualities 
                                qualitiesArray={qualitiesArray}
                                handleUpdateQualitiesArray={handleUpdateQualitiesArray}
                                qualityState={qualityState}
                                handleQualityState={handleQualityState}
                            />
                        </Item>
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={20} sx={{ bgcolor: "#e1e1da", padding: 1, height: "100%" }}>
                <Item sx={{ boxSizing: 'border-box', height: '100%' }}>
                    desc
                </Item>
            </Grid>
        </>
    );
}