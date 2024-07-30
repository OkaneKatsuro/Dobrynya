import Link from 'next/link';
import Image from 'next/image';
import { FaVk } from 'react-icons/fa'; // Иконка ВКонтакте из библиотеки react-icons

const Contact = () => {
  return (
    <section id="contacts" className="p-6 bg-green-700">
      <div className="w-full bg-green-700 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap mb-6">
            {/* Первая колонка */}
            <div className=" md:w-1/3 flex flex-col items-start md:mb-0">
              <Link href="/" passHref>
                <Image
                  src="/logo_dobrynya.jpeg"
                  alt="Торговый центр Добрыня"
                  width={400}
                  height={400}
                  className="rounded-lg mb-4"
                />
              </Link>
              <p className="text-lg">
                <strong>Адрес:</strong> Торговый центр "Добрыня", г. Петрозаводск, микрорайон Кукковка, ул. Ровио, д.11
              </p>
            </div>
            {/* Вторая колонка */}
            <div className=" md:w-1/3 text-white">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Режим работы:</h3>
                <p className="mb-2"><strong>Продуктовый зал:</strong> 8:30 - 20:30 ежедневно</p>
                <p><strong>Промтоварный зал:</strong> 10:00 - 19:00 ежедневно</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Пункты выдачи:</h3>
                <p className="mb-2"><strong>WILDBERRIES:</strong> 9:00 - 20:00</p>
                <p className="mb-2"><strong>OZON:</strong> 10:00 - 21:00</p>
                <p><strong>BOXBERRY:</strong> 10:00 - 21:00</p>
              </div>
            </div>
            {/* Третья колонка */}
            <div className="md:w-1/3 text-center">
              <Link href="https://vk.com/yourprofile" passHref>
                <div className="inline-block text-white text-3xl hover:text-gray-300 cursor-pointer">
                  <FaVk />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
