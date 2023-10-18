import React, { useRef, useState } from "react";
import axios from "axios"
import Swal from "sweetalert2";


const AddComponents = () => {
  const [imageName, setImageName] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImageName(file.name);
    }
  };
  const formRef = useRef(null);
  const formSubmit = async (e) => {
    e.preventDefault();
    // Create a FormData object from the form
    const form = new FormData(e.target);
    const title = form.get('title');
    const category = form.get('category');
    const image = form.get('image');
    const htmlCode = form.get('htmlCode');
    const bootstrap = form.get('bootstrap');
    const react = form.get('react');
    console.log(title, category, image, htmlCode, bootstrap, react);
    // Image Upload
    const formData = new FormData();
    formData.append('image', image);
  
    // Make the image upload request
    const imgbbResponse = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`, {
      method: 'POST',
      body: formData,
    });
  
    if (!imgbbResponse.ok) {
      throw new Error('Image upload failed');
    }
  
    const imageData = await imgbbResponse.json();
    const imageUrl = imageData.data.display_url;
  
    console.log(imageUrl);
  
    axios.post(`${import.meta.env.VITE_LOCAL_SERVER}/components`, {
      title, category, image: imageUrl, htmlCode, bootstrap, react
    })
      .then(data => {
        console.log(data.data);
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'New Item Add Done',
          showConfirmButton: false,
          timer: 1500
        })
        
        formRef.current.reset();
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="">
      <h1 className="text-6xl text-center font-markazi">
        Your Beautiful components Add here
      </h1>

      <div>
        <form ref={formRef}
  onSubmit={formSubmit} className="space-y-6 max-w-4xl mx-auto border-2 p-10 my-10 formShadow">
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
              <option value="footer">Footer</option>
            </select>
          </div>

          {/* components image  */}

          <div>
            <label
              htmlFor="dropzone-file"  
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
                name="image"
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

export default AddComponents;
