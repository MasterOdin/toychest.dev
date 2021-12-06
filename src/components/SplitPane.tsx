import {
  createContext,
  FC,
  MouseEvent as ReactMouseEvent,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

const SplitPaneContext = createContext<{
  leftWidth: number | null;
  setLeftWidth: (width: number) => void;
}>({
  leftWidth: null,
  setLeftWidth: () => {},
});

const SplitPaneLeft: FC = ({ children }) => {
  const leftRef = useRef<HTMLDivElement>(null);
  const { leftWidth, setLeftWidth } = useContext(SplitPaneContext);

  useEffect(() => {
    if (!leftRef.current) {
      return;
    }
    if (!leftWidth) {
      setLeftWidth(leftRef.current.clientWidth);
      leftRef.current.style.flex = 'none';
      return;
    }

    leftRef.current.style.width = `${leftWidth}px`;
  }, [leftRef, leftWidth, setLeftWidth]);

  return (
    <div className="split-pane-left" ref={leftRef}>
      {children}
    </div>
  );
};

const SplitPaneRight: FC = ({ children }) => {
  return <div className="split-pane-right">{children}</div>;
};

interface SplitPaneProps {
  children: ReactNode[];
  defaultWidth?: number;
}

export const SplitPane: FC<SplitPaneProps> = ({ children, defaultWidth }) => {
  const [leftWidth, setLeftWidth] = useState<number | null>(
    defaultWidth || null,
  );

  const separatorXPosition = useRef<number | null>(null);
  const splitPaneRef = useRef<HTMLDivElement>(null);

  const onMouseDown = useCallback(
    (e: ReactMouseEvent) => {
      separatorXPosition.current = e.clientX;
    },
    [separatorXPosition],
  );

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!separatorXPosition.current || !splitPaneRef.current) {
        return;
      }

      const newLeftWidth =
        (leftWidth || 0) + e.clientX - separatorXPosition.current;
      separatorXPosition.current = e.clientX;

      if (newLeftWidth <= 0) {
        return leftWidth !== 0 && setLeftWidth(0);
      }

      const splitPaneWidth = splitPaneRef.current.clientWidth;

      if (newLeftWidth >= splitPaneWidth) {
        return leftWidth !== splitPaneWidth && setLeftWidth(splitPaneWidth);
      }

      setLeftWidth(newLeftWidth);
    },
    [separatorXPosition, splitPaneRef, leftWidth],
  );

  const onMouseUp = useCallback(() => {
    separatorXPosition.current = null;
  }, [separatorXPosition]);

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  return (
    <div className="split-pane" ref={splitPaneRef}>
      <SplitPaneContext.Provider value={{ leftWidth, setLeftWidth }}>
        <SplitPaneLeft>{children[0]}</SplitPaneLeft>
        <div className="separator" onMouseDown={onMouseDown} />
        <SplitPaneRight>{children[1]}</SplitPaneRight>
      </SplitPaneContext.Provider>
    </div>
  );
};
