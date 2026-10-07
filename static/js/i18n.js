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
      'nodes.first_added': 'First Added',
      'map.map': 'Map',
      'map.message': 'Message...',
      'map.sense': 'Sense',
      'map.heat': 'Heat',
      'map.passive': 'Passive',
      'map.nodes_detected': 'Nodes detected',
      'map.filter': 'Filter…',
      'map.clear': 'Clear',
      'map.no_matches': 'No matches.',
      'map.no_mc_contacts': 'No MC contacts.',
      'map.no_mc_activity': 'No MC activity yet.',
      'map.scan': 'Scan',
      'map.trace': 'Trace',
      'map.cancel': 'Cancel',
      'map.send': 'Send',
      'map.sense_mesh': 'Sense Mesh',
      'map.active': 'Active',
      'map.responded': 'Responded',
      'map.with_gps': 'With GPS',
      'map.avg_snr': 'Avg SNR',
      'map.last_heard': 'Last Heard',
      'map.contacts': 'contacts',
      'map.heard_recently': 'heard recently',
      'map.marks': 'Marks',
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
      'map.map': 'Carte',
      'map.message': 'Message…',
      'map.sense': 'Détection',
      'map.heat': 'Signal',
      'map.passive': 'Passif',
      'map.nodes_detected': 'Nœuds détectés',
      'map.filter': 'Filtrer…',
      'map.clear': 'Effacer',
      'map.no_matches': 'Aucun résultat.',
      'map.no_mc_contacts': 'Aucun contact MC.',
      'map.no_mc_activity': 'Aucune activité MC pour le moment.',
      'map.scan': 'Scanner',
      'map.trace': 'Tracer',
      'map.cancel': 'Annuler',
      'map.send': 'Envoyer',
      'map.sense_mesh': 'Détecter le maillage',
      'map.active': 'Actif',
      'map.responded': 'Réponses',
      'map.with_gps': 'Avec GPS',
      'map.avg_snr': 'SNR moyen',
      'map.last_heard': 'Dernier contact',
      'map.contacts': 'contacts',
      'map.heard_recently': 'entendus récemment',
      'map.marks': 'Repères',
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
      'chat.flood': 'Flood',
      'nodes.history': 'Historique',
      'nodes.search': 'Rechercher un nœud…',
      'nodes.search_history': 'Rechercher dans l\'historique…',
      'nodes.fav_first': 'Favoris en premier',
      'nodes.mt_ignored': 'MT ignorés',
      'nodes.mc_ignored': 'MC ignorés',
      'nodes.name': 'Nom',
      'nodes.short': 'Court',
      'nodes.snr': 'SNR',
      'nodes.battery': 'Batterie',
      'nodes.hops': 'Sauts',
      'nodes.distance': 'Distance',
      'nodes.last_seen': 'Dernière vue',
      'nodes.note': 'Note',
      'nodes.radio': 'Radio',
      'nodes.first_added': 'Ajouté le',

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
      el.placeholder = t(key);
    });

    const selector = document.getElementById('language-selector');

    if (selector) {
      selector.value = currentLanguage;

      if (!selector.dataset.i18nBound) {
        selector.dataset.i18nBound = '1';
        selector.addEventListener('change', () => {
          setLanguage(selector.value);
        });
      }
    }
  }

  window.OverMeshI18n = {
    t,
    setLanguage,
    getLanguage,
    getAvailableLanguages,
    applyTranslations
  };

  window.t = t;

  document.addEventListener('DOMContentLoaded', applyTranslations);
})();
