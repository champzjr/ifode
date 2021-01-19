import React, { Component } from 'react';
import {Tabs, Tab} from 'react-materialize';
import Menu from './Menu';

class Main extends Component {
  render() {
    return (
      <div>
        <Tabs className="tab-demo z-depth-1 tabs-fixed-width">
          <Tab title="Menu">
            <Menu/>
          </Tab>
          <Tab title="Test 2" active>
            Test 2
          </Tab>
          <Tab title="Test 3" disabled>
            Test 3
          </Tab>
          <Tab title="Test 4">
            Test 4
          </Tab>
          <Tab title="Test 4">
            Test 5
          </Tab>
        </Tabs>
      </div>
    );
  };
};

export default Main;