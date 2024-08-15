import { GlareCardDemo } from "./cards";

export function SetionGlareCardDemo() {
    return (
        <section className="relative flex justify-center items-center bg-white h-auto z-10 p-4 sm:p-6 lg:p-10">
            <div className="grid gap-8 mx-auto max-w-full px-4">
                <GlareCardDemo />
            </div>
        </section>
    );
}
