// // import React, { useState } from 'react';

// // const InterviewExperienceBlog = () => {
// //   // State for managing current experience index
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   // Data for interview experiences
// //   const experiences = [
// //     {
// //       name: 'John Doe',
// //       company: 'XYZ Corporation',
// //       interviewer: 'Mr. Smith',
// //       date: '2024-10-25',
// //       questions: [
// //         'What are closures in JavaScript?',
// //         'Explain polymorphism in Object-Oriented Programming.',
// //         'Describe the SOLID principles in software design.',
// //         'What are the time complexities of basic sorting algorithms?',
// //         'Explain the difference between TCP and UDP protocols.',
// //         'How does garbage collection work in Java?',
// //         'What is event delegation in JavaScript?',
// //         'Explain the concept of recursion with an example.',
// //         'Describe memory management in Python.',
// //         'What are the main types of data structures?',
// //         'Explain hashing and its applications.',
// //         'What is the purpose of the "this" keyword in JavaScript?',
// //         'Describe RESTful APIs and how they work.',
// //         'What is the Observer pattern?',
// //         'Explain the concept of multithreading in Java.',
// //       ],
// //       dsa: [
// //         'Array',
// //         'Linked List',
// //         'Binary Search Tree',
// //         'Heap',
// //         'Graph',
// //         'Stack and Queue',
// //         'Hash Table',
// //       ],
// //       topics: [
// //         { topic: 'Arrays', frequency: 5 },
// //         { topic: 'Strings', frequency: 3 },
// //         { topic: 'Linked Lists', frequency: 4 },
// //         { topic: 'Trees', frequency: 6 },
// //         { topic: 'Graphs', frequency: 2 },
// //         { topic: 'Sorting Algorithms', frequency: 7 },
// //       ],
// //     },
// //     {
// //       name: 'Jane Smith',
// //       company: 'ABC Tech',
// //       interviewer: 'Mrs. Johnson',
// //       date: '2024-10-26',
// //       questions: [
// //         'What is a promise in JavaScript?',
// //         'How does the event loop work in JavaScript?',
// //         'Explain the concept of scope in JavaScript.',
// //         'What are the different types of APIs?',
// //         'How do you manage state in React?',
// //         'What is the virtual DOM?',
// //         'Explain the difference between synchronous and asynchronous code.',
// //         'What is a closure and how is it used?',
// //         'What is the purpose of the "bind" method in JavaScript?',
// //         'Describe the differences between SQL and NoSQL databases.',
// //         'What is CORS and why is it important?',
// //         'Explain the concept of middleware in Express.js.',
// //         'What are the main differences between REST and GraphQL?',
// //         'What is a singleton pattern?',
// //         'Explain how JWT works for authentication.',
// //       ],
// //       dsa: [
// //         'Array',
// //         'Linked List',
// //         'Binary Search Tree',
// //         'Heap',
// //         'Graph',
// //         'Stack and Queue',
// //         'Hash Table',
// //       ],
// //       topics: [
// //         { topic: 'Recursion', frequency: 4 },
// //         { topic: 'Hashing', frequency: 3 },
// //         { topic: 'Dynamic Programming', frequency: 5 },
// //         { topic: 'Greedy Algorithms', frequency: 2 },
// //         { topic: 'Searching Algorithms', frequency: 6 },
// //         { topic: 'Big O Notation', frequency: 4 },
// //       ],
// //     },
// //     {
// //       name: 'Alice Brown',
// //       company: 'Tech Innovations',
// //       interviewer: 'Mr. Lee',
// //       date: '2024-10-27',
// //       questions: [
// //         'What are the differences between var, let, and const in JavaScript?',
// //         'How do you handle asynchronous operations in JavaScript?',
// //         'What is the purpose of the "async/await" syntax?',
// //         'Explain the MVC architecture.',
// //         'What is a microservices architecture?',
// //         'How do you implement authentication in a web application?',
// //         'What is a database index and how does it improve performance?',
// //         'Explain the difference between a class and an object.',
// //         'What is dependency injection?',
// //         'What are the advantages of using TypeScript?',
// //         'Explain how to manage state in a Redux application.',
// //         'What is the significance of the "key" prop in React?',
// //         'Describe the event bubbling and capturing phases.',
// //         'What is Cross-Site Scripting (XSS)?',
// //         'How do you optimize performance in a React application?',
// //       ],
// //       dsa: [
// //         'Array',
// //         'Linked List',
// //         'Binary Search Tree',
// //         'Heap',
// //         'Graph',
// //         'Stack and Queue',
// //         'Hash Table',
// //       ],
// //       topics: [
// //         { topic: 'Database Management', frequency: 4 },
// //         { topic: 'JavaScript Concepts', frequency: 6 },
// //         { topic: 'React', frequency: 5 },
// //         { topic: 'Software Design', frequency: 3 },
// //         { topic: 'Microservices', frequency: 2 },
// //         { topic: 'Security', frequency: 7 },
// //       ],
// //     },
// //     {
// //       name: 'Michael Johnson',
// //       company: 'Future Solutions',
// //       interviewer: 'Mrs. White',
// //       date: '2024-10-28',
// //       questions: [
// //         'What is a closure, and why are they useful?',
// //         'Explain the concept of promises in JavaScript.',
// //         'How do you handle errors in asynchronous code?',
// //         'What is a callback function?',
// //         'What is the difference between a shallow copy and a deep copy?',
// //         'How does prototypal inheritance work in JavaScript?',
// //         'What are the various ways to style a React application?',
// //         'Explain the importance of keys in lists in React.',
// //         'What is the purpose of the useEffect hook?',
// //         'What are higher-order components in React?',
// //         'Explain the concept of a service worker.',
// //         'What is the purpose of the componentDidMount lifecycle method?',
// //         'How do you optimize images for the web?',
// //         'What is lazy loading, and how does it improve performance?',
// //         'Explain the concept of throttling and debouncing.',
// //       ],
// //       dsa: [
// //         'Array',
// //         'Linked List',
// //         'Binary Search Tree',
// //         'Heap',
// //         'Graph',
// //         'Stack and Queue',
// //         'Hash Table',
// //       ],
// //       topics: [
// //         { topic: 'JavaScript Basics', frequency: 6 },
// //         { topic: 'React Lifecycle Methods', frequency: 5 },
// //         { topic: 'Performance Optimization', frequency: 4 },
// //         { topic: 'API Integration', frequency: 3 },
// //         { topic: 'Web Performance', frequency: 7 },
// //         { topic: 'Security Best Practices', frequency: 2 },
// //       ],
// //     },
// //     {
// //       name: 'Sarah Davis',
// //       company: 'Global Tech',
// //       interviewer: 'Mr. Garcia',
// //       date: '2024-10-29',
// //       questions: [
// //         'How do you ensure code quality in your projects?',
// //         'What are your strategies for debugging JavaScript code?',
// //         'What is the significance of responsive design?',
// //         'How do you handle state management in large applications?',
// //         'What are React Hooks, and why are they useful?',
// //         'What is the purpose of the useContext hook?',
// //         'Describe how you would implement a search feature.',
// //         'What are some common security vulnerabilities in web applications?',
// //         'How do you manage API calls in React?',
// //         'Explain the concept of component composition in React.',
// //         'What are design patterns, and why are they important?',
// //         'How do you structure your CSS in a project?',
// //         'What is a single-page application (SPA)?',
// //         'How do you handle user authentication in a web application?',
// //         'What is the purpose of the "render" method in React?',
// //       ],
// //       dsa: [
// //         'Array',
// //         'Linked List',
// //         'Binary Search Tree',
// //         'Heap',
// //         'Graph',
// //         'Stack and Queue',
// //         'Hash Table',
// //       ],
// //       topics: [
// //         { topic: 'Debugging Techniques', frequency: 3 },
// //         { topic: 'Responsive Web Design', frequency: 4 },
// //         { topic: 'State Management', frequency: 5 },
// //         { topic: 'Security', frequency: 6 },
// //         { topic: 'API Design', frequency: 2 },
// //         { topic: 'CSS Architecture', frequency: 7 },
// //       ],
// //     },
// //     {
// //       name: 'David Wilson',
// //       company: 'InnoTech',
// //       interviewer: 'Mrs. Taylor',
// //       date: '2024-10-30',
// //       questions: [
// //         'What are the advantages of using React?',
// //         'Explain the concept of functional programming.',
// //         'How do you manage form state in React?',
// //         'What is the purpose of the useMemo hook?',
// //         'Describe how to set up routing in a React application.',
// //         'What is server-side rendering?',
// //         'How do you optimize the performance of a React application?',
// //         'What are the benefits of using TypeScript with React?',
// //         'Explain how to implement lazy loading in React.',
// //         'What are the different types of HTTP requests?',
// //         'How do you manage global state in a React application?',
// //         'What is the purpose of the useReducer hook?',
// //         'Explain the concept of the context API in React.',
// //         'What is a polyfill, and when would you use one?',
// //         'Describe how to handle user input validation.',
// //       ],
// //       dsa: [
// //         'Array',
// //         'Linked List',
// //         'Binary Search Tree',
// //         'Heap',
// //         'Graph',
// //         'Stack and Queue',
// //         'Hash Table',
// //       ],
// //       topics: [
// //         { topic: 'React Basics', frequency: 6 },
// //         { topic: 'Functional Programming', frequency: 5 },
// //         { topic: 'Performance Optimization', frequency: 7 },
// //         { topic: 'Form Management', frequency: 4 },
// //         { topic: 'Server-Side Rendering', frequency: 3 },
// //         { topic: 'TypeScript', frequency: 2 },
// //       ],
// //     },
// //     {
// //       name: 'Emily Johnson',
// //       company: 'NextGen Solutions',
// //       interviewer: 'Mr. Brown',
// //       date: '2024-10-31',
// //       questions: [
// //         'How do you handle cross-browser compatibility issues?',
// //         'What are some best practices for writing clean code?',
// //         'How do you implement error boundaries in React?',
// //         'What is the role of the Webpack bundler?',
// //         'How do you structure a large-scale React application?',
// //         'What is the importance of unit testing?',
// //         'Describe how to create a custom hook in React.',
// //         'What are the advantages of using GraphQL over REST?',
// //         'How do you handle CORS in a web application?',
// //         'Explain the concept of the observable pattern.',
// //         'What are the differences between ES5 and ES6?',
// //         'How do you approach performance testing in web applications?',
// //         'What is the purpose of the content security policy?',
// //         'How do you implement a progressive web application (PWA)?',
// //         'What are the differences between functional and class components?',
// //       ],
// //       dsa: [
// //         'Array',
// //         'Linked List',
// //         'Binary Search Tree',
// //         'Heap',
// //         'Graph',
// //         'Stack and Queue',
// //         'Hash Table',
// //       ],
// //       topics: [
// //         { topic: 'Cross-Browser Compatibility', frequency: 4 },
// //         { topic: 'Clean Code Principles', frequency: 6 },
// //         { topic: 'Testing', frequency: 5 },
// //         { topic: 'Web Application Performance', frequency: 7 },
// //         { topic: 'Progressive Web Apps', frequency: 3 },
// //         { topic: 'Component Design', frequency: 2 },
// //       ],
// //     },
// //     {
// //       name: 'Oliver Smith',
// //       company: 'DataWorks',
// //       interviewer: 'Mrs. Martinez',
// //       date: '2024-10-31',
// //       questions: [
// //         'What are the principles of responsive web design?',
// //         'How do you handle performance optimization in React?',
// //         'What is the significance of semantic HTML?',
// //         'Explain the concept of accessibility in web applications.',
// //         'How do you manage state in React?',
// //         'What are the advantages of using CSS preprocessors?',
// //         'Describe how to implement routing in React.',
// //         'What is the purpose of the useLayoutEffect hook?',
// //         'What are the main differences between local and session storage?',
// //         'How do you approach debugging in JavaScript?',
// //         'What are some common pitfalls in React?',
// //         'Explain the concept of memoization.',
// //         'How do you handle file uploads in React?',
// //         'What is the significance of service workers in PWAs?',
// //         'Describe the concept of responsive images.',
// //       ],
// //       dsa: [
// //         'Array',
// //         'Linked List',
// //         'Binary Search Tree',
// //         'Heap',
// //         'Graph',
// //         'Stack and Queue',
// //         'Hash Table',
// //       ],
// //       topics: [
// //         { topic: 'Responsive Design', frequency: 5 },
// //         { topic: 'Performance', frequency: 6 },
// //         { topic: 'Accessibility', frequency: 4 },
// //         { topic: 'State Management', frequency: 7 },
// //         { topic: 'CSS', frequency: 3 },
// //         { topic: 'Debugging', frequency: 2 },
// //       ],
// //     },
// //   ];

