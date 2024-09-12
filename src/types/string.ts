export type Email = `${ string }@${ string }.${ string }` | '';

export type URL = `http${ 's' | '' }://${ string }`;

export type UTCDate = `${ number }-${ number }-${ number }T${ number }:${ number }:${ number }Z`;
