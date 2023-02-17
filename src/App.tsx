import { useResizeDetector } from 'react-resize-detector';

export default function App() {
    const { height, ref, width } = useResizeDetector();
    return (
        <>
            <div ref={ref} style={{ height: 100 }}></div>
            {height}
            {width}
        </>
    )
}
