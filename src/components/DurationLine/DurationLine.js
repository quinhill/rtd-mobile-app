import React from 'react';

const durationLines = ({totalSteps}) => {
  console.log(totalSteps)
  const totalDuration = totalSteps.duration;
  const lineDurations = totalSteps.eachStep.map((stepDur) => {
    return (totalDuration / stepDur) * 100;
  });
  const lineContainerStyles = {
    width: '100%'
  };
  const eachLine = lineDurations.map((line, index) => {
    const singleLineStyles = {
      display: 'grid',
      'grid-template-columns': '10px 1fr',
      'align-items': 'center'
    };
    const lineWidth = line + '%';
    const hrStyle = {
      width: lineWidth,
      border: '1px solid black'
    };
    return (
      <div 
        key={index}
        style={singleLineStyles}
      >
        <span className='dot'></span>
        <hr
          className='line-duration'
          style={hrStyle}
        />
      </div>
    );
  });
  return (
    <div
      className='line-container'
      style={lineContainerStyles}
    >
      {eachLine}
    </div>
  );
};

export default durationLines;