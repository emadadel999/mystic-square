import React from 'react';

import './Tile.css';

const Tile = props => {
    return <div disabled={props.disabled} className={props.className} onClick={props.onPress}>
        {props.children}
    </div>
}

export default Tile;