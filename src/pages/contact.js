import React, { useState } from "react";
import "./custom.css"

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your logic for handling form submission here
  //   console.log("Form data submitted:", formData);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Number: ${formData.number}, Message: ${formData.message}`
    );
  };

  return (
    <>
      <div className="mx-4 mt-8 md:mb-36 min-[400px]:mb-8 bg-black rounded-3xl pb-6 flex md:flex-row min-[400px]:flex-col min-[400px]:pt-6 min-[400px]:px-6 min-[400px]:text-justify justify-center md:gap-x-16 min-[400px]:gap-x-0 font-josefinSans">
        <div className="">
          <p className="text-xl gradient_intro min-[400px]:mb-4 md:mt-40 min:[400px]:mt-0">
            Have an Idea? Let's connect & build something awesome together!
          </p>
        </div>
        <div className="gradient_about">
          <div className="place-items-center">
            <form className="flex flex-col md:w-96 min=[400px]:w-48" onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                className="border-2 border-solid border-black rounded-lg mb-4 h-8 pl-2"
                placeholder="Name..."
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <label htmlFor="email">Email:</label>
              <input
                className="border-2 border-solid border-black rounded-lg mb-4 h-8 pl-2"
                placeholder="Email..."
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <label htmlFor="message">Contact Number:</label>
              <input
                className="border-2 border-solid border-black rounded-lg mb-4 h-8 pl-2"
                placeholder="Contact Number..."
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
              />

              <label htmlFor="textarea">Description:</label>
              <input
                className="border-2 border-solid border-black rounded-lg mb-4 h-8 pl-2"
                placeholder="Description..."
                id="textarea"
                name="textarea"
                value={formData.message}
                onChange={handleChange}
              />

              <div className="grid place-items-center">
                <button
                  className="border-2 border-solid text-black border-sky-600 bg-sky-200 rounded-lg p-2 uppercase mb-4 hover:bg-sky-500 hover:text-slate-100"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
