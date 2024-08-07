/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect, useState } from "react";
import "@/components/styles/Form.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { sendEmail } from "./utils/send-email";
import Input from "./ui/inputs/forminput";

export type FormData = {
  name: string;
  email: string;
  message: string;
  idea: string;
};

const Form: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    sendEmail(data);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    const button = document.getElementById(
      "submit-button"
    ) as HTMLButtonElement;
    button.disabled = !isChecked;
  }, [isChecked]);

  return (
    <section className="section flex justify-center">
      <div className="flex flex-col md:flex-row items-center w-full max-w-screen-lg">
        <div className="hidden md:flex md:w-2/3 mb-8 md:mb-0 md:pr-8 items-center justify-center">
          <p className="font-medium text-black dark:text-black-200 text-2xl md:text-4xl text-center">
            Чем мы можем вам помочь? Оставьте свои контактные данные и расскажите о своем запросе — мы свяжемся с вами в ближайшее время
          </p>
        </div>
        <div className="flex justify-center items-center py-8 md:w-2/3">
          <div className="bg-white drop-shadow-lg container w-full border md:border-gray-300 rounded py-2 mx-auto">
            <div className="m-9">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="items-center text-center">
                  <div className="text-black text-4xl font-bold mb-4 text-center">
                    Свяжитесь с нами
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8">
                  <div className="col-span-4">
                    <div className="space-y-10">
                      <Input
                        register={register}
                        name="name"
                        placeholder="Ваше имя"
                      />
                      <Input
                        register={register}
                        name="email"
                        placeholder="example@yourmail.com"
                      />
                      <Input
                        register={register}
                        name="message"
                        placeholder="+7(XXX)-XXX-XX-XX"
                      />
                      <div className="mb-4">
                        <label htmlFor="idea" className="block text-sm font-medium text-gray-700">
                          Расскажите о себе и о своей идее
                        </label>
                        <textarea
                          id="idea"
                          {...register("idea")}
                          placeholder="Ваша идея..."
                          className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none text-black"
                        ></textarea>
                      </div>
                      <div className="flex-col justify-center items-center">
                        <button
                          id="submit-button"
                          type="submit"
                          className={`text-white bg-green-600 hover:bg-purple-600 focus:ring-4 focus:ring-green-600 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-600 focus:outline-none dark:focus:ring-green-600 ${isChecked ? "" : "opacity-50 cursor-not-allowed"}`}
                          disabled={!isChecked}
                        >
                          Отправить письмо
                        </button>
                        <div className="flex items-start justify-start mt-3">
                          <input
                            type="checkbox"
                            id="consent"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                            Я согласен с условиями обработки данных
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
