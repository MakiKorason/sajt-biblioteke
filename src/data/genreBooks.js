/**
 * Књиге по жанру у фонду библиотеке.
 * За нову књигу: { author, title, year, cobissQuery }
 */

const COBISS_LIB = 'gbru';

export function cobissSearchUrl(query) {
  return `https://plus.cobiss.net/cobiss/sr/sr/search/cobib?lib=${COBISS_LIB}&q=${encodeURIComponent(query)}`;
}

export const GENRE_MENU = [
  { key: 'triler', label: 'Трилер' },
  { key: 'ljubavni', label: 'Љубавни роман' },
  { key: 'istorijski', label: 'Историјски роман' },
  { key: 'drama', label: 'Драма' },
  { key: 'horor', label: 'Хорор' },
  { key: 'naucna_fantastika', label: 'Научна фантастика' },
];

export const GENRE_BOOKS = {
  triler: [],
  ljubavni: [],
  istorijski: [],
  drama: [],
  horor: [],
  naucna_fantastika: [],
};
