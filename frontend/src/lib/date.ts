export function toISODate(d: Date) {
  // YYYY-MM-DD (no time)
  return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
    .toISOString()
    .slice(0, 10);
}

export function formatDateLabel(date?: string) {
  return date ? parseISODate(date).toLocaleDateString() : '';
}

export function parseISODate(date: string) {
  const [y, m, d] = date.split('-').map((n) => Number(n));
  if (!y || !m || !d) return new Date(date);
  return new Date(y, m - 1, d);
}
