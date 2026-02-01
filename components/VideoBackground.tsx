export default function VideoBackground() {
    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100vw',
                height: '100vh',
                objectFit: 'cover',
                transform: 'translate(-50%, -50%)',
                zIndex: -1,
                pointerEvents: 'none'
            }}
        >
            <source src="/videos/bg.mp4" type="video/mp4" />
            {/* Fallback if user hasn't provided video yet */}
            Your browser does not support the video tag.
        </video>
    );
}
