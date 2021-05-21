export interface PodSchema {
  apiVersion: APIVersion;
  items: PodSchemaItem[];
  kind: string;
  metadata: PodSchemaMetadata;
}

export enum APIVersion {
  BuildOpenshiftIoV1 = "build.openshift.io/v1",
  V1 = "v1",
}

export interface PodSchemaItem {
  apiVersion: APIVersion;
  kind: ItemKind;
  metadata: ItemMetadata;
  spec: Spec;
  status: StatusClass;
}

export enum ItemKind {
  Pod = "Pod",
}

export interface ItemMetadata {
  annotations: Annotations;
  creationTimestamp: Date;
  generateName?: string;
  labels: Labels;
  managedFields: ManagedField[];
  name: string;
  namespace: Namespace;
  ownerReferences: OwnerReference[];
  resourceVersion: string;
  selfLink: string;
  uid: string;
}

export interface Annotations {
  "k8s.v1.cni.cncf.io/network-status": string;
  "k8s.v1.cni.cncf.io/networks-status": string;
  "openshift.io/deployment-config.latest-version"?: string;
  "openshift.io/deployment-config.name"?: string;
  "openshift.io/deployment.name"?: string;
  "openshift.io/scc": OpenshiftIoScc;
  "openshift.io/build.name"?: string;
}

export enum OpenshiftIoScc {
  Privileged = "privileged",
  Restricted = "restricted",
}

export interface Labels {
  app?: string;
  deployment?: string;
  deploymentconfig?: string;
  "openshift.io/deployer-pod-for.name"?: string;
  "openshift.io/build.name"?: string;
}

export interface ManagedField {
  apiVersion: APIVersion;
  fieldsType: FieldsType;
  fieldsV1: FieldsV1;
  manager: Manager;
  operation: Operation;
  time: Date;
}

export enum FieldsType {
  FieldsV1 = "FieldsV1",
}

export interface FieldsV1 {
  "f:metadata"?: FMetadata;
  "f:spec"?: FSpec;
  "f:status"?: FStatus;
}

export interface FMetadata {
  "f:annotations": { [key: string]: ResourcesValue };
  "f:generateName"?: ResourcesValue;
  "f:labels"?: FLabels;
  "f:ownerReferences"?: FOwnerReferences;
}

export interface ResourcesValue {
}

export interface FLabels {
  ".": ResourcesValue;
  "f:app"?: ResourcesValue;
  "f:deployment"?: ResourcesValue;
  "f:deploymentconfig"?: ResourcesValue;
  "f:openshift.io/deployer-pod-for.name"?: ResourcesValue;
  "f:openshift.io/build.name"?: ResourcesValue;
}

