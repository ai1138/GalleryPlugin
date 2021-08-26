import { withPluginApi } from "discourse/lib/plugin-api";
import { onToolbarCreate } from 'discourse/components/d-editor';
import showModal from "discourse/lib/show-modal";

function initializePlugin(api) {

  const siteSettings = api.container.lookup('site-settings:main');

  if (siteSettings.plugin_name_enabled) {

    api.onToolbarCreate(toolbar => {
      toolbar.addButton({
        id: "gallery_button",
        group: "extras",
        icon: "images",
        perform: e => e.applySurround('[gallery]', '[/gallery]', 'gallery_default_text')
      });
    });

  }
}

export default {
    name: 'gallery',

    initialize(container) {
      withPluginApi('0.1', api => initializePlugin(api), { noApi: () => priorToApi(container) });
    }
  }