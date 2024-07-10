import { QuestionItemModel } from '@/components';
import { useI18n } from 'vue-i18n';
export default class HomeAdapterService {

  constructor() {
    // Initialize the service
  }

  /**
   * Получить список вопросов и ответов
   * @returns массив вопросов и ответов
   */
  getsQuestions = async () => {
    const { t } = useI18n();
    return await [
      new QuestionItemModel({
        Id: "1",
        Question: t('questtions.What country is Swipez registered at?'),
        Answer:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt obcaecati, mollitia doloremque rem nemo tempore autem. Veniam inventore error asperiores architecto quaerat voluptatibus, qui, illum sed assumenda vero excepturi cum. ",
      }),
      new QuestionItemModel({
        Id: "2",
        Question: t('questtions.How safe is Swipez service?'),
        Answer:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt obcaecati, mollitia doloremque rem nemo tempore autem. Veniam inventore error asperiores architecto quaerat voluptatibus, qui, illum sed assumenda vero excepturi cum. ",
      }),
      new QuestionItemModel({
        Id: "3",
        Question: t("questtions.What documents must be presented for opening an account?"),
        Answer:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt obcaecati, mollitia doloremque rem nemo tempore autem. Veniam inventore error asperiores architecto quaerat voluptatibus, qui, illum sed assumenda vero excepturi cum. ",
      }),
      new QuestionItemModel({
        Id: "4",
        Question: t("questtions.What documents must be presented for opening an account?"),
        Answer:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt obcaecati, mollitia doloremque rem nemo tempore autem. Veniam inventore error asperiores architecto quaerat voluptatibus, qui, illum sed assumenda vero excepturi cum. ",
      }),
      new QuestionItemModel({
        Id: "5",
        Question: t("questtions.When will I get access to the online bank?"),
        Answer:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt obcaecati, mollitia doloremque rem nemo tempore autem. Veniam inventore error asperiores architecto quaerat voluptatibus, qui, illum sed assumenda vero excepturi cum. ",
      }),
      new QuestionItemModel({
        Id: "6",
        Question: t("questtions.Residents of what countries may not open an account?"),
        Answer:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt obcaecati, mollitia doloremque rem nemo tempore autem.Veniam inventore error asperiores architecto quaerat voluptatibus, qui, illum sed assumenda vero excepturi cum.",
      }),
    ];
  };
}
