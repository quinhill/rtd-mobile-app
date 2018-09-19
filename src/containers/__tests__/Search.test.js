import React from "react";
import { shallow } from "enzyme";
import { Search } from "../Search/Search";

describe("Search", () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      startAddress: "Union Station",
      endAddress: "Overland Golf Course",
      uid: "12"
    };

    wrapper = shallow(
      <Search 
        ustartAddress= "Union Station"
        endAddress= "Overland Golf Course"
        uid= "12" 
      />);
    jest.resetAllMocks();
  });

  it("should matchSnapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe.skip("handleChange", () => {
    it("should call handleChange when select input is chosen", () => {
      const mockDeparting = false;
      // const name = 'departing';

      wrapper.instance().handleChange(mockDeparting);

      expect(wrapper.state('departing')).toEqual(false);
    });

    it("should update state when handleChange is called", () => {
      const event = {
        target: {
          name: "hours",
          value: "1"
        }
      };

      wrapper.instance().handleChange(event);

      expect(wrapper.state("hours")).toEqual("1");
    });
  });

  describe.skip("getTime", () => {
    it("should call Date()", () => {
      // conscnt mockDate = jest.fn();
      const getTime = (global.Date = jest.fn());
      const getHours = jest.fn();
      const getMinutes = jest.fn();

      getTime();

      expect(global.Date).toHaveBeenCalledTimes(1);
    });
  });

  describe.skip("handleSubmit", () => {
    it("should call handleSubmit on the submit of the search container", () => {
      wrapper.instance().makeOptions = jest.fn();
      // const time.getHours = jest.fn();

      const mockState = {
        hours: 1,
        minutes: 20,
        departing: true
      };
      const event = {
        preventDefault: jest.fn(),
        target: {
          name: "minutes",
          value: 20
        }
      };
      // console.log(wrapper.state());

      handleSubmit();

      wrapper.find("form").simulate("submit", event);

      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it("calls preventDefault", () => {
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.instance().makeOptions = jest.fn();

      wrapper.instance().handleSubmit(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });

    it("should call makeOptions on the submit of the search container", () => {
      const makeOptions = jest.fn();
      const mockTimeData = {
        hours: 1,
        minutes: 20,
        departing: true
      };

      const event = {
        preventDefault: () => {},
        target: {
          name: "minutes",
          value: 20
        }
      };

      wrapper.instance().handleSubmit(event);

      wrapper.find("form").simulate("submit", event);
      // expect(makeOptions).toHaveBeenCalled();
    });
  });
});
