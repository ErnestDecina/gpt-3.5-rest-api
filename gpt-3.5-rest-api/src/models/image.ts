/**
 * 
 * image.ts
 * desc:
 * 
 * Author: Ernest John Decina
 */

class imageResponseJSON {
    image_link: String

    constructor(image_link: String) {
        this.image_link = image_link
    } // End constructor


    createJson(): object {
        return {
            "link": this.image_link
        }
    } // End createJson
} // End class queryJson


export {
    imageResponseJSON
}