import postItinerary from '../postItineraryThunk';
import { hasErrored, isLoading, storeItinerary } from '../../actions';

describe('postItineraries', () => {
  let mockUrl;
  let mockDispatch;

  beforeEach(() => {
    mockUrl = 'www.someurl.com';
    mockDispatch = jest.fn();
  });

  it('calls dispatch with the isLoading action ', () => {
    const thunk = postItinerary(mockUrl);

    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should dispatch hasErrored(true) if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }));
  
    const thunk = postItinerary(mockUrl); 
  
    await thunk(mockDispatch);
  
    expect(mockDispatch).toHaveBeenCalledWith(({"isLoading": true, "type": "IS_LOADING"}));
    expect(mockDispatch).not.toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }));
  
    const thunk = postItinerary(mockUrl); 
  
    await thunk(mockDispatch);
  
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });
    
});
