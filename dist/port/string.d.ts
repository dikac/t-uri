import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
import ValueOf from "@dikac/t-value/value-of/value-of";
export default function String(value: string | number): Readonly<Value<string | number> & Message<string> & Validatable> & ValueOf<number | string>;
export default function String<MessageType>(value: string | number, message: (result: Readonly<Value<string | number> & Validatable>) => MessageType): Readonly<Value<string | number> & Message<MessageType> & Validatable> & ValueOf<number | string>;
