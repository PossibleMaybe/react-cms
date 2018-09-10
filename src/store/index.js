import Common from './common';
import Notification from './notification';

export default class {
    constructor(initState = {}) {
        this.common = new Common(initState.common || {});
        this.notification = new Notification(initState.notification || {});
    }
}
