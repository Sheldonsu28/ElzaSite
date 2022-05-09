import React from 'react';
import './postPreview.css'

const postComponent = (props) => {
  const thumbLink = ""
  const intro = props.intro;
  return (
    <div className="postComponent">
      <img src='https://spotlight.it-notes.ru/wp-content/uploads/2017/11/748eecdf9a817226c9c2fa14ba58b76e.jpg'/>
      <p>{intro}</p>
    </div>
  );
}

export default postComponent