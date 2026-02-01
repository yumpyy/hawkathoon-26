import Canvas from './canvas';

export default function Page() {
    return (
        <main style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <Canvas />
        </main>
    );
}
