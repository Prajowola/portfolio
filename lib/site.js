const repoBasePath = '/portfolio';

export const basePath = process.env.NODE_ENV === 'production' ? repoBasePath : '';

export function withBasePath(path) {
  if (!path) return basePath || '/';
  if (/^https?:\/\//.test(path)) return path;
  if (path.startsWith('#')) return path;
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}
