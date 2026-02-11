import { CanvasElement } from '../1/elements';

export const elements: CanvasElement[] = [
    {
        id: 'tracks-title',
        type: 'text',
        x: 50,
        y: 50,
        zIndex: 10,
        draggable: true,
        text: 'REGISTER',
        style: { fontSize: '80px', fontWeight: 'bold' }
    },
    {
        id: 'track-1',
        type: 'text',
        x: 100,
        y: 150,
        zIndex: 20,
        draggable: true,
        text: 'AI & ML',
        style: { fontSize: '30px', padding: '10px', border: '1px dashed black', backgroundColor: '#e0f7fa' }
    },
    {
        id: 'track-2',
        type: 'text',
        x: 300,
        y: 200,
        zIndex: 20,
        draggable: true,
        text: 'CYBERSECURITY',
        style: { fontSize: '30px', padding: '10px', border: '1px dashed black', backgroundColor: '#ffecb3' }
    },
    {
        id: 'track-3',
        type: 'text',
        x: 150,
        y: 350,
        zIndex: 20,
        draggable: true,
        text: 'BLOCKCHAIN',
        style: { fontSize: '30px', padding: '10px', border: '1px dashed black', backgroundColor: '#e1bee7' }
    },
    {
        id: 'track-4',
        type: 'text',
        x: 450,
        y: 300,
        zIndex: 20,
        draggable: true,
        text: 'OPEN INNOVATION',
        style: { fontSize: '30px', padding: '10px', border: '1px dashed black', backgroundColor: '#c8e6c9' }
    }
];
