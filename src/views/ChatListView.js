import 'ChatListView.css';
import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import { getChannels } from '../services/ChannelService';
import { Link } from 'react-router-dom';

function ChatListView(props) {
    const [channels, setChannels] = useState(null);
    
    useEffect(async () => {
        setChannels(getChannels());
    }, []);

    return (
        <React.Fragment>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {
                    channels.map(channel => {
                        <React.Fragment>
                            <Link to={`${channel._id}`}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Participant Name" src="#" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Group Title"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    Person Name
                                                </Typography>
                                                {"- message"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </Link>
                            <Divider variant="inset" component="li" />
                        </React.Fragment>
                    })
                }
            </List>
        </React.Fragment>
    )
}

export default ChatListView;