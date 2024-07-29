import { GlareCard } from "./ui/glare-card";


export function GlareCardDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <GlareCard className="flex flex-col items-center justify-center">
      <p className="font-bold text-white text-4xl">1000 м^</p>
        <p className="font-normal text-center text-neutral-100 mt-4 mx-2">
        Гибкие условия аренды и возможность индивидуальной планировки позволят вам создать идеальное пространство для успешного ведения бизнеса. 
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <img
          className="h-full w-full absolute inset-0 object-cover"
          src="snimok.png"
        />
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
      <p className="font-bold text-white text-4xl text-center">100 000 <br/> человек в месяц</p>
        <p className="font-normal text-center text-neutral-100 mt-4 mx-2">
        Это отличная возможность для вашего бизнеса привлечь большое количество потенциальных клиентов. Площадь находится в самом центре торгового потока, обеспечивая высокую видимость и доступность. 
        </p>
      </GlareCard>
    </div>
  );
}
