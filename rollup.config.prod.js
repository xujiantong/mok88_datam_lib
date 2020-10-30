const path = require('path');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require("rollup-plugin-babel");
const json = require("rollup-plugin-json");
const {terser} = require("rollup-plugin-terser");
const vue = require("rollup-plugin-vue");
const postcss = require("rollup-plugin-postcss");


const inputPath = path.resolve(__dirname, './src/index.js');
const outputUmdPath = path.resolve(__dirname, './dist/mok88.datam.lib.min.js');
const outputEsPath = path.resolve(__dirname, './dist/mok88.datam.lib.es.min.js');
module.exports = {
    input: inputPath,
    output: [
        {
            name: "mok88DatamLib",
            file: outputUmdPath,
            format: 'umd',
            globals: {
                vue: 'vue'
            }
        },
        {
            name: "mok88DatamLib",
            file: outputEsPath,
            format: 'es',
            globals: {
                vue: 'vue'
            }
        }
    ],
    plugins: [
        resolve(), // 打包外部依赖
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
        json(),
        vue(),
        postcss({
            plugins:[]
        }),
        terser(),

    ],
    external: ['vue']
};
