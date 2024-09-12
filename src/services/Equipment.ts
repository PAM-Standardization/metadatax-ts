import { Campaign, ChannelConfiguration, Deployment, Hydrophone, Institution, Project, Recorder, Site } from "../types";
import { APIService } from "./API";

/** Hydrophone */
export class HydrophoneService extends APIService {

  static list(): Promise<Array<Hydrophone>> {
    const url = super._getMetadataxURL() + '/hydrophone'
    return super._get(url);
  }

  static retrieve(id: number): Promise<Hydrophone> {
    const url = super._getMetadataxURL() + `/hydrophone/${ id }`
    return super._get(url);
  }
}

/** Recorder */
export class RecorderService extends APIService {

  static list(): Promise<Array<Recorder>> {
    const url = super._getMetadataxURL() + '/recorder'
    return super._get(url);
  }

  static retrieve(id: number): Promise<Recorder> {
    const url = super._getMetadataxURL() + `/recorder/${ id }`
    return super._get(url);
  }
}
