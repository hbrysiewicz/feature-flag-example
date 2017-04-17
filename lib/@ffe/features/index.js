/* eslint-env node */

const MergeTrees = require('broccoli-merge-trees')
const { stripIndent } = require('common-tags')
const WriteFile = require('broccoli-file-creator')
const { toConst } = require('../../utils/features')

module.exports = {
  name: '@ffe/features',

  isDevelopingAddon() {
    return true
  },

  preprocessTree(type, tree) {
    if (type === 'js') {
      const featuresModule = this._featuresES()
      tree = MergeTrees([tree, featuresModule])
    }

    return tree
  },

  _featuresES(production = false) {
    let FEATURES = require('../../../features').features
    let content = stripIndent`
      export const FEATURES = ${JSON.stringify(FEATURES)}
      ${Object.keys(toConst(FEATURES)).map((FEATURE) => {
        return `export const ${FEATURE} = FEATURES["${FEATURE.replace(/_/g, '-').toLowerCase()}"]`
      }).join('\n')}
    `

    return new WriteFile('/feature-flag-example/features.js', content, {
      annotation: `features ${production ? 'production' : 'debug' }`
    })
  },

  _toConst: toConst
}
