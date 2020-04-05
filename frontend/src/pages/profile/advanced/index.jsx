import {
  DingdingOutlined,
  DownOutlined,
  EllipsisOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import {
  Badge,
  Button,
  Card,
  Statistic,
  Descriptions,
  Divider,
  Dropdown,
  Menu,
  Popover,
  Steps,
  Table,
  Tooltip,
  Empty,
} from 'antd';
import { GridContent, PageHeaderWrapper, RouteContext } from '@ant-design/pro-layout';
import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import {UnControlled as CodeMirror} from 'react-codemirror2'
import { connect } from 'dva';
import styles from './style.less';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

const { Step } = Steps;
const ButtonGroup = Button.Group;
const description = (
  <RouteContext.Consumer>
    {({ isMobile }) => (
      <Descriptions className={styles.headerList} size="small" column={isMobile ? 1 : 2}>
        {/* <Descriptions.Item label="其他信息"></Descriptions.Item> */}
      </Descriptions>
    )}
  </RouteContext.Consumer>
);

class Advanced extends Component {
  state = {
    operationKey: 'tab1',
    tabActiveKey: 'detail',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'profileAndadvanced/fetchAdvanced',
    });
  }

  onTabChange = tabActiveKey => {
    this.setState({
      tabActiveKey,
    });
  };

  renderChildrenByTabKey = tabKey => {
    if (tabKey === 'form') {
      return <div className={styles.main}>1</div>;
    }

    if (tabKey === 'yaml') {
      return <CodeMirror
        value='<h1>I ♥ react-codemirror2</h1>'
        options={{
          mode: 'yaml',
          theme: 'material',
          lineNumbers: true
        }}
        onChange={(editor, data, value) => {
        }}
      />;
    }

    return null;
  };
  render() {
    const { operationKey, tabActiveKey } = this.state;
    const { profileAndadvanced, loading } = this.props;
    const { advancedOperation1, advancedOperation2, advancedOperation3 } = profileAndadvanced;
    console.log(this.state);
    return (
      <PageHeaderWrapper
        title=""
        className={styles.pageHeader}
        content={description}
        tabActiveKey={tabActiveKey}
        onTabChange={this.onTabChange}
        tabList={[
          {
            key: 'form',
            tab: '表单配置',
          },
          {
            key: 'yaml',
            tab: 'YAML配置',
          }
        ]}
      >
        {this.renderChildrenByTabKey(tabActiveKey)}
      </PageHeaderWrapper>
    );
  }
}

export default connect(({ profileAndadvanced, loading }) => ({
  profileAndadvanced,
  loading: loading.effects['profileAndadvanced/fetchAdvanced'],
}))(Advanced);
