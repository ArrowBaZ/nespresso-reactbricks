import {types} from 'react-bricks/frontend'

const pageTypes: types.IPageType[] = [
    {
        name: 'global',
        pluralName: 'global',
        defaultLocked: true,
        defaultStatus: types.PageStatus.Draft,
        getDefaultContent: () => [],
        excludedBlockTypes: [
            'title',
            'paragraph',
            'quote',
            'video',
            'code-block',
            'tweet',
            'tweet-light',
            'image',
        ],
    },
    {
        name: 'capsule',
        pluralName: 'capsules',
        defaultLocked: false,
        defaultStatus: types.PageStatus.Published,
        getDefaultContent: () => ['hero-unit', 'features', 'call-to-action'],
        customFields: [
            {
                name: 'legacyId',
                type: types.SideEditPropType.Text,
                label: 'Legacy SKU',
            },
            {
                name: 'internationalId',
                type: types.SideEditPropType.Text,
                label: 'International SKU',
            },
            {
                name: 'internationalName',
                type: types.SideEditPropType.Text,
                label: 'International Name',
            },
            {
                groupName: 'images',
                props: [
                    {
                        name: 'plp',
                        label: 'PLP',
                        type: types.SideEditPropType.Image,
                        imageOptions: {
                            maxWidth: 120,
                            aspectRatio: 1
                        },
                    },
                    {
                        name: 'pdp',
                        label: 'PDP',
                        type: types.SideEditPropType.Image,
                        imageOptions: {
                            maxWidth: 700,
                            aspectRatio: 16/9
                        },
                    }
                ],
            },
            {
                name: 'headline',
                type: types.SideEditPropType.Text,
                label: 'Headline',
            },
            {
                name: 'showSleevePrice',
                type: types.SideEditPropType.Boolean,
                label: 'Show Sleeve Price',
            },
            {
                name: 'price',
                type: types.SideEditPropType.Text,
                label: 'Price',
            },
            {
                name: 'stock',
                type: types.SideEditPropType.Text,
                label: 'Stock',
            },
        ],
        allowedBlockTypes: [
            'hero-unit', 'features', 'call-to-action',
            'title',
            'paragraph',
            'quote',
            'video',
            'code-block',
            'tweet',
            'tweet-light',
            'image',
        ],
    },
    {
        name: 'spain',
        pluralName: 'Spain',
        defaultLocked: false,
        defaultStatus: types.PageStatus.Draft,
        getDefaultContent: () => [],
        allowedBlockTypes: [
            'hero-unit', 'features', 'call-to-action',
            'title',
            'paragraph',
            'quote',
            'video',
            'code-block',
            'tweet',
            'tweet-light',
            'image',
        ],
    },
]

export default pageTypes
