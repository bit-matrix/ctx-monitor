const base_host = process.env.UI_BASE_HOST || 'localhost';

const api_port = process.env.UI_API_PORT || '8000';
const api_host = process.env.UI_API_HOST || base_host;
const api_url = process.env.UI_API_URL || `http://${api_host}:${api_port}`;

const db_port = process.env.UI_DB_PORT || '8001';
const db_host = process.env.UI_DB_HOST || base_host;
const db_url = process.env.UI_DB_URL || `http://${db_host}:${db_port}`;

export const API_SOCKET_SERVER_URL = api_url + '/';
export const DB_SOCKET_SERVER_URL = db_url + '/';
