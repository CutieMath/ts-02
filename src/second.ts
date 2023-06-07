interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
}

interface Story {
    createStory(): void;
}

// New feature will inherit the interface
// "Following the protocal"
class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        // add one more property
        public short: string,
    ){}
    
    createStory(): void {}
}