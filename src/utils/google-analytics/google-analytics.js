import ReactGA4 from 'react-ga4'

const GA_MEASUREMENT_ID = 'G-C5C3GWEX18'
const InitializeGoogleAnalytics = () => {
  ReactGA4.initialize(GA_MEASUREMENT_ID)
}

const TrackGoogleAnalyticsEvent = (category, action, label) => {
  console.log('GA event:', category, ':', action, ':', label)

  ReactGA4.event({ category, action, label })
}

export default InitializeGoogleAnalytics
export { InitializeGoogleAnalytics, TrackGoogleAnalyticsEvent }
