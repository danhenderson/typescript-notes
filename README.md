### tsconfig.json

Setup are Typescript compiler in a declarative fashion. Running `tsc` will locate our `tsconfig.json` to setup our compiler.

### Modules

A file will be considered `global`, until you import or export within the file (using CommonJS, ES5 etc.), when it will be considered a `module`. Modules are useful in larger applications where modules can encapsulate the code and types.

```
const hello = (name: string): string => `Hello ${name}`

module.exports = hello
```

### Namespaces

Allows us to wrap code in a namespace, which can be useful when we are not using modules, and replicates a common JavaScript practice from a time before modules.

```
namespace App {
  export function hello () {
    return 'Hello'
  }
}

App.hello()
```

### lib.d.ts

Typescript ships with a `lib.d.ts`, which is a declaration file containing definitions for existing JavaScript features.

### .d.ts

`*.d.ts` files are known as definition files, meaning they deal only with type definitions. This is commonly used to provide type definitions for NPM modules.

If these files contain no imports/exports, they are considered `ambient`, meaning they create global type definitions.

`DefinitelyTyped` is a community project to provide types for existing NPM packages, while `TSD` is a command line tool for install modules from `DefinitelyTyped`.

`Typings` is an extension of this concept. Where `DefinitelyTyped` creates one huge repo with ambient type definitions, `Typings` exposes types via modules.

### Node

If you are planning to execute your Typescript codebase with node, it is common to compile to JavaScript before running. If you need to execute Typescript inline, you can use `ts-node`.

```
ts-node script.ts
```

### Webpack

`ts-loader` makes it easy to compile Typescript files when bundling your application with Webpack.

```
module.exports = {
  entry: './app.ts',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as resolvable extensions.
    extensions: ['', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts' }
    ]
  }
}
```
