export default [
    {
        name: 'Dashboard',
        icon: 'ti-panel',
        path: '/dashboard',
    },
    {
        name: 'Forms',
        icon: 'ti-clipboard',
        children: [
            {
                name: 'Regular Forms',
                path: '/forms/regular'
            },
            {
                name: 'Extended Forms',
                path: '/forms/extended'
            },
            {
                name: 'Validation Forms',
                path: '/forms/validation'
            },
            {
                name: 'Wizard',
                path: '/forms/wizard'
            }
        ]
    },
    {
        name: 'Table List',
        icon: 'ti-view-list-alt',
        collapsed: true,
        children: [
            {
                name: 'Regular Tables',
                path: '/table-list/regular'
            },
            {
                name: 'Extended Tables',
                path: '/table-list/extended'
            },
            {
                name: 'Paginated Tables',
                path: '/table-list/paginated'
            }
        ]
    }
]
