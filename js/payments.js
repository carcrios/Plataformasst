import { APP_CONFIG } from './config.js';

// Checkout hospedado de Wompi. La firma de integridad la calcula el servidor (el secreto nunca llega al navegador).
// WOMPI_CHECKOUT_URL solo se cambia en el entorno local de pruebas (tools/local-server.mjs).
const WOMPI_CHECKOUT_URL = APP_CONFIG.WOMPI_CHECKOUT_URL || 'https://checkout.wompi.co/p/';

export function buildWompiCheckoutUrl(order) {
  const params = new URLSearchParams({
    'public-key': order.publicKey,
    currency: order.currency,
    'amount-in-cents': String(order.amountInCents),
    reference: order.reference,
    'signature:integrity': order.integritySignature,
    'redirect-url': order.redirectUrl,
    'customer-data:email': order.email
  });
  return `${WOMPI_CHECKOUT_URL}?${params.toString()}`;
}

// Wompi agrega el parámetro id (ID de transacción) a la URL de retorno
export function readTransactionIdFromUrl() {
  return new URLSearchParams(window.location.search).get('id');
}
