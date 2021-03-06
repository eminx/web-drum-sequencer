import { PRESETS_CONSTANTS } from './presets.constants';

export const setPreset = presetName => ({
  type: PRESETS_CONSTANTS.SET_PRESET,
  payload: presetName,
});

export const savePreset = preset => ({
  type: PRESETS_CONSTANTS.SAVE_PRESET,
  payload: preset,
});

export const savePresetAs = preset => ({
  type: PRESETS_CONSTANTS.SAVE_PRESET_AS,
  payload: preset,
});

export const deletePreset = presetName => ({
  type: PRESETS_CONSTANTS.DELETE_PRESET,
  payload: presetName,
});
