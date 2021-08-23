import fs from 'fs'
import { assert } from 'chai'

import { useI18nWithGoogleTranslate } from '../src'


describe('useI18nWithGoogleTranslate helper', () => {
  it('should work fine', async () => {    
    await useI18nWithGoogleTranslate(
      'test/i18n/en.json',
      'test/i18n/fr.json',
      { from: 'en', to: 'fr' }
    )

    const content = fs.readFileSync('./test/i18n/fr.json')
    const jsonify = JSON.parse(content.toString())

    assert.deepEqual(jsonify, { 
      Hello: 'Bonjour',
      Welcome: 'Bienvenue',
      NestedAtt: {
        Att1: "salut",
        Att2: 20,
        Att3: true,
        Att4: {
          DeepNestedAtt: "Feu"
        }
      }
    })
  })
})
