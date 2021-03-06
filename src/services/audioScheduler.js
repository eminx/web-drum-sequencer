import { LOOKAHEAD } from './audioEngine.config';
import { playNote } from './audioContext';
import { sampleStore } from './sampleStore';

// schedule is a lookup table of all the notes currently scheduled to be played
const schedule = {};

export const playNoteNow = (noteChannel) => {
  const sampleID = noteChannel.sample.url;
  playNote(null, sampleStore[sampleID], noteChannel.id);
};

export const scheduleNote = (noteID, noteTime, noteChannel) => {
  if (typeof schedule[noteID] === 'undefined') {
    const sampleID = noteChannel.sample.url;
    schedule[noteID] = playNote(noteTime, sampleStore[sampleID], noteChannel.id);
  }
};

export const isBetween = (query, a, b) => query >= a && query < b;

export const getScheduledNotes = ({
  channelNotes,
  channel,
  startTime,
  bpm,
  currentBeat,
}) => channelNotes.map(
  (note) => {
    const lookaheadBeats = LOOKAHEAD * (bpm / 60);
    const noteTime = startTime + ((note.beat - 1) * (60 / bpm));
    if (isBetween(note.beat, currentBeat, currentBeat + lookaheadBeats)) {
      return {
        id: note.id,
        time: noteTime,
        channel,
      };
    }
    // If nearing the end of the bar, schedule notes at the start of the bar too
    if (isBetween(note.beat, currentBeat - 4, currentBeat + lookaheadBeats - 4)) {
      return {
        id: note.id,
        time: startTime + ((note.beat + 3) * 60 / bpm),
        channel,
      };
    }
    // Return note objects with time: null that should not be scheduled
    return {
      id: note.id,
      time: null,
      channel,
    };
  },
);

export const scheduleNotes = ({
  notes,
  channels,
  startTime,
  pattern,
  bpm,
  currentBeat,
}) => {
  // Determine which notes need to be scheduled
  const notesToSchedule = channels.reduce(
    (accumulator, channel) => [
      ...accumulator,
      ...getScheduledNotes({
        channelNotes: notes[channel.id][pattern], // Play the current pattern
        channel,
        startTime,
        bpm,
        currentBeat,
      }),
    ], [],
  );

  // Schedule the notes
  notesToSchedule.forEach((note) => {
    if (note.time !== null) {
      scheduleNote(note.id, note.time, note.channel);
    } else {
      delete schedule[note.id];
    }
  });
};
