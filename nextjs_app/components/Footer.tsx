import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Links</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-400 hover:text-white">FAQ</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-400 hover:text-white">Help</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Legal</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-400 hover:text-white">Terms</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-400 hover:text-white">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Social</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-400 hover:text-white">Facebook</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-400 hover:text-white">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;