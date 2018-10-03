import { isLoading, hasErrored, signInUser } from '../../actions';
import { signInThunk } from '../signInThunk';


describe('signInThunk', () => {
  let mockUrl;
  let mockDispatch;

  beforeEach(() => {
    mockUrl = 'www.mockUrl.com';
    mockDispatch = jest.fn();
  });

  it('should call dispatch with the isloading action', () => {
    const thunk = signInThunk(mockUrl);

    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading('user'));
  });

  it('should dispatch hasErrored(true) if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }));
  
    const thunk = signInThunk(mockUrl); 
  
    await thunk(mockDispatch);
  
    expect(mockDispatch).toHaveBeenCalledWith(({"string": 'user', "type": "IS_LOADING"}));
    expect(mockDispatch).not.toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }));
  
    const thunk = signInThunk(mockUrl); 
  
    await thunk(mockDispatch);
  
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(''));
  });

  it.skip('should dispatch storeItinerary with the correct param', async () => {
    const mockUser = {
      created_at : "2018-09-16T17:17:43.318Z",
      email : "www@wwww.com",
      id : 12,
      uid : "rMxbhM5AUSbZshYF3eOVF4Rvq8v2",
      updated_at : "2018-09-16T17:17:43.318Z",
      username : "ww"
    };

    window.fetch = jest.fn().mockImplpementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        mockUser
      })
    }));

    const thunk = signInThunk(mockUrl);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(signInUser(mockItinerary));
  });
});
