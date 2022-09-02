export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: ( Rule ) => Rule.required()
        },
        {
            name: 'mainPost',
            title: 'Main Post',
            type: 'reference', 
            to: {type: 'post'},
            validation: ( Rule ) => Rule.required()
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'mainPost.title',
        }
    }
}