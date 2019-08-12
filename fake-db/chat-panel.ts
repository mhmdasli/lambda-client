export class ChatPanelFakeDb
{
    public static contacts = [
        {
            'id'    : '3',
            'name'  : 'Alice Freeman',
            'avatar': 'assets/images/avatars/alice.jpg',
            'status': 'online',
            'unread': '2'
        },
        {
            'id'    : '4',
            'name'  : 'Arnold',
            'avatar': 'assets/images/avatars/Arnold.jpg',
            'status': 'offline',
            'unread': '0'
        },
    ];

    public static chats = [
        {
            'id'    : '3',
            'dialog': [
                {
                    'from'    : '2',
                    'to': '3',
                    'message': 'תבוא דחוף לחד ב4 יש לנו בעיה רצינית',
                    'time'   : '2017-03-22T08:54:28.299Z'
                },
                {
                    'from'    : '3',
                    'to': '2',
                    'message': 'אני באמצע ארוחת צהוריים אתה לא יכול לחכות 10 דקות?',
                    'time'   : '2017-03-22T08:55:28.299Z'
                },
                {
                    'from'    : '2',
                    'to': '3',
                    'message': 'I’m having breakfast right now, can’t you wait for 10 minutes?',
                    'time'   : '2017-03-22T08:55:28.299Z'
                },
            ]
        },
        {
            'id'    : '4',
            'dialog': [
                {
                    'from'    : '2',
                    'to': '4',
                    'message': 'הצעת מחיר מפורטת אצלך במייל',
                    'time'   : '2017-04-22T01:00:00.299Z'
                },
                {
                    'from'    : '4',
                    'to': '2',
                    'message': 'כבד 10 דקות מחכה לך אתה מגיע??',
                    'time'   : '2017-04-22T01:05:00.299Z'
                },
                {
                    'from'    : '2',
                    'to': '4',
                    'message': 'אחלה כסף',
                    'time'   : '2017-04-22T01:10:00.299Z'
                }
            ]
        },
    ];

    public static user = [
        {
            'id'      : '2',
            'name'    : 'John Doe',
            'avatar'  : 'assets/images/avatars/profile.jpg',
            'status'  : 'online',
            'chatList': [
                {
                    'contactId'      : '3',
                    'lastMessageTime': '2017-06-12T02:10:18.931Z'
                },
                {
                    'contactId'      : '4',
                    'lastMessageTime': '2017-02-18T10:30:18.931Z'
                },
            ]
        }
    ];

}
