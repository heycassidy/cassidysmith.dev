import "./photo.css"
import { slide, fade } from "astro:transitions";
import type { TransitionAnimation, TransitionAnimationPair, TransitionDirectionalAnimations } from "astro";

const anim: TransitionAnimationPair = {
  old: {
    name: 'photo',
    duration: '0.5s',
    easing: 'ease-in',
    direction: 'reverse',
  },
  new: {
    name: 'photo',
    duration: '0.5s',
    easing: 'ease-in-out',
  },
};

export const photo = (): TransitionDirectionalAnimations => {
  // return slide()

  return {
    forwards: anim,
    backwards: anim
  }
}