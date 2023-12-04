import Image from 'next/image';
import AnimateOnScroll from '../components/AnimateOnScroll'; // Adjust the path based on your actual project structure
import CodeSnippet from '../components/CodeSnippet';

export default function AnimateComponent() {


  const component = `
    // AnimateOnScroll Component

    "use client"
    import React, { ReactNode } from 'react';
    import { useInView } from 'react-intersection-observer';

    interface AnimateOnScrollProps {
        children: ReactNode;
        hiddenClass?: string;
        showClass?: string;
      }

    const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
        children,
        hiddenClass = 'fadeIn-hidden',
        showClass = 'fadeIn-show',
      }) => {
      const { ref, inView, entry } = useInView({
        threshold: 0,
      });

      // If element is in view, use the "show" styling
      const styling = inView ? showClass : '';

      return (
        <div ref={ref} className={\`\${hiddenClass} \${styling}\`}>
          {children}
        </div>
      );
    }

    export default AnimateOnScroll;
  `;

  const css = `
    /* global.css */

    .fadeIn-hidden {
      opacity: 0;
      filter: blur(5px);
      transform: translateY(-20%);
      transition: all 0.6s;
    }
    
    .fadeIn-show {
      opacity: 1;
      filter: blur(0);
      transform: translateY(0);
    }
  `;

  return (
    <main className="flex min-h-screen flex-col centered-container">
      <section className="items-center">
        <AnimateOnScroll>
          <h1 className="whitespace-nowrap">Animate Component</h1>
          <div>
            <p></p>
            <p></p>
            <p></p>
          </div> 
        </AnimateOnScroll>
      </section>
      <section className="">
        <AnimateOnScroll hiddenClass="fadeFromLeft-hidden" showClass="fadeFromLeft-show">
          <h2 className="">AnimateOnScroll Component</h2>
          <CodeSnippet className="" language="typescript">
            {component}
          </CodeSnippet>
          <CodeSnippet className="" language="css">
            {css}
          </CodeSnippet>
        </AnimateOnScroll>
      </section>
    </main>
  )
}
