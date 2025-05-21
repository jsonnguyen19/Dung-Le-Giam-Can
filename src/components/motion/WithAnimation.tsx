"use client";

import { ComponentProps } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";

export type MotionDivProps = ComponentProps<typeof motion.div>;
export type MotionArticleProps = ComponentProps<typeof motion.article>;
export type MotionButtonProps = ComponentProps<typeof motion.button>;
export type MotionHeadingProps = ComponentProps<typeof motion.h1>;
export type MotionParagraphProps = ComponentProps<typeof motion.p>;

export const AnimatedDiv = (props: MotionDivProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div {...props} />
    </LazyMotion>
  );
};

export const AnimatedArticle = (props: MotionArticleProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.article {...props} />
    </LazyMotion>
  );
};

export const AnimatedButton = (props: MotionButtonProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.button {...props} />
    </LazyMotion>
  );
};

export const AnimatedHeading = (props: MotionHeadingProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.h1 {...props} />
    </LazyMotion>
  );
};

export const AnimatedParagraph = (props: MotionParagraphProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.p {...props} />
    </LazyMotion>
  );
};
