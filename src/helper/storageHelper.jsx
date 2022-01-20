export default class StorageHelper {

    static addStep(step, current) {
        let status = JSON.parse(localStorage.getItem("STEPS"));
        if (!status) {
            status = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        status[step] = current;
        localStorage.setItem("STEPS", JSON.stringify(status));
    }

    static getSteps() {
        return JSON.parse(localStorage.getItem("STEPS"));
    }
}
