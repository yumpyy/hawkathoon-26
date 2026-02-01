
import { CanvasElement } from '../1/elements';

export const elements: CanvasElement[] = [
    {
        id: 'sponsors-title',
        type: 'text',
        x: 50,
        y: 50,
        zIndex: 10,
        draggable: true,
        text: 'CONTACT',
        style: { fontSize: '80px', fontWeight: 'bold' }
    },
    {
        id: 'sponsor-1',
        type: 'text',
        x: 200,
        y: 200,
        zIndex: 20,
        draggable: true,
        text: 'PLACEHOLDER SPONSOR 1',
        style: { fontSize: '24px', fontWeight: 'bold', color: 'gray' }
    },
    {
        id: 'sponsor-2',
        type: 'text',
        x: 500,
        y: 300,
        zIndex: 20,
        draggable: true,
        text: 'PLACEHOLDER SPONSOR 2',
        style: { fontSize: '24px', fontWeight: 'bold', color: 'gray' }
    }
];
