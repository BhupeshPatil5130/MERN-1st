// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-blue-500 text-white shadow-md">
//       <div className="container mx-auto flex items-center justify-between p-4">
//         <a href="#" className="text-xl font-bold">Interview Expo</a>
        
//         <div className="hidden md:flex items-center space-x-4">
//           <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-md transition hover:bg-blue-100">
//             Sign up
//           </button>
//           <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-md transition hover:bg-blue-100">
//             Log in
//           </button>
//           <a href="profile.html">
//             <img src="avatar.jpg" alt="Avatar" className="w-10 h-10 rounded-full" />
//           </a>
//         </div>

//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={toggleMenu}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             ></path>
//           </svg>
//         </button>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-blue-500 p-4 space-y-2">
//           <button className="bg-white text-blue-500 font-semibold py-2 px-4 w-full rounded-md transition hover:bg-blue-100">
//             Sign up
//           </button>
//           <button className="bg-white text-blue-500 font-semibold py-2 px-4 w-full rounded-md transition hover:bg-blue-100">
//             Log in
//           </button>
//           <a href="profile.html">
//             <img src="avatar.jpg" alt="Avatar" className="w-10 h-10 rounded-full mx-auto" />
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSignupPopup, setShowSignupPopup] = useState(false);
//   const [showLoginPopup, setShowLoginPopup] = useState(false);
//   const [isSignedUp, setIsSignedUp] = useState(false);
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//   // Sign-up form state
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [prn, setPrn] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [branch, setBranch] = useState("");
//   const [yearOfPassing, setYearOfPassing] = useState("");

//   // Login form state
//   const [loginPrn, setLoginPrn] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleSignupPopup = () => setShowSignupPopup(!showSignupPopup);
//   const toggleLoginPopup = () => setShowLoginPopup(!showLoginPopup);

//   const handleSignUp = () => {
//     if (password !== confirmPassword) {
//       alert("Password and confirm password are not the same!");
//       return;
//     }

//     setIsSignedUp(true);
//     setShowSignupPopup(false);
//     setIsOpen(false);
//     alert("Signed up successfully!");
//   };

//   const handleLogOut = () => {
//     setIsSignedUp(false);
//     alert("Logged out successfully!");
//   };

//   const currentYear = new Date().getFullYear();
//   const years = Array.from({ length: currentYear - 2000 + 7 }, (v, i) => 2000 + i); // Years from 2000 to current year + 6

//   return (
//     <nav className="bg-blue-600 text-white shadow-lg">
//       <div className="container mx-auto flex items-center justify-between p-4">
//         <a href="#" className="text-2xl font-semibold">Interview Expo</a>
        
//         <div className="hidden md:flex items-center space-x-4">
//           {!isSignedUp ? (
//             <>
//               <button onClick={toggleSignupPopup} className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
//                 Sign up
//               </button>
//               <button onClick={toggleLoginPopup} className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
//                 Log in
//               </button>
//             </>
//           ) : (
//             <button onClick={handleLogOut} className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
//               Log out
//             </button>
//           )}
//           <a href="profile.html">
//             <img src="avatar.jpg" alt="Avatar" className="w-10 h-10 rounded-full" />
//           </a>
//         </div>

//         <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//           </svg>
//         </button>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-blue-600 p-4 space-y-2">
//           {!isSignedUp ? (
//             <>
//               <button onClick={toggleSignupPopup} className="bg-white text-blue-600 font-semibold py-2 px-4 w-full rounded-md hover:bg-gray-200">
//                 Sign up
//               </button>
//               <button onClick={toggleLoginPopup} className="bg-white text-blue-600 font-semibold py-2 px-4 w-full rounded-md hover:bg-gray-200">
//                 Log in
//               </button>
//             </>
//           ) : (
//             <button onClick={handleLogOut} className="bg-white text-blue-600 font-semibold py-2 px-4 w-full rounded-md hover:bg-gray-200">
//               Log out
//             </button>
//           )}
//           <a href="profile.html">
//             <img src="avatar.jpg" alt="Avatar" className="w-10 h-10 rounded-full mx-auto" />
//           </a>
//         </div>
//       )}

//       {showSignupPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 w-96 rounded-lg relative shadow-lg text-black">
//             <button className="absolute top-2 right-2 text-red-600 font-bold text-xl" onClick={toggleSignupPopup}>
//               &times;
//             </button>
//             <h2 className="text-2xl font-bold mb-4 text-center">Sign up</h2>
            
//             <label className="block text-black font-medium mb-1">First Name</label>
//             <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your first name" className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
            
//             <label className="block text-black font-medium mb-1">Last Name</label>
//             <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter your last name" className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
            
