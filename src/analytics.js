// analytics.js
import ReactGA from 'react-ga';

export const initGA = (category="homePage") => {
  // ReactGA.initialize('G-TCFYMJSN62');
  ReactGA.initialize('G-GG8E1NJPG0');
  console.log("track id hit ")
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
};

// export const logPageView = () => {
//   // alert("HIT")
//   ReactGA.set({ page: window.location.pathname });
//   ReactGA.pageview(window.location.pathname);
//   console.log("page view hit ")

// };
