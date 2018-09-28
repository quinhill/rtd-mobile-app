import React from 'react';
import { LoadingPage } from '../Loading/Loading';
import { shallow } from 'enzyme';

describe('LoadingPage', () => {
  it('should match snapShot if type == loadingPage', () => {
    const mockType='loading-page';
    const wrapper = shallow(
      <LoadingPage
        type={mockType}
      />)

      expect(wrapper).toMatchSnapshot();
  })

  it('should match snapShot if type == loadingPage', () => {
    const mockType='loading-container';
    const wrapper = shallow(
      <LoadingPage
        type={mockType}
      />)

      expect(wrapper).toMatchSnapshot();
  })
})
