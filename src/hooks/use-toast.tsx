"use client";

import { toast as sonnerToast } from "sonner";

export type ToastType = "default" | "destructive" | "success" | "warning" | "info";

export interface ToastOptions {
  title?: string;
  description?: string;
  duration?: number;
}

function toast(options: ToastOptions) {
  return sonnerToast(options.title ?? "", {
    description: options.description,
    duration: options.duration,
  });
}

toast.success = (options: ToastOptions) =>
  sonnerToast.success(options.title ?? "", {
    description: options.description,
    duration: options.duration,
  });

toast.destructive = (options: ToastOptions) =>
  sonnerToast.error(options.title ?? "", {
    description: options.description,
    duration: options.duration,
  });

toast.warning = (options: ToastOptions) =>
  sonnerToast.warning(options.title ?? "", {
    description: options.description,
    duration: options.duration,
  });

toast.info = (options: ToastOptions) =>
  sonnerToast.info(options.title ?? "", {
    description: options.description,
    duration: options.duration,
  });

export function useToast() {
  return { toast };
}

export { toast };