export interface FOwnerReferences {
  ".": ResourcesValue;
  "k:{\"uid\":\"124f5b93-8beb-46dd-9b69-e43bb7130afe\"}"?: KUid124F5B938Beb46DD9B69E43Bb7130AfeClass;
  "k:{\"uid\":\"ce6933b8-e2ed-4776-b84b-afda143f8907\"}"?: KUid025564Ce77544D26967993790180806EClass;
  "k:{\"uid\":\"b9ba8674-318b-41fe-a193-e9dbe7251024\"}"?: KUid025564Ce77544D26967993790180806EClass;
  "k:{\"uid\":\"025564ce-7754-4d26-9679-93790180806e\"}"?: KUid025564Ce77544D26967993790180806EClass;
  "k:{\"uid\":\"e5c5db66-dee6-4eaf-acd5-665b3c5bd794\"}"?: KUid025564Ce77544D26967993790180806EClass;
  "k:{\"uid\":\"223edce3-a75a-409e-8c72-43a3ea5ad85b\"}"?: KUid025564Ce77544D26967993790180806EClass;
  "k:{\"uid\":\"24847f3f-4122-4472-8723-1c4d5a8a954e\"}"?: KUid025564Ce77544D26967993790180806EClass;
  "k:{\"uid\":\"44e2b33c-0d00-435a-9d86-121d5a533b2c\"}"?: KUid124F5B938Beb46DD9B69E43Bb7130AfeClass;
  "k:{\"uid\":\"a96823b8-8181-4dba-a11e-96c40ddb5630\"}"?: KUid124F5B938Beb46DD9B69E43Bb7130AfeClass;
  "k:{\"uid\":\"b7742f44-f0ee-4787-86ee-1a11f2fc8582\"}"?: KUid124F5B938Beb46DD9B69E43Bb7130AfeClass;
  "k:{\"uid\":\"a36a3b32-79d8-4ac1-819e-db045503e7bc\"}"?: KUid124F5B938Beb46DD9B69E43Bb7130AfeClass;
  "k:{\"uid\":\"164abe91-a203-4888-ba9e-8cf3c78d5dbd\"}"?: KUid025564Ce77544D26967993790180806EClass;
  "k:{\"uid\":\"be6a85d0-0b8d-41d6-be74-f65144b12bff\"}"?: KUid025564Ce77544D26967993790180806EClass;
  "k:{\"uid\":\"d7bea4e7-d1cf-44d2-908b-83421cc22748\"}"?: KUid025564Ce77544D26967993790180806EClass;
  "k:{\"uid\":\"d16fd143-baa8-4212-94ef-33df64329c1d\"}"?: KUid025564Ce77544D26967993790180806EClass;
  "k:{\"uid\":\"269b72b1-4b76-41ec-b0da-0c81deebaf4a\"}"?: KUid025564Ce77544D26967993790180806EClass;
  "k:{\"uid\":\"ae09acc4-b19b-45a9-9183-0c5a8a09c689\"}"?: KUid124F5B938Beb46DD9B69E43Bb7130AfeClass;
  "k:{\"uid\":\"6de00fe1-3d7a-4781-b69e-7aed7736f1b6\"}"?: KUid124F5B938Beb46DD9B69E43Bb7130AfeClass;
  "k:{\"uid\":\"ce27773a-d3a6-47e8-84c6-5395b558961d\"}"?: KUid124F5B938Beb46DD9B69E43Bb7130AfeClass;
  "k:{\"uid\":\"d44558f3-e735-4038-86d0-1bae0f6b081e\"}"?: KUid124F5B938Beb46DD9B69E43Bb7130AfeClass;
  "k:{\"uid\":\"41d449bb-2c71-4a55-a45f-e7ed6d9c81ed\"}"?: KUid124F5B938Beb46DD9B69E43Bb7130AfeClass;
  "k:{\"uid\":\"b6aa18d3-c84d-423f-ad8e-f9e14477c0d4\"}"?: KUid124F5B938Beb46DD9B69E43Bb7130AfeClass;
  "k:{\"uid\":\"5edae6d7-6295-4bbf-9421-35698d9ea594\"}"?: KUid025564Ce77544D26967993790180806EClass;
  "k:{\"uid\":\"90fe21f9-a938-4248-b51d-e5326a0ef4c3\"}"?: KUid025564Ce77544D26967993790180806EClass;
  "k:{\"uid\":\"8ccf0e62-7d97-4bd7-89b7-b41ba3416711\"}"?: KUid025564Ce77544D26967993790180806EClass;
  "k:{\"uid\":\"331ea107-4aa8-452c-ba55-d3411705d1ea\"}"?: KUid025564Ce77544D26967993790180806EClass;
  "k:{\"uid\":\"9d4a6f13-947e-4802-ade0-aa06a909f3a3\"}"?: KUid025564Ce77544D26967993790180806EClass;
  "k:{\"uid\":\"bb3ff643-4a5e-40c7-81c7-f9007dce506e\"}"?: KUid025564Ce77544D26967993790180806EClass;
  "k:{\"uid\":\"fad84378-0098-43bb-b3e7-4116cea54562\"}"?: KUid025564Ce77544D26967993790180806EClass;
  "k:{\"uid\":\"ef8995e7-68b6-48ff-ac4e-9d632f7f457f\"}"?: KUid124F5B938Beb46DD9B69E43Bb7130AfeClass;
  "k:{\"uid\":\"dae7f28f-4919-460e-8075-27a9341747b3\"}"?: KUid124F5B938Beb46DD9B69E43Bb7130AfeClass;
  "k:{\"uid\":\"b7281473-2dbf-436d-9a5a-f5569dbd7807\"}"?: KUid124F5B938Beb46DD9B69E43Bb7130AfeClass;
  "k:{\"uid\":\"b2f8ea67-7740-4a44-8daa-a22eea2cd0d8\"}"?: KUid124F5B938Beb46DD9B69E43Bb7130AfeClass;
  "k:{\"uid\":\"de9a26cf-207c-463b-a680-626c66d71d34\"}"?: KUid124F5B938Beb46DD9B69E43Bb7130AfeClass;
  "k:{\"uid\":\"395c0e40-cf81-4a7a-91ca-2fcd9554bcac\"}"?: KUid124F5B938Beb46DD9B69E43Bb7130AfeClass;
  "k:{\"uid\":\"23ea550c-aec0-44b3-857d-70484b87521c\"}"?: KUid124F5B938Beb46DD9B69E43Bb7130AfeClass;
  "k:{\"uid\":\"6aabedb2-9438-4570-b71e-002110861612\"}"?: KUid124F5B938Beb46DD9B69E43Bb7130AfeClass;
}

export interface KUid025564Ce77544D26967993790180806EClass {
  ".": ResourcesValue;
  "f:apiVersion": ResourcesValue;
  "f:kind": ResourcesValue;
  "f:name": ResourcesValue;
  "f:uid": ResourcesValue;
}

export interface KUid124F5B938Beb46DD9B69E43Bb7130AfeClass {
  ".": ResourcesValue;
  "f:apiVersion": ResourcesValue;
  "f:blockOwnerDeletion"?: ResourcesValue;
  "f:controller"?: ResourcesValue;
  "f:kind": ResourcesValue;
  "f:name": ResourcesValue;
  "f:uid": ResourcesValue;
}

export interface FSpec {
  "f:containers": FContainers;
  "f:dnsPolicy": ResourcesValue;
  "f:enableServiceLinks": ResourcesValue;
  "f:restartPolicy": ResourcesValue;
  "f:schedulerName": ResourcesValue;
  "f:securityContext": ResourcesValue;
  "f:terminationGracePeriodSeconds": ResourcesValue;
  "f:activeDeadlineSeconds"?: ResourcesValue;
  "f:serviceAccount"?: ResourcesValue;
  "f:serviceAccountName"?: ResourcesValue;
  "f:shareProcessNamespace"?: ResourcesValue;
  "f:initContainers"?: FInitContainers;
  "f:nodeSelector"?: FNodeSelector;
  "f:volumes"?: FVolumes;
}

