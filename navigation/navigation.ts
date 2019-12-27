import {LambdaNavigation} from '@lambda/types';

export const navigation: LambdaNavigation[] = [
    {
        id: 'applications',
        title: '',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'contacts',
                title: 'לקוחות',
                type: 'item',
                icon: 'account_box',
                url: '/apps/contacts',
                openInNewTab: true
            },
            {
                id: 'employees',
                title: 'עובדים',
                type: 'item',
                icon: 'people',
                url: '/apps/employees',
                openInNewTab: true
            },
            {
                id: 'scrumboard',
                title: 'מעקבי משימות',
                type: 'item',
                icon: 'assessment',
                url: '/apps/scrumboard',
                openInNewTab: true
            },
            {
                id: 'calendar',
                title: 'יומן',
                type: 'item',
                icon: 'today',
                url: '/apps/calendar',
                openInNewTab: true
            },

            {
                id: 'mail-ngrx',
                title: 'דואר אלקטרוני',
                type: 'item',
                icon: 'email',
                url: '/apps/mail-ngrx',
                openInNewTab: true,
                badge: {
                    title: '13',
                    bg: '#EC0C8E',
                    fg: '#FFFFFF'
                }
            },
            // {
            //     id       : 'chat',
            //     title    : 'שיחות',
            //     type     : 'item',
            //     icon     : 'chat',
            //     url      : '/apps/chat',
            //     badge    : {
            //         title: '13',
            //         bg   : '#09d261',
            //         fg   : '#FFFFFF'
            //     }
            // },
            {
                id: 'file-manager',
                title: ' קבלת חומר',
                type: 'item',
                icon: 'folder',
                url: '/apps/file-manager',
                openInNewTab: true
            },
            {
                id: 'to-do',
                title: 'משימות אישיות',
                type: 'item',
                icon: 'check_box',
                url: '/apps/todo',
                openInNewTab: true,
                badge: {
                    title: '3',
                    bg: '#FF6F00',
                    fg: '#FFFFFF'
                }
            },
        ]
    },
    {
        id: 'project',
        title: 'שולחן העבודה',
        type: 'item',
        url: '/apps/dashboards/project',
        icon: 'supervisor_account',
    },
    {
        id: 'analytics',
        title: 'אנליטקה',
        type: 'item',
        url: '/apps/dashboards/analytics',
        icon: 'show_chart',
    },
    {
        id: 'documents',
        title: 'הפקת מסמכים',
        type: 'item',
        icon: 'print',
        url: '/apps/documents'
    },
    {
        id: 'faq',
        title: 'Faq',
        type: 'item',
        icon: 'help',
        url: '/pages/faq'
    },
    {
        id: 'knowledge-base',
        title: 'Knowledge Base',
        type: 'item',
        icon: 'import_contacts',
        url: '/pages/knowledge-base'
    },

];
