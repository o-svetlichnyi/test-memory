import { useNavigate } from 'react-router-dom';
import { List } from 'lucide-react';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome</h1>
          <p className="text-gray-600 mb-8">
            This is the main page of our beautiful application.
          </p>
          <button
            onClick={() => navigate('/list')}
            className="group flex items-center justify-center w-full px-6 py-3 text-white bg-indigo-600 rounded-lg transition-all duration-200 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200"
          >
            <List className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
            Go to List Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
