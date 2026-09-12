'use client';
import React from 'react';
import { createPressable } from '@gluestack-ui/core/pressable/creator';
import { Pressable as RNPressable } from 'react-native';
import Animated from 'react-native-reanimated';

import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { withStyleContext } from '@gluestack-ui/utils/nativewind-utils';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import { usePressScale } from '@/lib/motion';

const UIPressable = createPressable({
  Root: withStyleContext(RNPressable),
});

const pressableStyle = tva({
  base: 'data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-indicator-info data-[focus-visible=true]:ring-2 data-[disabled=true]:opacity-40',
});

type IPressableProps = Omit<
  React.ComponentProps<typeof UIPressable>,
  'context' | 'children'
> &
  VariantProps<typeof pressableStyle> & {
    // Narrowed from RNPressable's function-as-children form: the animated
    // wrapper below needs a plain node, and no call site uses the function form.
    children?: React.ReactNode;
  };
const Pressable = React.forwardRef<
  React.ComponentRef<typeof UIPressable>,
  IPressableProps
>(function Pressable({ className, onPressIn, onPressOut, children, ...props }, ref) {
  const press = usePressScale();

  return (
    <UIPressable
      {...props}
      ref={ref}
      onPressIn={(e) => {
        press.onPressIn();
        onPressIn?.(e);
      }}
      onPressOut={(e) => {
        press.onPressOut();
        onPressOut?.(e);
      }}
      className={pressableStyle({
        class: className,
      })}
    >
      {/* The scale spring lives on this unstyled inner layer — never on the
          same node as `className`. See Global Constraints. */}
      <Animated.View style={press.style}>{children}</Animated.View>
    </UIPressable>
  );
});

Pressable.displayName = 'Pressable';
export { Pressable };
