import React from 'react';
import PropTypes from 'prop-types';
import { FancyButton } from '../FancyButton.component';
import { Text } from '../design-system';

export const PlayButtonComponent = ({ startPlaybackAndResume, stopPlayback, playing }) => (playing
  ? (
    <FancyButton
      onClick={stopPlayback}
      variant="red"
      mb={1}
      width="8rem"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      p={0}
    >
      <Text mr={2}>
        Stop
      </Text>
      <svg width="0.9em" height="0.9em" viewBox="0 0 371 371" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" fill="none" fillRule="evenodd">
          <rect fill="#FFFFFF" x="0" y="0" width="371" height="371" />
        </g>
      </svg>
    </FancyButton>
  )
  : (
    <FancyButton
      onClick={startPlaybackAndResume}
      variant="green"
      mb={1}
      width="8rem"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      p={0}
    >
      <Text mr={2}>
        PLAY
      </Text>
      <svg width="1.1em" height="0.9em" viewBox="0 0 452 396" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g fill="#FFFFFF">
            <rect stroke="#FFFFFF" x="0.5" y="11.5" width="131" height="369" />
            <polygon points="202.140625 0 202.140625 396 452 198" />
          </g>
        </g>
      </svg>
    </FancyButton>
  ));

PlayButtonComponent.propTypes = {
  startPlaybackAndResume: PropTypes.func.isRequired,
  stopPlayback: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
};
