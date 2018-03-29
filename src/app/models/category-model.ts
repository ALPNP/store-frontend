export class CategoryModel {
    _id: string;
    name: string;
    parentId: string;

    constructor(obj) {
        if (obj) {
            Object.assign(this, obj);
        } else {
            this._id = null;
            this.name = null;
            this.parentId = null;
        }
    }
}
