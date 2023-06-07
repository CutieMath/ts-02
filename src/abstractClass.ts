// Object cannot be created from abstract class
abstract class TakePic {
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}

    abstract getSepia(): void;

    // Can be used and overriden by child classes
    getReelTime(): number{
        // Some calculation
        return 1;
    }
}


class InstaFromAbstract extends TakePic {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ){
        super(cameraMode, filter);
    }
    getSepia(): void {
        console.log("Sepia mode");
    }
}

const insta = new InstaFromAbstract("Normal", "Sepia", 1);
insta.getReelTime();


// A class can extend only one abstract class but can implement multiple interfaces.
// In general, if you want to share only a contract without any implementation, then use an interface.
// If you want to share a contract along with a partial or full implementation (or state, in terms of properties), then use an abstract class.