import { render } from '@testing-library/react';

import MyMdComp from './MyMdComp';

describe('MyMdComp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyMdComp />);
    expect(baseElement).toBeTruthy();
  });
});
