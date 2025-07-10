import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const renderRef = useRef(0);
  const countRef = useRef(0);
  useEffect(() => {
    countRef.current = count;
  }, [count]);
  useEffect(() => {
    renderRef.current += 1;
  });

  const incrementCount = useCallback(() => {
    countRef.current = count;
    setCount((prev) => prev + 1);
  }, [count]);

  const decrementCount = useCallback(() => {
    countRef.current = count;
    setCount((prev) => prev - 1);
  }, [count]);

  const resetCount = useCallback(() => {
    countRef.current = count;
    setCount(0);
  }, [count]);

  const isOddOrEven = useMemo(
    () => (count % 2 === 0 ? "Even" : "Odd"),
    [count]
  );

  return {
    count,
    incrementCount,
    decrementCount,
    resetCount,
    isOddOrEven,
    renderRef,
    countRef,
  };
};

export default useCounter;
