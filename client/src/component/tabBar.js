import React, { useState } from 'react';
import '../index.css';
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container, Col } from 'reactstrap';
import { animations } from 'react-animation';
import 'react-animation/dist/keyframes.css';


import Instruction from './instructions.js'
import Manage from './manage.js';
import Enter from './enter.js';
import Questions from './FAQ.js'

//TabBar Component - Incorporates Components: Instruction, Manage, Enter & FAQ

const TabBar = ({onSubmit, value, loading, onChange, loadingPick, pickWinner}) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
            className="navlink-style"
          >
            Enter Lottery
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
            className="navlink-style"
          >
            How To Play
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
            className="navlink-style"
          >
            Draw Lottery
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
            className="navlink-style"
          >
            FAQ
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <br />
        <TabPane tabId="1">
          <Container style={{animation: animations.popIn}}>
            <Col>
              <Enter
              onSubmit={onSubmit}
              value={value}
              loading={loading}
              onChange={onChange}
               />
            </Col>
          </Container>
          <br />
          <br />
        </TabPane>
        <TabPane tabId="2">
          <Instruction />
          <br />
          <br />
        </TabPane>
        <TabPane tabId="3">
        <Container style={{animation: animations.popIn}}>
            <Col>
              <Manage 
              loading={loadingPick}
              pickWinner={pickWinner}
              />
            </Col>
          </Container>
          <br />
          <br />
        </TabPane>
        <TabPane tabId="4">
        <Container style={{animation: animations.popIn}}>
            <Col>
              <Questions />
            </Col>
          </Container>
          <br />
        </TabPane>
      </TabContent>
    </div>
  );
}

export default TabBar;