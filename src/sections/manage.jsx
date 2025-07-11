import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import img1 from '../assets/manage_1.svg';
import img2 from '../assets/manage_2.svg';
import img3 from '../assets/manage_3.svg';
import img4 from '../assets/manage_4.svg';

const ManageSection = () => {
  return (
    <section className="-mt-32 relative z-10 px-6 md:px-16 ml-4 md:ml-42">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Manage Everything in One Place
        </h2>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <Card
            img={img1}
            title="Track Transactions"
            desc="Stay on top of your cash flow with real-time transaction updates and summaries."
          />
          {/* Card 2 */}
          <Card
            img={img2}
            title="Automated Payments"
            desc="Set up scheduled payments and avoid manual tasks every billing cycle."
          />
          {/* Card 3 */}
          <Card
            img={img3}
            title="Integrated Reporting"
            desc="Generate custom reports, export data, and get actionable insights in minutes."
          />
          {/* Card 4 */}
          <Card
            img={img4}
            title="Secure Controls"
            desc="Manage user roles and permissions with full control and enterprise-grade security."
          />
        </div>
      </div>
    </section>
  );
};

const Card = ({ img, title, desc }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition flex flex-col h-full">
    <img src={img} alt={title} className="w-full h-40 object-contain mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 mb-4">{desc}</p>
    <a href="#" className="text-blue-600 font-medium inline-flex items-center mt-auto">
      Find out more <FaArrowRight className="ml-2" />
    </a>
  </div>
);

export default ManageSection;