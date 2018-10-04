import { isLoading } from '../../actions';
import signUpThunk from '../signUpThunk';
import signUpUser from '../../containers/SignUp/SignUp';


describe('signUpThunk', () => {
  let mockUrl;
  let mockDispatch;


  beforeEach(() => {
    mockUrl = 'www.mockUrl.com';
    mockDispatch = jest.fn();
  });

  it('calls dispatch with the isLoading action ', () => {
    const thunk = signUpThunk(mockUrl);

    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading('user'));
  });

  it('should dispatch hasErrored(true) if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }));
    const fetchObject = {
      url: mockUrl,
      options: {}
    };

    const thunk = signUpThunk(fetchObject); 
  
    await thunk(mockDispatch);
  
    expect(mockDispatch).toHaveBeenCalledWith(({"string": 'user', "type": "IS_LOADING"}));
    expect(mockDispatch).not.toHaveBeenCalledWith(isLoading(null));
  });

  it('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }));
  
    const thunk = signUpThunk(mockUrl); 
  
    await thunk(mockDispatch);
  
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(null));
  });

  it.skip('should dispatch SignUpThunk with the correct param', async () => {
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

    const thunk = signUpThunk(mockUrl);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(signUpUser(mockUser));
  });
});
