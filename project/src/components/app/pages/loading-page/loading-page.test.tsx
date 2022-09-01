import { render, screen } from '@testing-library/react';
import LoadingPage from './loading-page';

describe('Component: LoadingPage', () => {
  it('should render correctly', () => {
    render(<LoadingPage />);

    expect(screen.getByText(/Загрузка.../i)).toBeInTheDocument();
  });
});
