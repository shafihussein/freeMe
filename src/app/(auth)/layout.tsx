import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | freeMe",
    default: "freeMe",
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /*
   * Root layout already provides the Navbar + Footer shell.
   * Auth pages only need to be vertically centred inside the
   * ScrollContainer — no second header/footer here.
   */
  return (
    <div className="flex min-h-full items-center justify-center px-6 py-12">
      {children}
    </div>
  );
}
