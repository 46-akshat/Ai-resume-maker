import React from "react";

const LandingPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 justify-between overflow-x-hidden font-sans">
      {/* Hero Section */}
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('/resumebg.png')",
            }}
          >
            <div className="flex flex-col gap-2 text-left text-white">
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                Craft a Resume That Gets You Hired
              </h1>
              <h2 className="text-sm font-normal @[480px]:text-base">
                Our AI-powered resume builder helps you create a professional resume that highlights your skills and experience.
              </h2>
            </div>
            <button className="mt-4 h-10 @[480px]:h-12 px-4 @[480px]:px-5 bg-[#2a8fed] text-white text-sm font-bold rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="flex flex-col gap-10 px-4 py-10 @container">
        <div className="flex flex-col gap-4 max-w-[720px]">
          <h1 className="text-[#0d151b] text-[32px] font-bold @[480px]:text-4xl @[480px]:font-black leading-tight tracking-tight">
            Why Choose Our AI Resume Builder?
          </h1>
          <p className="text-[#0d151b] text-base font-normal">
            Our platform offers a range of features designed to help you create a standout resume, tailored to your specific career goals.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M48,64a8,8,0,0,1,8-8H72V40a8,8,0,0,1,16,0V56h16a8,8,0,0,1,0,16H88V88a8,8,0,0,1-16,0V72H56A8,8,0,0,1,48,64ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16Zm56-48H224V128a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V160h16a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z " />
                </svg>
              ),
              title: "AI-Powered Content Generation",
              desc: "Leverage AI to generate compelling content that showcases your skills and experience effectively.",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z" />
                </svg>
              ),
              title: "Customizable Templates",
              desc: "Choose from a variety of professionally designed templates to match your industry and personal style.",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z" />
                </svg>
              ),
              title: "Performance Analytics",
              desc: "Track your resume's performance and optimize it for better results with our analytics tools.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 p-4 border border-[#cfdce7] bg-slate-50 rounded-lg"
            >
              <div className="text-[#0d151b]">{feature.icon}</div>
              <div>
                <h2 className="text-[#0d151b] text-base font-bold leading-tight">{feature.title}</h2>
                <p className="text-[#4c749a] text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section className="flex flex-col gap-10 px-4 py-10 @container">
        <div className="flex flex-col gap-4 max-w-[720px]">
          <h1 className="text-[#0d151b] text-[32px] font-bold @[480px]:text-4xl @[480px]:font-black leading-tight">
            How It Works
          </h1>
          <p className="text-[#0d151b] text-base font-normal">
            Our simple, step-by-step process makes it easy to create a professional resume in minutes.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
          {[
            {
              img: "/step1.png",
              title: "Input Your Information",
              desc: "Enter your work history, skills, and education details into our intuitive interface.",
            },
            {
              img: "/step2.png",
              title: "Customize Your Template",
              desc: "Select a template and customize the layout and design to reflect your personal brand.",
            },
            {
              img: "/step3.png",
              title: "Download Your Resume",
              desc: "Download your polished, professional resume in various formats, ready to submit to employers.",
            },
          ].map((step, index) => (
            <div key={index} className="flex flex-col gap-3 pb-3">
              <div
                className="w-full aspect-video bg-center bg-cover bg-no-repeat rounded-lg"
                style={{ backgroundImage: `url(${step.img})` }}
              ></div>
              <div>
                <p className="text-[#0d151b] text-base font-medium">{step.title}</p>
                <p className="text-[#4c749a] text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="@container">
        <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20 text-center">
          <h1 className="text-[#0d151b] text-[32px] font-bold @[480px]:text-4xl @[480px]:font-black leading-tight max-w-[720px] mx-auto">
            Ready to Take the Next Step in Your Career?
          </h1>
          <p className="text-[#0d151b] text-base font-normal max-w-[720px] mx-auto">
            Create a professional resume that gets you noticed. Sign up today and start building your future.
          </p>
          <div className="flex justify-center">
            <button className="h-10 @[480px]:h-12 px-4 @[480px]:px-5 bg-[#2a8fed] text-white text-sm font-bold rounded-lg">
              Get Started
            </button>
          </div>
        </div>
        <div className="h-5 bg-slate-50" />
      </section>
    </div>
  );
};

export default LandingPage;
