(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
    typeof define === 'function' && define.amd ? define(['vue'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.mok88DatamLib = factory(global.Vue));
}(this, (function (vue) { 'use strict';

    var script = {
      name: 'TestComponent',
      setup: function setup() {
        var message = 'hello world';
        var count = vue.ref(1);
        var doubleCount = vue.computed(function () {
          return count.value * 2;
        });

        var add = function add() {
          count.value++;
        };

        return {
          message: message,
          count: count,
          doubleCount: doubleCount,
          add: add
        };
      }
    };

    const _withId = /*#__PURE__*/vue.withScopeId("data-v-7cc4288f");

    vue.pushScopeId("data-v-7cc4288f");
    const _hoisted_1 = { class: "test" };
    const _hoisted_2 = /*#__PURE__*/vue.createTextVNode("AddEvent: ");
    vue.popScopeId();

    const render = /*#__PURE__*/_withId(function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
        vue.createVNode("div", null, "Message: " + vue.toDisplayString($setup.message), 1 /* TEXT */),
        vue.createVNode("div", null, "count: " + vue.toDisplayString($setup.count), 1 /* TEXT */),
        vue.createVNode("div", null, "doubleCount: " + vue.toDisplayString($setup.doubleCount), 1 /* TEXT */),
        vue.createVNode("div", null, [
          _hoisted_2,
          vue.createVNode("button", {
            onClick: _cache[1] || (_cache[1] = (...args) => ($setup.add(...args)))
          }, "增加Count值")
        ])
      ]))
    });

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css_248z = ".test[data-v-7cc4288f] {\n  color: red;\n}";
    styleInject(css_248z);

    script.render = render;
    script.__scopeId = "data-v-7cc4288f";
    script.__file = "src/components/Test/Test.vue";

    function Test (Vue) {
      Vue.component(script.name, script);
    }

    function index (Vue) {
      Vue.use(Test);
    }

    return index;

})));
