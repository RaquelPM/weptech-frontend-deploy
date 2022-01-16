import React, { useMemo, useRef, cloneElement } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

const Transition = styled(TransitionGroup)`
  display: grid;

  .item {
    grid-area: 1 / 1 / 2 / 2;

    &:not(:only-child) {
      &.${({ direction }) => direction}-enter-active,
        &.${({ direction }) => direction}-exit-active {
        transition: transform 200ms ease;
      }
    }
  }

  overflow: hidden;

  .back-enter {
    transform: translateX(-100%);
  }
  .back-enter-active {
    transform: translateX(0);
  }
  .back-exit {
    transform: translateX(0);
  }
  .back-exit-active {
    transform: translateX(100%);
  }

  .forward-enter {
    transform: translateX(100%);
  }
  .forward-enter-active {
    transform: translateX(0);
  }
  .forward-exit {
    transform: translateX(0);
  }
  .forward-exit-active {
    transform: translateX(-100%);
  }
`;

const SlideRoutes = ({ routes = [] }) => {
  const location = useLocation();
  const { pathname } = location;

  const pathList = routes.map(item => item.path);

  const hasMount = useRef(false);

  const prevPath = useRef();
  const direction = useRef('');

  if (!hasMount.current) {
    // mount
    hasMount.current = true;

    prevPath.current = pathname;
  } else if (prevPath.current !== pathname) {
    window.scrollTo({ top: 0 });

    const prevIndex = pathList.indexOf(prevPath.current);
    const nextIndex = pathList.indexOf(pathname);
    direction.current = prevIndex < nextIndex ? 'forward' : 'back';

    prevPath.current = pathname;
  }

  const routList = useMemo(
    () =>
      routes.map(item => {
        if (item.skip) {
          return null;
        }

        const { element, ...restProps } = item;

        if (!element) {
          return item;
        }

        const newElement = <div className="item">{element}</div>;

        return (
          <Route
            {...restProps}
            exact={item.exact !== false}
            element={newElement}
          />
        );
      }),
    [routes]
  );

  return (
    <Transition
      direction={direction}
      childFactory={child =>
        cloneElement(child, { classNames: direction.current })
      }
    >
      <CSSTransition key={pathname} timeout={500}>
        <Routes location={location}>{routList}</Routes>
      </CSSTransition>
    </Transition>
  );
};

export default SlideRoutes;
