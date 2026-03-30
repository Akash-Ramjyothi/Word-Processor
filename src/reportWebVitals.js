/**
 * Web Vitals Reporting
 * Reports Core Web Vitals for performance monitoring
 */

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      const createHandler = (metricName) => (metric) => {
        // Add metadata
        const enhancedMetric = {
          ...metric,
          timestamp: Date.now(),
          url: window.location.pathname,
        };
        
        // Log in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`📊 ${metricName}:`, metric.value, metric.rating);
        }
        
        onPerfEntry(enhancedMetric);
      };

      getCLS(createHandler('CLS'));
      getFID(createHandler('FID'));
      getFCP(createHandler('FCP'));
      getLCP(createHandler('LCP'));
      getTTFB(createHandler('TTFB'));
    });
  }
};

export default reportWebVitals;