export interface FContainers {
  "k:{\"name\":\"email\"}"?: KNameEmail;
  "k:{\"name\":\"deployment\"}"?: KNameDeploymentClass;
  "k:{\"name\":\"fe-admin\"}"?: KNameDeploymentClass;
  "k:{\"name\":\"sti-build\"}"?: KNameStiBuild;
  "k:{\"name\":\"fe-clientside\"}"?: KNameDeploymentClass;
  "k:{\"name\":\"flaskql\"}"?: KNameDeploymentClass;
  "k:{\"name\":\"postgres\"}"?: KNamePostgres;
  "k:{\"name\":\"rest\"}"?: KNameDeploymentClass;
}

export interface KNameDeploymentClass {
  ".": ResourcesValue;
  "f:env"?: KNameDeploymentFEnv;
  "f:image": ResourcesValue;
  "f:imagePullPolicy": ResourcesValue;
  "f:name": ResourcesValue;
  "f:resources": ResourcesValue;
  "f:terminationMessagePath": ResourcesValue;
  "f:terminationMessagePolicy": ResourcesValue;
  "f:ports"?: FPorts;
  "f:envFrom"?: ResourcesValue;
  "f:livenessProbe"?: FLivenessProbeClass;
}

export interface KNameDeploymentFEnv {
  ".": ResourcesValue;
  "k:{\"name\":\"OPENSHIFT_DEPLOYMENT_NAME\"}": KNameOPENSHIFTDEPLOYMENTNAMEClass;
  "k:{\"name\":\"OPENSHIFT_DEPLOYMENT_NAMESPACE\"}": KNameOPENSHIFTDEPLOYMENTNAMEClass;
}

export interface KNameOPENSHIFTDEPLOYMENTNAMEClass {
  ".": ResourcesValue;
  "f:name": ResourcesValue;
  "f:value": ResourcesValue;
}

export interface FLivenessProbeClass {
  ".": ResourcesValue;
  "f:failureThreshold": ResourcesValue;
  "f:httpGet"?: FHTTPGet;
  "f:initialDelaySeconds": ResourcesValue;
  "f:periodSeconds": ResourcesValue;
  "f:successThreshold": ResourcesValue;
  "f:timeoutSeconds": ResourcesValue;
  "f:tcpSocket"?: FTCPSocket;
  "f:exec"?: FExec;
}

export interface FExec {
  ".": ResourcesValue;
  "f:command": ResourcesValue;
}

export interface FHTTPGet {
  ".": ResourcesValue;
  "f:path": ResourcesValue;
  "f:port": ResourcesValue;
  "f:scheme": ResourcesValue;
}

export interface FTCPSocket {
  ".": ResourcesValue;
  "f:port": ResourcesValue;
}

export interface FPorts {
  ".": ResourcesValue;
  "k:{\"containerPort\":8080,\"protocol\":\"TCP\"}": KContainerPort8080ProtocolTCP;
}

export interface KContainerPort8080ProtocolTCP {
  ".": ResourcesValue;
  "f:containerPort": ResourcesValue;
  "f:protocol": ResourcesValue;
}

export interface KNameEmail {
  ".": ResourcesValue;
  "f:envFrom": ResourcesValue;
  "f:image": ResourcesValue;
  "f:imagePullPolicy": ResourcesValue;
  "f:livenessProbe": FLivenessProbeClass;
  "f:name": ResourcesValue;
  "f:ports": FPorts;
  "f:readinessProbe": FLivenessProbeClass;
  "f:resources": ResourcesValue;
  "f:terminationMessagePath": ResourcesValue;
  "f:terminationMessagePolicy": ResourcesValue;
}

export interface KNamePostgres {
  ".": ResourcesValue;
  "f:envFrom": ResourcesValue;
  "f:image": ResourcesValue;
  "f:imagePullPolicy": ResourcesValue;
  "f:livenessProbe": FLivenessProbeClass;
  "f:name": ResourcesValue;
  "f:readinessProbe": FLivenessProbeClass;
  "f:resources": FResources;
  "f:securityContext": KNamePostgresFSecurityContext;
  "f:terminationMessagePath": ResourcesValue;
  "f:terminationMessagePolicy": ResourcesValue;
  "f:volumeMounts": KNamePostgresFVolumeMounts;
}

export interface FResources {
  ".": ResourcesValue;
  "f:limits": FLimits;
  "f:requests": FLimits;
}

export interface FLimits {
  ".": ResourcesValue;
  "f:memory": ResourcesValue;
}

export interface KNamePostgresFSecurityContext {
  ".": ResourcesValue;
  "f:capabilities": ResourcesValue;
  "f:privileged": ResourcesValue;
}

export interface KNamePostgresFVolumeMounts {
  ".": ResourcesValue;
  "k:{\"mountPath\":\"/var/lib/postgresql/data\"}": KMountPath;
}

export interface KMountPath {
  ".": ResourcesValue;
  "f:mountPath": ResourcesValue;
  "f:name": ResourcesValue;
  "f:readOnly"?: ResourcesValue;
}

