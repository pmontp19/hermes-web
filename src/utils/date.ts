/**
 * Formats a date into a readable string
 * @param date - The date to format
 * @returns A formatted date string like "January 1, 2023"
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}