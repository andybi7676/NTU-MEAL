import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Find, Create, Account, About } from '../Content';


const MainPageContent = ({selection}) => {
  switch (selection) {
    case "Find":
      return <Find />
    case "Create":
      return <Create />
    case "Account":
      return <Account />
    case "About":
      return <About />
    default:
      return <> </>
  }
}

export default MainPageContent;