"use client";

import React, { useEffect, useRef } from "react";

// Объявление глобальных типов
declare global {
    interface Window {
        ymaps: {
            Map: new (container: HTMLElement, options: { center: [number, number]; zoom: number; controls?: any[] }) => any;
            Placemark: new (coordinates: [number, number], properties: { hintContent: string; balloonContent: string }) => any;
            ready: (callback: () => void) => void;
        };
    }
}

export function YandexMap() {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapInstance = useRef<any>(null);
    const scriptLoaded = useRef<boolean>(false); // Флаг для отслеживания загрузки скрипта

    useEffect(() => {
        const createMap = () => {
            if (window.ymaps && mapRef.current) {
                if (mapInstance.current) {
                    return; // Карта уже создана
                }

                window.ymaps.ready(() => {
                    if (mapRef.current) {
                        mapInstance.current = new window.ymaps.Map(mapRef.current, {
                            center: [61.7633, 34.3748],
                            zoom: 18,
                            controls: [], // Опционально: Удаление стандартных контролов
                        });

                        // Добавление метки (Placemark) на карту
                        const placemark = new window.ymaps.Placemark([61.7633, 34.3748], {
                            hintContent: 'Торговый Центр "Добрыня"', // Подсказка при наведении
                            balloonContent: 'Торговый Центр "Добрыня"', // Подсказка при клике
                        });

                        mapInstance.current.geoObjects.add(placemark);
                    }
                });
            }
        };

        const loadScript = () => {
            return new Promise<void>((resolve, reject) => {
                if (window.ymaps) {
                    resolve(); // Скрипт уже загружен
                    return;
                }

                if (scriptLoaded.current) {
                    resolve(); // Скрипт уже загружается
                    return;
                }

                scriptLoaded.current = true; // Устанавливаем флаг, что скрипт загружается

                const script = document.createElement("script");
                script.src = "https://api-maps.yandex.ru/2.1/?lang=en_US&apikey=7c14fae9-b005-4638-89ac-0b7605fb8054";
                script.async = true;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error("Failed to load Yandex Maps API"));
                document.body.appendChild(script);
            });
        };

        loadScript()
            .then(createMap)
            .catch((error) => console.error(error));

        // Очистка карты при размонтировании компонента
        return () => {
            if (mapInstance.current) {
                mapInstance.current.destroy();
                mapInstance.current = null;
            }
        };
    }, []);

    return <div style={{ height: '400px', width: '80%' }} ref={mapRef} />;
}
