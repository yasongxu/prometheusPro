import React, { Component } from 'react';
import { Descriptions } from 'antd';

import styles from './index.less';

const MonitorEdit = (props) => {
    const { global, scrape_configs } = props.value
    const globalKeys = Object.keys(global)
    const globalMap = {
        'scrape_interval': '采集周期',
        'scrape_timeout': '采集超时',
        'evaluation_interval': '评估周期',
        'external_labels': '自定义标签',
    }
console.log(globalKeys)
    return (
        <>
            <Descriptions
                title="全局配置"
                style={{
                    marginBottom: 32,
                }}
            >
                {
                    globalKeys.map((key, index) => {
                        // return key
                        console.log(globalMap[key], global[key])
                        if('external_labels' !== key) return <Descriptions.Item label={globalMap[key]} key={key}>{global[key]}</Descriptions.Item>
                    })
                }
            </Descriptions>

            <h2>表格配置</h2>
        </>
    )
}

export default MonitorEdit