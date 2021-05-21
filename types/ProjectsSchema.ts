export interface ProjectsSchema {
    apiVersion: string;
    items: Item[];
    kind: string;
    metadata: ProjectsSchemaMetadata;
}

export interface Item {
    apiVersion: string;
    kind: string;
    metadata: ItemMetadata;
    spec: Spec;
    status: Status;
}

export interface ItemMetadata {
    annotations: Annotations;
    creationTimestamp: Date;
    managedFields: ManagedField[];
    name: string;
    resourceVersion: string;
    selfLink: string;
    uid: string;
}

export interface Annotations {
    "openshift.io/description": string;
    "openshift.io/display-name": string;
    "openshift.io/requester": string;
    "openshift.io/sa.scc.mcs": string;
    "openshift.io/sa.scc.supplemental-groups": string;
    "openshift.io/sa.scc.uid-range": string;
}

export interface ManagedField {
    apiVersion: string;
    fieldsType: string;
    fieldsV1: FieldsV1;
    manager: string;
    operation: string;
    time: Date;
}

export interface FieldsV1 {
    "f:metadata"?: FMetadata;
    "f:status"?: FStatus;
    "f:spec"?: FSpec;
}

export interface FMetadata {
    "f:annotations": { [key: string]: FFinalizers };
}

export interface FFinalizers {
}

export interface FSpec {
    "f:finalizers": FFinalizers;
}

export interface FStatus {
    "f:phase": FFinalizers;
}

export interface Spec {
    finalizers: string[];
}

export interface Status {
    phase: string;
}

export interface ProjectsSchemaMetadata {
    resourceVersion: string;
    selfLink: string;
}
