import React from "react";
import { shallow } from "enzyme";
import { SignUpPage, mapDispatchToProps } from "../SignUp/SignUp";
import * as actions from "../../actions";
import { signUpThunk } from "../../thunks/signUpThunk";
import { createSecureServer } from "http2";

describe("SignUpPage", () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      signUpThunk: jest.fn(),
      history: { push: jest.fn() }
    };

    wrapper = shallow(<SignUpPage {...mockProps} />);
  });

  it("should match Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("CreateUser", () => {
    it.skip("should have an initial state of no user info", () => {
      const userInfo = {
        user: {
          uid: "1",
          email: "mock@email.com"
        }
      };

      const expected = {
        url: "https://rtd-revamp-api.herokuapp.com/api/v1/users",
        options: {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: "",
            uid: "1",
            email: "mock@email.com"
          })
        }
      };

      const createUser = wrapper.instance().createUser(userInfo);

      expect(createUser).toEqual(expected);
    });
  });

  describe("resetForm", () => {
    it("reset the state", () => {
      const mockState = {
        username: "Austin",
        email: "austin@aol.com",
        passwordOne: "password1",
        passwordTwo: "password2",
        error: null
      };

      wrapper.setState(mockState);

      const expected = {
        username: "",
        email: "",
        passwordOne: "",
        passwordTwo: "",
        error: null
      };

      wrapper.instance().resetForm();

      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe("onSubmit", () => {
    it("calls preventDefault", () => {
      const mockEvent = { preventDefault: jest.fn() };

      wrapper.instance().onSubmit(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });

    it.skip("calls resetForm", () => {
      const mockEvent = { preventDefault: jest.fn() };
      const resetForm = (wrapper.instance().resetForm = jest.fn());

      wrapper.instance().onSubmit(mockEvent);

      expect(resetForm).toHaveBeenCalledTimes(1);
    });

    it.skip("calls history.push", () => {
      const mockEvent = { preventDefault: jest.fn() };

      wrapper.instance().onSubmit(mockEvent);

      expect(mockProps.history.push).toHaveBeenCalledTimes(1);
    });
  });

  describe("handleChange", () => {
    it("sets state of name and value", () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: "username",
          value: "Austin"
        }
      };

      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state().username).toEqual("Austin");
    });
  });

  describe("mapDispatchToProps", () => {
    it.skip("calls dispatch with the correct params on signUpThunk", () => {
      const mockDispatch = jest.fn();
      const userInfo = {
        username: "mockUserName",
        id: "1",
        email: "mock@email.com"
      };
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = signUpThunk(userInfo);
      mappedProps.signUpThunk(userInfo);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });
});
