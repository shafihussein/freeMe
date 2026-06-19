"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CornerPoints, HighlightOptions, ScanInput } from "jscanify";

export type ScannerState = "idle" | "loading" | "ready" | "error";

export function useScanner() {
  const [state, setState] = useState<ScannerState>("idle");
  const scannerRef = useRef<import("jscanify").default | null>(null);

  useEffect(() => {
    setState("loading");

    let cancelled = false;

    import("@techstark/opencv-js")
      .then((cvModule) => {
        const cv = (cvModule.default ?? cvModule) as Record<string, unknown>;

        const init = () => {
          if (cancelled) return;
          import("jscanify")
            .then((mod) => {
              if (cancelled) return;
              const Jscanify = mod.default;
              scannerRef.current = new Jscanify();
              setState("ready");
            })
            .catch(() => setState("error"));
        };

        if (cv["Mat"]) {
          init();
        } else {
          (cv as { onRuntimeInitialized?: () => void }).onRuntimeInitialized =
            init;
        }
      })
      .catch(() => setState("error"));

    return () => {
      cancelled = true;
    };
  }, []);

  const highlightPaper = useCallback(
    (image: ScanInput, options?: HighlightOptions): HTMLCanvasElement | null =>
      scannerRef.current?.highlightPaper(image, options) ?? null,
    []
  );

  const extractPaper = useCallback(
    (
      image: ScanInput,
      width: number,
      height: number,
      cornerPoints?: CornerPoints
    ): HTMLCanvasElement | null =>
      scannerRef.current?.extractPaper(image, width, height, cornerPoints) ??
      null,
    []
  );

  const getCornerPoints = useCallback(
    (contour: unknown): CornerPoints | null =>
      scannerRef.current?.getCornerPoints(contour) ?? null,
    []
  );

  return { state, highlightPaper, extractPaper, getCornerPoints };
}
