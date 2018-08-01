import { getAudioContext } from './audioContext';
import { loadSamples } from './sampleStore';
import { scheduleNotes } from './audioScheduler';
import { setCurrentBeat } from '../common';

export const getCurrentBeat = ({ bpm, startTime }) => {
  const { currentTime } = getAudioContext();
  const beatLengthSeconds = bpm / 60;
  const currentBeat = ((currentTime - startTime) * beatLengthSeconds);
  return (currentBeat % 4) + 1;
};

export const initializeAudio = (store) => {
  const audioCtx = getAudioContext(); // Start the clock
  loadSamples(store)
    .then(() => {
      setInterval(() => {
        const { playbackSession, channels } = store.getState();
        if (playbackSession.playing) {
          const currentBeat = getCurrentBeat(playbackSession, audioCtx);
          store.dispatch(setCurrentBeat(currentBeat));
          scheduleNotes(playbackSession, channels, currentBeat);
        }
      }, 25);
    });
};
