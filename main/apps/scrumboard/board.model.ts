import { FuseUtils } from '@fuse/utils';

import { List } from './list.model';
import { Card } from './card.model';


export class Board
{
    name: string;
    uri: string;
    id: string;
    settings: {
        color: string,
        subscribed: boolean,
        cardCoverImages: boolean
    };
    lists: List[];
    cards: Card[];
    members: {
        id: string,
        name: string,
        avatar: string
    }[];
    labels: {
        id: string,
        name: string,
        color: string
    }[];

    /**
     * Constructor
     *
     * @param board
     */
    constructor(board)
    {
        this.name = board.name || 'לוח ללא שם';
        this.uri = board.uri || 'לוח ללא שם';
        this.id = board.id || FuseUtils.generateGUID();
        this.settings = board.settings || {
            color          : '',
            subscribed     : true,
            cardCoverImages: true
        };
        this.lists = [];
        this.cards = [];
        this.members = board.members ;
        this.labels = board.labels;
    }
}
