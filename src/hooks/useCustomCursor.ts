import { useEffect, RefObject } from 'react';

export function useCustomCursor(cursorRef: RefObject<HTMLDivElement>) {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        const x = e.clientX - cursorRef.current.offsetWidth / 2;
        const y = e.clientY - cursorRef.current.offsetHeight / 2;
        cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    const handleMouseOver = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('hover');
      }
    };

    const handleMouseOut = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('hover');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    const interactiveElements = document.querySelectorAll('button, a');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseover', handleMouseOver);
      element.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseover', handleMouseOver);
        element.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, [cursorRef]);
}