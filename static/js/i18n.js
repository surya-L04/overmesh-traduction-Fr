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
      'chat.no_messages': 'No messages yet',
      'chat.message': 'Message...',
      'chat.send': 'Send',
      'chat.no_mc_messages': 'No MC messages yet.',
      'chat.public_channel': 'Public channel…',
      'chat.advert': 'Advert',
      'chat.local': 'Local',
      'chat.no_hops': '(no hops)',
      'chat.flood': 'Flood',
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
      'chat.mc_send': 'Send',
      'chat.mc_advert': 'Advert',
      'chat.mc_local': 'Local',
      'chat.mc_no_hops': '(no hops)',
      'chat.mc_flood': 'Flood',
      'chat.no_messages': 'Aucun message pour le moment',
      'chat.mc_send': 'Envoyer',
      'chat.mc_advert': 'Annonce',
      'chat.mc_local': 'Local',
      'chat.mc_no_hops': '(sans saut)',
      'chat.mc_flood': 'Flood',
      'chat.message': 'Message…',
      'chat.send': 'Envoyer',
      'chat.no_mc_messages': 'Aucun message MC pour le moment.',
      'chat.public_channel': 'Canal public…',
      'chat.advert': 'Annonce',
      'chat.local': 'Local',
      'chat.no_hops': '(sans saut)',

    }
  };

  function applyTranslations() {
    const lang = localStorage.getItem(STORAGE_KEY) || 'en';
    const t = translations[lang] || translations.en;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    const selector = document.getElementById('language-selector');
    if (selector) {
      selector.value = lang;
      selector.addEventListener('change', () => {
        localStorage.setItem(STORAGE_KEY, selector.value);
        location.reload();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', applyTranslations);
})();
