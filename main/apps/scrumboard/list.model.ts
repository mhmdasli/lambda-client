import { LambdaUtils } from '@lambda/utils';

export class List
{
    id: string;
    name: string;
    idCards: string[];

    /**
     * Constructor
     *
     * @param list
     */
    constructor(list)
    {
        this.id = list.id || LambdaUtils.generateGUID();
        this.name = list.name || '';
        this.idCards = [];
    }
}
