import React, { useState } from 'react';
import '../index.css';
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container, Col } from 'reactstrap';

import Instruction from './instructions.js'
import Manage from './manage.js';
import Enter from './enter.js';

//TabBar Component - Incorporates Components: Instruction, Manage & Enter

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
      </Nav>
      <TabContent activeTab={activeTab}>
        <br />
        <TabPane tabId="1">
          <Container>
            <Col>
              <Enter
              onSubmit={onSubmit}
              value={value}
              loading={loading}
              onChange={onChange}
               />
            </Col>
          </Container>
          <Container>
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
        <TabPane tabId="2">
          <Instruction />
          <br />
          <br />
        </TabPane>
      </TabContent>
    </div>
  );
}

export default TabBar;