import request from '@/utils/request';

export async function query() {
  return request('/api/prometheus/yaml');
}

export async function save(params) {
    return request('/api/prometheus/yaml/save', {
      method: 'POST',
      data: params,
    });
  }