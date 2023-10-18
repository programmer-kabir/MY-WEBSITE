import React, { useState } from "react";

const AddTemplate = () => {
  const [imageName, setImageName] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImageName(file.name);
    }
  };
  return (
    <div>
      <h1 className="text-6xl text-center font-markazi">
        Your Beautiful Template Add here
      </h1>

      <div>
        <form className="space-y-6 max-w-4xl mx-auto border-2 p-10 my-10 formShadow">
          {/* title  */}
          <div>
            <label
              htmlFor="title"
              className="relative block rounded-md py-2 border border-gray-400 px-3 text-base shadow-sm  outline-none "
            >
              <input
                type="text"
                id="title"
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="title"
                name="title"
              />

              <span className="pointer-events-none font-medium absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Components Title
              </span>
            </label>
          </div>
          {/* components category  */}
          <div className="border rounded-md border-gray-400">
            <select   name="category" className="block w-full pl-3 pr-10 py-2 leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-base text-sm sm:leading-5">
              <option className="font-medium" value="" disabled selected>
                Select Category
              </option>
              <option value="navbar">Navbar</option>
              <option value="banner">Banner</option>
              <option value="hero">Hero</option>
              <option value="card">Card</option>
              <option value="shoppingCard">Shopping Card</option>
              <option value="faq">FAQ</option>
              <option value="login">Login</option>
              <option value="register">Register</option>
              <option value="popup">Popup</option>
              <option value="from">Form</option>
              <option value="newsLetter">News Letter</option>
              <option value="profile">Profile</option>
              <option value="blogCard">Blog Card</option>
              <option value="contact">Contact</option>
              <option value="tables">Tables</option>
              <option value="cardToAction">Card To Action</option>
              <option value="teams">Teams</option>
              <option value="review">Review</option>
              <option value="pricing">Pricing</option>
            </select>
          </div>

          {/* components image  */}

          <div>
            <label
              htmlFor="dropzone-file"  name="image"
              className="flex items-center px-3 py-3 mx-auto mt-6 text-center border-2 border-dashed rounded-lg cursor-pointer border-gray-600 bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <h2 className="mx-3 text-gray-700">
                {imageName ? imageName : "Upload a photo"}
              </h2>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            {/* {imageName && <p className="mt-4 text-center text-gray-600">{imageName}</p>} */}
          </div>
          {/* html-tailwind code  */}
          <div>
            <label htmlFor="" className="text-ms text-gray-600">
              HTML-Tailwind Code
            </label>
            <br />
            <textarea name="htmlCode" className="border outline-none border-gray-400 p-2 px-2 w-full rounded-md bg-gray-50"></textarea>
          </div>
          {/* bootstrap  code  */}
          <div>
            <label htmlFor="" className="text-ms text-gray-600">
              Bootstrap Code
            </label>{" "}
            <br />
            <textarea name="bootstrap" className="border outline-none border-gray-400 p-2 px-2 w-full rounded-md bg-gray-50">
              {" "}
            </textarea>
          </div>
          {/* React code  */}
          <div>
            <label htmlFor="" className="text-ms text-gray-600">
              React Code
            </label>{" "}
            <br />
            <textarea name="react" className="border outline-none border-gray-400 p-2 px-2 w-full rounded-md bg-gray-50">
              {" "}
            </textarea>
          </div>

          <div>
            <button className="bg-[#FFAE00] p-2 w-full rounded-md text-2xl font-semibold font-markazi text-red-600">
              Submit Component
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTemplate;

<div>
<form 
  className="space-y-6 w-[800px] mx-auto border-2 p-10 my-10 bg-[#39e692] formShadow"
>
  {/* title  */}
  <div>
    <label htmlFor="" className="text-ms text-gray-600">
      Components Title
    </label>{" "}
    <br />
    <input
      className="border-2 w-full rounded-full p-2 bg-[#EDF2F7]"
      type="text"
      name="title"
    />
  </div>
  {/* components category  */}
  <div>
    <label htmlFor="" className="text-ms text-gray-600">
      Components Category
    </label>{" "}
    <br />
    <input
      className="border-2  w-full rounded-full bg-[#EDF2F7] p-2"
      type="text"
      name="category"
    />
  </div>
  {/* components image  */}
  <div>
    <label htmlFor="" className="text-ms text-gray-600">
      Components Image
    </label>{" "}
    <br />
    <input
      className="border-2 w-full  bg-[#EDF2F7] rounded-full p-2"
      type="file"
      name="image"
    />
  </div>
  {/* html-tailwind code  */}
  <div>
    <label htmlFor="" className="text-ms text-gray-600">
      HTML-Tailwind Code
    </label>{" "}
    <br />
    <textarea name="htmlCode" className="border-2 w-full p-1 rounded-md bg-[#EDF2F7]"></textarea>
  </div>
  {/* bootstrap  code  */}
  <div>
    <label htmlFor="" className="text-ms text-gray-600">
      Bootstrap Code
    </label>{" "}
    <br />
    <textarea name="bootstrap" className="border-2 p-1 w-full rounded-md bg-[#EDF2F7]">
      {" "}
    </textarea>
  </div>

  <div>
    <label className="text-ms text-gray-600">
      React Code
    </label>{" "}
    <br />
    <textarea name="react" className="border-2 p-1 w-full rounded-md bg-[#EDF2F7]">
      {" "}
    </textarea>
  </div>

  <div>
    <button className="bg-[#FFAE00] p-2 w-full rounded-md text-2xl font-semibold font-markazi text-gray-900">
      Submit Component
    </button>
  </div>
</form>
</div>