import Ember from 'ember'
import FeatureFoo from './feature-foo'
import { FEATURE_FOO } from '../features'

const {
  Component
} = Ember

let FeatureBar = Component

if (FEATURE_FOO) {
  FeatureBar = FeatureFoo
}

export default FeatureBar.extend({
  classNames: ['feature-bar']
});
