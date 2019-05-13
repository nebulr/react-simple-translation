# React Simple Translations

Ability to add translations and get those translations based on a simple
method of changing the language per a singleton object.

```
import en_US from './en_US.json';
import es_ES from './es_ES.json';
import translation from 'react-simple-translations';

translation
  .init({
    language: 'en_US',
    resources: {
      en_US,
      es_ES,
      la_LA
    }
  })

export default translation;

... en_US.json

{
  "SOME_TRANSLATION": "hola foo bar"
}

... es_ES.json

{
  "SOME_TRANSLATION": "hello foo bar"
}

...

import React, { Component } from 'react';
import translation from 'react-simple-translations';

export default class SomeView extends Component {
  render() {
    return (
      <div>{ translation.get('SOME_TRANSLATION') }</div>
    )
  }
}
```