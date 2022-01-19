import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            email={robots[i].name}
            name={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
