import React, { useState} from 'react';

// import logo from './logo.svg';
import './App.css';
import Tab from "./components/Tab"
import TabPane from "./components/TabPane";

function App() {
  const [activeTab, setActiveTab] = useState();

  return (
    <div style={{ padding: 10 }}>
      <Tab activeKey="tab1" title="Danish Composers" onChange={setActiveTab}>
      <TabPane tabKey="tab1" tabName="Maria Ahlefel">
        This is the tab content of tab Maria Ahlefel xxxxxx.
      </TabPane>
      <TabPane tabKey="tab2" tabName="Carl Anderson">
        This is the tab content of tab Carl Anderson xxxxxx.
      </TabPane>
      <TabPane tabKey="tab3" tabName="Ida da fonseca">
        This is the tab content of tab Ida da fonseca xxxxxx.
      </TabPane>
      <TabPane tabKey="tab4" tabName="Peter Muller">
        This is the tab content of tab Peter Muller xxxxxx.
      </TabPane>
    </Tab>
    </div>
  )
}

export default App;
