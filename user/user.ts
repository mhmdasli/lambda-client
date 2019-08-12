import * as moment from 'moment';
import _date = moment.unitOfTime._date;

export class User {
    id: number;
    name: string;
    email: string;
    permissions: string;
    is_activated: boolean;
    activated_at: _date;
    last_login: _date;
    created_at: _date;
    updated_at: _date;
    username: string;
    surname: string;
    deleted_at: _date;
    last_seen: _date;
    is_guest: boolean;
    is_superuser: boolean;
    phone: string;
    company: string;
    street_addr: string;
    city: string;
    zip: number;
    state_id: number;
    country_id: number;
    mobile: string;
}
