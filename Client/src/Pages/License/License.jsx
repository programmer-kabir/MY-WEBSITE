import React from "react";

const License = () => {
  return (
    <section className="bg-[#F3F4F6] pt-16 font-markazi">
      <div className=" w-10/12 mx-auto space-y-3 bg-white shadow px-7 pb-5 pt-8">
        <div className="space-y-2 text-center">
          <h2 className="text-5xl">License</h2>
          <p className="text-2xl">Flexible and simple license.</p>
        </div>
        {/* Content */}

        <p className="text-5xl">Permissions for [Website Name] components:</p>
        <div className="space-y-3 pb-9">
          <p className="text-2xl font-light px-2">
            -You are allowed to use [Website Name] components in commercial
            projects.
          </p>
          <p className="text-2xl font-light px-2">
            -You are allowed to use [Website Name] components for an unlimited
            number of client projects.
          </p>
          <p className="text-2xl font-light px-2">
            -You can remove any credits related to [Website Name] and use your
            own "designed by" or branding.
          </p>
          <p className="text-2xl font-light px-2">
            -You have the right to charge clients for the work that incorporates
            [Website Name] components.
          </p>
          <p className="text-2xl font-light px-2">
            -You can modify the components to fit the needs of your project or
            the requirements of your clients.
          </p>
        </div>

        <p className="text-5xl">Don't Permissions for [Website Name] components:</p>
        <div className="space-y-3">
          <p className="text-2xl font-light px-2">
            -You are prohibited from reselling, redistributing, licensing, or sublicensing the [Website Name] components.
          </p>
          <p className="text-2xl font-light px-2">
            -Use of the components within website builders or UI generators is strictly forbidden.
          </p>
          <p className="text-2xl font-light px-2">
            -Maintain the original integrity of the components, avoiding any unauthorized repackaging.
          </p>
          <p className="text-2xl font-light px-2">
            -Creation of derivative products using [Website Name] as the primary asset for commercial distribution is not allowed.
          </p>
          
        </div>
        <p className="text-xl font-medium">Last updated: 25/9/2023</p>
      </div>
    </section>
  );
};

export default License;
