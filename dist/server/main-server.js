import { basename } from "node:path";
import { useSSRContext, mergeProps, unref, withCtx, createTextVNode, createSSRApp } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, renderToString } from "vue/server-renderer";
import { RouterLink, RouterView, createMemoryHistory, createRouter } from "vue-router";
import { defineStore, createPinia } from "pinia";
import axios from "axios";
const _imports_0 = "/assets/logo.da9b9095.svg";
const HelloWorld_vue_vue_type_style_index_0_scoped_3ba3ab19_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {
  __name: "HelloWorld",
  __ssrInlineRender: true,
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "greetings" }, _attrs))} data-v-3ba3ab19><h1 class="green" data-v-3ba3ab19>${ssrInterpolate(__props.msg)}</h1><h3 data-v-3ba3ab19> You\u2019ve successfully created a project with <a href="https://vitejs.dev/" target="_blank" rel="noopener" data-v-3ba3ab19>Vite</a> + <a href="https://vuejs.org/" target="_blank" rel="noopener" data-v-3ba3ab19>Vue 3</a>. </h3></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/HelloWorld.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3ba3ab19"]]);
const App_vue_vue_type_style_index_0_scoped_fc484609_lang = "";
const _sfc_main$1 = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header data-v-fc484609><img alt="Vue logo" class="logo"${ssrRenderAttr("src", _imports_0)} width="125" height="125" data-v-fc484609><div class="wrapper" data-v-fc484609>`);
      _push(ssrRenderComponent(HelloWorld, { msg: "You did it!" }, null, _parent));
      _push(`<nav data-v-fc484609>`);
      _push(ssrRenderComponent(unref(RouterLink), { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(RouterLink), { to: "/about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div></header>`);
      _push(ssrRenderComponent(unref(RouterView), null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fc484609"]]);
const useApiStore = defineStore("api", {
  actions: {
    async get(path) {
      await axios.get(path).then((res) => {
        console.log(res);
      });
    },
    example() {
      return axios.get("https://dummyjson.com/products");
    }
  }
});
const _sfc_main = {
  setup() {
    const api = useApiStore();
    {
      useSSRContext();
    }
    return { api };
  },
  async serverPrefetch() {
    const api = useApiStore();
    api.example().then((res) => {
      console.log(res.data);
    });
    console.log("Test! From Server!");
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<main${ssrRenderAttrs(_attrs)}><button>Test!</button></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/HomeView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HomeView = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const baseUrl = "/";
const history = createMemoryHistory(baseUrl);
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./assets/AboutView.f0d0eb8f.js")
    }
  ]
});
async function render(url, manifest = null) {
  const pinia = createPinia();
  const app = createSSRApp(App);
  app.use(router);
  app.use(pinia);
  await router.push(url);
  await router.isReady();
  const ctx = {
    modules: []
  };
  const html = await renderToString(app);
  let preloadLinks = "";
  if (manifest) {
    renderPreloadLinks(ctx.modules, manifest);
  }
  return [html, preloadLinks];
}
function renderPreloadLinks(modules, manifest) {
  let links = "";
  const seen = /* @__PURE__ */ new Set();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          const filename = basename(file);
          if (manifest[filename]) {
            for (const depFile of manifest[filename]) {
              links += renderPreloadLink(depFile);
              seen.add(depFile);
            }
          }
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}
function renderPreloadLink(file) {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else if (file.endsWith(".woff")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
  } else if (file.endsWith(".woff2")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
  } else if (file.endsWith(".gif")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/gif">`;
  } else if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`;
  } else if (file.endsWith(".png")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/png">`;
  } else {
    return "";
  }
}
export {
  _export_sfc as _,
  render
};
