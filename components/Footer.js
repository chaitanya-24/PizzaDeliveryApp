import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <div>
      <main className="md:flex bg-red-900 text-white p-10">
        <section className="px-4 md:w-7/12 mt-4">
          <h1 className="text-3xl font-medium">Fudo.</h1>
          <p className="text-md md:text-lg font-sans">
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 60 minutes.
          </p>
          <div className='flex mt-5'>
              <i className='text-3xl pr-2 cursor-pointer'><BsFacebook /></i>
              <i className='text-3xl px-2 cursor-pointer'><BsTwitter /></i>
              <i className='text-3xl px-2 cursor-pointer'><BsLinkedin /></i>
          </div>
        </section>
        <section className="flex mt-5 md:mt-0">
          <div className="p-4 md:px-16">
            <h3 className="text-2xl font-semibold font-mono pb-2">Company</h3>
            <ul>
              <li>Career</li>
              <li>About Us</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="p-4 ml-10 md:ml-0 md:px-16">
            <h3 className="text-2xl font-semibold font-mono pb-2">Fudo.</h3>
            <ul>
              <li>Why Fudo</li>
              <li>How it Works</li>
              <li>Client Stories</li>
            </ul>
          </div>
        </section>
      </main>
      <section className="bg-red-500 text-white flex justify-center text-xl py-2">
        &copy; 2022 CS. All Rights Reserved.
      </section>
    </div>
  );
};

export default Footer;
