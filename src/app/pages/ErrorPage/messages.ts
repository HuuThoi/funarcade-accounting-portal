import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const scope = translations.pages.ErrorPage;

export const messages = {
  header: () => _t(scope.header, 'Woops! Something went wrong...'),
};
