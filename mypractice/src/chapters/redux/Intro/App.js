import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { decrement, increment, incrementAsync, incrementByAmount } from './store/reducers/CounterSlicer';

const App = () => {
  const { value } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  };

  const buttonStyle = {
    fontSize: '20px',
    padding: '10px 20px',
    margin: '0 10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h2>Counter: {value}</h2>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={()=>dispatch(increment())}>
            Increment
          </button>
          <button style={buttonStyle} onClick={()=>dispatch(decrement())}>
            Decrement
          </button>
          <button style={buttonStyle} onClick={()=>dispatch(incrementAsync(5))}>
            Increment by 5
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
