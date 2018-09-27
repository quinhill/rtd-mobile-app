
import { deleteFavItineraryThunk } from '../deleteFavItineraryThunk';
import { hasErrored, isLoading, storeItinerary } from "../../actions";

 
describe('deleteFavItineraryThunk', () => {
  let mockUrl;
  let mockDispatch;
  let mockOptions;
  let mockFetchObj;

  beforeEach(() => {
    mockUrl = 'www.mockUrl.com';
    mockOptions = {
      uid: '123456abcdefg',
      favData: 12
    }
    mockDispatch = jest.fn();
    mockFetchObj = {
      mockUrl,
      mockOptions
    }
  })

  it("calls dispatch with the isLoading action ", () => {
    const thunk = deleteFavItineraryThunk(mockFetchObj);

    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });


  it('should dispatch hasErrored(true) if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }));

    const thunk = deleteFavItineraryThunk(mockFetchObj);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(({ "isLoading": true, "type": "IS_LOADING" }));
    expect(mockDispatch).not.toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }));

    const thunk = deleteFavItineraryThunk(mockFetchObj);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

});
