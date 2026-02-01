'use client';
import { elements } from './elements';
import Draggable from '@/components/Draggable';
import StaticElement from '@/components/StaticElement';

export default function Canvas() {
    return (
        <div id="canvas" style={{ width: '100%', height: '100%', position: 'relative' }}>
            {elements.map((el) =>
                el.draggable ? (
                    <Draggable key={el.id} {...el} />
                ) : (
                    <StaticElement key={el.id} {...el} />
                )
            )}
        </div>
    );
}