//             <label className="block text-black font-medium mb-1">PRN</label>
//             <input type="text" value={prn} onChange={(e) => setPrn(e.target.value)} placeholder="Enter your PRN" className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />

//             {/* Password Section */}
//             <div className="mb-4">
//               <label className="block text-black font-medium mb-1">Password</label>
//               <div className="relative">
//                 <input
//                   type={passwordVisible ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter your password"
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setPasswordVisible(!passwordVisible)}
//                   className="absolute inset-y-0 right-2 flex items-center text-gray-500"
//                 >
//                   {passwordVisible ? "Hide" : "Show"}
//                 </button>
//               </div>
//             </div>

//             {/* Confirm Password Section */}
//             <div className="mb-4">
//               <label className="block text-black font-medium mb-1">Confirm Password</label>
//               <div className="relative">
//                 <input
//                   type={confirmPasswordVisible ? "text" : "password"}
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   placeholder="Confirm your password"
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
//                   className="absolute inset-y-0 right-2 flex items-center text-gray-500"
//                 >
//                   {confirmPasswordVisible ? "Hide" : "Show"}
//                 </button>
//               </div>
//             </div>

//             <label className="block text-black font-medium mb-1">Branch</label>
//             <input type="text" value={branch} onChange={(e) => setBranch(e.target.value)} placeholder="Enter your branch" className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />

//             <label className="block text-black font-medium mb-1">Year of Passing</label>
//             <select value={yearOfPassing} onChange={(e) => setYearOfPassing(e.target.value)} className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
//               <option value="" disabled>Select year</option>
//               {years.map((year) => (
//                 <option key={year} value={year}>{year}</option>
//               ))}
//             </select>
            
//             <button onClick={handleSignUp} className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700">
//               Sign up
//             </button>
//           </div>
//         </div>
//       )}

//       {showLoginPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 w-96 rounded-lg relative shadow-lg text-black">
//             <button className="absolute top-2 right-2 text-red-600 font-bold text-xl" onClick={toggleLoginPopup}>
//               &times;
//             </button>
//             <h2 className="text-2xl font-bold mb-4 text-center">Log in</h2>

//             <label className="block text-black font-medium mb-1">PRN</label>
//             <input type="text" value={loginPrn} onChange={(e) => setLoginPrn(e.target.value)} placeholder="Enter your PRN" className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />

//             <label className="block text-black font-medium mb-1">Password</label>
//             <div className="relative">
//               <input type={passwordVisible ? "text" : "password"} value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="Enter your password" className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
//               <button
//                 type="button"
//                 onClick={() => setPasswordVisible(!passwordVisible)}
//                 className="absolute inset-y-0 right-2 flex items-center text-gray-500"
//               >
//                 {passwordVisible ? "Hide" : "Show"}
//               </button>
//             </div>

//             <button onClick={toggleLoginPopup} className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700">
//               Log in
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
// src/Navbar.js

// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSignupPopup, setShowSignupPopup] = useState(false);
//   const [showLoginPopup, setShowLoginPopup] = useState(false);
//   const [isSignedUp, setIsSignedUp] = useState(false);
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//   // Sign-up form state
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [prn, setPrn] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [branch, setBranch] = useState("");
//   const [yearOfPassing, setYearOfPassing] = useState("");

//   // Login form state
//   const [loginPrn, setLoginPrn] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleSignupPopup = () => setShowSignupPopup(!showSignupPopup);
//   const toggleLoginPopup = () => setShowLoginPopup(!showLoginPopup);

//   const handleSignUp = () => {
//     if (password !== confirmPassword) {
//       alert("Password and confirm password are not the same!");
//       return;
//     }
//     setIsSignedUp(true);
//     setShowSignupPopup(false);
//     setIsOpen(false);
//     alert("Signed up successfully!");
//   };

//   const handleLogOut = () => {
//     setIsSignedUp(false);
//     alert("Logged out successfully!");
//   };

//   const currentYear = new Date().getFullYear();
//   const years = Array.from({ length: currentYear - 2000 + 7 }, (v, i) => 2000 + i); // Years from 2000 to current year + 6

//   return (
//     <nav className="bg-blue-600 text-white shadow-lg">
//       <div className="container mx-auto flex items-center justify-between p-4">
//         <a href="#" className="text-2xl font-semibold">Interview Expo</a>
        
