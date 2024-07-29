// global.d.ts
interface YandexMaps {
    Map: new (container: HTMLElement, options: { center: [number, number]; zoom: number; controls?: any[] }) => any;
    Placemark: new (coordinates: [number, number], properties: { hintContent: string; balloonContent: string }) => any;
    ready: (callback: () => void) => void;
}

interface Window {
    ymaps: YandexMaps;
}
