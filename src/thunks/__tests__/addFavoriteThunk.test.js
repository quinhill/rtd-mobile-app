import { addFavoriteThunk } from '../addFavoriteThunk';
import { hasErrored, isLoading, storeItinerary } from "../../actions";


describe('addFavoriteThunk', () => {
  let mockUrl;
  let mockDispatch;

  beforeEach(() => {
    mockUrl = 'www.mockUrl.com';
    mockDispatch = jest.fn();
  })

  it("calls dispatch with the isLoading action ", () => {
    const thunk = addFavoriteThunk(mockUrl);

    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });


  it('should dispatch hasErrored(true) if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }));

    const thunk = addFavoriteThunk(mockUrl);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(({ "isLoading": true, "type": "IS_LOADING" }));
    expect(mockDispatch).not.toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }));

    const thunk = addFavoriteThunk(mockUrl);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });


});