// //   const handleNext = () => {
// //     if (currentIndex < experiences.length - 1) {
// //       setCurrentIndex(currentIndex + 1);
// //     }
// //   };

// //   const handlePrevious = () => {
// //     if (currentIndex > 0) {
// //       setCurrentIndex(currentIndex - 1);
// //     }
// //   };

// //   const currentExperience = experiences[currentIndex];

// //   return (
// //     <div className="container mx-auto max-w-3xl p-6">
// //          <div className="flex justify-between mt-6 mb-">
// //         <button
// //           onClick={handlePrevious}
// //           className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 disabled:opacity-50"
// //           disabled={currentIndex === 0}
// //         >
// //           Previous
// //         </button>
// //         <button
// //           onClick={handleNext}
// //           className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 disabled:opacity-50"
// //           disabled={currentIndex === experiences.length - 1}
// //         >
// //           Next
// //         </button>
// //       </div>
// //       {/* Profile Section */}
// //       <div className="profile-section flex items-center p-6 bg-white rounded-lg shadow-lg space-x-6 animate-fadeInUp">
// //         <img
// //           src="https://randomuser.me/api/portraits/men/32.jpg"
// //           alt="Avatar"
// //           className="profile-avatar w-24 h-24 rounded-full border-2 border-blue-400 shadow-lg object-cover"
// //         />
// //         <div className="profile-details flex-grow">
// //           <h2 className="text-2xl font-semibold text-gray-800 mb-1">{currentExperience.name}</h2>
// //           <p className="text-gray-600">Company: {currentExperience.company}</p>
// //           <p className="text-gray-600">Interviewer: {currentExperience.interviewer}</p>
// //           <p className="text-gray-600">Date: {currentExperience.date}</p>
// //         </div>
// //         {/* Social Icons */}
// //         <div className="social-icons flex space-x-4">
// //           <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center transition duration-300 hover:bg-blue-700 hover:-translate-y-1">
// //             <i className="fab fa-linkedin-in"></i>
// //           </a>
// //           <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center transition duration-300 hover:bg-gray-600 hover:-translate-y-1">
// //             <i className="fab fa-github"></i>
// //           </a>
// //           <a href="https://leetcode.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center transition duration-300 hover:bg-yellow-500 hover:-translate-y-1">
// //             <i className="fab fa-leetcode"></i>
// //           </a>
// //         </div>
// //       </div>

