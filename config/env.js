export const ENV = process.env.NODE_ENV || 'development';

export const IS_TEST = ENV === 'test';
export const IS_DEV = ENV === 'development';
export const IS_PROD = ENV === 'production';