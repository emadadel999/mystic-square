import React from 'react';

import './Tile.css';

const Tile = props => {
    return <button disabled={props.disabled} className={props.className} onClick={props.onPress}>
        {props.children}
    </button>
}

export default Tile;