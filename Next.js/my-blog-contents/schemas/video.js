export default {
    name: 'video',
    title: 'Video',
    type: 'object',
    fields: [
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
        },
        {
            name: 'metadata',
            title: 'Metadata',
            type: 'urlWithMetadata',
        }
    ],
    preview: {
        select: {
            title: 'caption',
            subtitle: 'metadata.url'
        }
    }
}