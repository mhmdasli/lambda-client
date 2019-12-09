import { LambdaUtils } from '@lambda/utils';

export class Employee
{
    id: string;
    name: string;
    lastName: string;
    avatar: string;
    nickname: string;
    company: string;
    jobTitle: string;
    email: string;
    phone: string;
    address: string;
    birthday: string;
    notes: string;

    /**
     * Constructor
     *
     * @param employee
     */
    constructor(employee)
    {
        {
            this.id = employee.id || LambdaUtils.generateGUID();
            this.name = employee.name || '';
            this.lastName = employee.lastName || '';
            this.avatar = employee.avatar || 'assets/images/avatars/profile.jpg';
            this.nickname = employee.nickname || '';
            this.company = employee.company || '';
            this.jobTitle = employee.jobTitle || '';
            this.email = employee.email || '';
            this.phone = employee.phone || '';
            this.address = employee.address || '';
            this.birthday = employee.birthday || '';
            this.notes = employee.notes || '';
        }
    }
}
