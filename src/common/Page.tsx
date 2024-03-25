import { HTMLAttributes, ReactNode } from 'react';

interface IPageProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Page({ children, ...props }: IPageProps) {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        overflowX: 'hidden',
        position: 'relative',
      }}
      {...props}
    >
      {children}
    </div>
  );
}
