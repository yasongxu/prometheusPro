import React, { Component, Fragment } from 'react';
import {
  Button,
  Card,
  Descriptions,
  notification
} from 'antd';
import { PageHeaderWrapper, RouteContext } from '@ant-design/pro-layout';
import classNames from 'classnames';
import { connect } from 'dva';
const jsyaml = require('js-yaml');
import MonitorCodeMirror from './components/MonitorCodeMirror';
import MonitorEdit from './components/MonitorEdit'
import styles from './style.less';

const ButtonGroup = Button.Group;
const description = (
  <RouteContext.Consumer>
    {({ isMobile }) => (
      <Descriptions className={styles.headerList} size="small" column={isMobile ? 1 : 2}>
        <Descriptions.Item label="创建人">咕噜咕噜</Descriptions.Item>
        <Descriptions.Item label="版本">2.16.1</Descriptions.Item>
        <Descriptions.Item label="创建时间">2020-04-04 14:20</Descriptions.Item>
        <Descriptions.Item label="更新时间">2020-04-04 14:20</Descriptions.Item>
        <Descriptions.Item label="说明">表单配置 嘻嘻嘻嘻嘻嘻嘻嘻；yaml 配置反反复复付付付付反反复复付都放到发的发的发的发的</Descriptions.Item>
      </Descriptions>
    )}
  </RouteContext.Consumer>
);

class Prometheus extends Component {
  state = {
    tabActiveKey: 'form',
    yaml: this.props.prometheus.yaml,
    yamlJson: {
      global: {},

    }
  };

  componentDidMount() {
    const { dispatch, prometheus } = this.props;

    dispatch({
      type: 'prometheus/fetch',
      callback: (code) => {
        this.setState({
          yamlJson: jsyaml.safeLoad(code, {json: true})
        })
      }
    });
  }

  onTabChange = tabActiveKey => {
    const {yaml} = this.state
    let yamlJson;
    try {
      yamlJson = jsyaml.safeLoad(yaml, {json: true})
    } catch(e){
      notification.error({
        message: '解析错误',
        description: e.message
      })
    }

    this.setState({
      tabActiveKey,
      yamlJson
    });

    console.log(yamlJson)
  }

  codeChange = (editor, data, value) => {
    this.setState({
      yaml: value
    })
  }
  save = () => {
    const {yaml} = this.state
    const { dispatch } = this.props;

// console.log('保存', code)
    dispatch({
      type: 'prometheus/saveYaml',
      payload: {
        yaml
      }
    });
  }

  render() {
    const { tabActiveKey, yamlJson } = this.state;
    const { loading, submitting, prometheus } = this.props;
    const tabList = [
      {
        key: 'form',
        tab: '表单配置',
      },
      {
        key: 'yaml',
        tab: 'YAML配置',
      }
    ];

    return (
      <PageHeaderWrapper
        title=""
        className={styles.pageHeader}
        content={description}
      >
        <Card 
          className={styles.card} 
          bordered={false}
          tabList={tabList}
          onTabChange={this.onTabChange}
          activeTabKey={tabActiveKey}
        >
          {tabActiveKey === 'form' && <MonitorEdit value={yamlJson}/>}
          {tabActiveKey === 'yaml' && <MonitorCodeMirror value={prometheus.yaml} onChange={this.codeChange} />}
          <Button type="primary" htmlType="submit" className={styles.btn} loading={submitting} onClick={this.save}>保存</Button>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default connect(({ prometheus, loading }) => ({
  prometheus,
  loading: loading.effects['prometheus/fetchAdvanced'],
  submitting: loading.effects['prometheus/save'],
}))(Prometheus);
