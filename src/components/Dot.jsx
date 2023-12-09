import "./Dot.css";
import useMousePosition from "../hooks/UseMousePosition";
const DotRing = () => {
  // 1.
  const { x, y } = useMousePosition();
  return (
    <>
      <div style={{ left: `${x}px`, top: `${y}px` }} className="ring"></div>

      <div className="dot" style={{ left: `${x}px`, top: `${y}px` }}></div>
    </>
  );
};
export default DotRing;
