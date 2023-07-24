import React from 'react';
import {
    Grid,
    Typography,
    List,
    ListSubheader,
    ListItem,
    ListDivider
} from '@mui/joy'

export default function Name({ Item, karma, attributePoints, skillPoints, knowledgePoints, resourcePoints }) {

    const formattedResource = new Intl.NumberFormat('en-US').format(resourcePoints.resources);

    const infobar = [
        {
            name: 'Adjustment Points',
            var: attributePoints.adjustment
        },
        {
            name: 'Attribute Points',
            var: attributePoints.attribute
        },
        {
            name: 'Skill Points',
            var: skillPoints.skill
        },
        {
            name: 'Knowledge Points',
            var: knowledgePoints.knowledge
        },
        {
            name: 'Karma',
            var: karma
        },
        {
            name: 'Nuyen',
            var: `${formattedResource}¥`
        },
        {
            name: 'Essence',
            var: 0
        },
        {
            name: 'Essence Hole',
            var: 0
        },
    ]

    const info = infobar.map((infobar, index) => {
        return (
            <>
                <ListItem key={index} sx={{ width: '10%', paddingRight: 0, justifyContent: 'left' }}>
                    <Typography sx={{ fontFamily: 'Segoe UI' }}>
                        {infobar.name}: 
                    </Typography>
                </ListItem>
                <ListItem key={index} sx={{ width: '2.5%', paddingLeft: 0, justifyContent: 'right' }}>
                    <Typography sx={{ fontFamily: 'Segoe UI', fontWeight: 500 }}>
                        {infobar.var}
                    </Typography>
                </ListItem>
                {(index !== 7) &&
                <ListDivider sx={{ margin: 0, bgcolor: '#9EA4A9' }} />
                }
            </>
        );
    });

    return (
        <Grid xs={100} sx={{ bgcolor: "#ecebe6", padding: 1, height: "100%", paddingLeft: 0, paddingBottom: 0, borderBottom: 1, borderColor: '#9EA4A9' }}>
            <List sx={{ height: '100%', padding: 1, overflow: 'hidden' }}>
                <ListSubheader sx={{ height: '60%', paddingTop: 0, borderBottom: 1, borderColor: '#9EA4A9' }}>
                    <Typography sx={{ fontFamily: 'Segoe UI', fontSize: '2vw' }}>
                        Unnamed Runner
                    </Typography>
                </ListSubheader>
                <ListItem sx={{ height: '40%', padding: 0 }}>
                    <List orientation='horizontal' sx={{ width: '100%', padding: 0 }}>
                        {info}
                    </List>
                </ListItem>
            </List>
        </Grid>
    );
}