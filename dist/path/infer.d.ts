import Uri from "./path/path";
declare type Infer<Type> = Type extends Uri<infer As> ? As : never;
export default Infer;
