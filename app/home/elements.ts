export type CanvasElement = {
    id: string
    type: 'image' | 'text' | 'link'
    x: number
    y: number
    width?: number
    height?: number
    zIndex: number
    draggable: boolean
    src?: string
    text?: string
    href?: string
    zoomable?: boolean
    style?: React.CSSProperties
}

export const elements: CanvasElement[] = [
    // --- CENTER: TITLES ---
    // "HAWK-"
    {
        id: 'el-title-hawk',
        type: 'text',
        x: 450,
        y: 150, // Lowered slightly
        zIndex: 100,
        draggable: true,
        text: 'HAWK-',
        style: { fontSize: '100px', fontWeight: 'bold', fontFamily: 'Comic Sans MS, Impact, sans-serif', color: '#ff00ff', transform: 'rotate(-5deg)' }
    },
    // "A-THOON"
    {
        id: 'el-title-athoon',
        type: 'text',
        x: 550,
        y: 250,
        zIndex: 101,
        draggable: true,
        text: 'A-THOON',
        style: { fontSize: '100px', fontWeight: 'bold', fontFamily: 'Comic Sans MS, Impact, sans-serif', color: '#00ff00', transform: 'rotate(5deg)' }
    },
    // "'26"
    {
        id: 'el-year',
        type: 'text',
        x: 850, // Connected to title
        y: 350,
        zIndex: 102,
        draggable: true,
        text: "'26",
        style: { fontSize: '80px', fontWeight: 'bold', color: 'red', textShadow: '4px 4px 0px black' }
    },
    // Tagline
    {
        id: 'el-tagline',
        type: 'text',
        x: 550,
        y: 480,
        zIndex: 90,
        draggable: true,
        text: 'Meme on that thing!',
        style: { fontSize: '30px', fontStyle: 'italic', background: '#000', color: '#fff', padding: '10px' }
    },

    // --- LEFT SIDE CONTENT ---
    // Approx x: 50-100
    {
        id: 'info-location',
        type: 'text',
        x: 50,
        y: 200,
        zIndex: 90,
        draggable: true,
        text: 'LOCATION: TBD',
        style: {
            fontSize: '20px',
            fontWeight: 'bold',
            backgroundColor: '#000',
            color: '#fff',
            padding: '10px',
            transform: 'rotate(-2deg)'
        }
    },
    {
        id: 'info-when',
        type: 'text',
        x: 50,
        y: 270,
        zIndex: 90,
        draggable: true,
        text: 'WHEN: TBH',
        style: {
            fontSize: '20px',
            fontWeight: 'bold',
            backgroundColor: '#fff',
            color: '#000',
            border: '3px solid black',
            padding: '10px',
            transform: 'rotate(1deg)'
        }
    },
    {
        id: 'info-time',
        type: 'text',
        x: 50,
        y: 340,
        zIndex: 90,
        draggable: true,
        text: 'TIME: TBH',
        style: {
            fontSize: '20px',
            fontWeight: 'bold',
            backgroundColor: 'yellow',
            color: '#000',
            padding: '10px',
            border: '3px solid black',
            transform: 'rotate(-1deg)'
        }
    },
    {
        id: 'el-meme-text-1',
        type: 'text',
        x: 50,
        y: 450,
        zIndex: 95,
        draggable: true,
        text: 'FRIENDSHIP ENDED WITH OMDENA?',
        style: { fontSize: '18px', backgroundColor: 'yellow', padding: '5px', transform: 'rotate(-5deg)', border: '2px solid black', maxWidth: '200px' }
    },
    {
        id: 'img-lion',
        type: 'image',
        x: 30,
        y: 400,
        zIndex: 50,
        draggable: true,
        src: '/images/vitb_lion.jpg',
        width: 200,
        style: { border: '5px solid white', transform: 'rotate(5deg)', boxShadow: '5px 5px 10px rgba(0,0,0,0.5)' }
    },

    // --- RIGHT SIDE CONTENT ---
    // Move things inward from >1100 to ~900-1000 so they stay visible

    // AIH Logo - Top Right
    {
        id: 'img-logo-aih',
        type: 'image',
        x: 325,
        y: 160,
        zIndex: 60,
        draggable: true,
        src: '/images/vitbaih_logo.png',
        width: 150,
        style: { transform: 'rotate(-10deg)' }
    },
    // AB1 Image
    {
        id: 'img-ab1',
        type: 'image',
        x: 1150,
        y: 100,
        zIndex: 40,
        draggable: true,
        src: '/images/vitb_ab1_.jpg',
        width: 250,
        style: { border: '5px solid black', transform: 'rotate(3deg)' }
    },
    // Poster
    {
        id: 'el-poster',
        type: 'image',
        x: 1200,
        y: 350,
        width: 150,
        zIndex: 50,
        draggable: true,
        zoomable: true,
        src: '/poster.png',
        style: { transform: 'rotate(-5deg)', border: '2px solid white' }
    },

    // --- LINKS: "Kind of visible" ---
    // Moving them to ~800-900 x range
    {
        id: 'el-reg-vit',
        type: 'link',
        x: 875,
        y: 475,
        zIndex: 110,
        draggable: true,
        text: 'VIT STUDENTS REGISTER',
        href: 'https://forms.gle/SbnGYzpEFyGXrVVC7',
        style: {
            backgroundColor: '#fff',
            border: '3px solid #000',
            padding: '10px',
            fontSize: '18px',
            maxWidth: '220px',
            textAlign: 'center',
            boxShadow: '8px 8px 0px #000',
            fontWeight: 'bold',
            transform: 'rotate(-2deg)',
            cursor: 'pointer'
        }
    },
    {
        id: 'el-reg-ext',
        type: 'link',
        x: 900,
        y: 575,
        zIndex: 110,
        draggable: true,
        text: 'EXTERNAL REGISTRATION',
        href: 'https://forms.gle/jvTTsyrwFgxRahHm9',
        style: {
            backgroundColor: '#000',
            color: '#fff',
            border: '3px solid #fff',
            padding: '10px',
            fontSize: '18px',
            maxWidth: '220px',
            textAlign: 'center',
            boxShadow: '8px 8px 0px #ff00ff',
            fontWeight: 'bold',
            transform: 'rotate(3deg)',
            cursor: 'pointer'
        }
    },
];
