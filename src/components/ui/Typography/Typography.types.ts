export interface TypographyProps {
  variant?: 'title' | 'subtitle' | 'paragraph' | 'link';
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
}
