import { query as queryYaml, save } from '@/services/prometheus';
import { ConsoleSqlOutlined } from '@ant-design/icons';
import { message } from 'antd'
const PrometheusModel = {
    namespace: 'prometheus',
    state: {
        yaml: ''
    },
    effects: {
        *fetch({callback}, { call, put }) {
            const res = yield call(queryYaml);
            if(res.ret === 0){
                yield put({
                    type: 'save',
                    payload: res.data.yaml,
                  })
                  if(callback) callback(res.data.yaml)
            }else {
                message.error(res.msg)
            }

          },
          *saveYaml({payload}, { call, put }) {
            const res = yield call(save, payload);
            if(res.ret === 0){
                yield put({
                    type: 'save',
                    payload: payload.yaml,
                  });
                  message.success('操作成功')
            }else {
                message.error(res.msg)
            }
          }
    },
    reducers: {
        save(state, action) {console.log('save:', action)
            return {
                ...state,
                yaml: action.payload
            }
        }
    }
}

export default PrometheusModel
