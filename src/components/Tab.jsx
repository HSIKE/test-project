import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: green;
  margin-bottom: 15px;
`;

const TabPaneTitleBar = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  font-weight: 600;
  position: relative;
  z-index: 2;
`;
const TabPaneTitle = styled.div`
  padding: 5px 10px;
  border: 1px solid #aaa;
  border-radius: 3px;
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: 10px;
  }
  ${({ isActive }) => isActive ? 'border-top: 3px solid blue; border-bottom-color: #fff' : ''}
`;
const TabContentWrapper = styled.div`
  background: #fff;
  position: relative;
  z-index: 1;
  top: -1px;
  border: 1px solid #aaa;
  padding: 10px 5px;
`;

const Tab = ({
  title, children, activeKey, defaultActiveKey, onChange, ...props
}) => {
  const [actualActiveTab, setActualActiveTab] = useState();

  useEffect(() => {
    if (activeKey) {
      setActualActiveTab(activeKey);
    }
  }, [activeKey]);

  const [tabPanes, tabContents] = useMemo(() => {
    const tabsContentMap = {}
    const tabsConfigs = [];
    console.log(children);
    React.Children.map(children, ({ type, props }) => {
      if (type.name === 'TabPane') {
        tabsConfigs.push({
          key: props.tabKey,
          name: props.tabName,
        });
        tabsContentMap[props.tabKey] = props.children;
      }
    });
    return [tabsConfigs, tabsContentMap];
  }, [children]);

  const handleSwitchTab = (tabKey) => {
    setActualActiveTab(tabKey);
    onChange?.(tabKey);
  }

  return (
    <div {...props}>
      <Title>{title}</Title>
      <TabPaneTitleBar>
        {tabPanes.map(({ name, key }) => (
          <TabPaneTitle key={key} isActive={actualActiveTab === key} onClick={() => handleSwitchTab(key)}>
            {name}
          </TabPaneTitle>
        ))}
      </TabPaneTitleBar>
      <TabContentWrapper>
        {actualActiveTab && tabContents[actualActiveTab]}
      </TabContentWrapper>
    </div>
  );
}

export default Tab;