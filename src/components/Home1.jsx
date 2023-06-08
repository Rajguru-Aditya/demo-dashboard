import React from 'react';
import { Card, Elevation, Button } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';

const Home1 = () => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '20px',
  };

  const cardStyle = {
    width: '300px',
    height: '150px',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const buttonStyle = {
    marginTop: '10px',
  };

  const cardData = [
    { id: 1, title: 'Card 1', description: 'Description for Card 1', buttonText: 'Button 1' },
    { id: 2, title: 'Card 2', description: 'Description for Card 2', buttonText: 'Button 2' },
    { id: 3, title: 'Card 3', description: 'Description for Card 3', buttonText: 'Button 3' },
    { id: 4, title: 'Card 4', description: 'Description for Card 4', buttonText: 'Button 4' },
  ];

  return (
    <div style={containerStyle}>
      {cardData.map((card) => (
        <Card key={card.id} style={cardStyle} elevation={Elevation.TWO}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <Button style={buttonStyle} intent="primary" text={card.buttonText} />
        </Card>
      ))}
    </div>
  );
};

export default Home1;
