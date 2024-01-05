import React from 'react';

import placeholderImg from "../../../img/NotFoundImg.jpg"

interface ProductCardProps {
  product: {
    food: {
      category: string;
      label: string;
      image: string;
      knownAs: string;  
      nutrients: {
        ENERC_KCAL: number;
        CHOCDF: number;
        FAT: number;
        PROCNT: number;
      };
    };
    measures: {
      uri: string;
      label: string;
      weight: number;
    }[];
  };
}

const roundTo= (value: number): string => {
  const roundedValue = value.toFixed(2);
  return parseFloat(roundedValue).toString();
};

const calculatePercentage = (value: number, total: number): string => {
  const percentage = (value / total) * 100;
  return `${percentage}%`;
};


const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { food, measures } = product;
  const {
    category,
    label,
    image,
    knownAs,
    nutrients: { CHOCDF, ENERC_KCAL, FAT, PROCNT },
  } = food;
  const hasImage = !!image;
  const totalNutrients = CHOCDF + FAT + PROCNT;


  return (
    <div className="flex flex-col p-2 border bg-white shadow-sm border-gray-200 rounded-xl">
      {hasImage && <img src={image} alt={label} className='rounded-xl' />} 
      {!hasImage && <img src={placeholderImg} alt={label} className="placeholder-image rounded-xl" />} 
      <h2 className="text-xl p-2 font-semibold text-gray-800">{label}</h2>
      <p className="block mb-1 text-xs font-semibold uppercase text-blue-600">Category: {category}</p>
      <p className="mt-3 text-gray-800">Known As: {knownAs}</p>
      
      <div className="justify-evenly mt-3 p-2 text-gray-800 border border-gray-200 shadow-sm rounded-xl">
        <h3>Calories: {roundTo(ENERC_KCAL)}kcal</h3>
        <div className='flex p-2 rounded-xl'>
          <div className='' style={{ width: calculatePercentage(FAT, totalNutrients), background: '#FF7F50', minHeight: '20px'}}/>  
          <div className='' style={{ width: calculatePercentage(CHOCDF, totalNutrients), background: '#66CDAA', minHeight: '20px' }}/>       
          <div className='' style={{ width: calculatePercentage(PROCNT, totalNutrients), background: '#6495ED', minHeight: '20px' }}/>       
        </div>
        <div className='flex justify-evenly p-2'>
          <div>
            <p>Fat</p>
            <p>{roundTo(FAT)}g</p>
          </div>
          <div>
            <p>Carbs</p>
            <p>{roundTo(CHOCDF)}g</p>
          </div>
          <div>
            <p>Protein</p>
            <p>{roundTo(PROCNT)}g</p>
          </div>
        </div>
      </div>
      <p className="mt-3 text-gray-800">Measures:</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-3 p-2 text-gray-800 border border-gray-200 shadow-sm rounded-xl">
        {measures.map((measure, index) => (
          <div className='' key={index}>{`${measure.label}: ${roundTo(measure.weight)}`}</div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;