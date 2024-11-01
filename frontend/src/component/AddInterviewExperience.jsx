import React, { useState } from 'react';
import axios from 'axios';

const AddInterviewExperience = () => {
  const [questions, setQuestions] = useState(['']);
  const [dataStructures, setDataStructures] = useState([]);
  const [selectedDataStructure, setSelectedDataStructure] = useState('');

  // Function to add a new question field
  const addQuestion = () => {
    setQuestions([...questions, '']);
  };

  // Function to remove a specific question field
  const removeQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  // Function to add a data structure to the list
  const addDataStructure = () => {
    if (selectedDataStructure && !dataStructures.includes(selectedDataStructure)) {
      setDataStructures([...dataStructures, selectedDataStructure]);
      setSelectedDataStructure('');
    }
  };

  // Function to remove a specific data structure from the list
  const removeDataStructure = (ds) => {
    setDataStructures(dataStructures.filter((item) => item !== ds));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const experienceData = {
      studentName: e.target.studentName.value,
      companyName: e.target.companyName.value,
      interviewerName: e.target.interviewerName.value,
      interviewDate: e.target.interviewDate.value,
      questions,
      dataStructures,
      comments: e.target.comments.value,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/interview-experience', experienceData);
      alert(response.data.message);
      // Reset form fields after successful submission
      e.target.reset();
      setQuestions(['']);
      setDataStructures([]);
    } catch (error) {
      console.error('Error saving experience:', error);
      alert('Failed to save experience.');
    }
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-700 text-center my-4">
        Add Interview Experience
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Student Name */}
        <div>
          <label className="font-bold flex items-center text-gray-700 mb-1">
            <i className="fas fa-user mr-2"></i> Student Name
          </label>
          <input
            type="text"
            name="studentName"
            placeholder="Enter your name"
            className="w-full p-2 border rounded focus:border-blue-400"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="font-bold flex items-center text-gray-700 mb-1">
            <i className="fas fa-building mr-2"></i> Company Name
          </label>
          <input
            type="text"
            name="companyName"
            placeholder="Enter the company's name"
            className="w-full p-2 border rounded focus:border-blue-400"
          />
        </div>

        {/* Interviewer Name */}
        <div>
          <label className="font-bold flex items-center text-gray-700 mb-1">
            <i className="fas fa-user-tie mr-2"></i> Interviewer Name
          </label>
          <input
            type="text"
            name="interviewerName"
            placeholder="Enter the interviewer's name"
            className="w-full p-2 border rounded focus:border-blue-400"
          />
        </div>

        {/* Interview Date */}
        <div>
          <label className="font-bold flex items-center text-gray-700 mb-1">
            <i className="fas fa-calendar-alt mr-2"></i> Interview Date
          </label>
          <input
            type="date"
            name="interviewDate"
            className="w-full p-2 border rounded focus:border-blue-400"
          />
        </div>

        {/* Interview Questions */}
        <div>
          <label className="font-bold text-gray-700 mb-1">Interview Questions</label>
          {questions.map((question, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                placeholder="Enter a question"
                value={question}
                onChange={(e) => {
                  const newQuestions = [...questions];
                  newQuestions[index] = e.target.value;
                  setQuestions(newQuestions);
                }}
                className="w-full p-2 border rounded focus:border-blue-400 mr-2"
              />
              <button
                type="button"
                onClick={() => removeQuestion(index)}
                className="text-red-500"
              >
                &times;
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addQuestion}
            className="w-full bg-gray-200 p-2 rounded mt-2 hover:bg-gray-300"
          >
            + Add Question
          </button>
        </div>

        {/* Data Structures */}
        <div>
          <label className="font-bold text-gray-700 mb-1">Data Structures</label>
          <select
            value={selectedDataStructure}
            onChange={(e) => setSelectedDataStructure(e.target.value)}
            className="w-full p-2 border rounded focus:border-blue-400 mb-2"
          >
            <option value="">Select a Data Structure</option>
            <option value="Array">Array</option>
            <option value="String">String</option>
            <option value="Linked List">Linked List</option>
            <option value="Stack">Stack</option>
            <option value="Queue">Queue</option>
            <option value="Hash Table">Hash Table</option>
            <option value="Tree">Tree</option>
            <option value="Graph">Graph</option>
          </select>
          {dataStructures.map((ds, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-green-50 border border-green-300 p-2 rounded mb-2"
            >
              <span>{ds}</span>
              <button onClick={() => removeDataStructure(ds)} className="text-red-500">
                &times;
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addDataStructure}
            className="w-full bg-gray-200 p-2 rounded mt-2 hover:bg-gray-300"
          >
            + Add Data Structure
          </button>
        </div>

        {/* Additional Comments */}
        <div>
          <label className="font-bold flex items-center text-gray-700 mb-1">
            <i className="fas fa-comments mr-2"></i> Additional Comments
          </label>
          <input
            type="text"
            name="comments"
            placeholder="Any comments or tips?"
            className="w-full p-2 border rounded focus:border-blue-400"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-400 p-2 rounded text-white font-bold hover:bg-blue-500">
          Submit Experience
        </button>
      </form>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mt-6">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <i className="fab fa-linkedin-in text-gray-600 hover:text-blue-500 text-xl"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
          <i className="fab fa-github text-gray-600 hover:text-blue-500 text-xl"></i>
        </a>
        <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" title="LeetCode">
          <i className="fab fa-leetcode text-gray-600 hover:text-blue-500 text-xl"></i>
        </a>
      </div>
    </div>
  );
};

export default AddInterviewExperience;
