export interface AppSpecDomain {
  domain: string;
  type: string; // "UNSPECIFIED", "DEFAULT", "PRIMARY", "ALIAS"
  wildcard: boolean;
  zone?: string;
  minimum_tls_version: string; // "1.2" or "1.3"
}

export interface AppSpecDeployable {
  name: string;
  github?: {
    branch: string;
    deploy_on_push: boolean;
    repo: string;
  };
  run_command?: string;
  source_dir?: string;
  envs?: {
    key: string;
    scope: ['UNSET', 'RUN_TIME', 'BUILD_TIME', 'RUN_AND_BUILD_TIME'];
    type: ['GENERAL', 'SECRET'];
    value: string;
  };
  environment_slug?: string;
  routes?: {
    path: string;
    preserve_path_prefix: boolean;
  };
  instance_size_slug: [
    'basic-xxs',
    'basic-xs',
    'basic-s',
    'basic-m',
    'professional-xs',
    'professional-s',
    'professional-m',
    'professional-1l',
    'professional-l',
    'professional-xl'
  ];
  instance_count: number;
  cors?: [];
  health_check?: {};
  http_port: number;
  internal_ports: number[];
}

export interface AppSpecBuildable extends AppSpecDeployable {
  dockerfile_path?: string;
  build_command?: string;
}

export interface AppSpecService extends AppSpecBuildable {}

export interface AppSpecWorker extends AppSpecBuildable {
  kind: ['UNSPECIFIED', 'PRE_DEPLOY', 'POST_DEPLOY', 'FAILED_DEPLOY'];
}

export interface AppFunction extends AppSpecBuildable {
  kind: ['UNSPECIFIED', 'PRE_DEPLOY', 'POST_DEPLOY', 'FAILED_DEPLOY'];
}

export interface AppSpecStaticSite extends AppSpecDeployable {
  index_document?: string;
  error_document?: string;
  catchall_document?: string;
  output_dir?: string;
}

export interface App {
  name: string;
  region: string;
  domains?: AppSpecDomain[];
  services?: AppSpecService[];
  static_sites?: AppSpecStaticSite[];
  workers?: AppSpecWorker[];
  functions?: AppFunction[];
  email_verified: boolean;
  status: string;
  status_message: string;
}
