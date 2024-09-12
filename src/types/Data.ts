import { Accessibility, ChannelConfiguration } from "./Acquisition";
import { FileFormat } from "./Format";
import { UTCDate } from "./string";

/**
 * Recorder file
 */
export type File = {
  id: number;

  /**
   * Channel configuration related to this file
   */
  channel_configuration: ChannelConfiguration;

  /**
   * Name of the audio file, with extension
   */
  name: string;

  /**
   * Format of the audio file
   */
  format: FileFormat | null;

  /**
   * Date and time of the audio file start (in UTC)
   */
  initial_timestamp: UTCDate | null;

  /**
   * Duration of the audio file (in seconds)
   */
  duration: number | null;

  /**
   * Sampling frequency of the audio file (in Hertz). If it is different from the channel sampling frequency, resampling has been performed.
   */
  sampling_frequency: number | null;

  /**
   * Number of quantization bits used to represent each sample (in bits). If it is different from the channel sampling frequency, re-quantization has been performed.
   */
  sample_depth: number | null;

  /**
   * Description of the path to access the data
   */
  storage_location: string | null;

  /**
   * Total number of bytes of the audio file (in bytes)
   */
  file_size: number | null;

  /**
   * Accessibility level of the data.  If the availability is not sure or non-uniform within the audio file, the default value is upon request
   */
  accessibility: Accessibility | null;
}