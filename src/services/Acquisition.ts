import { Campaign, ChannelConfiguration, Deployment, Institution, Project, Site } from "../types";
import { APIService } from "./API";

/** Institution */
export class InstitutionService extends APIService {

  static list(): Promise<Array<Institution>> {
    const url = super._getMetadataxURL() + '/institution'
    return super._get(url);
  }

  static retrieve(id: number): Promise<Institution> {
    const url = super._getMetadataxURL() + `/institution/${ id }`
    return super._get(url);
  }
}

/** Project */
export class ProjectService extends APIService {

  static list(): Promise<Array<Project>> {
    const url = super._getMetadataxURL() + '/project'
    return super._get(url);
  }

  static retrieve(id: number): Promise<Project> {
    const url = super._getMetadataxURL() + `/project/${ id }`
    return super._get(url);
  }
}

/** Deployment */
export type DeploymentAPI = Omit<Deployment, 'campaign' | 'site'> & {
  campaign: Omit<Campaign, 'project'> & { project: number; }
  site: Omit<Site, 'project'> & { project: number; }
  channel: Array<ChannelConfiguration>;
}

export class DeploymentService extends APIService {

  static list(url: string = super._getMetadataxURL() + '/deployment'): Promise<Array<DeploymentAPI>> {
    return super._get(url);
  }

  static retrieve(id: number, url: string = super._getMetadataxURL() + `/deployment/${ id }`): Promise<DeploymentAPI> {
    return super._get(url);
  }
}

/** ChannelConfiguration */
export type ChannelConfigurationAPI = Omit<ChannelConfiguration, 'deployment'> & {
  deployment: Omit<DeploymentAPI, 'channel'>;
}
export class ChannelConfigurationService extends APIService {

  static list(): Promise<Array<ChannelConfigurationAPI>> {
    const url = super._getMetadataxURL() + '/channel-configuration'
    return super._get(url);
  }

  static retrieve(id: number): Promise<ChannelConfigurationAPI> {
    const url = super._getMetadataxURL() + `/channel-configuration/${ id }`
    return super._get(url);
  }
}