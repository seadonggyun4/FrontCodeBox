export default {
    name: 'link',
    title: 'Link',
    type: 'object',
    fields: [
        {
            name: 'metadata',
            title: 'Metadata',
            type: 'urlWithMetadata'
        }
    ],
    preview: {
        select: {
            title: 'metadata.openGraph.title',
            subtitle: 'metadata.openGraph.url',
        }
    }
}