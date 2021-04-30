import React from 'react'
import { Button } from 'react-bootstrap';

const Counter = () => {
    return (
        <div style={{ margin: '20px' }}>
            <Button variant="success" >Plus</Button>{' '}
            <Button variant="danger">Minus</Button>{' '}
        </div>
    )
}

export default Counter
