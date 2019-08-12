export class ScrumboardFakeDb {
    public static boards = [
        {
            'id': '1',
            'name': 'טיפול ריבעון',
            'uri': 'טיפול ריבעון',
            'settings': {
                'color': 'light-blue',
                'subscribed': false,
                'cardCoverImages': true
            },
            'lists': [
                {
                    'id': '56027cf5a2ca3839a5d36103',
                    'name': 'שלב 1',
                    'idCards': [
                        '5603a2a3cab0c8300f6096b3'
                    ]
                },
                {
                    'id': '56127cf2a2ca3539g7d36103',
                    'name': 'שלב 2',
                    'idCards': [
                        '5637273da9b93bb84743a0f9'
                    ]
                }
            ],
            'cards': [
                {
                    'id': '5603a2a3cab0c8300f6096b3',
                    'name': 'סריקת משמכים',
                    'description': '',
                    'idAttachmentCover': '56027cfcbe1b72ecf1fc452a',
                    'idMembers': [
                        '56027c1930450d8bf7b10758',
                        '36027j1930450d8bf7b10158'
                    ],
                    'idLabels': [
                        '56027e4119ad3a5dc28b36cd',
                        '5640635e19ad3a5dc21416b2'
                    ],
                    'attachments': [
                        {
                            'id': '56027cfcbe1b72ecf1fc452a',
                            'name': 'calendar-app-design.jpg',
                            'src': 'assets/images/demo-content/morain-lake.jpg',
                            'time': 'Nov 1 at 12:34PM',
                            'type': 'image'
                        },
                        {
                            'id': '67027cahbe3b52ecf2dc631c',
                            'url': 'assets/images/demo-content/morain-lake.jpg',
                            'time': 'Nov 3 at 15:22AM',
                            'type': 'link'
                        }
                    ],
                    'subscribed': true,
                    'checklists': [
                        {
                            'id': '63021cfdbe1x72wcf1fc451v',
                            'name': 'מסימות',
                            'checkItemsChecked': 1,
                            'checkItems': [
                                {
                                    'name': 'על רקטות ביוני מונחונים זכר, גם מונחים והגולשים חפש, ביק,',
                                    'checked': false
                                },
                                {
                                    'name': 'על רקטות ביוני מונחונים זכר, גם מונחים והגולשים חפש, זקוק ארכיאולוגיה בה קרן. ליום אירועים ביולוגיה אתה או, בה חינוך פיסיקה כתב,',
                                    'checked': true
                                },
                                {
                                    'name': 'על רקטות ביוני מונחונים זכר, גם מונחים והגולשים חפש, זקוק ארכיאולוגיה בה קרן. ליום אירועים ביולוגיה אתה או, בה חינוך פיסיקה כתב,',
                                    'checked': false
                                },
                                {
                                    'name': 'Use moment.js',
                                    'checked': false
                                }
                            ]
                        },
                        {
                            'name': 'Checklist 2',
                            'id': '74031cfdbe1x72wcz1dc166z',
                            'checkItemsChecked': 1,
                            'checkItems': [
                                {
                                    'name': 'בה שדרות לתרום המדינה. בה טיפול לתרום קרן, בה ארץ תורת הקהילה בלשנות. מה שמו ערכים המזנון קודמות, היום חשמל זכר או',
                                    'checked': true
                                },
                                {
                                    'name': 'טיפול לתרום קרן, בה ארץ תורת הקהילה בלשנות. מה שמו ערכים המזנון קודמות, היום חשמל',
                                    'checked': false
                                },
                                {
                                    'name': 'טיפול לתרום קרן, בה ארץ תורת הקהילה בלשנות. מה שמו ערכים המזנון קודמות, היום חשמל',
                                    'checked': false
                                }
                            ]
                        }
                    ],
                    'checkItems': 7,
                    'checkItemsChecked': 2,
                    'comments': [
                        {
                            'idMember': '56027c1930450d8bf7b10758',
                            'message': 'טיפול לתרום קרן, בה ארץ תורת הקהילה בלשנות. מה שמו ערכים המזנון קודמות, היום חשמל',
                            'time': '12 mins. ago'
                        },
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message': 'טיפול לתרום קרן, בה ארץ תורת הקהילה בלשנות. מה שמו ערכים המזנון קודמות, היום חשמל',
                            'time': '30 mins. ago'
                        }
                    ],
                    'activities': [
                        {
                            'idMember': '56027c1930450d8bf7b10758',
                            'message': 'טיפול לתרום קרן, בה ארץ תורת הקהילה בלשנות. מה שמו ערכים המזנון קודמות, היום חשמל',
                            'time': '12 mins. ago'
                        },
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message': 'טיפול לתרום קרן, בה ארץ תורת הקהילה בלשנות. מה שמו ערכים המזנון קודמות, היום חשמל',
                            'time': '30 mins. ago'
                        },
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message': 'attached a link',
                            'time': '45 mins. ago'
                        }
                    ],
                    'due': null
                },
                {
                    'id': '5637273da9b93bb84743a0f9',
                    'name': 'טיפול לתרום קרן, בה ארץ תורת הקהילה בלשנות. מה שמו ערכים המזנון קודמות, היום חשמל',
                    'description': '',
                    'idAttachmentCover': '5603a2ae2bbd55bb2db57478',
                    'idMembers': [
                        '56027c1930450d8bf7b10758'
                    ],
                    'idLabels': [],
                    'attachments': [
                        {
                            'id': '5603a2ae2bbd55bb2db57478',
                            'name': 'mail-app-design.jpg',
                            'path': 'assets/images/demo-content/morain-lake.jpg',
                            'time': 'Nov 1 at 12:34PM',
                            'type': 'image'
                        }
                    ],
                    'subscribed': true,
                    'checklists': [],
                    'checkItems': 0,
                    'checkItemsChecked': 0,
                    'comments': [],
                    'activities': [],
                    'due': null
                }
            ],
            'members': [
                {
                    'id': '56027c1930450d8bf7b10758',
                    'name': 'מובדא עלי',
                    'avatar': 'assets/images/avatars/alice.jpg'
                },
                {
                    'id': '26027s1930450d8bf7b10828',
                    'name': 'מוחמד עלי',
                    'avatar': 'assets/images/avatars/danielle.jpg'
                },
            ],
            'labels': [
                {
                    'id': '56027e4119ad3a5dc28b36cd',
                    'name': 'סריקה',
                    'color': 'red-500'
                },
                {
                    'id': '5640635e19ad3a5dc21416b2',
                    'name': 'חישוב מס',
                    'color': 'blue-500'
                },
                {
                    'id': '6540635g19ad3s5dc31412b2',
                    'name': 'טיפול רבעון',
                    'color': 'green-400'
                }
            ]
        },
        {
            'id': '2',
            'name': 'בניית המערכת',
            'uri': 'בניית המערכת',
            'settings': {
                'color': 'blue-grey',
                'subscribed': false,
                'cardCoverImages': true
            },
            'lists': [
                {
                    'id': '1',
                    'name': 'אפיון',
                    'idCards': [
                        '1', '2', '3', '4', '5', '6'
                    ]
                },
                {
                    'id': '2',
                    'name': 'עיצוב',
                    'idCards': []
                },
                {
                    'id': '3',
                    'name': 'בדיקת אפיון/עיצוב',
                    'idCards': []
                },
                {
                    'id': '4',
                    'name': 'תכנות',
                    'idCards': []
                },
                {
                    'id': '5',
                    'name': 'בדיקת תוכנה',
                    'idCards': []
                },
                {
                    'id': '6',
                    'name': 'שחרור',
                    'idCards': []
                }
            ],
            'cards': [
                {
                    'id': '1',
                    'name': 'עובדים',
                    'description': '',
                    'idAttachmentCover': '',
                    'idMembers': [
                        '1',
                        '2'
                    ],
                    'idLabels': [],
                    'attachments': [],
                    'subscribed': true,
                    'checklists': [],
                    'checkItems': 0,
                    'checkItemsChecked': 0,
                    'comments': [],
                    'activities': [],
                    'due': null
                },
                {
                    'id': '2',
                    'name': 'מעקבי משימות',
                    'description': '',
                    'idAttachmentCover': '',
                    'idMembers': [
                        '1',
                        '2'
                    ],
                    'idLabels': [],
                    'attachments': [],
                    'subscribed': true,
                    'checklists': [],
                    'checkItems': 0,
                    'checkItemsChecked': 0,
                    'comments': [],
                    'activities': [],
                    'due': null
                },

                {
                    'id': '3',
                    'name': 'ניהול אדמינסטרציה',
                    'description': '',
                    'idAttachmentCover': '',
                    'idMembers': [
                        '1',
                        '2'
                    ],
                    'idLabels': [],
                    'attachments': [],
                    'subscribed': true,
                    'checklists': [],
                    'checkItems': 0,
                    'checkItemsChecked': 0,
                    'comments': [],
                    'activities': [],
                    'due': null
                },
                {
                    'id': '4',
                    'name': 'קליטת שעות',
                    'description': '',
                    'idAttachmentCover': '',
                    'idMembers': [
                        '1',
                        '2'
                    ],
                    'idLabels': [],
                    'attachments': [],
                    'subscribed': true,
                    'checklists': [],
                    'checkItems': 0,
                    'checkItemsChecked': 0,
                    'comments': [],
                    'activities': [],
                    'due': null
                },
                {
                    'id': '5',
                    'name': 'לקוחות',
                    'description': '',
                    'idAttachmentCover': '',
                    'idMembers': [
                        '1',
                        '2'
                    ],
                    'idLabels': [],
                    'attachments': [],
                    'subscribed': true,
                    'checklists': [],
                    'checkItems': 0,
                    'checkItemsChecked': 0,
                    'comments': [],
                    'activities': [],
                    'due': null
                },
                {
                    'id': '6',
                    'name': 'ניהול התראות',
                    'description': '',
                    'idAttachmentCover': '',
                    'idMembers': [
                        '1',
                        '2'
                    ],
                    'idLabels': [],
                    'attachments': [],
                    'subscribed': true,
                    'checklists': [],
                    'checkItems': 0,
                    'checkItemsChecked': 0,
                    'comments': [],
                    'activities': [],
                    'due': null
                },

            ],
            'members': [
                {
                    'id': '1',
                    'name': 'מוחמד עלי',
                    'avatar': 'assets/images/avatars/james.jpg'
                },
                {
                    'id': '2',
                    'name': 'מובדא עלי',
                    'avatar': 'assets/images/avatars/vincent.jpg'
                },
            ],
            'labels': [
                {
                    'id': '56027e4119ad3a5dc28b36cd',
                    'name': 'חשוב',
                    'color': 'red-500'
                },
                {
                    'id': '5640635e19ad3a5dc21416b2',
                    'name': 'בינוני',
                    'color': 'blue-500'
                },
                {
                    'id': '6540635g19ad3s5dc31412b2',
                    'name': 'פחות חשוב',
                    'color': 'green-400'
                }
            ]
        },
    ];
}
