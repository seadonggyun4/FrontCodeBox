import CodeInput from "../components/CodeInput";

export default {
    name: 'code',
    title: 'Codde',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'language',
            title: 'Language',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'code',
            title: 'Code',
            type: 'string',
            validation: (Rule) => Rule.required(),
            inputComponent: CodeInput
        }
    ] 
}