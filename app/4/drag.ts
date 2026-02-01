export function enableDrag(
    element: HTMLElement,
    initialX: number,
    initialY: number
) {
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let currentX = initialX;
    let currentY = initialY;
    const initialZIndex = element.style.zIndex;

    function onPointerDown(e: PointerEvent) {
        // Only drag on left click and if the target itself or specific handles are clicked
        // For now, entire element is a handle
        if (e.button !== 0) return;

        isDragging = true;
        startX = e.clientX - currentX;
        startY = e.clientY - currentY;

        element.setPointerCapture(e.pointerId);
        element.style.zIndex = '999999'; // Float to top
        element.style.cursor = 'grabbing';
    }

    function onPointerMove(e: PointerEvent) {
        if (!isDragging) return;
        e.preventDefault();

        currentX = e.clientX - startX;
        currentY = e.clientY - startY;

        // Direct DOM manipulation
        element.style.left = `${currentX}px`;
        element.style.top = `${currentY}px`;
    }

    function onPointerUp(e: PointerEvent) {
        if (!isDragging) return;
        isDragging = false;
        element.releasePointerCapture(e.pointerId);

        element.style.zIndex = initialZIndex; // Restore layer
        element.style.cursor = 'grab';
    }

    element.addEventListener('pointerdown', onPointerDown);
    element.addEventListener('pointermove', onPointerMove);
    element.addEventListener('pointerup', onPointerUp);

    // Initialize styles
    element.style.position = 'absolute';
    element.style.left = `${initialX}px`;
    element.style.top = `${initialY}px`;
    element.style.cursor = 'grab';
    element.style.touchAction = 'none'; // Prevent scrolling while dragging

    return () => {
        element.removeEventListener('pointerdown', onPointerDown);
        element.removeEventListener('pointermove', onPointerMove);
        element.removeEventListener('pointerup', onPointerUp);
    };
}
