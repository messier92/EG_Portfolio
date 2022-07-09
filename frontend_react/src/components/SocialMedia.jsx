import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://www.linkedin.com/in/han-long-eugene-goh-773724b5/" target="_blank" rel="noref">
                <BsLinkedin/>
                </a>
            </div>
            <div>
            <a href="https://github.com/messier92" target="_blank" rel="noref">
                <BsGithub/>
            </a>
            </div>
        </div>
    )
}
 
export default SocialMedia;
