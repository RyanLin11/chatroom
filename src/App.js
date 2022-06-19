import Comment from './components/Comment';
import InputBar from './components/InputBar';
import Container from '@mui/material/Container';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container className='comments-container'>
        <Comment text='Hello, world!' inbound={false} />
        <Comment text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id elit orci. In eleifend ligula id velit ornare laoreet. Aenean non bibendum metus, non varius urna. Aenean nec cursus tortor. Nulla facilisi. Nullam ligula velit, blandit at turpis sed, laoreet blandit nunc. Aliquam erat volutpat.' inbound={true} />
        <Comment text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id elit orci. In eleifend ligula id velit ornare laoreet. Aenean non bibendum metus, non varius urna. Aenean nec cursus tortor. Nulla facilisi. Nullam ligula velit, blandit at turpis sed, laoreet blandit nunc. Aliquam erat volutpat.' inbound={false} />
        <Comment text='Hello, world!' inbound={false} />
        <Comment text='Hello, world!' inbound={false} />
        <Comment text='Hello, world!' inbound={false} />
        <Comment text='Hello, world!' inbound={false} />
        <Comment text='Hello, world!' inbound={false} />
        <Comment text='Hello, world!' inbound={false} />
        <Comment text='Hello, world!' inbound={false} />
        <Comment text='Hello, world!' inbound={false} />
        <Comment text='Hello, world!' inbound={false} />
        <Comment text='Hello, world!' inbound={false} />
        <Comment text='Hello, world!' inbound={false} />
        <Comment text='Hello, world!' inbound={false} />
      </Container>
      <InputBar />
    </div>
  );
}

export default App;
