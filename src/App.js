// routes

import  { Toaster } from 'react-hot-toast';
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Toaster position="top-right" />
      <BaseOptionChartStyle />
      <Router />
    </ThemeProvider>
  );
}
