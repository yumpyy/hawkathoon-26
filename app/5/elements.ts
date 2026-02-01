import { CanvasElement } from '../1/elements';

export const elements: CanvasElement[] = [
    {
        id: 'team-title',
        type: 'text',
        x: 50,
        y: 50,
        zIndex: 10,
        draggable: true,
        text: 'EXAMPLES',
        style: { fontSize: '80px', fontWeight: 'bold' }
    },
    {
        id: 'team-lead',
        type: 'text',
        x: 200,
        y: 200,
        zIndex: 20,
        draggable: true,
        text: 'Lead Organizer',
        style: { fontSize: '24px', border: '1px solid black', padding: '10px' }
    },
    {
        id: 'team-tech',
        type: 'text',
        x: 400,
        y: 400,
        zIndex: 20,
        draggable: true,
        text: 'Tech Team',
        style: { fontSize: '24px', border: '1px solid black', padding: '10px' }
    }
];
