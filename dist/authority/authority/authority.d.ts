import AuthorityInterface from "../authority";
export default interface Authority<AuthorityType extends AuthorityInterface = AuthorityInterface> {
    authority?: AuthorityType;
}
