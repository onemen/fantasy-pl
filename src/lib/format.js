import { format } from 'date-fns';
import { enUS, he } from 'date-fns/locale';

// eslint-disable-next-line no-unused-vars
const locales = { enUS, he };

export default function (
  date,
  formatStr = 'd MMMM, yyyy',
  options = { locale: he }
) {
  try {
    if (typeof date === 'string') {
      date = date ? new Date(date) : Date.now();
    }
    return format(date, formatStr, options);
  } catch (error) {
    console.log(error, { date, formatStr, typeOfDate: typeof date });
  }
  return date;
}