export interface KNameStiBuild {
  ".": ResourcesValue;
  "f:args": ResourcesValue;
  "f:env": KNameStiBuildFEnv;
  "f:image": ResourcesValue;
  "f:imagePullPolicy": ResourcesValue;
  "f:name": ResourcesValue;
  "f:resources": ResourcesValue;
  "f:securityContext": KNameStiBuildFSecurityContext;
  "f:terminationMessagePath": ResourcesValue;
  "f:terminationMessagePolicy": ResourcesValue;
  "f:volumeMounts": KNameStiBuildFVolumeMounts;
}

export interface KNameStiBuildFEnv {
  ".": ResourcesValue;
  "k:{\"name\":\"ALLOWED_UIDS\"}": KNameOPENSHIFTDEPLOYMENTNAMEClass;
  "k:{\"name\":\"BUILD\"}": KNameOPENSHIFTDEPLOYMENTNAMEClass;
  "k:{\"name\":\"BUILD_BLOBCACHE_DIR\"}": KNameOPENSHIFTDEPLOYMENTNAMEClass;
  "k:{\"name\":\"BUILD_REGISTRIES_CONF_PATH\"}": KNameOPENSHIFTDEPLOYMENTNAMEClass;
  "k:{\"name\":\"BUILD_REGISTRIES_DIR_PATH\"}": KNameOPENSHIFTDEPLOYMENTNAMEClass;
  "k:{\"name\":\"BUILD_SIGNATURE_POLICY_PATH\"}": KNameOPENSHIFTDEPLOYMENTNAMEClass;
  "k:{\"name\":\"BUILD_STORAGE_CONF_PATH\"}": KNameOPENSHIFTDEPLOYMENTNAMEClass;
  "k:{\"name\":\"BUILD_STORAGE_DRIVER\"}"?: KNameOPENSHIFTDEPLOYMENTNAMEClass;
  "k:{\"name\":\"DROP_CAPS\"}": KNameOPENSHIFTDEPLOYMENTNAMEClass;
  "k:{\"name\":\"HTTPS_PROXY\"}": KNameProxy;
  "k:{\"name\":\"HTTP_PROXY\"}": KNameProxy;
  "k:{\"name\":\"LANG\"}": KNameOPENSHIFTDEPLOYMENTNAMEClass;
  "k:{\"name\":\"NO_PROXY\"}": KNameProxy;
  "k:{\"name\":\"PULL_DOCKERCFG_PATH\"}"?: KNameOPENSHIFTDEPLOYMENTNAMEClass;
  "k:{\"name\":\"PUSH_DOCKERCFG_PATH\"}"?: KNameOPENSHIFTDEPLOYMENTNAMEClass;
  "k:{\"name\":\"SOURCE_REF\"}"?: KNameOPENSHIFTDEPLOYMENTNAMEClass;
  "k:{\"name\":\"SOURCE_REPOSITORY\"}": KNameOPENSHIFTDEPLOYMENTNAMEClass;
  "k:{\"name\":\"SOURCE_URI\"}": KNameOPENSHIFTDEPLOYMENTNAMEClass;
  "k:{\"name\":\"SOURCE_SECRET_PATH\"}"?: KNameOPENSHIFTDEPLOYMENTNAMEClass;
}

export interface KNameProxy {
  ".": ResourcesValue;
  "f:name": ResourcesValue;
}

export interface KNameStiBuildFSecurityContext {
  ".": ResourcesValue;
  "f:privileged": ResourcesValue;
}

export interface KNameStiBuildFVolumeMounts {
  ".": ResourcesValue;
  "k:{\"mountPath\":\"/tmp/build\"}": KMountPath;
  "k:{\"mountPath\":\"/var/cache/blobs\"}": KMountPath;
  "k:{\"mountPath\":\"/var/lib/containers/cache\"}": KMountPath;
  "k:{\"mountPath\":\"/var/lib/containers/storage\"}": KMountPath;
  "k:{\"mountPath\":\"/var/lib/kubelet/config.json\"}": KMountPath;
  "k:{\"mountPath\":\"/var/run/configs/openshift.io/build-system\"}": KMountPath;
  "k:{\"mountPath\":\"/var/run/configs/openshift.io/certs\"}": KMountPath;
  "k:{\"mountPath\":\"/var/run/configs/openshift.io/pki\"}": KMountPath;
  "k:{\"mountPath\":\"/var/run/secrets/openshift.io/pull\"}": KMountPath;
  "k:{\"mountPath\":\"/var/run/secrets/openshift.io/push\"}": KMountPath;
}

export interface FInitContainers {
  ".": ResourcesValue;
  "k:{\"name\":\"git-clone\"}": KNameGitCloneClass;
  "k:{\"name\":\"manage-dockerfile\"}": KNameGitCloneClass;
}

export interface KNameGitCloneClass {
  ".": ResourcesValue;
  "f:args": ResourcesValue;
  "f:env": KNameStiBuildFEnv;
  "f:image": ResourcesValue;
  "f:imagePullPolicy": ResourcesValue;
  "f:name": ResourcesValue;
  "f:resources": ResourcesValue;
  "f:terminationMessagePath": ResourcesValue;
  "f:terminationMessagePolicy": ResourcesValue;
  "f:volumeMounts": KNameGitCloneFVolumeMounts;
}

