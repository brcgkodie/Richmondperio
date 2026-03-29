"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

// Brand easing curves — distinct from generic GSAP defaults
CustomEase.create("grove-in", "M0,0 C0.16,1 0.3,1 1,1");
CustomEase.create("grove-out", "M0,0 C0.7,0 0.84,0 1,1");
CustomEase.create("grove-smooth", "M0,0 C0.25,0.1 0.25,1 1,1");

export { gsap, ScrollTrigger, CustomEase };
