"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import FAQSchema from "@/components/seo/FAQSchema";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!contentRef.current || !iconRef.current) return;

    if (isOpen) {
      gsap.set(contentRef.current, { height: "auto" });
      const autoHeight = contentRef.current.scrollHeight;
      gsap.fromTo(
        contentRef.current,
        { height: 0, opacity: 0 },
        { height: autoHeight, opacity: 1, duration: 0.4, ease: "grove-smooth" }
      );
      gsap.to(iconRef.current, {
        rotation: 45,
        duration: 0.3,
        ease: "grove-in",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "grove-out",
      });
      gsap.to(iconRef.current, {
        rotation: 0,
        duration: 0.3,
        ease: "grove-in",
      });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-neutral-200">
      <button
        type="button"
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-neutral-900 pr-4">
          {faq.question}
        </span>
        <span
          ref={iconRef}
          className="flex-shrink-0 text-2xl leading-none text-neutral-500"
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div ref={contentRef} className="overflow-hidden" style={{ height: 0 }}>
        <p className="pb-5 text-neutral-600 leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = useCallback(
    (index: number) => {
      setActiveIndex(activeIndex === index ? null : index);
    },
    [activeIndex]
  );

  return (
    <section>
      <FAQSchema faqs={faqs} />
      <div className="mx-auto max-w-3xl">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            faq={faq}
            isOpen={activeIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
}
