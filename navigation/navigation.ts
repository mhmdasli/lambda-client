import {FuseNavigation} from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: '',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'dashboards',
                title: 'לוח בקרה',
                type: 'collapsable',
                icon: 'dashboard',
                children: [
                    {
                        id: 'analytics',
                        title: 'אנליטקה',
                        type: 'item',
                        url: '/apps/dashboards/analytics',
                        icon: 'show_chart',
                    },
                    {
                        id: 'project',
                        title: 'ניהול משרדי ',
                        type: 'item',
                        url: '/apps/dashboards/project',
                        icon: 'supervisor_account',
                    },



                    {
                        id: 'reports',
                        title: 'דוחות',
                        type: 'collapsable',
                        icon: 'find_in_page',
                        children: [
                            {
                                id: 'reports1',
                                title: 'כספים - רשימת מסמכים',
                                type: 'item',
                                url: '/reports1',
                            },
                            {
                                id: 'reports2',
                                title: 'דוחות צולבים',
                                type: 'item',
                                url: '/reports2',
                            },
                            {
                                id: 'reports3',
                                title: 'דוחות הוצאות',
                                type: 'item',
                                url: '/reports3',
                            },
                            {
                                id: 'reports4',
                                title: 'דוחות צולבים',
                                type: 'item',
                                url: '/reports4',
                            },
                            {
                                id: 'reports5',
                                title: 'דוחות מטלות שוטפות',
                                type: 'item',
                                url: '/reports5',
                            },
                            {
                                id: 'reports6',
                                title: 'דוחות זמני כניסה/יציאה',
                                type: 'item',
                                url: '/reports6',
                            },
                            {
                                id: 'reports7',
                                title: 'מעקב דוחות שנתיים',
                                type: 'item',
                                url: '/reports7',
                            },
                            {
                                id: 'reports8',
                                title: 'כרטיס לקוח',
                                type: 'item',
                                url: '/reports8',
                            },
                            {
                                id: 'reports9',
                                title: 'ניתוח דיווחי שעות',
                                type: 'item',
                                url: '/reports9',
                            },
                            {
                                id: 'reports10',
                                title: 'חיובי שעות לפי מספר חשבון',
                                type: 'item',
                                url: '/reports10',
                            },
                            {
                                id: 'reports11',
                                title: 'חיובי שעות בתאריכים',
                                type: 'item',
                                url: '/reports11',
                            },
                            {
                                id: 'reports12',
                                title: 'סטטיסטקת לקוחות',
                                type: 'item',
                                url: '/reports12',
                            },
                            {
                                id: 'reports13',
                                title: 'מדבקות',
                                type: 'item',
                                url: '/reports13',
                            },
                        ]
                    },
                    {
                        id: 'attendance',
                        title: 'קליטת שעות',
                        type: 'collapsable',
                        icon: 'timer',
                        children: [
                            {
                                id: 'attendance',
                                title: 'קליטת שעות',
                                type: 'item',
                                url: '/attendance'
                            },
                            {
                                id: 'attendance',
                                title: 'זמני כניסה יציאה',
                                type: 'item',
                                url: '/attendance'
                            },
                            {
                                id: 'attendance',
                                title: 'חיוב שעות',
                                type: 'item',
                                url: '/attendance'
                            },
                            {
                                id: 'attendance',
                                title: 'העמסת שעות',
                                type: 'item',
                                url: '/attendance'
                            },
                            {
                                id: 'attendance',
                                title: 'ניתוח דיווחי שעות',
                                type: 'item',
                                url: '/attendance'
                            },
                        ]
                    },
                    {
                        id: 'documents',
                        title: 'הפקת מסמכים',
                        type: 'item',
                        icon: 'print',
                        url: '/apps/documents'
                    },
                ]
            },
            {
                id: 'contacts',
                title: 'לקוחות',
                type: 'item',
                icon: 'account_box',
                url: '/apps/contacts'
            },
            {
                id: 'employees',
                title: 'עובדים',
                type: 'item',
                icon: 'people',
                url: '/apps/employees'
            },
            {
                id: 'scrumboard',
                title: 'מעקבי משימות',
                type: 'item',
                icon: 'assessment',
                url: '/apps/scrumboard'
            },
            {
                id: 'calendar',
                title: 'יומן',
                type: 'item',
                icon: 'today',
                url: '/apps/calendar'
            },

            {
                id: 'mail-ngrx',
                title: 'דואר אלקטרוני',
                type: 'item',
                icon: 'email',
                url: '/apps/mail-ngrx',
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
                url: '/apps/file-manager'
            },
            {
                id: 'to-do',
                title: 'משימות אישיות',
                type: 'item',
                icon: 'check_box',
                url: '/apps/todo',
                badge: {
                    title: '3',
                    bg: '#FF6F00',
                    fg: '#FFFFFF'
                }
            },
        ]
    },
    // {
    //     id      : 'pages',
    //     title   : 'Pages',
    //     type    : 'group',
    //     icon    : 'pages',
    //     children: [
    //         {
    //             id      : 'authentication',
    //             title   : 'Authentication',
    //             type    : 'collapsable',
    //             icon    : 'lock',
    //             badge   : {
    //                 title: '10',
    //                 bg   : '#525e8a',
    //                 fg   : '#FFFFFF'
    //             },
    //             children: [
    //                 {
    //                     id   : 'login',
    //                     title: 'Login',
    //                     type : 'item',
    //                     url  : '/pages/auth/login'
    //                 },
    //                 {
    //                     id   : 'login-v2',
    //                     title: 'Login v2',
    //                     type : 'item',
    //                     url  : '/pages/auth/login-2'
    //                 },
    //                 {
    //                     id   : 'register',
    //                     title: 'Register',
    //                     type : 'item',
    //                     url  : '/pages/auth/register'
    //                 },
    //                 {
    //                     id   : 'register-v2',
    //                     title: 'Register v2',
    //                     type : 'item',
    //                     url  : '/pages/auth/register-2'
    //                 },
    //                 {
    //                     id   : 'forgot-password',
    //                     title: 'Forgot Password',
    //                     type : 'item',
    //                     url  : '/pages/auth/forgot-password'
    //                 },
    //                 {
    //                     id   : 'forgot-password-v2',
    //                     title: 'Forgot Password v2',
    //                     type : 'item',
    //                     url  : '/pages/auth/forgot-password-2'
    //                 },
    //                 {
    //                     id   : 'reset-password',
    //                     title: 'Reset Password',
    //                     type : 'item',
    //                     url  : '/pages/auth/reset-password'
    //                 },
    //                 {
    //                     id   : 'reset-password-v2',
    //                     title: 'Reset Password v2',
    //                     type : 'item',
    //                     url  : '/pages/auth/reset-password-2'
    //                 },
    //                 {
    //                     id   : 'lock-screen',
    //                     title: 'Lock Screen',
    //                     type : 'item',
    //                     url  : '/pages/auth/lock'
    //                 },
    //                 {
    //                     id   : 'mail-confirmation',
    //                     title: 'Mail Confirmation',
    //                     type : 'item',
    //                     url  : '/pages/auth/mail-confirm'
    //                 }
    //             ]
    //         },
    //         {
    //             id   : 'coming-soon',
    //             title: 'Coming Soon',
    //             type : 'item',
    //             icon : 'alarm',
    //             url  : '/pages/coming-soon'
    //         },
    //         {
    //             id      : 'errors',
    //             title   : 'Errors',
    //             type    : 'collapsable',
    //             icon    : 'error',
    //             children: [
    //                 {
    //                     id   : '404',
    //                     title: '404',
    //                     type : 'item',
    //                     url  : '/pages/errors/error-404'
    //                 },
    //                 {
    //                     id   : '500',
    //                     title: '500',
    //                     type : 'item',
    //                     url  : '/pages/errors/error-500'
    //                 }
    //             ]
    //         },
    //         {
    //             id      : 'invoice',
    //             title   : 'Invoice',
    //             type    : 'collapsable',
    //             icon    : 'receipt',
    //             children: [
    //                 {
    //                     id   : 'modern',
    //                     title: 'Modern',
    //                     type : 'item',
    //                     url  : '/pages/invoices/modern'
    //                 },
    //                 {
    //                     id   : 'compact',
    //                     title: 'Compact',
    //                     type : 'item',
    //                     url  : '/pages/invoices/compact'
    //                 }
    //             ]
    //         },
    //         {
    //             id   : 'maintenance',
    //             title: 'Maintenance',
    //             type : 'item',
    //             icon : 'build',
    //             url  : '/pages/maintenance'
    //         },
    //         {
    //             id      : 'pricing',
    //             title   : 'Pricing',
    //             type    : 'collapsable',
    //             icon    : 'attach_money',
    //             children: [
    //                 {
    //                     id   : 'style-1',
    //                     title: 'Style 1',
    //                     type : 'item',
    //                     url  : '/pages/pricing/style-1'
    //                 },
    //                 {
    //                     id   : 'style-2',
    //                     title: 'Style 2',
    //                     type : 'item',
    //                     url  : '/pages/pricing/style-2'
    //                 },
    //                 {
    //                     id   : 'style-3',
    //                     title: 'Style 3',
    //                     type : 'item',
    //                     url  : '/pages/pricing/style-3'
    //                 }
    //             ]
    //         },
    //         {
    //             id   : 'profile',
    //             title: 'Profile',
    //             type : 'item',
    //             icon : 'person',
    //             url  : '/pages/profile'
    //         },
    //         {
    //             id      : 'search',
    //             title   : 'Search',
    //             type    : 'collapsable',
    //             icon    : 'search',
    //             children: [
    //                 {
    //                     id   : 'search-classic',
    //                     title: 'Classic',
    //                     type : 'item',
    //                     url  : '/pages/search/classic'
    //                 },
    //                 {
    //                     id   : 'search-modern',
    //                     title: 'Modern',
    //                     type : 'item',
    //                     url  : '/pages/search/modern'
    //                 }
    //             ]
    //         },
    //         {
    //             id   : 'faq',
    //             title: 'Faq',
    //             type : 'item',
    //             icon : 'help',
    //             url  : '/pages/faq'
    //         },
    //         {
    //             id   : 'knowledge-base',
    //             title: 'Knowledge Base',
    //             type : 'item',
    //             icon : 'import_contacts',
    //             url  : '/pages/knowledge-base'
    //         }
    //     ]
    // },
];
