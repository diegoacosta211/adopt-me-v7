const arg = 'foo';
const msg1 = `arg = ${arg}`;
const msg2 = `arg = ${arg || 'default'}`;

const stringWithKindProp: string & { _kind?: 'MyString' } = 'foo';
const msg3 = `stringWithKindProp = ${stringWithKindProp}`;
