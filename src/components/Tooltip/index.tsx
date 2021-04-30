import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  // A " ? " antes dos " : " é pra dizer que a "className" não é obrigatória.
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
