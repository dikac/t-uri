import SentencesIs from "@dikac/t-string/message/sentences-must";
import Truncate from "@dikac/t-string/truncate";
export default function Query(result, subject = '') {
    let sentence = SentencesIs(result.valid);
    sentence.subject.push(subject);
    sentence.subject.push(Truncate(result.value, 10));
    sentence.expect = ['valid query'];
    return sentence.message;
}
//# sourceMappingURL=query.js.map