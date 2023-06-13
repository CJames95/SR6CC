import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button, ButtonGroup, IconButton } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { Select, MenuItem, InputLabel } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import AddIcon from '@mui/icons-material/Add';
import {
    Table,
    TableRow,
    TableCell
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const headerBackground = grey[800];

const Item = styled(Paper)(({ theme }) => ({
    display: 'table',
    tableLayout: 'fixed',
    height: '100%',
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

function KnowledgeDialog(props) {
    const { onClose, open } = props;
    const [tempValue, setTempValue] = React.useState('');
    useEffect(() => {
        console.log(tempValue)
    }, [tempValue])

    const handleClose = () => {
        onClose(tempValue);
    };
    const handleInputChange = (value) => {
        setTempValue(value)
    }
    const handleEnterKeyDown = (event) => {
        console.log(event.key)
        if(event.key === 'Enter') {
            event.preventDefault();
            handleClose();
        }
    }

    return (
        <Dialog onClose={handleClose} open={open} fullWidth maxWidth='sm'>
            <DialogTitle>Enter Knowledge Name:</DialogTitle>
            <Table>
                <TableRow>
                    <TableCell>
                        <FormControl fullWidth>
                        <TextField
                            label='Knowledge Name' 
                            autoFocus
                            onChange={(e) => handleInputChange(e.target.value)}
                            onKeyDown={(e) => handleEnterKeyDown(e)}
                            sx={{ paddingBottom: 1 }}
                        />
                        <Button variant='contained' onClick={handleClose} sx={{ height: 55 }}>Submit</Button>
                        </FormControl>
                    </TableCell>
                </TableRow>
            </Table>
        </Dialog>
    );
}

KnowledgeDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
};

export default function Knowledge({knowledgeTaken, handleKnowledgeTaken}) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = (event) => {
        event.currentTarget.blur()
        setOpen(true);
    }
    const handleClose = (value) => {
        setOpen(false);
        handleKnowledgeTaken(value, 'add')
    }

    const knowledgeList = knowledgeTaken.sort(function(a, b) {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    }).map((name, index) => {

        return (
            <ListItem disablePadding={true} key={index}>
                    <ListItemText 
                        primaryTypographyProps={{
                            fontFamily: 'Segoe UI',
                            fontSize: 20,
                            fontWeight: 500
                        }}
                        primary={
                            <Table>
                            <TableRow>
                                <TableCell sx={{ width: '20%' }}>
                                    <IconButton color='primary' onClick={(e) => handleKnowledgeTaken(name, 'sub')}><RemoveCircleIcon/></IconButton>
                                </TableCell>
                                <TableCell sx={{ width: '80%' }}>
                                    {name}
                                </TableCell>
                            </TableRow>
                        </Table>
                        }
                    />
            </ListItem>
        );
    });

    return (
        <Grid xl={6} lg={6} md={6} sm={6} xs={6} spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>
            <Item>
                <List
                    sx={{
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 800,
                        padding: 0
                    }}
                >
                    <ListSubheader 
                        align='left' 
                        sx={{
                            height: 55,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center', 
                            bgcolor: headerBackground, 
                            color: 'white',
                            fontFamily: 'Segoe UI',
                            fontSize: 20,
                            fontWeight: 500,
                        }}
                    >
                        <Table>
                            <TableRow>
                                <TableCell sx={{ width: '20%' }}>
                                    Add / Remove
                                </TableCell>
                                <TableCell sx={{ width: '80%' }}>
                                    Knowledge Skill Name
                                </TableCell>
                            </TableRow>
                        </Table>
                    </ListSubheader>
                    {knowledgeList}
                    <ListItem disablePadding={true}>
                            <ListItemText 
                                primaryTypographyProps={{
                                    fontFamily: 'Segoe UI',
                                    fontSize: 20,
                                    fontWeight: 500
                                }}
                                primary={
                                    <Button fullWidth onClick={(e) => handleOpen(e)}>
                                        <Table>
                                            <TableRow>
                                                <TableCell sx={{ width: '20%' }}>
                                                    <AddCircleIcon/>
                                                </TableCell>
                                                <TableCell sx={{ width: '80%' }}>
                                                    Add Knowledge Skill
                                                </TableCell>
                                            </TableRow>
                                        </Table>
                                    </Button>
                                }
                            />
                    </ListItem>
                    <KnowledgeDialog
                        open={open}
                        onClose={handleClose}
                    />
                </List>
            </Item>
        </Grid>
    );
}