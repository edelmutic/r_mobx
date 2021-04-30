import { observer } from 'mobx-react-lite';
import React from 'react'
import { Button } from 'react-bootstrap';
import counter from '../store/counter';



const Counter = observer(() => {
    return (
        <div style={{ margin: '20px', textAlign: "center" }}>
            <div style={{ fontSize: '1.5rem' }}> {"Count =" + counter.count}</div>
            <Button variant="success" onClick={() => counter.increment()}>Plus</Button>{' '}
            <Button variant="danger" onClick={() => counter.decrement()}>Minus</Button>{' '}
        </div>
    )
})

export default Counter
