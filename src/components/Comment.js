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
        <div className='comment-container' style={{'flex-direction': props.inbound? 'row-reverse': 'row'}}>
            <div class='description' style={{'align-items': props.inbound? 'start':'end'}}>
                <p className='author-name' style={{'text-align': props.inbound? 'left': 'right'}}>{props.author?.name || 'Anonymous'}</p>
                <div style={ Object.assign({}, commentStyles, props.inbound? inboundTheme : outboundTheme) }>
                    <p className='message'>{props.text}</p>
                </div>
            </div>
            <img className='profile-image' style={props.inbound? {'margin-right':'.5em'} : {'margin-left':'.5em'}} src={props.author?.profileImage || 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'} />
        </div>
    )
}

export default Comment;