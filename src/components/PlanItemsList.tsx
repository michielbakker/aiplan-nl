
import React from 'react';
import PlanItem from './PlanItem';

interface PlanItemsListProps {
  planItems: {
    number: number;
    content: string;
  }[];
}

interface ColorScheme {
  backgroundColor: string;
  buttonBgColor: string;
  textColor?: string;
  buttonTextColor?: string;
}

const COLOR_SCHEMES: ColorScheme[] = [
  {
    backgroundColor: '#C9BDA9',
    buttonBgColor: '#594F3F',
  },
  {
    backgroundColor: '#101E59',
    buttonBgColor: 'white',
	textColor: 'white',
	buttonTextColor: 'black',
  },
];

const PlanItemsList: React.FC<PlanItemsListProps> = ({ planItems }) => {
  return (
    <div className="flex flex-col items-center">
      {planItems.map((item, index) => (
        <PlanItem 
          key={item.number} 
          number={item.number} 
          content={item.content}
          colorScheme={COLOR_SCHEMES[index % COLOR_SCHEMES.length]}
        />
      ))}
    </div>
  );
};

export default PlanItemsList;
