import { browser } from 'webextension-polyfill-ts';

import { Message, Event, Options } from '../common/consts';

const defaultOptions: Options = {
  cid: `${Date.now()}-${Math.random()}`,
  'lyrics-smooth-scroll': 'off',
  'only-cover': 'off',
  'clean-lyrics': 'off',
  'show-on': 'pip',
  'lyrics-align': 'left',
  'font-size': '48',
  'toggle-shortcut': 'l',
};

// Remove in future versions
const copyLegacyOptionsPromise = new Promise(async (res) => {
  const legacyOptions: Options = JSON.parse(localStorage.getItem('config') || '{}');
  delete legacyOptions['strict-mode'];
  await updateOptions(legacyOptions);
  localStorage.removeItem('config');
  res();
});

export async function getOptions() {
  await copyLegacyOptionsPromise;

  const options = (await browser.storage.sync.get(defaultOptions)) as Options;
  if (options.cid === defaultOptions.cid) {
    await browser.storage.sync.set({ cid: options.cid });
  }
  return options;
}

export async function updateOptions(value: Partial<Options>) {
  await browser.storage.sync.set(value);

  const manifest = browser.runtime.getManifest() as typeof import('../../public/manifest.json');
  const tabs = await browser.tabs.query({ url: manifest.content_scripts[0].matches });
  tabs.forEach(async (tab) => {
    if (tab.id) {
      browser.tabs.sendMessage(tab.id, {
        type: Event.SEND_OPTIONS,
        data: await getOptions(),
      } as Message);
    }
  });
}
