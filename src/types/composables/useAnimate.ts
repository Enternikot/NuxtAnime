import { JSAnimation } from "animejs";

/**
 * Provides the main `anime` function as custom composable.
 *
 * @example
 *
 * ```ts
 * const box = useTemplateRef("box");
 * const anim = await useAnimate({ targets: box.value , x: 100 })
 * ```
 *
 * @since 0.1.4
 */
export declare const useAnimate: typeof JSAnimation;
