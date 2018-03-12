export class UserModel {
    _id: string;
    userName: string;
    password: string;
    permission: string;

    constructor(obj) {
        if (obj) {
            Object.assign(this, obj);
        } else {
            this._id = null;
            this.userName = null;
            this.password = null;
            this.permission = null;
        }
    }
}
