import React, { useState, ChangeEvent, FormEvent } from 'react'
import { fetchProduct } from "../../../utils/fetches/FetchProduct"
import ProductList from './ProductList';


interface Measure {
  uri: string;
  label: string;
  weight: number;
}

interface Food {
  category: string;
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

const ProductSearch: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await fetchProduct(query);
      setProducts(data.hints);
    } catch (error) {
      console.error('Ошибка при поиске продуктов:', error);
    }
  };

  return (
    <main className='flex justify-center items-center'>
      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200">
              Product Search
            </h1>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Search any product you want!
            </p>
            <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
              {/* <!-- Form --> */}
              <form onSubmit={handleSearch}>
                <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                  <div className="flex-[1_0_0%]">
                    <label htmlFor="hs-search-article-1" className="block text-sm text-gray-700 font-medium dark:text-white"><span className="sr-only">Type any product</span></label>
                    <input type="text" name="hs-search-article-1" id="hs-search-article-1" value={query} onChange={handleInputChange}  className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Type any product"/>
                  </div>
                  <div className="flex-[0_0_auto]">
                    <a className="w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </form>
              {/* <!-- End Form --> */}
            </div>

            {/* Filter Place */}

            <ProductList products={products} />

          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductSearch