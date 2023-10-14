import React from "react";

const AddComponents = () => {
    return (
        <div className=''>
            <h1 className='text-6xl text-center font-markazi'>Your Beautiful components Add here</h1>

      <div>
        <form
          onSubmit={formSubmit}
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
          {/* React code  */}
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
    </div>
  );
};

export default AddComponents;
