import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { isWeb } from '@gluestack-ui/utils/nativewind-utils';

const baseStyle = isWeb
  ? 'font-sans tracking-sm my-0 bg-transparent border-0 box-border display-inline list-none margin-0 padding-0 position-relative text-start no-underline whitespace-pre-wrap word-wrap-break-word'
  : '';

export const textStyle = tva({
  base: `text-foreground font-body ${baseStyle}`,

  variants: {
    isTruncated: {
      true: 'web:truncate',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    size: {
      // Same rule as heading/styles.tsx: tighter tracking as size grows,
      // a touch of positive tracking at the smallest size for legibility.
      '2xs': 'text-2xs tracking-wide',
      'xs': 'text-xs tracking-normal',
      'sm': 'text-sm tracking-normal',
      'md': 'text-base tracking-normal',
      'lg': 'text-lg tracking-normal',
      'xl': 'text-xl tracking-normal',
      '2xl': 'text-2xl tracking-tight',
      '3xl': 'text-3xl tracking-tight',
      '4xl': 'text-4xl tracking-tight',
      '5xl': 'text-5xl tracking-tighter',
      '6xl': 'text-6xl tracking-tighter',
    },
    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
    highlight: {
      true: 'bg-yellow-500',
    },
  },
});
