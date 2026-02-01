import Canvas from './canvas';
import VideoBackground from '@/components/VideoBackground';

export default function Page() {
    return (
        <main style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <VideoBackground />
            <Canvas />
        </main>
    );
}
