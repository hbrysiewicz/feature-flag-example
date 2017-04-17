/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app')
const { toConst } = require('./lib/utils/features')

module.exports = function(defaults) {
  let env = EmberApp.env() || 'development'

  let isProductionLikeBuild = ['production', 'staging'].indexOf(env) > -1
  let features = require('./features').features

  let babel = { plugins: [] }

  // Dead code elimination in production
  if (isProductionLikeBuild) {
    babel.plugins.push(['minify-dead-code-elimination', { 'optimizeRawSize': true }])
  }

  let app = new EmberApp(defaults, {
    babel,

    'ember-cli-babel': {
      includePolyfill: true
    },

    'ember-cli-qunit': {
      useLintTree: false
    },

    fingerprint: {
      enabled: false
    },

    sourcemaps: {
      enabled: !isProductionLikeBuild,
      extensions: ['js']
    }
  })

  return app.toTree()
}