//         <div className="hidden md:flex items-center space-x-4">
//           {!isSignedUp ? (
//             <>
//               <button onClick={toggleSignupPopup} className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
//                 Sign up
//               </button>
//               <button onClick={toggleLoginPopup} className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
//                 Log in
//               </button>
//             </>
//           ) : (
//             <button onClick={handleLogOut} className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
//               Log out
//             </button>
//           )}
//           <a href="profile.html">
//             <img src="avatar.jpg" alt="Avatar" className="w-10 h-10 rounded-full" />
//           </a>
//         </div>

//         <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//           </svg>
//         </button>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-blue-600 p-4 space-y-2">
//           {!isSignedUp ? (
//             <>
//               <button onClick={toggleSignupPopup} className="bg-white text-blue-600 font-semibold py-2 px-4 w-full rounded-md hover:bg-gray-200">
//                 Sign up
//               </button>
//               <button onClick={toggleLoginPopup} className="bg-white text-blue-600 font-semibold py-2 px-4 w-full rounded-md hover:bg-gray-200">
//                 Log in
//               </button>
//             </>
//           ) : (
//             <button onClick={handleLogOut} className="bg-white text-blue-600 font-semibold py-2 px-4 w-full rounded-md hover:bg-gray-200">
//               Log out
//             </button>
//           )}
//           <a href="profile.html">
//             <img src="avatar.jpg" alt="Avatar" className="w-10 h-10 rounded-full mx-auto" />
//           </a>
//         </div>
//       )}

//       {showSignupPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 w-96 rounded-lg relative shadow-lg text-black">
//             <button className="absolute top-2 right-2 text-red-600 font-bold text-xl" onClick={toggleSignupPopup}>
//               &times;
//             </button>
//             <h2 className="text-2xl font-bold mb-4 text-center">Sign up</h2>
//             <label className="block text-black font-medium mb-1">First Name</label>
//             <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your first name" className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
            
//             <label className="block text-black font-medium mb-1">Last Name</label>
//             <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter your last name" className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
            
//             <label className="block text-black font-medium mb-1">PRN</label>
//             <input type="text" value={prn} onChange={(e) => setPrn(e.target.value)} placeholder="Enter your PRN" className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
//             <div className="mb-4">
//               <label className="block text-black font-medium mb-1">Password</label>
//               <div className="relative">
//                 <input
//                   type={passwordVisible ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter your password"
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setPasswordVisible(!passwordVisible)}
//                   className="absolute inset-y-0 right-2 flex items-center text-gray-500"
//                 >
//                   {passwordVisible ? "Hide" : "Show"}
//                 </button>
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="block text-black font-medium mb-1">Confirm Password</label>
//               <div className="relative">
//                 <input
//                   type={confirmPasswordVisible ? "text" : "password"}
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   placeholder="Confirm your password"
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
//                   className="absolute inset-y-0 right-2 flex items-center text-gray-500"
//                 >
//                   {confirmPasswordVisible ? "Hide" : "Show"}
//                 </button>
//               </div>
//             </div>

//             <label className="block text-black font-medium mb-1">Branch</label>
//             <select value={branch} onChange={(e) => setBranch(e.target.value)} className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
//               <option value="">Select your branch</option>
//               <option value="CSE">CSE</option>
//               <option value="IT">IT</option>
//               <option value="ECE">ECE</option>
//               <option value="ME">ME</option>
//               <option value="CE">CE</option>
//             </select>

//             <label className="block text-black font-medium mb-1">Year of Passing</label>
//             <select value={yearOfPassing} onChange={(e) => setYearOfPassing(e.target.value)} className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
//               <option value="">Select year</option>
//               {years.map((year) => (
//                 <option key={year} value={year}>{year}</option>
//               ))}
//             </select>

//             <button onClick={handleSignUp} className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 w-full">
//               Sign up
//             </button>
//           </div>
//         </div>
//       )}

