import { Email } from "./string";

export type EquipmentProvider = {
  id: number;


  /**
   * Name of the manufacturer
   */
  name: string;

  /**
   * Contact email of the manufacturer
   */
  contact: Email | null;

  /**
   * Website of the manufacturer
   */
  website: URL | null;
}

export type RecorderModel = {
  id: number;

  /**
   * Recorder manufacturer
   */
  provider: EquipmentProvider;

  /**
   * Name of the recorder model
   */
  name: string;

  /**
   * Number of all the channels on the recorder, even if unused
   */
  number_of_channels: number | null;
}

export type Recorder = {
  id: number;

  /**
   * Model of the recorder
   */
  model: RecorderModel;

  /**
   * Serial number of the recorder
   */
  serial_number: string;
}

export type HydrophoneDirectivity =
  "Omni-directional" |
  "Bi-directional" |
  "Uni-directional" |
  "Cardioid" |
  "Supercardioid";

export type HydrophoneModel = {
  id: number;
  provider: EquipmentProvider;

  /**
   * Name of the hydrophone model
   */
  name: string;

  /**
   * Directivity of the hydrophone
   */
  directivity: HydrophoneDirectivity | null;

  /**
   * Minimal temperature where the hydrophone operates (in degree Celsius)
   */
  operating_min_temperature: number | null;

  /**
   * Maximal temperature where the hydrophone operates (in degree Celsius)
   */
  operating_max_temperature: number | null;

  /**
   * Lower limiting frequency for a more or less flat response of the hydrophone, pre-amplification included if applicable
   */
  min_bandwidth: number | null;

  /**
   * Upper limiting frequency within a more or less flat response of the hydrophone, pre-amplification included if applicable
   */
  max_bandwidth: number | null;

  /**
   * Self noise of the hydrophone (dB re 1µPa^2/Hz), pre-amplification included if applicable.
   *
   * Average on bandwidth or a fix frequency (generally @5kHz for example). Possibility to 'below sea-state zero' (equivalent to around 30dB @5kHz) could be nice because it is often described like that.
   */
  noise_floor: number | null;

  /**
   * Lowest level which the hydrophone can handle (dB SPL RMS or peak), pre-amplification included if applicable
   */
  min_dynamic_range: number | null;

  /**
   * Highest level which the hydrophone can handle (dB SPL RMS or peak), pre-amplification included if applicable
   */
  max_dynamic_range: number | null;

  /**
   * Maximum depth at which hydrophone operates (in positive meters)
   */
  max_operating_depth: number | null;
}

export type Hydrophone = {
  id: number;

  /**
   * Model of the hydrophone
   */
  model: HydrophoneModel;

  /**
   * Serial number of the hydrophone
   */
  serial_number: string;

  /**
   * Average sensitivity of the hydrophone (dB re 1V/µPa), pre-amplification included if applicable.
   *
   * Sensitivity Sh of the hydrophone such that : data(uPa) = data(volt)*10^((-Sh-G)/20). See Recorder Gain for definition of G
   */
  sensitivity: number;
}
