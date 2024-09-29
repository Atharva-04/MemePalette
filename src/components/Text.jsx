import React, { useState } from 'react';
import Draggable from 'react-draggable';

function Text() {
    const [editMode, setEditMode] = useState(false);
    const [val, setVal] = useState("Double click to edit");
    const [color, setColor] = useState('#000'); // Default text color

    const inputStyle = {
        fontSize: '16px', 
        fontWeight: 'bolder',
        border: 'none', 
        padding: '5px', 
        color: color, // Apply color state to input
    };

    const textHeadingStyle = {
        fontSize: '24px', 
        fontWeight: 'bold',
        color: color, // Apply color state to heading
    };

    return (
        <Draggable>
            <div>
                {editMode ? (
                    <div>
                        <input
                            style={inputStyle}
                            value={val}
                            onChange={e => setVal(e.target.value)}
                            onBlur={() => setEditMode(false)} // End editing on blur
                        />
                        <input 
                            type="color" 
                            value={color} 
                            onChange={(e) => setColor(e.target.value)} // Update color state
                            style={{ marginLeft: '5px' }} // Optional: add some spacing
                        />
                    </div>
                ) : (
                    <h1
                        style={textHeadingStyle}
                        onDoubleClick={() => setEditMode(true)}
                    >
                        {val}
                    </h1>
                )}
            </div>
        </Draggable>
    );
}

export default Text;
