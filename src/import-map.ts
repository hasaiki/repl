import { computed, version as currentVersion, ref } from 'vue'

export function useVueImportMap() {
  const vueVersion = ref(currentVersion)
  const productionMode = ref(false)
  const importMap = computed<ImportMap>(() => {
    const vue = import.meta.env.PROD
      ? './vendor/vue.runtime.esm-browser.prod.js'
      : '/vendor/vue.runtime.esm-browser.prod.js'
    const serverRenderer = import.meta.env.PROD
      ? './vendor/server-renderer.esm-browser.prod.js'
      : '/vendor/server-renderer.esm-browser.prod.js'
    const lodash = import.meta.env.PROD
      ? '/vendor/lodash-es/lodash.js'
      : './vendor/lodash-es/lodash.js'

    return {
      imports: {
        vue,
        'vue/server-renderer': serverRenderer,
        lodash,
      },
    }
  })

  return {
    productionMode,
    importMap,
    vueVersion,
    defaultVersion: currentVersion,
  }
}

export interface ImportMap {
  imports?: Record<string, string | undefined>
  scopes?: Record<string, Record<string, string>>
}

export function mergeImportMap(a: ImportMap, b: ImportMap): ImportMap {
  return {
    imports: { ...a.imports, ...b.imports },
    scopes: { ...a.scopes, ...b.scopes },
  }
}
