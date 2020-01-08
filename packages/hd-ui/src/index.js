/* Automatically generated by './build/bin/build-entry.js' */

import Hello from '../packages/hello/index.js'

const components = [Hello]

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$HD_UI = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000,
  }
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.1-alpha.0',
  install,
  Hello,
}
