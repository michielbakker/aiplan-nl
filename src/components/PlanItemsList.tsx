
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
      {planItems.map((item) => (
        <PlanItem 
          key={item.number} 
          number={item.number} 
          content={item.content}
        />
      ))}
    </div>
  );
};

export default PlanItemsList;