export interface KNameGitCloneFVolumeMounts {
  ".": ResourcesValue;
  "k:{\"mountPath\":\"/tmp/build\"}": KMountPath;
  "k:{\"mountPath\":\"/var/cache/blobs\"}": KMountPath;
  "k:{\"mountPath\":\"/var/run/configs/openshift.io/build-system\"}": KMountPath;
  "k:{\"mountPath\":\"/var/run/configs/openshift.io/certs\"}": KMountPath;
  "k:{\"mountPath\":\"/var/run/configs/openshift.io/pki\"}": KMountPath;
  "k:{\"mountPath\":\"/var/run/secrets/openshift.io/source\"}"?: KMountPath;
}

export interface FNodeSelector {
  ".": ResourcesValue;
  "f:kubernetes.io/os": ResourcesValue;
}

export interface FVolumes {
  ".": ResourcesValue;
  "k:{\"name\":\"build-blob-cache\"}"?: KNameBuildBlobCacheClass;
  "k:{\"name\":\"build-ca-bundles\"}"?: KNameBuild;
  "k:{\"name\":\"build-proxy-ca-bundles\"}"?: KNameBuild;
  "k:{\"name\":\"build-system-configs\"}"?: KNameBuild;
  "k:{\"name\":\"buildcachedir\"}"?: KNameBuildcachedirClass;
  "k:{\"name\":\"builder-dockercfg-jwnpc-pull\"}"?: KNameBuilderDockercfgJwnpcPullClass;
  "k:{\"name\":\"builder-dockercfg-jwnpc-push\"}"?: KNameBuilderDockercfgJwnpcPullClass;
  "k:{\"name\":\"buildworkdir\"}"?: KNameBuildBlobCacheClass;
  "k:{\"name\":\"container-storage-root\"}"?: KNameBuildBlobCacheClass;
  "k:{\"name\":\"node-pullsecrets\"}"?: KNameBuildcachedirClass;
  "k:{\"name\":\"openshift-private-ssh-source\"}"?: KNameBuilderDockercfgJwnpcPullClass;
  "k:{\"name\":\"postgres-storage\"}"?: KNamePostgresStorage;
}

export interface KNameBuildBlobCacheClass {
  ".": ResourcesValue;
  "f:emptyDir": ResourcesValue;
  "f:name": ResourcesValue;
}

export interface KNameBuild {
  ".": ResourcesValue;
  "f:configMap": FConfigMap;
  "f:name": ResourcesValue;
}

export interface FConfigMap {
  ".": ResourcesValue;
  "f:defaultMode": ResourcesValue;
  "f:items"?: ResourcesValue;
  "f:name": ResourcesValue;
}

export interface KNameBuildcachedirClass {
  ".": ResourcesValue;
  "f:hostPath": FHostPath;
  "f:name": ResourcesValue;
}

export interface FHostPath {
  ".": ResourcesValue;
  "f:path": ResourcesValue;
  "f:type": ResourcesValue;
}

export interface KNameBuilderDockercfgJwnpcPullClass {
  ".": ResourcesValue;
  "f:name": ResourcesValue;
  "f:secret": FSecret;
}

export interface FSecret {
  ".": ResourcesValue;
  "f:defaultMode": ResourcesValue;
  "f:secretName": ResourcesValue;
}

export interface KNamePostgresStorage {
  ".": ResourcesValue;
  "f:name": ResourcesValue;
  "f:persistentVolumeClaim": FPersistentVolumeClaim;
}

export interface FPersistentVolumeClaim {
  ".": ResourcesValue;
  "f:claimName": ResourcesValue;
}

export interface FStatus {
  "f:conditions": { [key: string]: FCondition };
  "f:containerStatuses": ResourcesValue;
  "f:hostIP": ResourcesValue;
  "f:phase": ResourcesValue;
  "f:podIP": ResourcesValue;
  "f:podIPs": FPodIPS;
  "f:startTime": ResourcesValue;
  "f:initContainerStatuses"?: ResourcesValue;
}

export interface FCondition {
  ".": ResourcesValue;
  "f:lastProbeTime": ResourcesValue;
  "f:lastTransitionTime": ResourcesValue;
  "f:status": ResourcesValue;
  "f:type": ResourcesValue;
  "f:reason"?: ResourcesValue;
}

