declare module "jscanify" {
  type ScanInput =
    | HTMLImageElement
    | HTMLCanvasElement
    | HTMLVideoElement;

  interface Point {
    x: number;
    y: number;
  }

  interface CornerPoints {
    topLeftCorner: Point;
    topRightCorner: Point;
    bottomLeftCorner: Point;
    bottomRightCorner: Point;
  }

  interface HighlightOptions {
    color?: string;
    thickness?: number;
  }

  class jscanify {
    constructor();

    /** Finds the largest paper contour in the image. */
    findPaperContour(img: unknown): unknown | null;

    /**
     * Draws a highlighted border around detected paper.
     * Returns a new canvas with the highlight painted on top.
     */
    highlightPaper(
      image: ScanInput,
      options?: HighlightOptions
    ): HTMLCanvasElement;

    /**
     * Perspective-corrects and extracts the detected paper.
     * Returns `null` when no paper is detected.
     */
    extractPaper(
      image: ScanInput,
      resultWidth: number,
      resultHeight: number,
      cornerPoints?: CornerPoints
    ): HTMLCanvasElement | null;

    /**
     * Computes the four corner points of a contour returned by
     * {@link findPaperContour}.
     */
    getCornerPoints(contour: unknown): CornerPoints;
  }

  export default jscanify;
  export type { ScanInput, Point, CornerPoints, HighlightOptions };
}
