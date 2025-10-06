import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ToBeUpdated = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 flex items-center justify-center">
      <div className="text-center max-w-lg p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-4 border-gray-300 dark:border-gray-600" style={{ borderImage: 'linear-gradient(to right, silver, gray) 1' }}>
        <div className="flex justify-center mb-4">
          <Clock size={48} className="text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Page Under Development</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          We are working hard to bring you the latest updates. Please check back soon!
        </p>
        <Link 
          to="/"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ToBeUpdated;