export interface FPodIPS {
  ".": ResourcesValue;
  "k:{\"ip\":\"10.129.2.11\"}"?: KIP101;
  "k:{\"ip\":\"10.131.0.119\"}"?: KIP101;
  "k:{\"ip\":\"10.131.0.121\"}"?: KIP101;
  "k:{\"ip\":\"10.131.0.127\"}"?: KIP101;
  "k:{\"ip\":\"10.131.0.131\"}"?: KIP101;
  "k:{\"ip\":\"10.131.0.141\"}"?: KIP101;
  "k:{\"ip\":\"10.131.0.222\"}"?: KIP101;
  "k:{\"ip\":\"10.131.0.23\"}"?: KIP101;
  "k:{\"ip\":\"10.129.3.110\"}"?: KIP101;
  "k:{\"ip\":\"10.131.0.136\"}"?: KIP101;
  "k:{\"ip\":\"10.131.0.221\"}"?: KIP101;
  "k:{\"ip\":\"10.129.3.107\"}"?: KIP101;
  "k:{\"ip\":\"10.131.0.132\"}"?: KIP101;
  "k:{\"ip\":\"10.129.3.60\"}"?: KIP101;
  "k:{\"ip\":\"10.131.0.20\"}"?: KIP101;
  "k:{\"ip\":\"10.129.2.168\"}"?: KIP101;
  "k:{\"ip\":\"10.129.2.175\"}"?: KIP101;
  "k:{\"ip\":\"10.129.3.109\"}"?: KIP101;
  "k:{\"ip\":\"10.131.0.22\"}"?: KIP101;
  "k:{\"ip\":\"10.129.3.58\"}"?: KIP101;
  "k:{\"ip\":\"10.129.2.146\"}"?: KIP101;
  "k:{\"ip\":\"10.131.1.181\"}"?: KIP101;
  "k:{\"ip\":\"10.129.2.173\"}"?: KIP101;
  "k:{\"ip\":\"10.131.0.21\"}"?: KIP101;
  "k:{\"ip\":\"10.129.2.233\"}"?: KIP101;
  "k:{\"ip\":\"10.129.2.206\"}"?: KIP101;
  "k:{\"ip\":\"10.129.2.15\"}"?: KIP101;
  "k:{\"ip\":\"10.131.1.65\"}"?: KIP101;
  "k:{\"ip\":\"10.131.1.68\"}"?: KIP101;
  "k:{\"ip\":\"10.131.0.52\"}"?: KIP101;
  "k:{\"ip\":\"10.131.0.113\"}"?: KIP101;
  "k:{\"ip\":\"10.129.3.140\"}"?: KIP101;
  "k:{\"ip\":\"10.131.0.140\"}"?: KIP101;
  "k:{\"ip\":\"10.128.2.118\"}"?: KIP101;
  "k:{\"ip\":\"10.131.1.67\"}"?: KIP101;
  "k:{\"ip\":\"10.131.0.51\"}"?: KIP101;
  "k:{\"ip\":\"10.131.0.112\"}"?: KIP101;
  "k:{\"ip\":\"10.131.0.16\"}"?: KIP101;
  "k:{\"ip\":\"10.131.0.9\"}"?: KIP101;
}

export interface KIP101 {
  ".": ResourcesValue;
  "f:ip": ResourcesValue;
}

export enum Manager {
  KubeControllerManager = "kube-controller-manager",
  Kubelet = "kubelet",
  Multus = "multus",
  OpenshiftControllerManager = "openshift-controller-manager",
}

export enum Operation {
  Update = "Update",
}

export enum Namespace {
  Esof = "esof",
}

export interface OwnerReference {
  apiVersion: APIVersion;
  blockOwnerDeletion?: boolean;
  controller?: boolean;
  kind: OwnerReferenceKind;
  name: string;
  uid: string;
}

export enum OwnerReferenceKind {
  Build = "Build",
  ReplicationController = "ReplicationController",
}

export interface Spec {
  containers: Container[];
  dnsPolicy: DNSPolicy;
  enableServiceLinks: boolean;
  imagePullSecrets: ImagePullSecret[];
  nodeName: NodeName;
  preemptionPolicy: PreemptionPolicy;
  priority: number;
  restartPolicy: RestartPolicy;
  schedulerName: SchedulerName;
  securityContext: SpecSecurityContext;
  serviceAccount: ServiceAccount;
  serviceAccountName: ServiceAccount;
  terminationGracePeriodSeconds: number;
  tolerations: Toleration[];
  volumes: Volume[];
  activeDeadlineSeconds?: number;
  shareProcessNamespace?: boolean;
  initContainers?: InitContainer[];
  nodeSelector?: NodeSelector;
}

export interface Container {
  envFrom?: EnvFrom[];
  image: string;
  imagePullPolicy: ImagePullPolicy;
  livenessProbe?: LivenessProbeClass;
  name: string;
  ports?: Port[];
  readinessProbe?: LivenessProbeClass;
  resources: ContainerResources;
  securityContext: ContainerSecurityContext;
  terminationMessagePath: TerminationMessagePath;
  terminationMessagePolicy: TerminationMessagePolicy;
  volumeMounts: VolumeMount[];
  env?: Env[];
  args?: ContainerArg[];
}

export enum ContainerArg {
  Loglevel0 = "--loglevel=0",
  OpenshiftStiBuild = "openshift-sti-build",
}

export interface Env {
  name: EnvName;
  value?: string;
}

export enum EnvName {
  AllowedUids = "ALLOWED_UIDS",
  Build = "BUILD",
  BuildBlobcacheDir = "BUILD_BLOBCACHE_DIR",
  BuildRegistriesConfPath = "BUILD_REGISTRIES_CONF_PATH",
  BuildRegistriesDirPath = "BUILD_REGISTRIES_DIR_PATH",
  BuildSignaturePolicyPath = "BUILD_SIGNATURE_POLICY_PATH",
  BuildStorageConfPath = "BUILD_STORAGE_CONF_PATH",
  BuildStorageDriver = "BUILD_STORAGE_DRIVER",
  DropCaps = "DROP_CAPS",
  HTTPProxy = "HTTP_PROXY",
  HTTPSProxy = "HTTPS_PROXY",
  Lang = "LANG",
  NoProxy = "NO_PROXY",
  OpenshiftDeploymentName = "OPENSHIFT_DEPLOYMENT_NAME",
  OpenshiftDeploymentNamespace = "OPENSHIFT_DEPLOYMENT_NAMESPACE",
  PullDockercfgPath = "PULL_DOCKERCFG_PATH",
  PushDockercfgPath = "PUSH_DOCKERCFG_PATH",
  SourceRef = "SOURCE_REF",
  SourceRepository = "SOURCE_REPOSITORY",
  SourceSecretPath = "SOURCE_SECRET_PATH",
  SourceURI = "SOURCE_URI",
}

