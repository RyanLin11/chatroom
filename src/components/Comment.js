import './Comment.css';

const commentStyles = {
    borderRadius: '.5em',
    maxWidth: '80%'
};

const outboundTheme = {
    backgroundColor: '#2C38F4',
    color: 'white'
};

const inboundTheme = {
    backgroundColor: 'LightGrey',
    color: 'black'
};

function Comment(props) {
    return (
        <div className='comment-container' style={{flexDirection: props.inbound? 'row-reverse': 'row'}}>
            <div className='description' style={{alignItems: props.inbound? 'start':'end'}}>
                <p className='author-name' style={{textAlign: props.inbound? 'left': 'right'}}>{props.message.sender?.username || 'Anonymous'}</p>
                <div style={ Object.assign({}, commentStyles, props.inbound? inboundTheme : outboundTheme) }>
                    <p className='message'>{props.message.text}</p>
                </div>
            </div>
            <img className='profile-image' style={props.inbound? {marginRight:'.5em'} : {marginLeft:'.5em'}} src={'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'} />
        </div>
    )
}

export default Comment;