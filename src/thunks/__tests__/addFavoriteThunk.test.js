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

});
