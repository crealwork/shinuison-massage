import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-Q3JSLKHGZ6";

export default function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });

          document.addEventListener('click', function(e) {
            var a = e.target && e.target.closest && e.target.closest('a[href^="tel:"]');
            if (!a) return;
            gtag('event', 'click_phone', {
              event_category: 'conversion',
              event_label: a.getAttribute('href'),
              value: 1
            });
          }, { passive: true });
        `}
      </Script>
    </>
  );
}
