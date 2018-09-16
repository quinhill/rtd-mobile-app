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

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });
});
