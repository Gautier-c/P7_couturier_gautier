import React from 'react';
import Publish from '../Publish/Publish';

function Wall (){
    return (
        <div>
            <h1>Postez des trucs cool</h1>
            {<Publish />}
        </div>
    )
}
export default Wall;