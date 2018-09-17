import React from 'react';
import { shallow } from 'enzyme';
import DurationLine  from '../DurationLine/DurationLine';

describe('DurationLine', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <DurationLine
        totalSteps = {{
          duration: 20,
          eachStep: [20],
          stepsSum: 1
        }}
      />);

    expect(wrapper).toMatchSnapshot();
  });
});
