import React from 'react';
import { shallow } from 'enzyme';
import { HomePage, mapStateToProps, mapDispatchToProps } from '../Home/Home';  
import getFavoritesThunk from "../../thunks/getFavoritesThunk";
import { getFavoritesUrl } from '../../constants/urlGenerator';
jest.mock('../../constants/urlGenerator');
jest.mock("../../thunks/getFavoritesThunk");

describe('Home', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<HomePage/>);
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    test('should return an object with the user information', () => {
      const mockState = {
        user: {
          id: 11,
          created_at: "2018-09-16T17:13:52.392Z",
          updated_at: "2018-09-16T17:13:52.392Z",
          email: "w@w.com",
          uid: "hIrg4jdimsfKBB6EjyCbVEiRrwo2",
          username: "w"
        },
        garbage: 'I once knew a man who likes to eat garbage'
      };
      const expected = {
        user: {
          id: 11,
          created_at: "2018-09-16T17:13:52.392Z",
          updated_at: "2018-09-16T17:13:52.392Z",
          email: "w@w.com",
          uid: "hIrg4jdimsfKBB6EjyCbVEiRrwo2",
          username: "w"
        }
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });    
  });

  describe('mapDispatchToProps', () => {
    test('should call dispatch with the correct params', () => {
      const mockDispatch= jest.fn();
      const mockUrl = 'www.fake.com';
      const actionToDispatch=getFavoritesThunk(mockUrl);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.getFavorites(mockUrl);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    }); 
  });
});
