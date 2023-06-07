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