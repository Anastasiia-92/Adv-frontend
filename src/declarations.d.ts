// declare module "*.module.scss"; {
//     interface IClassname {
//         [classes: string]: string;
//     }
//     const classes: IClassname;
//     export = classes
//
// }
// declare module "*.module.scss"
declare module '*.module.scss';
declare module "*.module.css";
// declare module "*.module.scss" {
//     const classes: { [key: string]: string };
//     export default classes;
// }
declare module "*.css" {
    const classes: { [key: string]: string };
    export default classes;
}
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}
