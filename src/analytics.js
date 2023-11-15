// analytics.js
import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-TCFYMJSN62');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
