import React from "react";

const TermsAndCondition = () => {
  return (
    <section className="bg-[#F3F4F6] pt-16 font-markazi">
      <div className=" w-10/12 mx-auto space-y-3 bg-white shadow px-7 pb-5 pt-8">
        <div className="space-y-2">
          <h2 className="text-4xl">Terms and Conditions</h2>
          <p className="text-2xl">
            Our Terms and Conditions were last updated on{" "}
            <span className="font-semibold">25-09-2023</span>.
          </p>
          <p className="text-2xl">
            Please read these terms and conditions carefully before using Our
            Service.
          </p>
        </div>
        {/* Content */}
        <div>
            <h1 className="text-3xl font-medium">1. Acceptance of Terms</h1>
            <p className="text-2xl font-light px-5">By accessing or using the Component website, you agree to comply with and be bound by these Terms and Conditions.</p>
        </div>
        <div>
            <h1 className="text-3xl font-medium">2. Intellectual Property</h1>
            <p className="text-2xl font-light px-5">All content on this website, including text, images, graphics, logos, and software, is the property of Job Swift and protected by intellectual property laws.</p>
        </div>
        <div>
            <h1 className="text-3xl font-medium">3. Privacy Policy</h1>
            <p className="text-2xl font-light px-5">Your use of our website is also governed by our Privacy Policy.</p>
        </div>
        <div>
            <h1 className="text-3xl font-medium">4. Limitation of Liability</h1>
            <p className="text-2xl font-light px-5">Component website shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.</p>
        </div>
        <div>
            <h1 className="text-3xl font-medium">5. Contact Information</h1>
            <p className="text-2xl font-light px-5">If you have any questions about these terms and conditions, please contact us at [Your Contact Information].</p>
        </div>
        <p className="text-xl font-medium">Last updated: 25/9/2023</p>
      </div>
    </section>
  );
};

export default TermsAndCondition;
