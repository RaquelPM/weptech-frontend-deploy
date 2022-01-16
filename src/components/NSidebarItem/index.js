import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function NSidebarItem({
  route = '',
  closeSidebar = () => null,
  icon,
  label = '',
  ...rest
}) {
  const [mouse, setMouse] = useState(false);

  return (
    <Container mouse={mouse} {...rest}>
      {icon}
      <Link
        to={route}
        className="option"
        onClick={() => closeSidebar()}
        onMouseEnter={() => setMouse(true)}
        onMouseLeave={() => setMouse(false)}
      >
        <p className="option">{label}</p>
      </Link>
    </Container>
  );
}

export default NSidebarItem;
