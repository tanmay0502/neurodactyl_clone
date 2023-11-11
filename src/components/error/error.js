import Link from 'next/link';
import './error.css';

function Error() {
  return (
    <div className="error-container">
      <h1>This page is not available currently</h1>
      <p>Comming soon...</p>
      <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10' href="/">
        Go to Homepage
      </Link>
    </div>
  );
};

export default Error;