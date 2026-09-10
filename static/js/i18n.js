(function () {
  'use strict';

  const STORAGE_KEY = 'overmeshLanguage';

  const translations = {
    en: {
      'common.confirm': 'Confirm',
      'common.cancel': 'Cancel',
      'common.close': 'Close',
      'common.ok': 'OK',
      'common.save': 'Save',
      'common.delete': 'Delete',
      'common.clear': 'Clear',
      'common.select': 'Select',
      'common.loading': 'Loading…',
      'nav.nodes': 'Nodes',
      'nav.chat': 'Chat',
      'nav.map': 'Map',
      'nav.bot': 'Bot',
      'nav.log': 'Log',
      'nav.settings': 'Settings',
      'nodes.live': 'Live',
      'nodes.history': 'History',
      'nodes.search': 'Search nodes...',
        'nodes.search_history': 'Search history...',
      'nodes.fav_first': 'Fav first',
      'nodes.mt_ignored': 'MT ignored',
      'nodes.mc_ignored': 'MC ignored',
      'nodes.name': 'Name',
      'nodes.short': 'Short',
      'nodes.snr': 'SNR',
      'nodes.battery': 'Battery',
      'nodes.hops': 'Hops',
      'nodes.distance': 'Distance',
      'nodes.last_seen': 'Last Seen',
      'nodes.note': 'Note',
      'nodes.radio': 'Radio',
      'nodes.first_added': 'First Added'
    },

    fr: {
      'common.confirm': 'Confirmer',
      'common.cancel': 'Annuler',
      'common.close': 'Fermer',
      'common.ok': 'OK',
      'common.save': 'Enregistrer',
      'common.delete': 'Supprimer',
      'common.clear': 'Effacer',
      'common.select': 'Sélectionner',
      'common.loading': 'Chargement…',
      'nav.nodes': 'Nœuds',
      'nav.chat': 'Discussion',
      'nav.map': 'Carte',
      'nav.bot': 'Bot',
      'nav.log': 'Journal',
      'nav.settings': 'Paramètres',
      'nodes.live': 'En direct',
      'nodes.history': 'Historique',
      'nodes.search': 'Rechercher des nœuds…',
        'nodes.search_history': 'Rechercher dans l’historique…',
      'nodes.fav_first': 'Favoris en premier',
      'nodes.mt_ignored': 'MT ignorés',
      'nodes.mc_ignored': 'MC ignorés',
      'nodes.name': 'Nom',
      'nodes.short': 'Court',
      'nodes.snr': 'SNR',
      'nodes.battery': 'Batterie',
      'nodes.hops': 'Sauts',
      'nodes.distance': 'Distance',
      'nodes.last_seen': 'Dernière activité',
      'nodes.note': 'Note',
      'nodes.radio': 'Radio',
      'nodes.first_added': 'Première apparition'
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
    applyTranslations();

    return true;
  }

  function getAvailableLanguages() {
    return Object.keys(translations);
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', t(key));
    });
  }

  window.OverMeshI18n = {
    t,
    setLanguage,
    getLanguage,
    getAvailableLanguages,
    applyTranslations
  };

  window.t = t;

  document.addEventListener('DOMContentLoaded', () => { applyTranslations(); const selector = document.getElementById('language-selector'); if (selector) { selector.value = currentLanguage; selector.addEventListener('change', () => setLanguage(selector.value)); } });
})();
