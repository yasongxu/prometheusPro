import React, { Component, Fragment } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import styles from './index.less';

require('codemirror/mode/yaml/yaml');

class MonitorCodeMirror extends Component {
	render() {
		const {value, onChange} = this.props;

		return (
			<CodeMirror
				className={styles.code}
				value={value}
				options={{
					mode: 'yaml',
					theme: 'mdn-like',
					lineNumbers: true
				}}
				onChange={onChange}
			/>
		);
	}
}

export default MonitorCodeMirror;