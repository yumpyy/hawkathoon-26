/**
 * Enables drag-and-drop functionality for a given HTML element.
 * 
 * @param element The DOM element to make draggable.
 * @param initialX Initial X position (pixels).
 * @param initialY Initial Y position (pixels).
 * @param onClick Optional callback for when the element is clicked (not dragged).
 * @returns A cleanup function to remove event listeners.
 */
export function enableDrag(
    element: HTMLElement,
    initialX: number,
    initialY: number,
    onClick?: () => void
) {
    let isDragging = false;
    let hasMoved = false; // Track if movement occurred to differentiate Click vs Drag
    let startX = 0;
    let startY = 0;

    // Track current position to calculate delta
    let currentX = initialX;
    let currentY = initialY;

    const initialZIndex = element.style.zIndex;

    function onPointerDown(e: PointerEvent) {
        if (e.button !== 0) return; // Only allow left click

        // Prevent default to stop text selection and native browser drag behavior
        e.preventDefault();

        isDragging = true;
        hasMoved = false;

        // Calculate offset from the element's top-left corner
        startX = e.clientX - currentX;
        startY = e.clientY - currentY;

        // Capture pointer events so dragging works even if mouse leaves the element
        element.setPointerCapture(e.pointerId);
        element.style.zIndex = '999999'; // Float to top while dragging
        element.style.cursor = 'grabbing';
    }

    function onPointerMove(e: PointerEvent) {
        if (!isDragging) return;
        e.preventDefault();

        const newX = e.clientX - startX;
        const newY = e.clientY - startY;

        // Check if moved significantly (> 2px) to consider it a drag
        // This threshold prevents accidental micro-movements from blocking clicks
        if (Math.abs(newX - currentX) > 2 || Math.abs(newY - currentY) > 2) {
            hasMoved = true;
        }

        currentX = newX;
        currentY = newY;

        // Direct DOM manipulation for high performance (bypassing React state)
        element.style.left = `${currentX}px`;
        element.style.top = `${currentY}px`;
    }

    function onPointerUp(e: PointerEvent) {
        if (!isDragging) return;
        isDragging = false;
        element.releasePointerCapture(e.pointerId);

        element.style.zIndex = initialZIndex; // Restore original layer
        element.style.cursor = 'grab';

        // If we didn't move significantly, treat it as a click
        if (!hasMoved && onClick) {
            onClick();
        }
    }

    // Attach native DOM listeners
    element.addEventListener('pointerdown', onPointerDown);
    element.addEventListener('pointermove', onPointerMove);
    element.addEventListener('pointerup', onPointerUp);

    // Initialize absolute positioning styles
    element.style.position = 'absolute';
    element.style.left = `${initialX}px`;
    element.style.top = `${initialY}px`;
    element.style.cursor = 'grab';
    element.style.touchAction = 'none'; // Prevent scrolling on touch devices while dragging

    // Return cleanup function for React useEffect
    return () => {
        element.removeEventListener('pointerdown', onPointerDown);
        element.removeEventListener('pointermove', onPointerMove);
        element.removeEventListener('pointerup', onPointerUp);
    };
}
