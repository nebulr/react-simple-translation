import deepmerge from 'deepmerge';

class SimpleTranslations {
  constructor() {
    this.config = {
      language: 'en-US',
      resources: {},
    };
  }

  init(config) {
    this.config = deepmerge(this.config, config);
  }

  get(key) {
    return this.config.resources[this.config.language][key];
  }
}

export default new SimpleTranslations();
