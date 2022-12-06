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
  APP: '/',
  START: '/start',
  ORDERS: '/orders',
  CATEGORIES: '/categories',
  PRODUCTS: '/products',
  CATEGORY_PRODUCTS: '/products/:category',
  EMPLOYEES: '/employees',
  EMPLOYEE: '/employees/:id',
  PLACEMENTS: '/placements',
  SETTINGS: '/settings',
  ME: '/me',
}
