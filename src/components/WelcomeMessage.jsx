import React from 'react';

const WelcomeMessage = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 text-gray-800">
        <p className="text-lg mb-6">
          <strong>Dear Alex,</strong>
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Here is an updated Property Investment Profile (PIP) report summarizing current real estate activity in your area. This data is based on current information from the regional Multiple Listing Service. If you need clarification on any of the figures or if you wish to receive a more detailed version which takes into account the particulars of your home, please contact me directly and I will be happy to provide a comprehensive Comparative Market Analysis (CMA). P.S. - Any information you provide to me will be kept strictly confidential.
        </p>
        <p className="text-right text-lg">
          Report Prepared on 09/02/2023
        </p>
      </div>
    </section>
  );
};

export default WelcomeMessage;
