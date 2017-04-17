/* eslint-env node */

module.exports.toConst = function toConst(features) {
  let consted = {}
  Object.keys(features).forEach((feature) => {
      consted[feature.toUpperCase().replace(/-/g, '_')] = features[feature]
  })

  return consted
}
