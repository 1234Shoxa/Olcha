import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      uz: {
        translation: {
          description: {
            part1: "Сайт харитаси",
            part2: "0% Муддатли тўлов",
            part3: "Чегирмалар",
            part4: "olcha да сотинг",
            part5: "Каталог бўйича қидириш",
            part6: 'Таққослаш',
            part7: 'Севимлилар',
            part8: 'Саватча',
            part9: 'Кириш',
            part10:'Муддатли тўлов',
            part11:'Мусиқа системалари',
            part12:'Ноутбуклар'
          }
        }
      },
      uzb: {
        translation: {
          description: {
            part1: "Sayt xaritasi",
            part2: "0% Muddatli to'lov",
            part3: "Chegirma",
            part4: "olcha da soting",
            part5: "Katalog bo'yicha qidirish",
            part6: 'Taqqoslash',
            part7: 'Sevimlilar',
            part8: 'Savatcha',
            part9: 'Kirish',
            part10:"Muddatli to'lov",
            part11:'Musiqa sistemalari',
            part12:'Noutbuklar'
          }
        }
      },
      ru: {
        translation: {
          description: {
            part1: "Карта сайта",
            part2: "0% Рассрочка",
            part3: "Скидки",
            part4: "Продавайте на olcha",
            part5: "Поиск по каталогу",
            part6: 'Сравнение',
            part7: 'Избранные',
            part8: 'Корзина',
            part9: 'Войти',
            part10:'В рассрочку',
            part11:'Музыкальные системы',
            part12:'Ноутбуки'
          }
        }
      }
    }
  });

export default i18n;