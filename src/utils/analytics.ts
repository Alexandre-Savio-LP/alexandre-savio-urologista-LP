// Utilitário Centralizado de Rastreamento de Conversões e Analytics
// Compatível com Google Analytics 4 (gtag), Google Tag Manager (dataLayer) e Meta Pixel (fbq)

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    GOOGLE_ADS_CONVERSION_ID?: string;
  }
}

/**
 * Dispara evento personalizado `clique_whatsapp` no GA4
 * @param location Identificador da seção de onde veio o clique (ex: 'header', 'hero', 'contato_mapa', 'barra_mobile')
 */
export function trackWhatsAppClick(location: string = 'cta_principal') {
  try {
    // 1. Google Analytics 4
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'clique_whatsapp', {
        canal_destino: 'whatsapp',
        posicao_pagina: location,
      });

      // Se houver ID de conversão do Google Ads configurado
      if (window.GOOGLE_ADS_CONVERSION_ID) {
        window.gtag('event', 'conversion', {
          send_to: window.GOOGLE_ADS_CONVERSION_ID,
        });
      }
    }

    // 2. Google Tag Manager DataLayer
    if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'clique_whatsapp',
        canal_destino: 'whatsapp',
        posicao_pagina: location,
        timestamp: new Date().toISOString(),
      });
    }

    // 3. Meta Pixel (caso configurado futuramente)
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'Contact', {
        content_name: 'WhatsApp Consultation',
        content_category: location,
      });
    }
  } catch (error) {
    console.warn('[Analytics] Erro ao disparar clique_whatsapp:', error);
  }
}

/**
 * Dispara evento personalizado `clique_doctoralia` no GA4
 * @param location Identificador do ponto de interação (ex: 'contato_perfil', 'rodape_perfil', 'widget_agendamento')
 */
export function trackDoctoraliaClick(location: string = 'geral') {
  try {
    // 1. Google Analytics 4
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'clique_doctoralia', {
        canal_destino: 'doctoralia',
        posicao_pagina: location,
      });
    }

    // 2. Google Tag Manager DataLayer
    if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'clique_doctoralia',
        canal_destino: 'doctoralia',
        posicao_pagina: location,
        timestamp: new Date().toISOString(),
      });
    }

    // 3. Meta Pixel (caso configurado futuramente)
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'Schedule', {
        content_name: 'Doctoralia Booking',
        content_category: location,
      });
    }
  } catch (error) {
    console.warn('[Analytics] Erro ao disparar clique_doctoralia:', error);
  }
}

/**
 * Dispara evento de clique para ligação telefônica
 */
export function trackPhoneClick(location: string = 'contato') {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'phone_call', {
        event_category: 'engagement',
        event_label: location,
      });
    }

    if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'phone_click',
        phone_location: location,
      });
    }
  } catch (error) {
    console.warn('[Analytics] Erro ao registrar ligação:', error);
  }
}

/**
 * Dispara evento para clique em links externos (ex: Instagram, Google Maps, Perfil do Google)
 */
export function trackExternalClick(destination: string) {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'click_external', {
        event_category: 'outbound',
        event_label: destination,
      });
    }

    if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'external_link_click',
        destination: destination,
      });
    }
  } catch (error) {
    console.warn('[Analytics] Erro ao registrar clique externo:', error);
  }
}
