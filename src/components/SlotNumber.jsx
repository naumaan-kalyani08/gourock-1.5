import React from 'react';
import SlotCounter from 'react-slot-counter';

function SlotNumber({ value, className }) {
  return (
    <div className={className}>
      <SlotCounter 
        startValue={0}
        value={value}
        duration={3}
        animateOnVisible={true}
        direction="bottom-up"
      />
    </div>
  );
}

export default SlotNumber;