export interface EnvFrom {
  configMapRef?: ImagePullSecret;
  secretRef?: ImagePullSecret;
}

export interface ImagePullSecret {
  name: ImagePullSecretName;
}

export enum ImagePullSecretName {
  BuilderDockercfgJwnpc = "builder-dockercfg-jwnpc",
  DefaultDockercfgScp5R = "default-dockercfg-scp5r",
  DeployerDockercfgT7Tf9 = "deployer-dockercfg-t7tf9",
  EsofConfig = "esof-config",
  EsofSecrets = "esof-secrets",
  PostgresConfig = "postgres-config",
  PostgresSecrets = "postgres-secrets",
}

export enum ImagePullPolicy {
  Always = "Always",
  IfNotPresent = "IfNotPresent",
}

export interface LivenessProbeClass {
  failureThreshold: number;
  httpGet?: HTTPGet;
  initialDelaySeconds: number;
  periodSeconds: number;
  successThreshold: number;
  timeoutSeconds: number;
  tcpSocket?: TCPSocket;
  exec?: Exec;
}

export interface Exec {
  command: string[];
}

export interface HTTPGet {
  path: string;
  port: number;
  scheme: string;
}

export interface TCPSocket {
  port: number;
}

export interface Port {
  containerPort: number;
  protocol: string;
}

export interface ContainerResources {
  limits?: Limits;
  requests?: Limits;
}

export interface Limits {
  memory: string;
}

export interface ContainerSecurityContext {
  capabilities?: Capabilities;
  runAsUser?: number;
  privileged?: boolean;
}

export interface Capabilities {
  drop: Drop[];
}

export enum Drop {
  Kill = "KILL",
  Mknod = "MKNOD",
  Setgid = "SETGID",
  Setuid = "SETUID",
}

export enum TerminationMessagePath {
  DevTerminationLog = "/dev/termination-log",
}

export enum TerminationMessagePolicy {
  FallbackToLogsOnError = "FallbackToLogsOnError",
  File = "File",
}

export interface VolumeMount {
  mountPath: MountPathEnum;
  name: VolumeMountName;
  readOnly?: boolean;
}

export enum MountPathEnum {
  TmpBuild = "/tmp/build",
  VarCacheBlobs = "/var/cache/blobs",
  VarLIBContainersCache = "/var/lib/containers/cache",
  VarLIBContainersStorage = "/var/lib/containers/storage",
  VarLIBKubeletConfigJSON = "/var/lib/kubelet/config.json",
  VarLIBPostgresqlData = "/var/lib/postgresql/data",
  VarRunConfigsOpenshiftIoBuildSystem = "/var/run/configs/openshift.io/build-system",
  VarRunConfigsOpenshiftIoCerts = "/var/run/configs/openshift.io/certs",
  VarRunConfigsOpenshiftIoPKI = "/var/run/configs/openshift.io/pki",
  VarRunSecretsKubernetesIoServiceaccount = "/var/run/secrets/kubernetes.io/serviceaccount",
  VarRunSecretsOpenshiftIoPull = "/var/run/secrets/openshift.io/pull",
  VarRunSecretsOpenshiftIoPush = "/var/run/secrets/openshift.io/push",
  VarRunSecretsOpenshiftIoSource = "/var/run/secrets/openshift.io/source",
}

export enum VolumeMountName {
  BuildBlobCache = "build-blob-cache",
  BuildCABundles = "build-ca-bundles",
  BuildProxyCABundles = "build-proxy-ca-bundles",
  BuildSystemConfigs = "build-system-configs",
  Buildcachedir = "buildcachedir",
  BuilderDockercfgJwnpcPull = "builder-dockercfg-jwnpc-pull",
  BuilderDockercfgJwnpcPush = "builder-dockercfg-jwnpc-push",
  BuilderTokenSh6KM = "builder-token-sh6km",
  Buildworkdir = "buildworkdir",
  ContainerStorageRoot = "container-storage-root",
  DefaultTokenNrqp9 = "default-token-nrqp9",
  DeployerTokenC59Dm = "deployer-token-c59dm",
  NodePullsecrets = "node-pullsecrets",
  OpenshiftPrivateSSHSource = "openshift-private-ssh-source",
  PostgresStorage = "postgres-storage",
}

export enum DNSPolicy {
  ClusterFirst = "ClusterFirst",
}

export interface InitContainer {
  args: InitContainerArg[];
  env: Env[];
  image: string;
  imagePullPolicy: ImagePullPolicy;
  name: InitContainerName;
  resources: ResourcesValue;
  terminationMessagePath: TerminationMessagePath;
  terminationMessagePolicy: TerminationMessagePolicy;
  volumeMounts: VolumeMount[];
}

export enum InitContainerArg {
  Loglevel0 = "--loglevel=0",
  OpenshiftGitClone = "openshift-git-clone",
  OpenshiftManageDockerfile = "openshift-manage-dockerfile",
}

export enum InitContainerName {
  GitClone = "git-clone",
  ManageDockerfile = "manage-dockerfile",
}

export enum NodeName {
  IP101128126UsWest1ComputeInternal = "ip-10-1-128-126.us-west-1.compute.internal",
  IP10118245UsWest1ComputeInternal = "ip-10-1-182-45.us-west-1.compute.internal",
  IP101226134UsWest1ComputeInternal = "ip-10-1-226-134.us-west-1.compute.internal",
}

