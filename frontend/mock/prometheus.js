export default {
  // 支持值为 Object 和 Array
  'GET /api/prometheus/yaml': {
    ret: 0,
    msg: '',
    data: {
      yaml: 
`global:
  scrape_interval: 30s
  scrape_timeout: 10s
  evaluation_interval: 30s
  external_labels:
    region: hkg
    replica: "0"
scrape_configs:
- job_name: prometheus
  honor_timestamps: true
  scrape_interval: 30s
  scrape_timeout: 10s
  metrics_path: /metrics
  scheme: http
  static_configs:
  - targets:
    - 0.0.0.0:8890
- job_name: master-scrape
  honor_labels: true
  honor_timestamps: true
  params:
    format:
    - prometheus
  scrape_interval: 30s
  scrape_timeout: 10s
  metrics_path: /metrics
  scheme: http
  file_sd_configs:
  - files:
    - targets.json
    refresh_interval: 5m
  metric_relabel_configs:
  - separator: ;
    regex: instance
    replacement: $1
    action: labeldrop
- job_name: c-GJeaVGXa-kubernetes-cadvisor
  honor_timestamps: true
  scrape_interval: 30s
  scrape_timeout: 10s
  metrics_path: /metrics
  scheme: https
  kubernetes_sd_configs:
  - api_server: https://100.66.68.254:6443
    role: node
    bearer_token_file: token/c-GJeaVGXa.token
    tls_config:
      insecure_skip_verify: true
  bearer_token_file: token/c-GJeaVGXa.token
  tls_config:
    insecure_skip_verify: true
  relabel_configs:
  - separator: ;
    regex: __meta_kubernetes_node_label_(.+)
    replacement: $1
    action: labelmap
  - separator: ;
    regex: (.*)
    target_label: __address__
    replacement: 100.66.68.254:6443
    action: replace
  - source_labels: [__meta_kubernetes_node_label_failure_domain_beta_kubernetes_io_region]
    separator: ;
    regex: (.*)
    target_label: clusterID
    replacement: c-GJeaVGXa
    action: replace
  - source_labels: [__meta_kubernetes_node_name]
    separator: ;
    regex: (.+)
    target_label: __metrics_path__
    replacement: /api/v1/nodes/${1}/proxy/metrics/cadvisor
    action: replace
  metric_relabel_configs:
  - source_labels: [container]
    separator: ;
    regex: (.+)
    target_label: container_name
    replacement: $1
    action: replace
  - source_labels: [pod]
    separator: ;
    regex: (.+)
    target_label: pod_name
    replacement: $1
    action: replace
- job_name: c-GJeaVGXa-kubernetes-nodes
  honor_timestamps: true
  scrape_interval: 30s
  scrape_timeout: 10s
  metrics_path: /metrics
  scheme: https
  kubernetes_sd_configs:
  - api_server: https://100.66.68.254:6443
    role: node
    bearer_token_file: token/c-GJeaVGXa.token
    tls_config:
      insecure_skip_verify: true
  bearer_token_file: token/c-GJeaVGXa.token
  tls_config:
    insecure_skip_verify: true
  relabel_configs:
  - separator: ;
    regex: __meta_kubernetes_node_label_(.+)
    replacement: $1
    action: labelmap
  - separator: ;
    regex: (.*)
    target_label: __address__
    replacement: 100.66.68.254:6443
    action: replace
  - source_labels: [__meta_kubernetes_node_label_failure_domain_beta_kubernetes_io_region]
    separator: ;
    regex: (.*)
    target_label: clusterID
    replacement: c-GJeaVGXa
    action: replace
  - source_labels: [__meta_kubernetes_node_name]
    separator: ;
    regex: (.+)
    target_label: __metrics_path__
    replacement: /api/v1/nodes/${1}/proxy/metrics
    action: replace
- job_name: c-GJeaVGXa-kubernetes-service-endpoints
  honor_timestamps: true
  scrape_interval: 30s
  scrape_timeout: 10s
  metrics_path: /metrics
  scheme: https
  kubernetes_sd_configs:
  - api_server: https://100.66.68.254:6443
    role: endpoints
    bearer_token_file: token/c-GJeaVGXa.token
    tls_config:
      insecure_skip_verify: true
  bearer_token_file: token/c-GJeaVGXa.token
  tls_config:
    insecure_skip_verify: true
  relabel_configs:
  - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_scrape]
    separator: ;
    regex: "true"
    replacement: $1
    action: keep
  - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_scheme]
    separator: ;
    regex: (https?)
    target_label: __scheme__
    replacement: $1
    action: replace
  - source_labels: [__meta_kubernetes_node_label_failure_domain_beta_kubernetes_io_region]
    separator: ;
    regex: (.*)
    target_label: clusterID
    replacement: c-GJeaVGXa
    action: replace
  - separator: ;
    regex: (.*)
    target_label: __address__
    replacement: 100.66.68.254:6443
    action: replace
  - source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_endpoints_name,
      __meta_kubernetes_service_annotation_prometheus_io_port]
    separator: ;
    regex: (.+);(.+);(.*)
    target_label: __metrics_path__
    replacement: /api/v1/namespaces/${1}/services/${2}:${3}/proxy/metrics
    action: replace
  - separator: ;
    regex: __meta_kubernetes_service_label_(.+)
    replacement: $1
    action: labelmap
  - source_labels: [__meta_kubernetes_namespace]
    separator: ;
    regex: (.*)
    target_label: kubernetes_namespace
    replacement: $1
    action: replace
  - source_labels: [__meta_kubernetes_service_name]
    separator: ;
    regex: (.*)
    target_label: kubernetes_name
    replacement: $1
    action: replace
- job_name: c-RIpNNHBE-kubernetes-cadvisor
  honor_timestamps: true
  scrape_interval: 30s
  scrape_timeout: 10s
  metrics_path: /metrics
  scheme: https
  kubernetes_sd_configs:
  - api_server: https://100.66.70.90:6443
    role: node
    bearer_token_file: token/c-RIpNNHBE.token
    tls_config:
      insecure_skip_verify: true
  bearer_token_file: token/c-RIpNNHBE.token
  tls_config:
    insecure_skip_verify: true
  relabel_configs:
  - separator: ;
    regex: __meta_kubernetes_node_label_(.+)
    replacement: $1
    action: labelmap
  - separator: ;
    regex: (.*)
    target_label: __address__
    replacement: 100.66.70.90:6443
    action: replace
  - source_labels: [__meta_kubernetes_node_label_failure_domain_beta_kubernetes_io_region]
    separator: ;
    regex: (.*)
    target_label: clusterID
    replacement: c-RIpNNHBE
    action: replace
  - source_labels: [__meta_kubernetes_node_name]
    separator: ;
    regex: (.+)
    target_label: __metrics_path__
    replacement: /api/v1/nodes/${1}/proxy/metrics/cadvisor
    action: replace
  metric_relabel_configs:
  - source_labels: [container]
    separator: ;
    regex: (.+)
    target_label: container_name
    replacement: $1
    action: replace
  - source_labels: [pod]
    separator: ;
    regex: (.+)
    target_label: pod_name
    replacement: $1
    action: replace
- job_name: c-RIpNNHBE-kubernetes-nodes
  honor_timestamps: true
  scrape_interval: 30s
  scrape_timeout: 10s
  metrics_path: /metrics
  scheme: https
  kubernetes_sd_configs:
  - api_server: https://100.66.70.90:6443
    role: node
    bearer_token_file: token/c-RIpNNHBE.token
    tls_config:
      insecure_skip_verify: true
  bearer_token_file: token/c-RIpNNHBE.token
  tls_config:
    insecure_skip_verify: true
  relabel_configs:
  - separator: ;
    regex: __meta_kubernetes_node_label_(.+)
    replacement: $1
    action: labelmap
  - separator: ;
    regex: (.*)
    target_label: __address__
    replacement: 100.66.70.90:6443
    action: replace
  - source_labels: [__meta_kubernetes_node_label_failure_domain_beta_kubernetes_io_region]
    separator: ;
    regex: (.*)
    target_label: clusterID
    replacement: c-RIpNNHBE
    action: replace
  - source_labels: [__meta_kubernetes_node_name]
    separator: ;
    regex: (.+)
    target_label: __metrics_path__
    replacement: /api/v1/nodes/${1}/proxy/metrics
    action: replace
- job_name: c-RIpNNHBE-kubernetes-service-endpoints
  honor_timestamps: true
  scrape_interval: 30s
  scrape_timeout: 10s
  metrics_path: /metrics
  scheme: https
  kubernetes_sd_configs:
  - api_server: https://100.66.70.90:6443
    role: endpoints
    bearer_token_file: token/c-RIpNNHBE.token
    tls_config:
      insecure_skip_verify: true
  bearer_token_file: token/c-RIpNNHBE.token
  tls_config:
    insecure_skip_verify: true
  relabel_configs:
  - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_scrape]
    separator: ;
    regex: "true"
    replacement: $1
    action: keep
  - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_scheme]
    separator: ;
    regex: (https?)
    target_label: __scheme__
    replacement: $1
    action: replace
  - source_labels: [__meta_kubernetes_node_label_failure_domain_beta_kubernetes_io_region]
    separator: ;
    regex: (.*)
    target_label: clusterID
    replacement: c-RIpNNHBE
    action: replace
  - separator: ;
    regex: (.*)
    target_label: __address__
    replacement: 100.66.70.90:6443
    action: replace
  - source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_endpoints_name,
      __meta_kubernetes_service_annotation_prometheus_io_port]
    separator: ;
    regex: (.+);(.+);(.*)
    target_label: __metrics_path__
    replacement: /api/v1/namespaces/${1}/services/${2}:${3}/proxy/metrics
    action: replace
  - separator: ;
    regex: __meta_kubernetes_service_label_(.+)
    replacement: $1
    action: labelmap
  - source_labels: [__meta_kubernetes_namespace]
    separator: ;
    regex: (.*)
    target_label: kubernetes_namespace
    replacement: $1
    action: replace
  - source_labels: [__meta_kubernetes_service_name]
    separator: ;
    regex: (.*)
    target_label: kubernetes_name
    replacement: $1
    action: replace
- job_name: c-3dFDKsUl-kubernetes-cadvisor
  honor_timestamps: true
  scrape_interval: 30s
  scrape_timeout: 10s
  metrics_path: /metrics
  scheme: https
  kubernetes_sd_configs:
  - api_server: https://100.66.69.115:6443
    role: node
    bearer_token_file: token/c-3dFDKsUl.token
    tls_config:
      insecure_skip_verify: true
  bearer_token_file: token/c-3dFDKsUl.token
  tls_config:
    insecure_skip_verify: true
  relabel_configs:
  - separator: ;
    regex: __meta_kubernetes_node_label_(.+)
    replacement: $1
    action: labelmap
  - separator: ;
    regex: (.*)
    target_label: __address__
    replacement: 100.66.69.115:6443
    action: replace
  - source_labels: [__meta_kubernetes_node_label_failure_domain_beta_kubernetes_io_region]
    separator: ;
    regex: (.*)
    target_label: clusterID
    replacement: c-3dFDKsUl
    action: replace
  - source_labels: [__meta_kubernetes_node_name]
    separator: ;
    regex: (.+)
    target_label: __metrics_path__
    replacement: /api/v1/nodes/${1}/proxy/metrics/cadvisor
    action: replace
  metric_relabel_configs:
  - source_labels: [container]
    separator: ;
    regex: (.+)
    target_label: container_name
    replacement: $1
    action: replace
  - source_labels: [pod]
    separator: ;
    regex: (.+)
    target_label: pod_name
    replacement: $1
    action: replace
- job_name: c-3dFDKsUl-kubernetes-nodes
  honor_timestamps: true
  scrape_interval: 30s
  scrape_timeout: 10s
  metrics_path: /metrics
  scheme: https
  kubernetes_sd_configs:
  - api_server: https://100.66.69.115:6443
    role: node
    bearer_token_file: token/c-3dFDKsUl.token
    tls_config:
      insecure_skip_verify: true
  bearer_token_file: token/c-3dFDKsUl.token
  tls_config:
    insecure_skip_verify: true
  relabel_configs:
  - separator: ;
    regex: __meta_kubernetes_node_label_(.+)
    replacement: $1
    action: labelmap
  - separator: ;
    regex: (.*)
    target_label: __address__
    replacement: 100.66.69.115:6443
    action: replace
  - source_labels: [__meta_kubernetes_node_label_failure_domain_beta_kubernetes_io_region]
    separator: ;
    regex: (.*)
    target_label: clusterID
    replacement: c-3dFDKsUl
    action: replace
  - source_labels: [__meta_kubernetes_node_name]
    separator: ;
    regex: (.+)
    target_label: __metrics_path__
    replacement: /api/v1/nodes/${1}/proxy/metrics
    action: replace
- job_name: c-3dFDKsUl-kubernetes-service-endpoints
  honor_timestamps: true
  scrape_interval: 30s
  scrape_timeout: 10s
  metrics_path: /metrics
  scheme: https
  kubernetes_sd_configs:
  - api_server: https://100.66.69.115:6443
    role: endpoints
    bearer_token_file: token/c-3dFDKsUl.token
    tls_config:
      insecure_skip_verify: true
  bearer_token_file: token/c-3dFDKsUl.token
  tls_config:
    insecure_skip_verify: true
  relabel_configs:
  - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_scrape]
    separator: ;
    regex: "true"
    replacement: $1
    action: keep
  - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_scheme]
    separator: ;
    regex: (https?)
    target_label: __scheme__
    replacement: $1
    action: replace
  - source_labels: [__meta_kubernetes_node_label_failure_domain_beta_kubernetes_io_region]
    separator: ;
    regex: (.*)
    target_label: clusterID
    replacement: c-3dFDKsUl
    action: replace
  - separator: ;
    regex: (.*)
    target_label: __address__
    replacement: 100.66.69.115:6443
    action: replace
  - source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_endpoints_name,
      __meta_kubernetes_service_annotation_prometheus_io_port]
    separator: ;
    regex: (.+);(.+);(.*)
    target_label: __metrics_path__
    replacement: /api/v1/namespaces/${1}/services/${2}:${3}/proxy/metrics
    action: replace
  - separator: ;
    regex: __meta_kubernetes_service_label_(.+)
    replacement: $1
    action: labelmap
  - source_labels: [__meta_kubernetes_namespace]
    separator: ;
    regex: (.*)
    target_label: kubernetes_namespace
    replacement: $1
    action: replace
  - source_labels: [__meta_kubernetes_service_name]
    separator: ;
    regex: (.*)
    target_label: kubernetes_name
    replacement: $1
    action: replace
- job_name: c-DoIM0mub-kubernetes-cadvisor
  honor_timestamps: true
  scrape_interval: 30s
  scrape_timeout: 10s
  metrics_path: /metrics
  scheme: https
  kubernetes_sd_configs:
  - api_server: https://100.66.72.50:6443
    role: node
    bearer_token_file: token/c-DoIM0mub.token
    tls_config:
      insecure_skip_verify: true
  bearer_token_file: token/c-DoIM0mub.token
  tls_config:
    insecure_skip_verify: true
  relabel_configs:
  - separator: ;
    regex: __meta_kubernetes_node_label_(.+)
    replacement: $1
    action: labelmap
  - separator: ;
    regex: (.*)
    target_label: __address__
    replacement: 100.66.72.50:6443
    action: replace
  - source_labels: [__meta_kubernetes_node_label_failure_domain_beta_kubernetes_io_region]
    separator: ;
    regex: (.*)
    target_label: clusterID
    replacement: c-DoIM0mub
    action: replace
  - source_labels: [__meta_kubernetes_node_name]
    separator: ;
    regex: (.+)
    target_label: __metrics_path__
    replacement: /api/v1/nodes/${1}/proxy/metrics/cadvisor
    action: replace
  metric_relabel_configs:
  - source_labels: [container]
    separator: ;
    regex: (.+)
    target_label: container_name
    replacement: $1
    action: replace
  - source_labels: [pod]
    separator: ;
    regex: (.+)
    target_label: pod_name
    replacement: $1
    action: replace
- job_name: c-DoIM0mub-kubernetes-nodes
  honor_timestamps: true
  scrape_interval: 30s
  scrape_timeout: 10s
  metrics_path: /metrics
  scheme: https
  kubernetes_sd_configs:
  - api_server: https://100.66.72.50:6443
    role: node
    bearer_token_file: token/c-DoIM0mub.token
    tls_config:
      insecure_skip_verify: true
  bearer_token_file: token/c-DoIM0mub.token
  tls_config:
    insecure_skip_verify: true
  relabel_configs:
  - separator: ;
    regex: __meta_kubernetes_node_label_(.+)
    replacement: $1
    action: labelmap
  - separator: ;
    regex: (.*)
    target_label: __address__
    replacement: 100.66.72.50:6443
    action: replace
  - source_labels: [__meta_kubernetes_node_label_failure_domain_beta_kubernetes_io_region]
    separator: ;
    regex: (.*)
    target_label: clusterID
    replacement: c-DoIM0mub
    action: replace
  - source_labels: [__meta_kubernetes_node_name]
    separator: ;
    regex: (.+)
    target_label: __metrics_path__
    replacement: /api/v1/nodes/${1}/proxy/metrics
    action: replace
- job_name: c-DoIM0mub-kubernetes-service-endpoints
  honor_timestamps: true
  scrape_interval: 30s
  scrape_timeout: 10s
  metrics_path: /metrics
  scheme: https
  kubernetes_sd_configs:
  - api_server: https://100.66.72.50:6443
    role: endpoints
    bearer_token_file: token/c-DoIM0mub.token
    tls_config:
      insecure_skip_verify: true
  bearer_token_file: token/c-DoIM0mub.token
  tls_config:
    insecure_skip_verify: true
  relabel_configs:
  - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_scrape]
    separator: ;
    regex: "true"
    replacement: $1
    action: keep
  - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_scheme]
    separator: ;
    regex: (https?)
    target_label: __scheme__
    replacement: $1
    action: replace
  - source_labels: [__meta_kubernetes_node_label_failure_domain_beta_kubernetes_io_region]
    separator: ;
    regex: (.*)
    target_label: clusterID
    replacement: c-DoIM0mub
    action: replace
  - separator: ;
    regex: (.*)
    target_label: __address__
    replacement: 100.66.72.50:6443
    action: replace
  - source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_endpoints_name,
      __meta_kubernetes_service_annotation_prometheus_io_port]
    separator: ;
    regex: (.+);(.+);(.*)
    target_label: __metrics_path__
    replacement: /api/v1/namespaces/${1}/services/${2}:${3}/proxy/metrics
    action: replace
  - separator: ;
    regex: __meta_kubernetes_service_label_(.+)
    replacement: $1
    action: labelmap
  - source_labels: [__meta_kubernetes_namespace]
    separator: ;
    regex: (.*)
    target_label: kubernetes_namespace
    replacement: $1
    action: replace
  - source_labels: [__meta_kubernetes_service_name]
    separator: ;
    regex: (.*)
    target_label: kubernetes_name
    replacement: $1
    action: replace
- job_name: c-6obFi85k-kubernetes-cadvisor
  honor_timestamps: true
  scrape_interval: 30s
  scrape_timeout: 10s
  metrics_path: /metrics
  scheme: https
  kubernetes_sd_configs:
  - api_server: https://100.66.65.36:6443
    role: node
    bearer_token_file: token/c-6obFi85k.token
    tls_config:
      insecure_skip_verify: true
  bearer_token_file: token/c-6obFi85k.token
  tls_config:
    insecure_skip_verify: true
  relabel_configs:
  - separator: ;
    regex: __meta_kubernetes_node_label_(.+)
    replacement: $1
    action: labelmap
  - separator: ;
    regex: (.*)
    target_label: __address__
    replacement: 100.66.65.36:6443
    action: replace
  - source_labels: [__meta_kubernetes_node_label_failure_domain_beta_kubernetes_io_region]
    separator: ;
    regex: (.*)
    target_label: clusterID
    replacement: c-6obFi85k
    action: replace
  - source_labels: [__meta_kubernetes_node_name]
    separator: ;
    regex: (.+)
    target_label: __metrics_path__
    replacement: /api/v1/nodes/${1}/proxy/metrics/cadvisor
    action: replace
  metric_relabel_configs:
  - source_labels: [container]
    separator: ;
    regex: (.+)
    target_label: container_name
    replacement: $1
    action: replace
  - source_labels: [pod]
    separator: ;
    regex: (.+)
    target_label: pod_name
    replacement: $1
    action: replace
- job_name: c-6obFi85k-kubernetes-nodes
  honor_timestamps: true
  scrape_interval: 30s
  scrape_timeout: 10s
  metrics_path: /metrics
  scheme: https
  kubernetes_sd_configs:
  - api_server: https://100.66.65.36:6443
    role: node
    bearer_token_file: token/c-6obFi85k.token
    tls_config:
      insecure_skip_verify: true
  bearer_token_file: token/c-6obFi85k.token
  tls_config:
    insecure_skip_verify: true
  relabel_configs:
  - separator: ;
    regex: __meta_kubernetes_node_label_(.+)
    replacement: $1
    action: labelmap
  - separator: ;
    regex: (.*)
    target_label: __address__
    replacement: 100.66.65.36:6443
    action: replace
  - source_labels: [__meta_kubernetes_node_label_failure_domain_beta_kubernetes_io_region]
    separator: ;
    regex: (.*)
    target_label: clusterID
    replacement: c-6obFi85k
    action: replace
  - source_labels: [__meta_kubernetes_node_name]
    separator: ;
    regex: (.+)
    target_label: __metrics_path__
    replacement: /api/v1/nodes/${1}/proxy/metrics
    action: replace
- job_name: c-6obFi85k-kubernetes-service-endpoints
  honor_timestamps: true
  scrape_interval: 30s
  scrape_timeout: 10s
  metrics_path: /metrics
  scheme: https
  kubernetes_sd_configs:
  - api_server: https://100.66.65.36:6443
    role: endpoints
    bearer_token_file: token/c-6obFi85k.token
    tls_config:
      insecure_skip_verify: true
  bearer_token_file: token/c-6obFi85k.token
  tls_config:
    insecure_skip_verify: true
  relabel_configs:
  - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_scrape]
    separator: ;
    regex: "true"
    replacement: $1
    action: keep
  - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_scheme]
    separator: ;
    regex: (https?)
    target_label: __scheme__
    replacement: $1
    action: replace
  - source_labels: [__meta_kubernetes_node_label_failure_domain_beta_kubernetes_io_region]
    separator: ;
    regex: (.*)
    target_label: clusterID
    replacement: c-6obFi85k
    action: replace
  - separator: ;
    regex: (.*)
    target_label: __address__
    replacement: 100.66.65.36:6443
    action: replace
  - source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_endpoints_name,
      __meta_kubernetes_service_annotation_prometheus_io_port]
    separator: ;
    regex: (.+);(.+);(.*)
    target_label: __metrics_path__
    replacement: /api/v1/namespaces/${1}/services/${2}:${3}/proxy/metrics
    action: replace
  - separator: ;
    regex: __meta_kubernetes_service_label_(.+)
    replacement: $1
    action: labelmap
  - source_labels: [__meta_kubernetes_namespace]
    separator: ;
    regex: (.*)
    target_label: kubernetes_namespace
    replacement: $1
    action: replace
  - source_labels: [__meta_kubernetes_service_name]
    separator: ;
    regex: (.*)
    target_label: kubernetes_name
    replacement: $1
    action: replace`
    }
  },
  'POST /api/prometheus/yaml/save': {
    ret: 0,
    msg: '保存成功'
  }
};
