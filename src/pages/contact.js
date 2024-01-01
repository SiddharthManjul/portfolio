import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sponsor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Name: ${formData.name}, Email: ${formData.email}, Number: ${formData.number}, Message: ${formData.message}`
    );
  };

  return (
    <>
      <div className="container m-auto mt-8 grid place-items-center font-sans text-xs">
        <div className="mb-4">
          <p className="text-xl">
            Have an Idea? Get in touch and Let's build something awesome!
          </p>
        </div>
        <div className="grid place-items-center">
          <form className="flex flex-col w-96" onSubmit={handleSubmit}>
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

            <label htmlFor="message">Description:</label>
            <input
              className="border-2 border-solid border-black rounded-lg mb-4 h-8 pl-2"
              placeholder="Description..."
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />

            <div className="grid place-items-center">
              <button
                className="border-2 border-solid border-sky-600 bg-sky-200 rounded-lg p-2 uppercase mb-4 hover:bg-sky-500 hover:text-slate-100"
                type="submit"
                onClick={() => navigate(-1)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sponsor;
