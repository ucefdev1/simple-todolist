import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutIcon = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px', // You can adjust this value as needed
        right: '20px',  // You can adjust this value as needed
        zIndex: 1000,   // Ensure it appears above other content
      }}
      className='about-link'
    >
      <Link to='/about'>
        <FaQuestion size={30} />
      </Link>
    </div>
  );
};

export default AboutIcon;
