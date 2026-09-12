import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { isWeb } from '@gluestack-ui/utils/nativewind-utils';
const baseStyle = isWeb
  ? 'font-sans tracking-sm bg-transparent border-0 box-border display-inline list-none margin-0 padding-0 position-relative text-start no-underline whitespace-pre-wrap word-wrap-break-word'
  : '';

export const headingStyle = tva({
  base: `text-foreground font-bold font-heading my-0 ${baseStyle}`,
  variants: {
    isTruncated: {
      true: 'truncate',
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
    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
    highlight: {
      true: 'bg-yellow-500',
    },
    size: {
      // Tracking tightens as size grows (Apple: large display text reads
      // too loose at normal tracking); Tailwind's own paired line-height
      // per text-{size} already tightens leading the same way, for free.
      '5xl': 'text-6xl tracking-tighter',
      '4xl': 'text-5xl tracking-tighter',
      '3xl': 'text-4xl tracking-tight',
      '2xl': 'text-3xl tracking-tight',
      'xl': 'text-2xl tracking-tight',
      'lg': 'text-xl tracking-normal',
      'md': 'text-lg tracking-normal',
      'sm': 'text-base tracking-normal',
      'xs': 'text-sm tracking-normal',
    },
  },
});
