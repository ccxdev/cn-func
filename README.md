# cn-func

A simple helper function to merge class names using `clsx` and `tailwind-merge`.

## Why This Library?

In many projects, developers often need to combine class names conditionally and ensure that Tailwind CSS classes are merged correctly. Instead of copying the same utility function from project to project, this library was published to provide a reusable, easy-to-install solution. It simplifies the process of merging class names, making your code cleaner and more maintainable.

## Installation

Install the package via npm:

```sh
npm install cn-func
```

## Usage

```js
import { cn } from "cn-func";

const className = cn("text-sm", "block", condition && "rounded");

// Output classes:
// text-sm block rounded (if condition is true)
```

## Documentation

This package uses the following libraries under the hood:

[clsx](https://github.com/lukeed/clsx): A tiny utility for constructing className strings conditionally.  
[tailwind-merge](https://github.com/dcastil/tailwind-merge): A utility for merging Tailwind CSS classes in a predictable manner.

## License

This project is licensed under the CC0 1.0 Universal (CC0 1.0) Public Domain Dedication. You can see the license [here](LICENSE).
