import React from 'react';
import FoodCard from './ProductCard';

interface Measure {
  uri: string;
  label: string;
  weight: number;
}

interface Food {
  category: string;
  brand: string;
  label: string;
  image: string;
  knownAs: string;
  nutrients: {
    CHOCDF: number;
    ENERC_KCAL: number;
    FAT: number;
    PROCNT: number;
  };
}

interface Product {
  food: Food;
  measures: Measure[];
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
  <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">   
        {products.map((product, index) => (
          <FoodCard key={index} product={product} />
        ))}
    </div> 
  </div>
  );
};

export default ProductList;