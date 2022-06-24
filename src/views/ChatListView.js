import React, { useEffect, useState } from 'react';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Typography, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import ChannelForm from '../components/ChannelForm';
import { useAuth } from '../auth/AuthProvider';

function ChatListView(props) {
    const auth = useAuth();
    const [channels, setChannels] = useState(auth.user.channels);

    function addChannel(newChannel) {
        auth.user.channels.push(newChannel);
    }

    useEffect(() => {
        console.log(Array.isArray(channels));
        setChannels(auth.user.channels);
    });

    return (
        <React.Fragment>
            <ChannelForm addChannel={addChannel} />
            <List sx={{ width: 360, maxWidth: 360, bgcolor: 'background.paper' }}>
                {channels.map(channel => 
                        (<ListItem key={channel._id} alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Participant Name" src="defaultprofileimage.png" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={<Link to={channel._id}>{channel.participants.map(member=>member.username).join(", ")}</Link>}
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
                                        {"- Send a Message!"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>)
                )}
            </List>
        </React.Fragment>
    )
}

export default ChatListView;