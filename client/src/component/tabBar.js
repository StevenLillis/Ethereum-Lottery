import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Container } from 'reactstrap';
import classnames from 'classnames';
import Manage from '../component/manage';
import Enter from '../component/enter';
import Instruction from '../component/instructions'
import './tabBar.css';

const TabBar = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
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
            className={classnames({ active: activeTab === '2'})}
            onClick={() => { toggle('2'); }}
            className="navlink-style"
          >
            How To Play
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
      &emsp;
      &emsp;
        <TabPane tabId="1">
        <Container>
          <Col>
            <Enter />
          </Col>
      &emsp;
          <Col>
            <Manage />
          </Col>
        </Container>
        </TabPane>
        <TabPane tabId="2">
        <Instruction />
        </TabPane>
      </TabContent>
    </div>
  );
}

export default TabBar;