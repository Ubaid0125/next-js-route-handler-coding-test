import { SimpleCard } from '@/app/Card';
import 'tailwindcss/tailwind.css';
import { useEffect, useState } from 'react';

const Home = () => {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState('createdAt'); // Default sort by createdAt

  useEffect(() => {
    fetch('/api/items') // Relative URL to your API route
      .then((response) => response.json())
      .then((data) => {
        console.log('Data:', data);
        const processedItems = data.items.map((item: { createdAt: { split: (arg0: string) => [any, any]; }; }) => {
          const [createdAt, fileName] = item.createdAt.split(';');
          return { createdAt, fileName };
        });

        // Sort the items based on sortBy selection
        const sortedItems = processedItems.sort((a: { [x: string]: string; }, b: { [x: string]: any; }) =>
          a[sortBy].localeCompare(b[sortBy])
        );

        console.log('sortBy', sortBy);

        console.log('Sorted items:', sortedItems);

        setItems(sortedItems);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [sortBy]); // Re-run effect when sortBy changes

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex justify-center p-6">
        <div className="mr-4">
          <label htmlFor="sortBy" className="text-sm mr-2">
            Sort By:
          </label>
          <select
            id="sortBy"
            className="border border-gray-300 bg-gray-100 text-gray-900 rounded p-2"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="createdAt">Created At</option>
            <option value="fileName">File Name</option>
          </select>
        </div>
      </div>
      <main className="flex flex-col items-center p-24">
        <div className="mb-32 grid gap-6 grid-cols-4 lg:max-w-5xl lg:w-full lg:text-left">
          {items.map((item, index) => (
            <SimpleCard key={index} title={item?.createdAt} description={item?.fileName} href="#" />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;