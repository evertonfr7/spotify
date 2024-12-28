export interface InputProps {
  className?: string;
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url';
  id?: string;
  name?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
