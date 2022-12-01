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
  START: '/start',
  ORDERS: '/orders',
  CATEGORIES: '/categories',
  PRODUCTS: '/products',
  EMPLOYEES: '/employees',
  PLACEMENTS: '/placements',
  SETTINGS: '/settings',
  ME: '/me',
}
