import cors from 'cors';

export const allowedOrigins = [
  // Local
  'http://localhost:3000',
  'http://localhost:3001',
];

const allowedMethods = [
  'GET',
  'POST',
  'PUT',
  'PATCH',
  'DELETE',
  'OPTIONS',
  'HEAD',
];

// Cors options to pass cors middleware
export const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      callback(null, true);
    } else {
      // check if the allowedOrigins contains the host
      const domain = origin.split('/').slice(0, 3).join('/');
      if (allowedOrigins.includes(domain)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  },
  credentials: true, // enable Access-Control-Allow-Credentials header
  methods: allowedMethods,
};
