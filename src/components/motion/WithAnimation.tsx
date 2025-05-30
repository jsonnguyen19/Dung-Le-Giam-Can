"use client";

import {
  ComponentProps,
  HTMLAttributes,
  ReactNode,
  CSSProperties,
  forwardRef,
} from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { useIsClient } from "@/hooks/useIsClient";

export type MotionDivProps = ComponentProps<typeof motion.div>;
export type MotionArticleProps = ComponentProps<typeof motion.article>;
export type MotionButtonProps = ComponentProps<typeof motion.button>;
export type MotionHeadingProps = ComponentProps<typeof motion.h1>;
export type MotionParagraphProps = ComponentProps<typeof motion.p>;

interface WithChildrenProps {
  children?: ReactNode;
}

const cleanMotionProps = (props: any) => {
  const {
    animate,
    initial,
    exit,
    transition,
    whileHover,
    whileInView,
    whileTap,
    drag,
    dragConstraints,
    dragElastic,
    dragMomentum,
    dragTransition,
    whileDrag,
    onDrag,
    onDragStart,
    onDragEnd,
    layout,
    layoutId,
    onLayoutAnimationStart,
    onLayoutAnimationComplete,
    ...cleanProps
  } = props;

  // Convert MotionStyle to CSSProperties
  if (cleanProps.style) {
    const { transform, ...otherStyles } = cleanProps.style;
    cleanProps.style = otherStyles as CSSProperties;
  }

  return cleanProps;
};

export const AnimatedDiv = ({
  children,
  ...props
}: MotionDivProps & WithChildrenProps) => {
  const isClient = useIsClient();

  if (!isClient) {
    const cleanProps = cleanMotionProps(props);
    return <div {...cleanProps}>{children}</div>;
  }

  return (
    <LazyMotion features={domAnimation}>
      <motion.div {...props}>{children}</motion.div>
    </LazyMotion>
  );
};

export const AnimatedArticle = ({
  children,
  ...props
}: MotionArticleProps & WithChildrenProps) => {
  const isClient = useIsClient();

  if (!isClient) {
    const cleanProps = cleanMotionProps(props);
    return <article {...cleanProps}>{children}</article>;
  }

  return (
    <LazyMotion features={domAnimation}>
      <motion.article {...props}>{children}</motion.article>
    </LazyMotion>
  );
};

export const AnimatedButton = forwardRef<
  HTMLButtonElement,
  MotionButtonProps & WithChildrenProps
>(({ children, ...props }, ref) => {
  const isClient = useIsClient();

  if (!isClient) {
    const cleanProps = cleanMotionProps(props);
    return (
      <button ref={ref} {...cleanProps}>
        {children}
      </button>
    );
  }

  return (
    <LazyMotion features={domAnimation}>
      <motion.button ref={ref} {...props}>
        {children}
      </motion.button>
    </LazyMotion>
  );
});

AnimatedButton.displayName = "AnimatedButton";

export const AnimatedHeading = ({
  children,
  ...props
}: MotionHeadingProps & WithChildrenProps) => {
  const isClient = useIsClient();

  if (!isClient) {
    const cleanProps = cleanMotionProps(props);
    return <h1 {...cleanProps}>{children}</h1>;
  }

  return (
    <LazyMotion features={domAnimation}>
      <motion.h1 {...props}>{children}</motion.h1>
    </LazyMotion>
  );
};

export const AnimatedParagraph = ({
  children,
  ...props
}: MotionParagraphProps & WithChildrenProps) => {
  const isClient = useIsClient();

  if (!isClient) {
    const cleanProps = cleanMotionProps(props);
    return <p {...cleanProps}>{children}</p>;
  }

  return (
    <LazyMotion features={domAnimation}>
      <motion.p {...props}>{children}</motion.p>
    </LazyMotion>
  );
};
