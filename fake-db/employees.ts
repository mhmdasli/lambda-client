export class EmployeesFakeDb
{
    public static employees = [
        {
            'id'      : '5725a680b3249760ea21de52',
            'name'    : 'מוחמד',
            'lastName': 'עלי',
            'avatar'  : 'assets/images/avatars/Abbott.jpg',
            'nickname': 'mbada.ali@gmail.com',
            'company' : '',
            'jobTitle': 'מפתח',
            'email'   : 'm.ali2910@gmail.com',
            'phone'   : '0528749827',
            'address' : 'עראבה 30812',
            'birthday': '5/18/1986',
            'notes'   : ''
        },
        {
            'id'      : '5725a680606588342058356d',
            'name'    : 'מובדא',
            'lastName': 'עלי',
            'avatar'  : 'assets/images/avatars/Arnold.jpg',
            'nickname': 'mbada.ali@gmail.com',
            'company' : 'עלי את רבאח',
            'jobTitle': 'רואה חשבון',
            'email'   : 'mbada.ali@gmail.com',
            'phone'   : '05280805940',
            'address' : 'עראבה 308012',
            'birthday': '1/1/1980',
            'notes'   : ''
        },
    ];

    public static user = [
        {
            'id'              : '5725a6802d10e277a0f35724',
            'name'            : ' מובדא עלי',
            'avatar'          : 'assets/images/avatars/profile.jpg',
            'starred'         : [
                '5725a680ae1ae9a3c960d487',
                '5725a6801146cce777df2a08',
                '5725a680bbcec3cc32a8488a',
                '5725a680bc670af746c435e2',
                '5725a68009e20d0a9e9acf2a'
            ],
            'frequentEmployees': [
                '5725a6809fdd915739187ed5',
                '5725a68031fdbb1db2c1af47',
                '5725a680606588342058356d',
                '5725a680e7eb988a58ddf303',
                '5725a6806acf030f9341e925',
                '5725a68034cb3968e1f79eac',
                '5725a6801146cce777df2a08',
                '5725a680653c265f5c79b5a9'
            ],
            'groups'          : [
                {
                    'id'        : '5725a6802d10e277a0f35739',
                    'name'      : 'חברים',
                    'employeeIds': [
                        '5725a680bbcec3cc32a8488a',
                        '5725a680e87cb319bd9bd673',
                        '5725a6802d10e277a0f35775'
                    ]
                },
                {
                    'id'        : '5725a6802d10e277a0f35749',
                    'name'      : 'לקוחות',
                    'employeeIds': [
                        '5725a680cd7efa56a45aea5d',
                        '5725a68018c663044be49cbf',
                        '5725a6809413bf8a0a5272b1',
                        '5725a6803d87f1b77e17b62b'
                    ]
                },
                {
                    'id'        : '5725a6802d10e277a0f35329',
                    'name'      : ' עובדים אחרונים',
                    'employeeIds': [
                        '5725a680bbcec3cc32a8488a',
                        '5725a680653c265f5c79b5a9',
                        '5725a6808a178bfd034d6ecf',
                        '5725a6801146cce777df2a08'
                    ]
                }
            ]
        }
    ];
}
