export type TStatusState = {
  type?: 'empty' | 'error' | 'loading' | 'search';
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
};
