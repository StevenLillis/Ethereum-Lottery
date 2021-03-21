import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

it("renders without crashing", () => { 
  shallow(<App />);
})