import { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md my-20">
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-gray-700">Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input mt-1 p-3 rounded-lg block w-full border border-blue-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Email:</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input mt-1 block w-full p-3 rounded-lg border border-blue-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Message:</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea mt-1 block w-full p-5 rounded-lg  border border-blue-500"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
