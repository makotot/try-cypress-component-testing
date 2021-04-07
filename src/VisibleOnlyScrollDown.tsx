import { useEffect, useState } from 'react';

export const VisibleOnlyScrollDown = () => {
  const [isVisible, updateVisibility] = useState(false);
  const toggle = () => {
    updateVisibility(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggle);

    return () => {
      window.removeEventListener('scroll', toggle);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      id="visibleOnlyScrollDown"
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        background: '#FFF',
      }}>
      Visible only scroll down
    </div>
  );
};
