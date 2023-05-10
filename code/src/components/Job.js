/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

export const Job = ({ job, setJob }) => {
  const handleJobChange = (event) => {
    setJob(event.target.value);
  };
  return (
    <div className="choices-wrapper">
      <label className="input-label" htmlFor="job-dropdown">Pick a profession.</label>
      <select className="dropdown-menu" name="job-dropdown" value={job} onChange={handleJobChange}>
        <option value=" " disabled>Select a job</option>
        <option value="doctor">Doctor</option>
        <option value="teacher">Teacher</option>
        <option value="lawyer">Lawyer</option>
        <option value="developer">Developer</option>
        <option value="barista">Barista</option>
        <option value="comedian">Comedian</option>
        <option value="musician">Musician</option>
        <option value="housekeeper">Housekeeper</option>
        <option value="chef">Chef</option>
      </select>
    </div>
  )
}