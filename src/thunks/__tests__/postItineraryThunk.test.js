import { hasErrored, isLoading, storeItinerary } from '../../actions';
import postItineraryThunk from '../postItineraryThunk';
import { mockItinerary } from '../../__mocks__/mockItinerary';

describe('postItineraries', () => {
  let mockUrl;
  let mockDispatch;

  beforeEach(() => {
    mockUrl = 'www.someurl.com';
    mockDispatch = jest.fn();
  });

  it('calls dispatch with the isLoading action ', () => {
    const thunk = postItineraryThunk(mockUrl);

    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should dispatch hasErrored(true) if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }));
  
    const thunk = postItineraryThunk(mockUrl); 
  
    await thunk(mockDispatch);
  
    expect(mockDispatch).toHaveBeenCalledWith(({"isLoading": true, "type": "IS_LOADING"}));
    expect(mockDispatch).not.toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }));
  
    const thunk = postItineraryThunk(mockUrl); 
  
    await thunk(mockDispatch);
  
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch storeItinerary with the correct param', async () => {

    window.fetch = jest.fn().mockImplpementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        mockItinerary
      })
    }));

    const thunk = postItineraryThunk(mockUrl);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(storeItinerary(mockItinerary));
  });

});
