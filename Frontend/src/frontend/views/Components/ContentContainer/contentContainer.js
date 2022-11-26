import React from 'react';
import Card from '@mui/material/Card';
import './contentContainer.css';

const ContentContainer = (props) => {
  return (
    <div className='sectionContainer'>
      <h1 className='sectionTitle'>{props.sectionTitle}</h1>
        <Card className='contentCard'>
          {props.children}
        </Card>
    </div>
  );
}

export default ContentContainer;