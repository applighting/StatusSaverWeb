import classNames from "../classname";

export default function Container ({ children, className }: { children: React.ReactNode, className: string }) {
  return (
    <div className={classNames("flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}