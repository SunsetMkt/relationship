import resolve from '@rollup/plugin-node-resolve';          // 使用node_modules包
import terser from '@rollup/plugin-terser';                 // 代码压缩
import babel from '@rollup/plugin-babel';                   // ECMAScript兼容
import pkg from './package.json' assert { type:'json' };    // 获取package信息

// 版权信息
const repository = pkg.repository.url.replace(/(.+)(:\/\/.+)\.git$/,'https$2');
const now = new Date();
const date = (new Date(now.getTime()-now.getTimezoneOffset()*60000)).toISOString().substr(0,10);
const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.description}
 * ${pkg.homepage}
 *
 * Copyright (c) 2016-present, ${pkg.author}
 *
 * Released under the ${pkg.license} License
 * ${repository}
 *
 * Created on: ${date}
 */`;

const commonPlugins = [
    resolve(),
    terser(),
    babel({
        babelHelpers: 'runtime',
        exclude:'node_modules/**'
    })
];

 export default [{
    input: './src/relationship.js',
    output:[{
        file: pkg.main,
        format: 'umd',
        name: 'relationship',
        banner
    },{
        file: pkg.module,
        format: 'es',
        banner
    }],
    plugins: commonPlugins,
    watch: {
        exclude: 'node_modules/**'
    }
},{
    input: './src/relationship-mode.js',
    output:[{
        file: './dist/relationship-mode.min.js',
        format: 'umd',
        name: 'relationshipMode'
    },{
        file: './dist/relationship-mode.min.mjs',
        format: 'es'
    }],
    plugins: commonPlugins,
    watch: {
        exclude: 'node_modules/**'
    }
}];
