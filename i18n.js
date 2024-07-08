import I18n from 'react-native-i18n';

import es_ES from './locale/es_ES.mjs'
import en from './locale/en.mjs'

I18n.fallbacks = true;

I18n.translations = {
    es_ES,
    en
};

export default I18n;