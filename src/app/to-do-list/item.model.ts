export class Item {
    // public id: number;
    public title: string;
    public description: string;
    public time: string;

    constructor() {
    }

    createTime() {
        const d = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const hours = d.getHours();
        const minutes = d.getMinutes() >= 10 ? d.getMinutes() : '0' + d.getMinutes();
        const seconds = d.getSeconds() >= 10 ? d.getSeconds() : '0' + d.getSeconds();
        return days[d.getDay()] + ' ' + hours + ':' + minutes + ':' + seconds;
      }
}
