import React, { useState } from "react";
import TitleSection from "../../../Share/TitleSection/TitleSection";
import LiveCode from "./LiveCode";

const CodeRevel = () => {
  const [activeTab, setActiveTab] = useState("CODE");
  return (
    <section className="w-10/12 mx-auto">
      <TitleSection
        MainTitle={"Available in Tailwind HTML"}
        SubTitle={
          "Components are now available in HTML , with the added advantage of effortlessly converting into other frameworks such as React, Svelte, Vue, etc., without the need to rewrite the entire component."
        }
      />
      <div className="bg-[#181836] rounded-md py-5">
        {/* Heading */}
        <div className="flex justify-between  px-5">
          <div className="flex gap-2 items-center">
            <span className="block h-2.5 w-2.5 rounded-full bg-[#FA85A4]"></span>
            <span className="block h-2.5 w-2.5 rounded-full bg-[#FFE56E]"></span>
            <span className="block h-2.5 w-2.5 rounded-full bg-[#52E282]"></span>
          </div>
          <div>
            {" "}
            <div className="flex font-markazi justify-center items-center bg-[#20203B] p-1 rounded-md">
              <button
                className={`rounded-md px-5 py-1 text-xl font-medium transition duration-500 transform ${
                  activeTab === "CODE"
                    ? "bg-[#3B3B53] text-white translate-y-0 opacity-100"
                    : "bg-[#20203B] text-gray-400 -translate-y-1 opacity-75"
                }`}
                onClick={() => setActiveTab("CODE")}
              >
                CODE
              </button>
              <button
                className={`rounded-md px-5 text-xl py-1 transition duration-500 transform ${
                  activeTab === "PREVIEW"
                    ? "bg-[#3B3B53] text-white translate-y-0 opacity-100"
                    : "bg-[#20203B] text-gray-400 -translate-y-1 opacity-75"
                }`}
                onClick={() => setActiveTab("PREVIEW")}
              >
                PREVIEW
              </button>
            </div>
          </div>
        </div>
        {/* body */}
        <div className="mt-5 max-h-[400px] overflow-y-auto">
          <div className="bg-[#727272] rounded">
            {activeTab === "CODE" && (
              <pre className="bg-gray-800  rounded text-white overflow-x-auto">
                <code className="">
                  {` 
                  <div class="bg-dark relative z-10 py-14">
                    <div class="bg-primary absolute top-0 right-0 z-[-1] h-full w-1/2"></div>

                    <div class="container mx-auto">
                      <div class="-mx-4 flex flex-wrap items-center">
                        <div class="w-full px-4">
                          <div class="mx-auto max-w-[550px] text-center">
                            <span class="mb-2 block text-xl font-medium text-white">
                              We Are Creative
                            </span>
                            <h1 class="mb-2 text-[60px] font-bold leading-tight text-white md:text-[100px]">
                              Branding
                            </h1>
                            <h2 class="mb-6 text-[30px] font-semibold text-white md:text-[40px]">
                              Digital Agency
                            </h2>
                            <p class="mx-auto mb-10 max-w-[460px] text-base font-medium text-[#C8CBCE]">
                              Lorem ipsum dolor sit amet consectetur adipiscing
                              elit do eiusmod tempor incididunt labore et
                              dolore.
                            </p>
                            <a
                              href="javascript:void(0)"
                              class="text-dark mb-2 inline-flex items-center justify-center rounded bg-white py-3 px-6 text-center text-base font-medium transition hover:bg-opacity-90"
                            >
                              Discover More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <span class="absolute bottom-0 left-1/2 -translate-x-1/2">
                      <svg
                        width="77"
                        height="77"
                        viewBox="0 0 77 77"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.66343"
                          cy="75.3366"
                          r="1.66343"
                          transform="rotate(-90 1.66343 75.3366)"
                          fill="white"
                        />
                        <circle
                          cx="1.66343"
                          cy="31.7545"
                          r="1.66343"
                          transform="rotate(-90 1.66343 31.7545)"
                          fill="white"
                        />
                        <circle
                          cx="16.3016"
                          cy="75.3366"
                          r="1.66343"
                          transform="rotate(-90 16.3016 75.3366)"
                          fill="white"
                        />
                        <circle
                          cx="16.3016"
                          cy="31.7545"
                          r="1.66343"
                          transform="rotate(-90 16.3016 31.7545)"
                          fill="white"
                        />
                        <circle
                          cx="30.9398"
                          cy="75.3366"
                          r="1.66343"
                          transform="rotate(-90 30.9398 75.3366)"
                          fill="white"
                        />
                        <circle
                          cx="30.9398"
                          cy="31.7545"
                          r="1.66343"
                          transform="rotate(-90 30.9398 31.7545)"
                          fill="white"
                        />
                        <circle
                          cx="45.578"
                          cy="75.3366"
                          r="1.66343"
                          transform="rotate(-90 45.578 75.3366)"
                          fill="white"
                        />
                        <circle
                          cx="45.578"
                          cy="31.7545"
                          r="1.66343"
                          transform="rotate(-90 45.578 31.7545)"
                          fill="white"
                        />
                        <circle
                          cx="60.2162"
                          cy="75.3361"
                          r="1.66343"
                          transform="rotate(-90 60.2162 75.3361)"
                          fill="white"
                        />
                        <circle
                          cx="74.6634"
                          cy="75.3361"
                          r="1.66343"
                          transform="rotate(-90 74.6634 75.3361)"
                          fill="white"
                        />
                        <circle
                          cx="60.2162"
                          cy="31.7545"
                          r="1.66343"
                          transform="rotate(-90 60.2162 31.7545)"
                          fill="white"
                        />
                        <circle
                          cx="74.6634"
                          cy="31.7545"
                          r="1.66343"
                          transform="rotate(-90 74.6634 31.7545)"
                          fill="white"
                        />
                        <circle
                          cx="1.66343"
                          cy="60.6984"
                          r="1.66343"
                          transform="rotate(-90 1.66343 60.6984)"
                          fill="white"
                        />
                        <circle
                          cx="1.66343"
                          cy="17.1164"
                          r="1.66343"
                          transform="rotate(-90 1.66343 17.1164)"
                          fill="white"
                        />
                        <circle
                          cx="16.3016"
                          cy="60.6984"
                          r="1.66343"
                          transform="rotate(-90 16.3016 60.6984)"
                          fill="white"
                        />
                        <circle
                          cx="16.3016"
                          cy="17.1164"
                          r="1.66343"
                          transform="rotate(-90 16.3016 17.1164)"
                          fill="white"
                        />
                        <circle
                          cx="30.9398"
                          cy="60.6984"
                          r="1.66343"
                          transform="rotate(-90 30.9398 60.6984)"
                          fill="white"
                        />
                        <circle
                          cx="30.9398"
                          cy="17.1164"
                          r="1.66343"
                          transform="rotate(-90 30.9398 17.1164)"
                          fill="white"
                        />
                        <circle
                          cx="45.578"
                          cy="60.6984"
                          r="1.66343"
                          transform="rotate(-90 45.578 60.6984)"
                          fill="white"
                        />
                        <circle
                          cx="45.578"
                          cy="17.1164"
                          r="1.66343"
                          transform="rotate(-90 45.578 17.1164)"
                          fill="white"
                        />
                        <circle
                          cx="60.2162"
                          cy="60.6984"
                          r="1.66343"
                          transform="rotate(-90 60.2162 60.6984)"
                          fill="white"
                        />
                        <circle
                          cx="74.6634"
                          cy="60.6984"
                          r="1.66343"
                          transform="rotate(-90 74.6634 60.6984)"
                          fill="white"
                        />
                        <circle
                          cx="60.2162"
                          cy="17.1164"
                          r="1.66343"
                          transform="rotate(-90 60.2162 17.1164)"
                          fill="white"
                        />
                        <circle
                          cx="74.6634"
                          cy="17.1164"
                          r="1.66343"
                          transform="rotate(-90 74.6634 17.1164)"
                          fill="white"
                        />
                        <circle
                          cx="1.66343"
                          cy="46.0602"
                          r="1.66343"
                          transform="rotate(-90 1.66343 46.0602)"
                          fill="white"
                        />
                        <circle
                          cx="1.66343"
                          cy="2.47768"
                          r="1.66343"
                          transform="rotate(-90 1.66343 2.47768)"
                          fill="white"
                        />
                        <circle
                          cx="16.3016"
                          cy="46.0602"
                          r="1.66343"
                          transform="rotate(-90 16.3016 46.0602)"
                          fill="white"
                        />
                        <circle
                          cx="16.3016"
                          cy="2.47768"
                          r="1.66343"
                          transform="rotate(-90 16.3016 2.47768)"
                          fill="white"
                        />
                        <circle
                          cx="30.9398"
                          cy="46.0602"
                          r="1.66343"
                          transform="rotate(-90 30.9398 46.0602)"
                          fill="white"
                        />
                        <circle
                          cx="30.9398"
                          cy="2.47768"
                          r="1.66343"
                          transform="rotate(-90 30.9398 2.47768)"
                          fill="white"
                        />
                        <circle
                          cx="45.578"
                          cy="46.0602"
                          r="1.66343"
                          transform="rotate(-90 45.578 46.0602)"
                          fill="white"
                        />
                        <circle
                          cx="45.578"
                          cy="2.47768"
                          r="1.66343"
                          transform="rotate(-90 45.578 2.47768)"
                          fill="white"
                        />
                        <circle
                          cx="60.2162"
                          cy="46.0602"
                          r="1.66343"
                          transform="rotate(-90 60.2162 46.0602)"
                          fill="white"
                        />
                        <circle
                          cx="74.6634"
                          cy="46.0602"
                          r="1.66343"
                          transform="rotate(-90 74.6634 46.0602)"
                          fill="white"
                        />
                        <circle
                          cx="60.2162"
                          cy="2.47817"
                          r="1.66343"
                          transform="rotate(-90 60.2162 2.47817)"
                          fill="white"
                        />
                        <circle
                          cx="74.6634"
                          cy="2.47817"
                          r="1.66343"
                          transform="rotate(-90 74.6634 2.47817)"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </div>

                  `}
                </code>
              </pre>
            )}
             {activeTab === "PREVIEW" && <LiveCode />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeRevel;
