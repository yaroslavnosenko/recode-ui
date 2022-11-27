export const ROUTES = {
  HOME: '/',
  CONTACTS: '/contacts',
  APP: '/app',
  QR: (uuid: string) => `/qr/${uuid}`,
  MENU: (supplierSlug: string, tableId: string) =>
    `/m/${supplierSlug}/${tableId}`,
  AUTH: '/auth',
}

export const APP_ROUTES = {
  APP: ROUTES.APP,
  ORDERS: ROUTES.APP + '/orders',
  SETTINGS: ROUTES.APP + '/settings',
}
