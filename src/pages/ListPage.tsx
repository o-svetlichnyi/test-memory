import {useState} from 'react';
import { Home } from 'lucide-react';
import ListItem from '../components/ListItem';
import Pagination from '../components/Pagination';
import {generateItems, ListItemType} from '../utils/generateItems';
import {useNavigate} from "react-router-dom";

const ITEMS_PER_PAGE = 100;
const TOTAL_ITEMS = 1000;

function ListUl({listItemTypes}) {
  return <ul className="space-y-4 mb-8">
    {listItemTypes.map(item=><ListItem
        key={item.id}
        index={item.id}
        title={item.title}
        description={item.description}
    />)}

  </ul>;
}

const ListPageLocal =({listItemTypes}:{listItemTypes: ListItemType[]}) => {
  const navigate = useNavigate();

  return <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-500 p-4">
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">List Page</h1>
            <p className="text-gray-600 mt-2">
              Showing items
            </p>
          </div>
          <button
              onClick={() => {
                navigate('/');
              }}
              className="group flex items-center px-4 py-2 text-white bg-indigo-600 rounded-lg transition-all duration-200 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200"
          >
            <Home className="w-5 h-5 mr-2 transition-transform group-hover:scale-110"/>
            Back Home
          </button>
        </div>

        <ListUl listItemTypes={listItemTypes} />

      </div>
    </div>
  </div>;
}

const ListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const allItems = generateItems(TOTAL_ITEMS);
  const totalPages = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE);

  const listItemTypes = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return allItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  return (
      <>
        <ListPageLocal
           listItemTypes={listItemTypes()}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </>
  );
};

export default ListPage;
