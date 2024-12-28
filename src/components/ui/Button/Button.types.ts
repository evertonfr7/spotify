export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  'aria-label'?: string;
  'aria-describedby'?: string;
  type?: 'button' | 'submit' | 'reset';
}
