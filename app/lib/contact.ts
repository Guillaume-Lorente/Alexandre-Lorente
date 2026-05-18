export const PHONE_DISPLAY = "+33 7 88 84 36 78";
export const PHONE_INTERNATIONAL = "33788843678";

export function getWhatsappUrl(message: string) {
  return `https://wa.me/${PHONE_INTERNATIONAL}?text=${encodeURIComponent(message)}`;
}

export function getSmsUrl(message: string) {
  return `sms:${PHONE_DISPLAY}?body=${encodeURIComponent(message)}`;
}