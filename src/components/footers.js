import React from 'react';
import { Footer } from 'flowbite-react';
import Logo from '../res/img/logo.svg';
import DarkLogo from '../res/img/darkLogo.svg';
import { company, mainURL } from '../constants';
import { useNavigate } from 'react-router-dom';

const Footers = () => {
  const storedTheme = sessionStorage.getItem('darkMode');

  const navigate = useNavigate();

  return (
    <Footer container className="shadow-none rounded-none dark:bg-black">
      <div className="w-full text-center">
        <Footer.Divider className="border-black dark:border-white" />
        <Footer.Copyright
          className="text-black dark:text-white font-bold"
          href={mainURL}
          by={company}
          year={2024}
        />
      </div>
    </Footer>
  );
};

export default Footers;
