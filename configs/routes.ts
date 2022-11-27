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
  CATEGORIES: ROUTES.APP + '/categories',
  PRODUCTS: ROUTES.APP + '/products',
  EMPLOYEES: ROUTES.APP + '/employees',
  PLACEMENTS: ROUTES.APP + '/placements',
  SETTINGS: ROUTES.APP + '/settings',
}
