import Ember from 'ember'
import {
  FEATURE_FOO,
  FEATURE_BAR,
  FEATURE_BAZ
} from '../features'

const {
  Component
} = Ember

export default Component.extend({
  classNames: ['feature-status'],

  isBarEnabled: FEATURE_BAR,
  isBazEnabled: FEATURE_BAZ,
  isFooEnabled: FEATURE_FOO
})
