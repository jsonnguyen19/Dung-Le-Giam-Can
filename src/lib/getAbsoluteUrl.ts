/**
 * Converts a relative URL to an absolute URL with the domain
 * @param path The relative path (starting with '/')
 * @returns The absolute URL with the domain
 */
export function getAbsoluteUrl(path: string): string {
  // Remove leading slash if present, as the domain will always have a trailing slash
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `https://dunglegiamcan.com/${cleanPath}`;
}
