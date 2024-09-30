import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';

const AdminLogin = () => {
  const [subclub, setSubclub] = useState(''); // To select subclub
  const [eventName, setEventName] = useState('');
  const [participants, setParticipants] = useState('');
  const [endDate, setEndDate] = useState('');
  const [conductDate, setConductDate] = useState('');
  const [events, setEvents] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [editingEventId, setEditingEventId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch events from the backend API on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        setEvents(response.data); // Set fetched events to state
      } catch (error) {
        console.error('Failed to fetch events:', error);
        setErrorMessage('Failed to fetch events');
      }
    };

    fetchEvents(); // Call the function when component mounts
  }, []); // Empty dependency array ensures it only runs once

  // Handle adding or editing an event
  const handleEventSubmit = async (e) => {
    e.preventDefault();
    if (!subclub || !eventName || !participants || !conductDate || !endDate) {
      alert('Please fill all fields');
      return;
    }

    const newEvent = {
      clubName: subclub, // Ensure correct naming to match backend schema
      eventName,
      participants,
      conductDate: new Date(conductDate), // Ensure it's a Date object
      endDate: new Date(endDate),
    };
    try {
      if (editingEventId) {
        // If editing, update the event
        const response = await axios.put(`http://localhost:5000/api/events/${editingEventId}`, newEvent);
        setEvents(events.map(event => event._id === editingEventId ? response.data : event));
        setSuccessMessage('Event updated successfully!');
      } else {
        // If adding, create a new event
        const response = await axios.post('http://localhost:5000/api/events', newEvent);
        console.log(response.data)
        setEvents([...events, response.data]);
        setSuccessMessage('Event added successfully!');
      }
      setShowModal(false); // Close modal after submission
      clearForm(); // Clear the form fields
    } catch (error) {
      console.error('Error processing event:', error);
      setErrorMessage(editingEventId ? 'Failed to update event' : 'Failed to add event');
      setSuccessMessage(null);
    }
  };

  // Open the edit modal with the event's data pre-filled
  const handleEditEvent = (event) => {
    setEditingEventId(event._id); // Set the editing ID
    setEventName(event.eventName);
    setParticipants(event.participants);
    setSubclub(event.clubName);
    setConductDate(event.conductDate.split('T')[0]);
    setEndDate(event.endDate.split('T')[0]); // Format the date correctly
    setShowModal(true); // Show the modal
  };

  // Handle deleting an event
  const handleDeleteEvent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`);
      setEvents(events.filter(event => event._id !== id));
      setSuccessMessage('Event deleted successfully!');
    } catch (error) {
      console.error('Error deleting event:', error);
      setErrorMessage('Failed to delete event');
    }
  };

  // Clear the form after submission or when the modal is closed
  const clearForm = () => {
    setSubclub('');
    setEventName('');
    setParticipants('');
    setConductDate('');
    setEndDate('');
    setEditingEventId(null); // Clear editing ID after operation
  };
  return (
    <div className={`relative py-8 px-3 w-[100%]  ${showModal ? 'backdrop-blur-lg' : ''}`}>
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
      <p>Here you can add events to different subclubs.</p>

      {errorMessage && <div className="border border-red-500 rounded-md py-2 bg-red-300 text-black text-lg font-medium ">{errorMessage}</div>}
      {successMessage && <div className="border border-green-500 rounded-md py-2 bg-green-200 text-black text-lg font-medium">{successMessage}</div>}

      {/* Event Form */}
      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium">Select Subclub:</label>
          <select
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            value={subclub}
            onChange={(e) => setSubclub(e.target.value)}
          >
            <option value="">--Select Subclub--</option>
            <option value="AI-ML">AI and Ml Club</option>
            <option value="Arts Club">Yukta Kala Sangam Club</option>
            <option value="FSTClub">FST Club</option>
            <option value="YuvaSevaClub">Yuva Seva Sankalpam Club</option>
            <option value="NyanClub">Nyan Club</option>
            <option value="Gate-Exam">Gate Exam Club</option>
            <option value="EiClub">EI Society Club</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Event Name:</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Number of Participants:</label>
          <input
            type="number"
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Event Conduct Date:</label>
          <input
            type="date"
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            value={conductDate}
            onChange={(e) => setConductDate(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Event End Date:</label>
          <input
            type="date"
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <button
          className="bg-green-600 text-white py-2 px-4 rounded-md"
          onClick={handleEventSubmit}
        >
          Add Event
        </button>
      </div>

      {/* List of Events */}
      <div className="mt-8 overflow-x-auto">
        <h3 className="text-xl font-bold">Events List</h3>
        {events.length > 0 ? (
          <table className="w-[100%%] px-2 py-2 mt-5">
            <thead>
              <tr>
                <th className='px-2'>Club Name</th>
                <th className='px-2'>Event Name</th>
                <th className='px-2'>Participants</th>
                <th className='px-2'>Date Of Conduct</th>
                <th className='px-2'>Date of End</th>
                <th className='px-2'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event._id}>
                  <td className="text-center px-2">{event.clubName}</td>
                  <td className="text-center px-2">{event.eventName}</td>
                  <td className="text-center px-2">{event.participants}</td>
                  <td className="text-center px-2">{event.conductDate?event.conductDate.split('T')[0] : ''}</td>
                  <td className="text-center px-2">{event.endDate?event.endDate.split('T')[0] : 'N/A'}</td>
                  <td className="flex justify-center items-center gap-2 px-2">
                    <button className="mr-2 py-2 px-4 bg-green-500 font-medium rounded-sm text-lg" onClick={() => handleEditEvent(event)}>
                      Edit
                    </button>
                    <button className="mr-2 py-2 px-4 bg-red-500 font-medium rounded-sm text-lg" onClick={() => handleDeleteEvent(event._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="mt-4">No events added yet.</p>
        )}
      </div>

      {/* Modal for Editing Event */}
      {showModal ? (
        <>
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 backdrop-blur"></div>
        <div className="py-4 px-4 lg:w-[500px] sm:w-[460px] w-[400px] rounded-md bg-white z-30 flex flex-col items-center gap-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-lg">
          <div className="flex justify-between w-full px-4 py-2 items-center">
            <h2 className="text-lg font-bold">Edit Event Details</h2>
            <FaTimes className="hover:cursor-pointer hover:text-red-600" onClick={() => { setShowModal(false); clearForm(); }} />
          </div>

          <div className='w-[100%]'>
            <label className="block text-sm font-medium">Select Subclub:</label>
            <select
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
              value={subclub}
              onChange={(e) => setSubclub(e.target.value)}
            >
              <option value="">--Select Subclub--</option>
              <option value="AI-ML">AI and ML Club</option>
              <option value="Arts Club">Yukta Kala Sangam Club</option>
              <option value="FSTClub">FST Club</option>
              <option value="YuvaSevaClub">Yuva Seva Sankalpam Club</option>
              <option value="NyanClub">Nyan Club</option>
              <option value="Gate-Exam">Gate Exam Club</option>
              <option value="EiClub">EI Society Club</option>
            </select>
          </div>

          <div className='w-[100%]'>
            <label className="block text-sm font-medium">Event Name:</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>

          <div className='w-[100%]'>
            <label className="block text-sm font-medium">Number of Participants:</label>
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
              value={participants}
              onChange={(e) => setParticipants(e.target.value)}
            />
          </div>
          <div className='w-[100%]'>
            <label className="block text-sm font-medium">Event Conduct Date:</label>
            <input
              type="date"
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
              value={conductDate}
              onChange={(e) => setConductDate(e.target.value)}
            />
          </div>

          <div className='w-[100%]'>
            <label className="block text-sm font-medium">Event End Date:</label>
            <input
              type="date"
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <button
            className="bg-green-500 text-white py-2 px-4 rounded-md mt-4 w-[100%]"
            onClick={handleEventSubmit}
          >
            Update Event Details
          </button>
        </div>
      </>
      ) : null}
    </div>
  );
}

export default AdminLogin;
