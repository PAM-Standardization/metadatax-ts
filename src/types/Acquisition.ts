import { Email, URL, UTCDate } from "./string";
import { Hydrophone, Recorder } from "./Equipment";
import { FileFormat } from "./Format";

/**
 * Institution
 */
export type Institution = {
  id: number;

  /**
   * Name of the institutions involved in the data collection and processing.
   * It is based on the SeaDataNet list
   * (<a href="https://edmo.seadatanet.org/search" target="_blank">https://edmo.seadatanet.org/search</a>),
   *  but an unlisted institution can be added if required.
   */
  name: string;

  /**
   * Generic and permanent email address
   */
  contact: Email;

  /**
   * If exists, the website URL of the institution
   */
  website: URL | null;
}

/**
 * Accessibility level of the data. Multiple choices are offered : open access, upon request, confidential.
 */
export type Accessibility =
  "Confidential" |
  "Upon request" |
  "Open access";

/**
 * Indicates the type of the project. (research, marine renewable energies, long monitoring).
 *     Can contain multiple values
 */
export type ProjectType = {
  id: number;

  /**
   * Description of the type of the project
   */
  name: string;
}

/**
 * Data acquisition project
 */
export type Project = {
  id: number;

  /**
   * Name of the project
   */
  name: string;

  /**
   * Name of the institutions involved in the data collection and processing within the project.
   */
  responsible_parties: Array<Institution>;

  /**
   * Accessibility level of the data. If the availability is not sure or non-uniform within the project,
   * the default value is upon request.
   */
  accessibility: Accessibility;

  /**
   * Digital Object Identifier of the data, if existing.
   */
  doi: string | null;

  /**
   * Description of the type of the project (e.g., research, marine renewable energies, long monitoring,...).
   */
  project_type: ProjectType | null;

  /**
   * Description of the goal of the project.
   */
  project_goal: string | null;
}

/**
 * Campaign during which the deployment was done
 */
export type Campaign = {
  id: number;

  /**
   * Name of the campaign during which the instrument was deployed.
   */
  name: string;

  /**
   * Project associated to this campaign
   */
  project: Project;
}

/**
 * Site where the deployment was done
 */
export type Site = {
  id: number;

  /**
   * Name of the platform conceptual location. A site may group together several platforms in relatively close proximity, or describes a location where regular deployments are carried out.
   */
  name: string;

  /**
   * Project associated to this site
   */
  project: Project;
}

export type PlatformType = {
  id: number;

  /**
   * Generic name of the support of the deployed instruments
   */
  name: string;
}

export type Platform = {
  id: number;

  /**
   * Name of the specific support of the deployed instruments
   */
  name: string;

  /**
   * Generic type of support
   */
  type: PlatformType | null;

  /**
   * Optional description of the platform.
   */
  description: string | null;
}

/**
 * Material deployment for data acquisition
 */
export type Deployment = {
  id: number;

  /**
   * Name of the deployment
   */
  name: string;

  /**
   * Project associated to this deployment
   */
  project: Project;

  /**
   * Name of the institution that deployed the instrument and collected the data.
   */
  provider: Institution | null;

  /**
   * Campaign during which the instrument was deployed.
   */
  campaign: Campaign | null;

  /**
   * Conceptual location. A site may group together several platforms in relatively close proximity, or describes a location where regular deployments are carried out.
   */
  site: Site | null;

  /**
   * Support of the deployed instruments
   */
  platform: Platform | null;

  /**
   * Date and time at which the measurement system was deployed in UTC
   */
  deployment_date: UTCDate | null;

  /**
   * Name of the vehicle associated with the deployment
   */
  deployment_vessel: string | null;

  /**
   * Date and time at which the measurement system was recovered in UTC
   */
  recovery_date: UTCDate | null;

  /**
   * Name of the vehicle associated with the recovery
   */
  recovery_vessel: string | null;

  /**
   * Optional description of deployment and recovery conditions (weather, technical issues,...)
   */
  description: string | null;

  /**
   * Longitude of the platform position (WGS84 decimal degree)
   */
  longitude: number;

  /**
   * Latitude of the platform position (WGS84 decimal degrees)
   */
  latitude: number;

  /**
   * Underwater depth of ocean floor at the platform position (in positive meters)
   */
  bathymetric_depth: number | null;
}

/**
 * Configuration of a recorded channel for a Hydrophone on a Recorder in a deployment
 */
export type ChannelConfiguration = {
  id: number;

  deployment: Deployment;
  hydrophone: Hydrophone;
  recorder: Recorder;

  /**
   * Name of the channel used for recording
   */
  channel_name: string | null;

  /**
   * Gain of the channel (recorder), with correction factors if applicable, without hydrophone sensibility (in dB). If end-to-end calibration with hydrophone sensibility, set it in Sensitivity and set Gain to 0 dB.
   *
   * Gain G of the channel such that : data(uPa) = data(volt)*10^((-Sh-G)/20). See Sensitivity for Sh definition.
   */
  gain: number;

  /**
   * Immersion depth of hydrophone (in positive meters)
   *
   * value >= 0
   */
  hydrophone_depth: number | null;

  /**
   * Boolean indicating if the record is continuous (1) or has a duty cycle (0)
   */
  continuous: boolean | null;

  /**
   * If it's not Continuous, time length (in second) during which the recorder is on
   *
   * value >= 0
   */
  duty_cycle_on: number | null;

  /**
   * If it's not Continuous, time length (in second) during which the recorder is off
   *
   * value >= 0
   */
  duty_cycle_off: number | null;

  /**
   * Sampling frequency of the recording channel (in Hertz)
   *
   * value >= 0
   */
  sampling_frequency: number;

  /**
   * Format of the recorded files
   */
  recording_format: FileFormat | null;

  /**
   * Number of quantization bits used to represent each sample by the recorder channel (in bits)
   *
   * value >= 0
   */
  sample_depth: number;
}