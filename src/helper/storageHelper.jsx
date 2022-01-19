export default class StorageHelper {
    
    static addStep(current) {
        let steps = this.getSteps();
        if(steps) {
            localStorage.setItem("STEPS", steps + current)
        } else {
            localStorage.setItem("STEPS", current)
        }
    }

    static getSteps() {
        return localStorage.getItem("STEPS");
    }
}
