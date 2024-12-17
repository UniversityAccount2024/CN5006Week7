import React, { useState } from 'react';
import Happy from './Happy.png';  
import like from './like.png';
import sad from './sad.png';

const EmojiTexts = () => {
    const [inputText, setInputText] = useState('');
    const [imageSrc, setImageSrc] = useState(null);

    const handleChange = (e) => {
        setInputText(e.target.value);

        // Update image based on the input text
        if (e.target.value.toLowerCase() === 'happy') {
        setImageSrc(Happy);
        } else if (e.target.value.toLowerCase() === 'like') {
        setImageSrc(like);
        } else if (e.target.value.toLowerCase() === 'sad') {
        setImageSrc(sad);
        } else {
        setImageSrc(null); // If the input doesn't match any condition, no image will be displayed
        }
    };

    return (
        <div>
        <input
            type="text"
            value={inputText}
            onChange={handleChange}
            placeholder="Type 'Happy', 'Like', or 'Sad'"
        />
        <label>
            {imageSrc && <img src={imageSrc} alt={inputText} style={{ width: '50px', height: '50px' }} />}
        </label>
        </div>
    );
};

export default EmojiTexts;