// //       {/* Interview Questions */}
// //       <div className="question-list mt-8 p-6 bg-white rounded-lg shadow-lg animate-fadeInUp">
// //         <h3 className="text-xl font-semibold text-gray-800 mb-4">Questions Asked</h3>
// //         <ul className="list-disc list-inside space-y-2 text-gray-700">
// //           {currentExperience.questions.map((question, index) => (
// //             <li key={index}>{question}</li>
// //           ))}
// //         </ul>
// //       </div>

// //       {/* DSA Section */}
// //       <div className="dsa-section mt-8 p-6 bg-white rounded-lg shadow-lg animate-fadeInUp">
// //         <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Structures Frequently Asked</h3>
// //         <ul className="list-disc list-inside space-y-2 text-gray-700">
// //           {currentExperience.dsa.map((item, index) => (
// //             <li key={index}>{item}</li>
// //           ))}
// //         </ul>
// //       </div>

// //       {/* Tabular Section for Key Topics */}
// //       <div className="key-topics mt-8 p-6 bg-white rounded-lg shadow-lg animate-fadeInUp">
// //         <h3 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Topics</h3>
// //         <table className="data-structure-table w-full text-left border-collapse">
// //           <thead>
// //             <tr>
// //               <th className="border-b-2 p-2 bg-gray-200">Topic</th>
// //               <th className="border-b-2 p-2 bg-gray-200">Frequency</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {currentExperience.topics.map((item, index) => (
// //               <tr key={index}>
// //                 <td className="border-b p-2">{item.topic}</td>
// //                 <td className="border-b p-2">{item.frequency}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* Navigation Buttons */}
     
