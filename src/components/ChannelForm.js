import { useState, useEffect } from 'react';
import { FormControl, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, InputLabel, OutlinedInput, Box, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getUsers } from '../services/UserService';
import { addChannel } from '../services/ChannelService';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        }
    }
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
};

function ChannelForm(props) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [participants, setParticipants] = useState([]);
    const [users, setUsers] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const {target: {value}} = event;
        setParticipants(typeof value === 'string'? value.split(',') : value);
    }

    const handleSubmit = async (event) => {
        const newChannel = await addChannel(participants);
        props.addChannel(newChannel);
        handleClose();
    }

    useEffect(() => {
        getUsers()
        .then(users => {
            setUsers(users);
        });
    }, []);

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Chat
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Group Chat</DialogTitle>
                <DialogContent>
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id='participants-label'> Participants </InputLabel>
                        <Select
                            labelId='participants-label'
                            id='participants-input'
                            multiple
                            value={participants}
                            onChange={handleChange}
                            input={<OutlinedInput id='participants-input' label='Participants' />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={users.find(user => user._id === value).username} />
                                    ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                            >
                            {Array.isArray(users) && users.map((user) => (
                                <MenuItem
                                    key={user._id}
                                    value={user._id}
                                    style={getStyles(user._id, users.map(user=>user._id), theme)}
                                >
                                    {user.username}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Create Chat</Button>
                </DialogActions>
            </Dialog>
        </div>
  );
}

export default ChannelForm;