// import React from 'react';
// import { Link } from 'react-router-dom';

// const Card = () => {
//   const profileData = {
//     imgSrc: "https://randomuser.me/api/portraits/men/32.jpg",
//     name: "John Doe",
//     company: "XYZ Corporation",
//     interviewer: "Mr. Smith",
//     date: "2024-10-25",
//     icons: ["fab fa-js-square", "fab fa-react", "fab fa-node", "fas fa-database"]
//   };

//   return (
//     <div className="flex justify-center">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
//         {[...Array(12)].map((_, index) => (
//           <div
//             key={index}
//             className="flex items-center p-6 bg-white rounded-lg shadow-lg space-x-5"
//           >
//             <img
//               src={profileData.imgSrc}
//               alt="Avatar"
//               className="w-24 h-24 rounded-full border-2 border-blue-400 shadow-lg object-cover"
//             />
//             <div className="flex-grow p-4">
//               <h2 className="text-3xl font-semibold text-gray-800 mb-1">{profileData.name}</h2>
//               <p className="text-lg text-gray-700">Company: {profileData.company}</p>
//               <p className="text-lg text-gray-700">Interviewer: {profileData.interviewer}</p>
//               <p className="text-lg text-gray-700">Date: {profileData.date}</p>
//               <div className="flex space-x-3 mt-3 text-blue-600 text-xl">
//                 {profileData.icons.map((iconClass, i) => (
//                   <i key={i} className={iconClass}></i>
//                 ))}
//               </div>
//               <Link to={"/Info"}>
//               <button className='mt-5 bg-slate-100 text-black px-4 py-2 rounded-md hover:bg-red-500 '>Read more</button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Card;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Card = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/experiences');
        setExperiences(response.data);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {experiences.map((experience) => (
          <div
            key={experience._id}
            className="flex items-center p-6 bg-white rounded-lg shadow-lg space-x-5"
          >
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Avatar"
              className="w-24 h-24 rounded-full border-2 border-blue-400 shadow-lg object-cover"
            />
            <div className="flex-grow p-4">
              <h2 className="text-3xl font-semibold text-gray-800 mb-1">{experience.name}</h2>
              <p className="text-lg text-gray-700">Company: {experience.company}</p>
              <p className="text-lg text-gray-700">Interviewer: {experience.interviewer}</p>
              <p className="text-lg text-gray-700">Date: {new Date(experience.date).toLocaleDateString()}</p>
              {/* <div className="mt-3">
                {/* <h3 className="text-lg font-semibold text-gray-800">Common Questions:</h3> */}
                {/* <ul className="list-disc list-inside text-gray-700">
                  {experience.questions.slice(0, 5).map((question, index) => (
                    <li key={index}>{question}</li>
                  ))} */}
                {/* </ul> */} 
              {/* </div> */}
              {/* <div className="mt-3">
                <h3 className="text-lg font-semibold text-gray-800">Frequent Data Structures:</h3>
                {/* <p className="text-gray-700">{experience.dsa.join('')}</p> */}
              {/* </div> */} 
              <Link to={`/info/${experience._id}`}>
                <button className='mt-5 bg-slate-100 text-black px-4 py-2 rounded-md hover:bg-red-500'>
                  Read more
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
