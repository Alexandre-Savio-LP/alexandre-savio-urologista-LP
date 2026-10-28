// Utilitário Centralizado de Rastreamento de Conversões e Analytics
// Compatível com Google Analytics 4 (gtag), Google Tag Manager (dataLayer) e Meta Pixel (fbq)

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    fbq?: (...args: any[]) => void;
    GOOGLE_ADS_CONVERSION_ID?: string;
  }
}

/**
 * Dispara evento de conversão ao clicar no WhatsApp
 * @param location Identificador da seção de onde veio o clique (ex: 'header', 'hero', 'footer', 'flutuante')
 */
export function trackWhatsAppClick(location: string = 'cta_principal') {
  try {
    // 1. Google Analytics 4
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        event_category: 'conversion',
        event_label: `whatsapp_${location}`,
        method: 'WhatsApp',
        value: 1
      });

      // Se houver ID de conversão do Google Ads configurado
      if (window.GOOGLE_ADS_CONVERSION_ID) {
        window.gtag('event', 'conversion', {
          send_to: window.GOOGLE_ADS_CONVERSION_ID,
        });
      }
    }

    // 2. Google Tag Manager DataLayer
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'whatsapp_click',
        cta_location: location,
        timestamp: new Date().toISOString()
      });
    }

    // 3. Meta Pixel (Facebook & Instagram Ads)
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Contact', {
        content_name: 'WhatsApp Consultation',
        content_category: location
      });
    }

    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics] WhatsApp click rastreado: ${location}`);
    }
  } catch (error) {
    console.warn('[Analytics] Erro ao disparar evento de rastreamento:', error);
  }
}

/**
 * Dispara evento de clique para ligação telefônica
 */
export function trackPhoneClick(location: string = 'contato') {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'phone_call', {
        event_category: 'engagement',
        event_label: location
      });
    }

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'phone_click',
        phone_location: location
      });
    }
  } catch (error) {
    console.warn('[Analytics] Erro ao registrar ligação:', error);
  }
}

/**
 * Dispara evento para clique em links externos (ex: Doctoralia, Google Maps)
 */
export function trackExternalClick(destination: string) {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'click_external', {
        event_category: 'outbound',
        event_label: destination
      });
    }

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'external_link_click',
        destination: destination
      });
    }
  } catch (error) {
    console.warn('[Analytics] Erro ao registrar clique externo:', error);
  }
}
