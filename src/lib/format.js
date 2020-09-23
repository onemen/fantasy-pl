import { format } from 'date-fns';
import { enUS, he } from 'date-fns/locale';

const locales = { enUS, he };

export default function (date, formatStr = 'd MMMM, yyyy') {
  try {
    if (typeof date === 'string') {
      date = new Date(date);
    }
    return format(date, formatStr, {
      locale: window.__localeId__ ? locales[window.__localeId__] : he,
    });
  } catch (error) {
    console.log(error, { date, formatStr, typeOfDate: typeof date });
  }
  return date;
}
