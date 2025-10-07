// Commented out the original Publication page content
// import React from 'react';
// import { BookOpen, Award, ExternalLink, Star } from 'lucide-react';

// const Publication = () => {
//   const publications = [
//     {
//       title: 'IEEE Paper Forwardings',
//       description: 'All accepted full papers will be forwarded in IEEE Delhi section.',
//       features: ['Peer-reviewed', 'Indexed in Scopus', 'DOI assigned', 'Global visibility'],
//       impact: 'High Impact',
//       color: 'from-blue-500 to-blue-600'
//     }
//   ];

//   const benefits = [
//     {
//       icon: <Award size={24} />,
//       title: 'Recognition',
//       description: 'Best paper awards and recognition for outstanding contributions'
//     },
//     {
//       icon: <BookOpen size={24} />,
//       title: 'Accessibility',
//       description: 'Open access options available for maximum research visibility'
//     },
//     {
//       icon: <Star size={24} />,
//       title: 'Quality',
//       description: 'Rigorous peer review process ensuring high-quality publications'
//     }
//   ];

//   return (
//     <div className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
//             Publication Opportunities
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// Temporarily routing the Publication page to the ToBeUpdated page
import ToBeUpdated from './ToBeUpdated';

const Publication = () => {
  return <ToBeUpdated />;
};

export default Publication;