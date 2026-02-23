import { CanvasElement } from '../home/elements';

export const elements: CanvasElement[] = [
    {
        id: 'about-title',
        type: 'text',
        x: 100,
        y: 100,
        zIndex: 10,
        draggable: true,
        text: 'ABOUT EVENT',
        style: { fontSize: '60px', fontWeight: 'bold' }
    },
    {
        id: 'about-desc',
        type: 'text',
        x: 100,
        y: 200,
        zIndex: 11,
        draggable: true,
        text: 'Hawkathoon is a premier hackathon hosted by VIT Bhopal.',
        style: { fontSize: '24px', maxWidth: '400px', backgroundColor: '#fff', padding: '20px', border: '2px solid black' }
    },
    {
        id: 'about-bg',
        type: 'text',
        x: 0,
        y: 0,
        zIndex: 0,
        draggable: false,
        text: 'ABOUT',
        style: { fontSize: '250px', color: '#f0f0f0', pointerEvents: 'none' }
    }
];
