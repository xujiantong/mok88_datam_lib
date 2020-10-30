import { ref, computed, pushScopeId, popScopeId, openBlock, createBlock, createVNode, toDisplayString, withScopeId, createTextVNode } from 'vue';

var script = {
  name: 'TestComponent',
  setup: function setup() {
    var message = 'hello world';
    var count = ref(1);
    var doubleCount = computed(function () {
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

const _withId = /*#__PURE__*/withScopeId("data-v-7cc4288f");

pushScopeId("data-v-7cc4288f");
const _hoisted_1 = { class: "test" };
const _hoisted_2 = /*#__PURE__*/createTextVNode("AddEvent: ");
popScopeId();

const render = /*#__PURE__*/_withId(function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1, [
    createVNode("div", null, "Message: " + toDisplayString($setup.message), 1 /* TEXT */),
    createVNode("div", null, "count: " + toDisplayString($setup.count), 1 /* TEXT */),
    createVNode("div", null, "doubleCount: " + toDisplayString($setup.doubleCount), 1 /* TEXT */),
    createVNode("div", null, [
      _hoisted_2,
      createVNode("button", {
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

export default index;
