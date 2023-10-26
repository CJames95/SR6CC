import React, { useState, useEffect, useRef } from 'react';
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
        // add knowledge point handling here
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
        <div className={`${open ? 'fixed' : 'hidden'} inset-0 flex items-center justify-center z-50`}>
            <div className="bg-white p-6 w-full max-w-xl rounded shadow-lg">
                <h2 className="text-lg font-bold mb-4">Enter Knowledge Name:</h2>
                <div className="grid gap-4">
                    <input
                        type="text"
                        placeholder="Knowledge Name"
                        className="border rounded p-2 w-full focus:border-blue-500"
                        autoFocus
                        onChange={(e) => handleInputChange(e.target.value)}
                        onKeyDown={(e) => handleEnterKeyDown(e)}
                    />
                    <button onClick={handleClose} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

KnowledgeDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
};

export default function Knowledge({knowledgeTaken, handleKnowledgeTaken}) {

    const [scrollbarVisible, setScrollbarVisible] = useState(false);

    useEffect(() => {
        const element = document.getElementById('scrollContainer');
        function checkScrollbar() {
            if (element.scrollHeight > element.clientHeight) {
                setScrollbarVisible(true);
            } else {
                setScrollbarVisible(false);
            }
        }

        checkScrollbar(); // Initial check

        // Check again whenever the element's size changes
        window.addEventListener('resize', checkScrollbar);
        return () => window.removeEventListener('resize', checkScrollbar);
    }, []);

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
            <div className='w-full grid grid-cols-12 bg-gray-200'>
                <div className='flex items-center justify-between flex-wrap col-span-2'>
                    <button onClick={(e) => handleKnowledgeTaken(name, 'sub')} className="flex flex-auto justify-center items-center py-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-100">
                        <span class="material-symbols-sharp">do_not_disturb_on</span>
                    </button>
                </div>
                <div className='flex items-center justify-between flex-wrap px-4 py-2 col-span-10'>
                    {name}
                </div>
            </div>
        );
    });

    return (
        <div className='h-[calc(100vh-74px)] z-0 max-w-md mx-auto shadow-md md:max-w-2xl bg-gray-400'>
            <div className='px-4 py-2'>
                <div className='grid grid-cols-1 rounded bg-gray-500'>
                    <div className={`grid grid-cols-12 rounded-t bg-gray-500 border-b border-black ${scrollbarVisible ? 'pr-4' : ''}`}>
                        <div className='flex items-center text-center justify-center flex-wrap py-2.5 col-span-2 border-r border-black'>
                            Remove
                        </div>
                        <div className='flex items-center justify-start text-left flex-wrap px-4 py-2.5 col-span-10'>
                            Knowledge Name
                        </div>
                    </div>
                    <div id="scrollContainer" className='flex items-center justify-between flex-wrap overflow-auto' style={{ maxHeight: 'calc(100vh - 194px)' }}>
                        {knowledgeList}
                        <div className='w-full grid grid-cols-12'>
                            <button onClick={(e) => handleOpen(e)} className='flex justify-center text-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-b col-span-12'>
                                Add Knowledge
                            </button>        
                        </div>
                    </div>
                </div>
            </div>
            {/* duplicate for language here and adjust heights */}
            <div className='px-4 py-2'>
                <div className='grid grid-cols-1 bg-gray-500'>
                    <div className='flex items-center justify-between flex-wrap px-4 py-2.5'>
                        test
                    </div>
                </div>
            </div>
            <KnowledgeDialog
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}