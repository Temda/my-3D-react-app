import React from 'react';

const Card = ({ imageUrl, title, description }) => {
  return (
    <div style={cardStyle}>
      <img src={imageUrl} alt={title} style={imageStyle} />
      <div style={cardContentStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={descriptionStyle}>{description}</p>
      </div>
    </div>
  );
};

// Styles
const cardStyle = {
    backgroundColor: '#fff',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
  width: '300px',
  margin: '15px',
  borderRadius: '10px',
  overflow: 'hidden',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
};

const cardContentStyle = {
  padding: '15px',
};

const titleStyle = {
  margin: '0',
  fontWeight: 'bold',
};

const descriptionStyle = {
  color: 'grey',
};

export default Card;