//       {showLoginPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 w-96 rounded-lg relative shadow-lg text-black">
//             <button className="absolute top-2 right-2 text-red-600 font-bold text-xl" onClick={toggleLoginPopup}>
//               &times;
//             </button>
//             <h2 className="text-2xl font-bold mb-4 text-center">Log in</h2>
//             <label className="block text-black font-medium mb-1">PRN</label>
//             <input type="text" value={loginPrn} onChange={(e) => setLoginPrn(e.target.value)} placeholder="Enter your PRN" className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
//             <label className="block text-black font-medium mb-1">Password</label>
//             <div className="relative">
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 value={loginPassword}
//                 onChange={(e) => setLoginPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               <button
//                 type="button"
//                 onClick={() => setPasswordVisible(!passwordVisible)}
//                 className="absolute inset-y-0 right-2 flex items-center text-gray-500"
//               >
//                 {passwordVisible ? "Hide" : "Show"}
//               </button>
//             </div>
//             <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 w-full mt-4" onClick={toggleLoginPopup}>
//               Log in
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // Sign-up form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [prn, setPrn] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [branch, setBranch] = useState("");
  const [yearOfPassing, setYearOfPassing] = useState("");

  // Login form state
  const [loginPrn, setLoginPrn] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSignupPopup = () => setShowSignupPopup(!showSignupPopup);
  const toggleLoginPopup = () => setShowLoginPopup(!showLoginPopup);

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("Password and confirm password are not the same!");
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          prn,
          password,
          branch,
          yearOfPassing
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setIsSignedUp(true);
        setShowSignupPopup(false);
        setIsOpen(false);
        alert("Signed up successfully!");
      } else {
        alert(data.message || "Signup failed!");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup.");
    }
  };

  const handleLogIn = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prn: loginPrn,
          password: loginPassword,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setIsSignedUp(true);
        setShowLoginPopup(false);
        setIsOpen(false);
        alert("Logged in successfully!");
      } else {
        alert(data.message || "Login failed!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login.");
    }
  };

  const handleLogOut = () => {
    setIsSignedUp(false);
    alert("Logged out successfully!");
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2000 + 7 }, (v, i) => 2000 + i); // Years from 2000 to current year + 6

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="#" className="text-2xl font-semibold">Interview Expo</a>
        
        <div className="hidden md:flex items-center space-x-4">
          {!isSignedUp ? (
            <>
              <button onClick={toggleSignupPopup} className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
                Sign up
              </button>
              <button onClick={toggleLoginPopup} className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
                Log in
              </button>
            </>
          ) : (
            <button onClick={handleLogOut} className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
              Log out
            </button>
          )}
          <a href="profile.html">
            <img src="avatar.jpg" alt="Avatar" className="w-10 h-10 rounded-full" />
          </a>
        </div>

        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-600 p-4 space-y-2">
          {!isSignedUp ? (
            <>
              <button onClick={toggleSignupPopup} className="bg-white text-blue-600 font-semibold py-2 px-4 w-full rounded-md hover:bg-gray-200">
                Sign up
              </button>
              <button onClick={toggleLoginPopup} className="bg-white text-blue-600 font-semibold py-2 px-4 w-full rounded-md hover:bg-gray-200">
                Log in
              </button>
            </>
          ) : (
            <button onClick={handleLogOut} className="bg-white text-blue-600 font-semibold py-2 px-4 w-full rounded-md hover:bg-gray-200">
              Log out
            </button>
          )}
          <a href="profile.html">
            <img src="avatar.jpg" alt="Avatar" className="w-10 h-10 rounded-full mx-auto" />
          </a>
        </div>
      )}

      {showSignupPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 w-96 rounded-lg relative shadow-lg text-black">
            <button className="absolute top-2 right-2 text-red-600 font-bold text-xl" onClick={toggleSignupPopup}>
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Sign up</h2>
            <label className="block text-black font-medium mb-1">First Name</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your first name" className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
            
            <label className="block text-black font-medium mb-1">Last Name</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter your last name" className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
            
            <label className="block text-black font-medium mb-1">PRN</label>
            <input type="text" value={prn} onChange={(e) => setPrn(e.target.value)} placeholder="Enter your PRN" className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <div className="mb-4">
              <label className="block text-black font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                >
                  {passwordVisible ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-black font-medium mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button"
                  onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                  className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                >
                  {confirmPasswordVisible ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <label className="block text-black font-medium mb-1">Branch</label>
            <input type="text" value={branch} onChange={(e) => setBranch(e.target.value)} placeholder="Enter your branch" className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />

            <label className="block text-black font-medium mb-1">Year of Passing</label>
            <select value={yearOfPassing} onChange={(e) => setYearOfPassing(e.target.value)} className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Select year of passing</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>

            <button onClick={handleSignUp} className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700">Sign up</button>
          </div>
        </div>
      )}

      {showLoginPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 w-96 rounded-lg relative shadow-lg text-black">
            <button className="absolute top-2 right-2 text-red-600 font-bold text-xl" onClick={toggleLoginPopup}>
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Log in</h2>
            <label className="block text-black font-medium mb-1">PRN</label>
            <input type="text" value={loginPrn} onChange={(e) => setLoginPrn(e.target.value)} placeholder="Enter your PRN" className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />

            <label className="block text-black font-medium mb-1">Password</label>
            <div className="relative mb-4">
              <input
                type={passwordVisible ? "text" : "password"}
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute inset-y-0 right-2 flex items-center text-gray-500"
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>

            <button onClick={handleLogIn} className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700">Log in</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
