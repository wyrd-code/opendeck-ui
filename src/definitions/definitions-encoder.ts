import { IBlockDefinition, FormInputComponent, DefinitionType } from ".";
import { Block } from "./definitions-device";

export enum EncodingMode {
  Controlchange7F = 0,
  Controlchange3F = 1,
  Programchange = 2,
  ControlchangeContinuous7 = 3,
  ControlchangeContinuous14 = 8,
  Changepreset = 4,
  Pitchbend = 5,
  NRPN6 = 6,
  NRPN7 = 7,
}

export const ShowAccelerationOnTypes = [
  EncodingMode.Pitchbend,
  EncodingMode.ControlchangeContinuous7,
  EncodingMode.ControlchangeContinuous14,
  EncodingMode.NRPN6,
  EncodingMode.NRPN7,
];

export const defaultEncoderData: Dictionary<number> = {
  enabled: (null as unknown) as number,
  invertState: (null as unknown) as number,
  encodingMode: (null as unknown) as number,
  midiIdLSB: (null as unknown) as number,
  midiChannel: (null as unknown) as number,
  pulsesPerStep: (null as unknown) as number,
  acceleration: (null as unknown) as number,
  midiIdMSB: (null as unknown) as number,
  remoteSync: (null as unknown) as number,
};

export const EncoderSectionDefinitions: Dictionary<IBlockDefinition> = {
  Enabled: {
    block: Block.Encoder,
    key: "enabled",
    type: DefinitionType.ComponentValue,
    section: 0,
    component: FormInputComponent.Toggle,
    label: "Enabled",
    helpText: `Enables or disables encoder. All encoders are disabled by default.`,
  },
  InvertState: {
    block: Block.Encoder,
    key: "invertState",
    type: DefinitionType.ComponentValue,
    section: 1,
    component: FormInputComponent.Toggle,
    label: "Invert",
    helpText: `When enabled, encoder will send inverted MIDI CC messages in different directions. Default option is disabled for all encoders.`,
  },
  EncodingMode: {
    block: Block.Encoder,
    key: "encodingMode",
    type: DefinitionType.ComponentValue,
    section: 2,
    component: FormInputComponent.Select,
    options: [
      { value: EncodingMode.Controlchange7F, text: "Control change - 7Fh01h" },
      { value: EncodingMode.Controlchange3F, text: "Control change - 3Fh41h" },
      { value: EncodingMode.Programchange, text: "Program change" },
      {
        value: EncodingMode.ControlchangeContinuous7,
        text: "Control change -Continuous 7-bit",
      },
      {
        value: EncodingMode.ControlchangeContinuous14,
        text: "Control change - Continuous 14-bit",
      },
      { value: EncodingMode.Changepreset, text: "Change preset" },
      { value: EncodingMode.Pitchbend, text: "Pitch bend" },
      { value: EncodingMode.NRPN6, text: "NRPN/7-bit" },
      { value: EncodingMode.NRPN7, text: "NRPN/14-bit" },
    ],
    label: "Encoding mode",
    helpText: `Denotes encoder encoding mode. Default option is 7Fh01h for all encoders.`,
  },
  MidiIdLSB: {
    block: Block.Encoder,
    key: "midiIdLSB",
    type: DefinitionType.ComponentValue,
    section: 3,
    component: FormInputComponent.Input,
    min: 0,
    max: 127,
    label: "MIDI ID (LSB)",
    helpText: "MIDI LSB channel for current component",
  },
  MidiChannel: {
    block: Block.Encoder,
    key: "midiChannel",
    type: DefinitionType.ComponentValue,
    section: 4,
    component: FormInputComponent.Input,
    min: 1,
    max: 16,
    label: "MIDI channel",
    helpText: "Denotes the MIDI CC number for each encoder.",
  },
  PulsesPerStep: {
    block: Block.Encoder,
    key: "pulsesPerStep",
    type: DefinitionType.ComponentValue,
    section: 5,
    component: FormInputComponent.Select,
    options: [
      { value: 2, text: "2" },
      { value: 3, text: "3" },
      { value: 4, text: "4" },
    ],
    label: "Pulses per step",
    helpText: `Amount of pulses encoder generates for single step.`,
  },
  Acceleration: {
    block: Block.Encoder,
    key: "acceleration",
    type: DefinitionType.ComponentValue,
    section: 6,
    component: FormInputComponent.Select,
    options: [
      { value: 0, text: "Disabled" },
      { value: 1, text: "Slow" },
      { value: 2, text: "Medium" },
      { value: 3, text: "Fast" },
    ],
    label: "Acceleration",
    helpText: `-`,
  },
  MidiIdMSB: {
    block: Block.Encoder,
    key: "midiIdMSB",
    type: DefinitionType.ComponentValue,
    section: 7,
    component: FormInputComponent.Input,
    min: 0,
    max: 127,
    label: "MIDI ID (MSB)",
    helpText: "MIDI MSB channel for current component",
  },
  RemoteSync: {
    block: Block.Encoder,
    key: "remoteSync",
    type: DefinitionType.ComponentValue,
    section: 8,
    component: FormInputComponent.Toggle,
    label: "Remote sync",
    helpText: "-",
  },
};
