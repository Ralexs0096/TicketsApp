import { RenderOptions, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface testRendererProps {
  children: JSX.Element | Array<JSX.Element>;
}

const testRenderer = ({ children }: testRendererProps) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: testRenderer, ...options });

export default customRender;