// //     </div>
// //   );
// // };

// // export default InterviewExperienceBlog;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const InterviewExperienceBlog = () => {
//     const [experiences, setExperiences] = useState([]);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         // Fetch data from the backend
//         const fetchExperiences = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/experiences');
//                 setExperiences(response.data);
//             } catch (error) {
//                 console.error('Error fetching experiences:', error);
//             }
//         };
//         fetchExperiences();
//     }, []);

//     if (experiences.length === 0) return <div>Loading...</div>;

//     // Display the current experience based on currentIndex
//     const currentExperience = experiences[currentIndex];

//     return (
//         <div>
//             <h1>Interview Experience Blog</h1>
//             <div>
//                 <h2>{currentExperience.name}</h2>
//                 <p>Company: {currentExperience.company}</p>
//                 <p>Interviewer: {currentExperience.interviewer}</p>
//                 <p>Date: {currentExperience.date}</p>
//                 <h3>Questions</h3>
//                 <ul>
//                     {currentExperience.questions.map((question, index) => (
//                         <li key={index}>{question}</li>
//                     ))}
//                 </ul>
//                 <h3>Data Structures & Algorithms</h3>
//                 <ul>
//                     {currentExperience.dsa.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//                 <h3>Topics</h3>
//                 <ul>
//                     {currentExperience.topics.map((topic, index) => (
//                         <li key={index}>
//                             {topic.topic} - Frequency: {topic.frequency}
//                         </li>
//                     ))}
//                 </ul>
//                 <button onClick={() => setCurrentIndex((currentIndex + 1) % experiences.length)}>
//                     Next Experience
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default InterviewExperienceBlog;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const InterviewExperienceBlog = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/experiences');
        setExperiences(response.data);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      }
    };
    fetchExperiences();
  }, []);

  if (experiences.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <h1>Interview Experiences</h1>
      {experiences.map((experience) => (
        <div key={experience._id}>
          <h2>{experience.studentName}</h2>
          <p>Company: {experience.companyName}</p>
          <Link to={`/experience/${experience._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default InterviewExperienceBlog;
