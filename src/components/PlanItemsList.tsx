
import React from 'react';
import PlanItem from './PlanItem';

interface PlanItemsListProps {
  planItems: {
    number: number;
    content: string;
  }[];
}

const PlanItemsList: React.FC<PlanItemsListProps> = ({ planItems }) => {
  return (
    <div className="flex flex-col items-center">
      {planItems.map((item, index) => (
        <PlanItem 
          key={item.number} 
          number={item.number} 
          content={item.content}
          backgroundColor={index % 2 === 0 ? '#EDE9F4' : '#C9BDA9'}
        />
      ))}
    </div>
  );
};

export default PlanItemsList;
