/**
 * Returns true if the page should have robots noindex.
 * Currently all pages are indexed per business decision.
 */
export function shouldNoindex(_serviceSlug: string, _locationSlug: string): boolean {
  return false;
}
