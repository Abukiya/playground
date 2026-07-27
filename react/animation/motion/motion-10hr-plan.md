# Motion (Framer Motion) — 10-Hour 80/20 Plan

**Goal:** the ~20% of the API that covers ~80% of real animation work — basic transitions, variants/orchestration, exit animations, layout transitions, gestures, and scroll effects — with enough hands-on reps to actually retain it.

**Setup (do before Session 1, 5 min):**
```
npm install motion
```
Import everything from `motion/react`, not `framer-motion`:
```js
import { motion, AnimatePresence } from "motion/react"
```

---

## Session 1 (2h) — Core mechanics: motion components, animate, transition
**The 80/20 idea:** almost every animation in Motion is `<motion.div>` + an `animate` prop + a `transition` prop. Master this and you can animate 60% of what you'll ever need.

- (20 min) Read: [Motion for React — Get Started](https://motion.dev/docs/react) — install, first `motion.div`, `animate` prop
- (25 min) Read + follow along: [Animation](https://motion.dev/docs/react-animation) — `initial`, `animate`, `transition`, spring vs tween, `ease`, `duration`
- (35 min) Build: a card that fades/slides in on mount, a button that scales on click via `animate` state toggle, a progress bar animating width
- (20 min) Skim: [Transitions](https://motion.dev/docs/react-transitions) — when to use `type: "spring"` vs `type: "tween"`, `stiffness`/`damping` intuition (don't memorize, just get the feel)
- (20 min) Practice: recreate 3 micro-interactions from [Motion Examples](https://motion.dev/examples) using only `animate`/`transition`

**15-min review:** Without looking at docs, write from memory: the three core props on `motion.div`, the difference between spring and tween, and how you'd animate opacity + y-position on mount. Then check yourself against Session 1 material.

**✅ Checklist — don't move on until you can do all of these (docs closed):**
- [x] Turn a plain `<div>` into an animated one that fades and slides up on mount, no copy-paste
- [x] Explain in one sentence when you'd use `type: "spring"` vs `type: "tween"`
- [x] Animate a button's scale on click using state + `animate`, from a blank file
- [x] Name what `initial`, `animate`, and `transition` each control, without hesitating

---

## Session 2 (2h) — Variants, orchestration, gestures
**The 80/20 idea:** variants + `staggerChildren` is how every "list items animate in one after another" effect works — one of the most-copied patterns in real UIs. Gestures (`whileHover`, `whileTap`) are the second-most-used feature after basic animate.

- (25 min) Read: [Variants](https://motion.dev/docs/react-animation#variants) — naming states, propagation to children
- (30 min) Build: a staggered list (nav menu or card grid) using a parent variant with `staggerChildren` and child variants
- (25 min) Read: [Gestures](https://motion.dev/docs/react-gestures) — `whileHover`, `whileTap`, `whileFocus`, `whileDrag`, and basic `drag` constraints
- (25 min) Build: a hoverable/tappable card (scale + shadow), and a simple draggable element with `dragConstraints`
- (15 min) Practice: combine both — a draggable card list where hover/tap scale still works

**15-min review:** Explain out loud (or write) how stagger propagation works — why does setting `staggerChildren` on the parent variant animate the children in sequence? Rebuild the staggered list from memory, no copy-paste.

**✅ Checklist — don't move on until you can do all of these (docs closed):**
- [ ] Build a staggered list from scratch: parent variant + child variants + `staggerChildren`
- [ ] Explain why children need their own `variants` prop (not just the parent) to pick up the stagger
- [ ] Add `whileHover` and `whileTap` to a card without looking anything up
- [ ] Make an element draggable within bounds using `drag` + `dragConstraints`

---

## Session 3 (2h) — Exit animations & layout transitions
**The 80/20 idea:** `AnimatePresence` (unmount animations) and the `layout` prop (auto-animating position/size changes) are what separate "looks like a template" from "looks professional." These two features alone cover most of what makes an app feel polished.

- (25 min) Read: [AnimatePresence](https://motion.dev/docs/react-animate-presence) — why exit animations need it, `mode="wait"` vs `"popLayout"`
- (30 min) Build: a toggleable modal/toast that animates in AND out (not just in)
- (25 min) Read: [Layout Animations](https://motion.dev/docs/react-layout-animations) — the `layout` prop, `layoutId` for shared-element transitions
- (30 min) Build: a filterable/reorderable list (items animate to new positions when the list changes) and a simple shared-element transition (e.g., a card that expands into a detail view using matching `layoutId`)
- (10 min) Practice: add exit + layout together on the same component and observe interactions

**15-min review:** Write a one-paragraph explanation (as if to a teammate) of when you'd reach for `AnimatePresence` vs the `layout` prop vs both together. This distinction trips people up — nailing it now saves debugging later.

**✅ Checklist — don't move on until you can do all of these (docs closed):**
- [ ] Build a modal that animates in on mount AND out on close (not just in)
- [ ] Explain why exit animations need `AnimatePresence` but enter animations don't
- [ ] Add `layout` to a list item and describe what breaks if you forget it on a reordering list
- [ ] Set up one shared-element transition using matching `layoutId` on two different components

---

## Session 4 (2h) — Scroll-linked animation & motion values
**The 80/20 idea:** scroll-triggered reveals (`whileInView`) and scroll-linked progress effects (`useScroll` + `useTransform`) are everywhere on modern landing pages/portfolios — high visual payoff for moderate effort.

- (20 min) Read: [`whileInView`](https://motion.dev/docs/react-scroll-animations#in-view-animations) — trigger animation once an element enters viewport, `once: true`, `amount`
- (25 min) Build: a page section that fades/slides in as you scroll to it (viewport-triggered)
- (30 min) Read: [`useScroll`](https://motion.dev/docs/react-use-scroll) + [`useTransform`](https://motion.dev/docs/react-use-transform) — mapping scroll progress to a motion value, then to visual properties
- (30 min) Build: a scroll-linked progress bar at the top of the page, and a parallax-style element that moves as you scroll
- (15 min) Practice: combine `whileInView` (per-section reveal) with a global scroll progress bar on one page

**15-min review:** Explain the pipeline: scroll position → `useScroll` → `useTransform` → styled value. Rebuild the scroll progress bar without referencing the docs.

**✅ Checklist — don't move on until you can do all of these (docs closed):**
- [ ] Make a section fade in only once, the first time it scrolls into view (`whileInView` + `once: true`)
- [ ] Build a scroll-linked progress bar from a blank file using `useScroll` + `useTransform`
- [ ] Explain the difference between a motion value and a normal React state value
- [ ] State one reason you'd choose `whileInView` over `useScroll` for a given effect, and vice versa

---

## Session 5 (2h) — Integration project + performance/accessibility
**The 80/20 idea:** the last mile is making it feel production-grade — respecting reduced-motion preferences, avoiding performance foot-guns, and proving you can combine everything under time pressure.

- (15 min) Read: [`useReducedMotion`](https://motion.dev/docs/react-accessibility) and general performance notes (favor animating `transform`/`opacity`, be cautious animating layout-triggering properties at scale)
- (90 min) Build: a small landing page or portfolio section combining **at least 4** techniques from Sessions 1–4 — e.g., hero fade/slide-in (S1), staggered nav or card grid (S2), a modal with `AnimatePresence` (S3), and a scroll-triggered reveal (S4). Wire in `useReducedMotion` to disable/simplify animations for users who prefer it.
- (15 min) Practice: profile it — open dev tools, confirm animations are running on `transform`/`opacity` and not causing layout thrashing

**15-min review:** Do a full self-audit of the build: which 5 features did you use, could you explain each one without docs, and where would you reach for `layout`/`layoutId` vs manual `animate` if you extended this project further? Write down 2 things you're still shaky on — that's your next study session.

**✅ Checklist — the real test (docs closed):**
- [ ] Your finished build uses at least 4 techniques from Sessions 1–4, and you can point to each and name it
- [ ] `useReducedMotion` is wired in and actually disables/simplifies animation when toggled
- [ ] Dev tools confirm your animations run on `transform`/`opacity`, not layout-triggering properties
- [ ] You can list your 2 shakiest areas by name — if you can't name them, you haven't audited closely enough

---

## Reference hub
- Official docs: https://motion.dev/docs/react
- Copy-paste examples: https://motion.dev/examples
- Note: `framer-motion` on npm still works (same API) but is no longer actively developed — new projects should use `motion` with `motion/react` imports.

