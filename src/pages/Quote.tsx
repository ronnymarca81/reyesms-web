import Process from '@features/getQuote/components/Process';
import { Helmet } from 'react-helmet';

const Quote = () => {
  return (
    <>
      <Helmet>
        <title>Get a Free Quote – Reyes Maintenance Service Inc</title>
        <meta
          name="description"
          content="Request a free estimate for professional cleaning and maintenance services in Ottawa. Fast response, tailored solutions, and guaranteed satisfaction."
        />

        <meta property="og:title" content="Request a Quote – Reyes Maintenance" />
        <meta
          property="og:description"
          content="Get in touch for a free quote on commercial cleaning and maintenance services in Ottawa."
        />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <meta property="og:url" content="https://www.reyesms.ca/quote" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get a Free Quote – Reyes Maintenance" />
        <meta
          name="twitter:description"
          content="Request a free estimate for cleaning and maintenance services in Ottawa."
        />
        <meta name="twitter:image" content="/assets/og-image.jpg" />
      </Helmet>
      <div className="min-h-screen bg-white-100">
        <Process />
      </div>
    </>
  );
};
export default Quote;
