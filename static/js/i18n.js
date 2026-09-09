(function () {
  'use strict';

  const STORAGE_KEY = 'overmeshLanguage';

  const translations = {
    en: {
      'common.ok': 'OK',
      'common.cancel': 'Cancel',
      'common.close': 'Close',
      'common.save': 'Save',
      'common.delete': 'Delete',
      'common.clear': 'Clear',
      'common.select': 'Select',
      'common.loading': 'Loading…'
    },

    fr: {
      'common.ok': 'OK',
      'common.cancel': 'Annuler',
      'common.close': 'Fermer',
      'common.save': 'Enregistrer',
      'common.delete': 'Supprimer',
      'common.clear': 'Effacer',
      'common.select': 'Sélectionner',
      'common.loading': 'Chargement…'
    }
  };

  function getLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved && translations[saved]) {
      return saved;
    }

    return 'en';
  }

  let currentLanguage = getLanguage();

  function t(key, vars = {}) {
    let text =
      translations[currentLanguage]?.[key] ??
      translations.en?.[key] ??
      key;

    Object.keys(vars).forEach(name => {
      text = text.replace(
        new RegExp(`\\{${name}\\}`, 'g'),
        String(vars[name])
      );
    });

    return text;
  }

  function setLanguage(language) {
    if (!translations[language]) {
      return false;
    }

    currentLanguage = language;
    localStorage.setItem(STORAGE_KEY, language);

    return true;
  }

  function getAvailableLanguages() {
    return Object.keys(translations);
  }

  window.OverMeshI18n = {
    t,
    setLanguage,
    getLanguage,
    getAvailableLanguages
  };

  window.t = t;
})();
