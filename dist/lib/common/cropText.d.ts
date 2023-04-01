export declare type CropTextOptions = {
    ellipsis?: string;
    cropHead?: boolean;
    removeCroppedWord?: boolean;
};
/**
 * Shorten text to maxLength with ellipsis
 * @param text
 * @param maxLength
 */
export declare function cropText(text: string, maxLength: number, { ellipsis, cropHead, removeCroppedWord, }?: CropTextOptions): string;
