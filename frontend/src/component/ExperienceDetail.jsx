import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ExperienceDetail = () => {
  const { id } = useParams();
  const [experience, setExperience] = useState(null);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/experiences/${id}`);
        setExperience(response.data);
      } catch (error) {
        console.error('Error fetching experience:', error);
      }
    };
    fetchExperience();
  }, [id]);

  if (!experience) return <div>Loading...</div>;

  return (
    <div>
      <h1>{experience.name}'s Interview Experience</h1>
      <p>Company: {experience.company}</p>
      <p>Interviewer: {experience.interviewer}</p>
      <p>Date: {new Date(experience.date.$date).toLocaleDateString()}</p>

      <h3>Questions Asked</h3>
      <ul>
        {experience.questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>

      <h3>Data Structures & Algorithms Discussed</h3>
      <ul>
        {experience.dsa.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Frequently Asked Topics</h3>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          {experience.topics.map((topic, index) => (
            <tr key={index}>
              <td>{topic.topic}</td>
              <td>{topic.frequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExperienceDetail;
