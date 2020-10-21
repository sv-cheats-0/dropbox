declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames
  export = classNames
}

declare module '*.cssmodule.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames
  export = classNames
}