export interface NodeSelector {
  "kubernetes.io/os": KubernetesIoOS;
}

export enum KubernetesIoOS {
  Linux = "linux",
}

export enum PreemptionPolicy {
  PreemptLowerPriority = "PreemptLowerPriority",
}

export enum RestartPolicy {
  Always = "Always",
  Never = "Never",
}

export enum SchedulerName {
  DefaultScheduler = "default-scheduler",
}

export interface SpecSecurityContext {
  fsGroup?: number;
  seLinuxOptions?: SELinuxOptions;
}

export interface SELinuxOptions {
  level: Level;
}

export enum Level {
  S0C27C9 = "s0:c27,c9",
}

export enum ServiceAccount {
  Builder = "builder",
  Default = "default",
  Deployer = "deployer",
}

export interface Toleration {
  effect: Effect;
  key: TolerationKey;
  operator: Operator;
  tolerationSeconds?: number;
}

export enum Effect {
  NoExecute = "NoExecute",
  NoSchedule = "NoSchedule",
}

export enum TolerationKey {
  NodeKubernetesIoMemoryPressure = "node.kubernetes.io/memory-pressure",
  NodeKubernetesIoNotReady = "node.kubernetes.io/not-ready",
  NodeKubernetesIoUnreachable = "node.kubernetes.io/unreachable",
}

export enum Operator {
  Exists = "Exists",
}

export interface Volume {
  name: VolumeMountName;
  secret?: Secret;
  hostPath?: HostPath;
  emptyDir?: ResourcesValue;
  configMap?: ConfigMap;
  persistentVolumeClaim?: PersistentVolumeClaim;
}

export interface ConfigMap {
  defaultMode: number;
  name: string;
  items?: ConfigMapItem[];
}

export interface ConfigMapItem {
  key: ItemKey;
  path: ItemPath;
}

export enum ItemKey {
  CABundleCRT = "ca-bundle.crt",
  QuayAgilesofCOM = "quay.agilesof.com",
  ServiceCACRT = "service-ca.crt",
}

export enum ItemPath {
  CertsDImageRegistryOpenshiftImageRegistrySVC5000CACRT = "certs.d/image-registry.openshift-image-registry.svc:5000/ca.crt",
  CertsDQuayAgilesofCOMCACRT = "certs.d/quay.agilesof.com/ca.crt",
  TLSCABundlePem = "tls-ca-bundle.pem",
}

export interface HostPath {
  path: MountPathEnum;
  type: HostPathType;
}

export enum HostPathType {
  Empty = "",
  File = "File",
}

export interface PersistentVolumeClaim {
  claimName: string;
}

export interface Secret {
  defaultMode: number;
  secretName: SecretName;
}

export enum SecretName {
  BuilderDockercfgJwnpc = "builder-dockercfg-jwnpc",
  BuilderTokenSh6KM = "builder-token-sh6km",
  DefaultTokenNrqp9 = "default-token-nrqp9",
  DeployerTokenC59Dm = "deployer-token-c59dm",
  OpenshiftPrivateSSH = "openshift-private-ssh",
}

export interface StatusClass {
  conditions: Condition[];
  containerStatuses: ContainerStatus[];
  hostIP: HostIP;
  phase: Phase;
  podIP: string;
  podIPs: PodIP[];
  qosClass: QosClass;
  startTime: Date;
  initContainerStatuses?: InitContainerStatus[];
}

export interface Condition {
  lastProbeTime: null;
  lastTransitionTime: Date;
  status: StatusEnum;
  type: ConditionType;
  reason?: ConditionReason;
}

export enum ConditionReason {
  PodCompleted = "PodCompleted",
}

export enum StatusEnum {
  False = "False",
  True = "True",
}

export enum ConditionType {
  ContainersReady = "ContainersReady",
  Initialized = "Initialized",
  PodScheduled = "PodScheduled",
  Ready = "Ready",
}

export interface ContainerStatus {
  containerID: string;
  image: string;
  imageID: string;
  lastState: ResourcesValue;
  name: string;
  ready: boolean;
  restartCount: number;
  started: boolean;
  state: ContainerStatusState;
}

export interface ContainerStatusState {
  running?: Running;
  terminated?: Terminated;
}

export interface Running {
  startedAt: Date;
}

export interface Terminated {
  containerID: string;
  exitCode: number;
  finishedAt: Date;
  reason: TerminatedReason;
  startedAt: Date;
}

export enum TerminatedReason {
  Completed = "Completed",
}

export enum HostIP {
  The101128126 = "10.1.128.126",
  The10118245 = "10.1.182.45",
  The101226134 = "10.1.226.134",
}

export interface InitContainerStatus {
  containerID: string;
  image: string;
  imageID: string;
  lastState: ResourcesValue;
  name: InitContainerName;
  ready: boolean;
  restartCount: number;
  state: InitContainerStatusState;
}

export interface InitContainerStatusState {
  terminated: Terminated;
}

export enum Phase {
  Running = "Running",
  Succeeded = "Succeeded",
}

export interface PodIP {
  ip: string;
}

export enum QosClass {
  BestEffort = "BestEffort",
  Burstable = "Burstable",
}

export interface PodSchemaMetadata {
  resourceVersion: string;
  selfLink: string;
}
