// Base configuration for the application
const isProduction = process.env.NODE_ENV === 'production';

// API Configuration
export const API_CONFIG = {
  // Base URLs
  BASE_URL: isProduction 
    ? 'https://ucbankend.onrender.com/api' 
    : 'http://localhost:5001/api',
  
  UPLOADS_URL: isProduction
    ? 'https://ucbankend.onrender.com/uploads'
    : 'http://localhost:5001/uploads',
  
  // API Endpoints
  ENDPOINTS: {
    // Jobs
    JOBS: '/jobs',
    JOB: (id) => `/jobs/${id}`,
    
    // Applications
    APPLICATIONS: '/applications',
    APPLICATION: (id) => `/applications/${id}`,
    
    // Messages
    MESSAGES: '/message',
    MESSAGE: (id) => `/message/${id}`,
    
    // Blog
    BLOG: '/blog',
    BLOG_POST: (id) => `/blog/${id}`,
    
    // Config
    CONFIG: '/config'
  },
  
  // Get full API URL
  getUrl: (endpoint) => `${API_CONFIG.BASE_URL}${endpoint}`
};

// Frontend Routes
export const ROUTES = {
  HOME: '/',
  CAREERS: '/careers',
  BLOG: '/blog',
  CONTACT: '/contact',
  ADMIN: {
    DASHBOARD: '/admin-panel',
    JOBS: '/admin-panel/jobs',
    APPLICATIONS: '/admin-panel/applications',
    MESSAGES: '/admin-panel/messages',
    BLOG: '/admin-panel/blog'
  }
};

// Export all API endpoints with full URLs
export const API_ENDPOINTS = Object.entries(API_CONFIG.ENDPOINTS).reduce((acc, [key, value]) => {
  if (typeof value === 'function') {
    acc[key] = (id) => API_CONFIG.getUrl(value(id));
  } else {
    acc[key] = API_CONFIG.getUrl(value);
  }
  return acc;
}, {});

// Add uploads URL to API_ENDPOINTS
API_ENDPOINTS.UPLOADS = API_CONFIG.UPLOADS_URL;

// Export default configuration
export default {
  ...API_CONFIG,
  ...ROUTES,
  ...API_ENDPOINTS
};
