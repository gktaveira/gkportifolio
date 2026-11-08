import React from 'react';
import type { ElementType } from 'react';

interface AnimatedTextProps {
  text: string;
  highlight?: string[];
  className?: string;
  as?: ElementType;
}

export function AnimatedText({ text, highlight = [], className = '', as: Tag = 'span' }: AnimatedTextProps) {
  const words = text.split(' ');

  return (
    <Tag className={className}>
      {words.map((word: string, i: number) => {
        const isHighlighted = highlight.some((h) =>
          word.toLowerCase().includes(h.toLowerCase())
        );
        return (
          <React.Fragment key={i}>
            {isHighlighted ? (
              <span style={{ color: '#00AEEF' }}>{word}</span>
            ) : (
              word
            )}
            {i < words.length - 1 ? ' ' : ''}
          </React.Fragment>
        );
      })}
    </Tag>
  );
}

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  inView?: boolean;
}

export function FadeIn({ children, className = '', delay = 0, direction = 'up', inView = true }: FadeInProps) {
  const getTransform = () => {
    if (inView) return 'translate3d(0,0,0)';
    switch (direction) {
      case 'up': return 'translate3d(0,2rem,0)';
      case 'down': return 'translate3d(0,-2rem,0)';
      case 'left': return 'translate3d(2rem,0,0)';
      case 'right': return 'translate3d(-2rem,0,0)';
      default: return 'translate3d(0,0,0)';
    }
  };

  return (
    <div
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

interface StaggerProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  inView?: boolean;
}

export function Stagger({ children, className = '', staggerDelay = 100, inView = true }: StaggerProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, i) => (
        <FadeIn key={i} delay={i * staggerDelay} inView={inView} direction="up">
          {child}
        </FadeIn>
      ))}
    </div>
  );
}
