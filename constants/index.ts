// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"

// UI Text Constants
export const UI_TEXT = {
  SITE_NAME: "ALX Listing App",
  SITE_DESCRIPTION: "Find and book unique accommodations worldwide",
  BUTTONS: {
    BOOK_NOW: "Book Now",
    VIEW_DETAILS: "View Details",
    LOAD_MORE: "Load More",
    SEARCH: "Search",
  },
  PLACEHOLDERS: {
    SEARCH: "Where are you going?",
    EMAIL: "Enter your email",
    PASSWORD: "Enter your password",
  },
} as const

// Configuration Settings
export const CONFIG = {
  ITEMS_PER_PAGE: 12,
  MAX_RATING: 5,
  DEFAULT_CURRENCY: "USD",
  SUPPORTED_IMAGE_FORMATS: ["jpg", "jpeg", "png", "webp"],
} as const

// Route Paths
export const ROUTES = {
  HOME: "/",
  LISTINGS: "/listings",
  PROPERTY: "/property",
  PROFILE: "/profile",
  BOOKINGS: "/bookings",
} as const
